import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import {
  articles,
  formatFrenchDate,
  getAllSlugs,
  getArticle,
} from "@/lib/blog";
import { SITE, COMPANY, CONTACT } from "@/lib/constants";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${SITE.url}/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `${SITE.url}/blog/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [COMPANY.name],
      siteName: COMPANY.name,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);
  const fallback = articles.filter((a) => a.slug !== article.slug).slice(0, 2);
  const suggestions = related.length >= 2 ? related : fallback;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE.url}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      "@id": `${SITE.url}/#business`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: "fr-FR",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE.url}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <article>
          <header className="pt-14 sm:pt-20 pb-10 bg-gray-bg">
            <div className="max-w-[760px] mx-auto px-4 sm:px-6">
              <nav
                aria-label="Fil d'Ariane"
                className="text-[13px] text-gray-mid mb-6"
              >
                <Link href="/" className="hover:text-brand transition-colors">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href="/blog"
                  className="hover:text-brand transition-colors"
                >
                  Blog
                </Link>
                <span className="mx-2">/</span>
                <span className="text-dark">{article.category}</span>
              </nav>

              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-wider mb-5">
                <span className="text-brand">{article.category}</span>
                <span className="text-gray-mid">•</span>
                <time
                  dateTime={article.publishedAt}
                  className="text-gray-mid font-medium normal-case tracking-normal"
                >
                  {formatFrenchDate(article.publishedAt)}
                </time>
                <span className="text-gray-mid">•</span>
                <span className="text-gray-mid font-medium normal-case tracking-normal">
                  {article.readMinutes} min de lecture
                </span>
              </div>

              <h1 className="font-heading text-dark text-[34px] sm:text-[48px] font-bold tracking-[-0.02em] leading-[1.08] mb-5">
                {article.title}
              </h1>
              <p className="text-gray-text text-[18px] leading-relaxed max-w-[640px]">
                {article.description}
              </p>
            </div>
          </header>

          <div className="py-14 sm:py-20 bg-white">
            <div className="max-w-[720px] mx-auto px-4 sm:px-6">
              {article.content}

              <div className="mt-14 pt-10 border-t border-gray-200/80">
                <h2 className="font-heading text-dark text-[22px] font-bold tracking-tight mb-2">
                  Besoin d&apos;un avis sur votre projet ?
                </h2>
                <p className="text-gray-text text-[15px] leading-relaxed mb-5">
                  Une question après lecture ? Un devis sous 24 h, gratuit
                  et sans engagement sur Paris et Île-de-France.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_8px_20px_-6px_rgba(45,140,78,0.5)] active:scale-[0.97]"
                  >
                    Contacter l&apos;équipe
                  </a>
                  <Link
                    href="/assistant"
                    className="inline-flex items-center gap-2 border border-gray-200/80 hover:border-brand hover:text-brand text-dark text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 active:scale-[0.97]"
                  >
                    Lancer l&apos;assistant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {suggestions.length > 0 && (
          <section className="py-14 bg-gray-bg border-t border-gray-200/60">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
              <h2 className="font-heading text-dark text-[22px] font-bold tracking-tight mb-6">
                À lire aussi
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {suggestions.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/blog/${a.slug}`}
                      className="group block rounded-2xl bg-white border border-gray-200/70 hover:border-brand/40 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-20px_rgba(0,0,0,0.2)] p-6 transition-all duration-300"
                    >
                      <span className="text-brand text-[12px] font-semibold uppercase tracking-wider">
                        {a.category}
                      </span>
                      <h3 className="font-heading text-dark text-[18px] font-bold tracking-tight mt-2 mb-2 group-hover:text-brand transition-colors duration-300">
                        {a.title}
                      </h3>
                      <p className="text-gray-text text-[14px] leading-relaxed">
                        {a.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ChatWidget />
      <Script
        id="ld-json-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="ld-json-article-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
