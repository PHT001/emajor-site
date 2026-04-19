import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { articles, formatFrenchDate } from "@/lib/blog";
import { SITE, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — électricité & plomberie à Paris",
  description:
    "Conseils concrets d'un électricien-plombier parisien : mise aux normes, rénovation haussmannienne, dépannage en urgence et choix d'équipements.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: `Blog — ${COMPANY.name}`,
    description:
      "Conseils concrets d'un électricien-plombier parisien : normes, rénovation, dépannage.",
    url: `${SITE.url}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const sorted = [...articles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE.url}/blog#blog`,
    name: `Blog ${COMPANY.name}`,
    url: `${SITE.url}/blog`,
    description:
      "Conseils d'un électricien-plombier parisien : mise aux normes, rénovation, dépannage.",
    publisher: { "@id": `${SITE.url}/#business` },
    blogPost: sorted.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      datePublished: a.publishedAt,
      dateModified: a.updatedAt ?? a.publishedAt,
      url: `${SITE.url}/blog/${a.slug}`,
      author: { "@type": "Organization", name: COMPANY.name },
    })),
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
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-14 sm:pt-20 pb-10 bg-gray-bg">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <nav
              aria-label="Fil d'Ariane"
              className="text-[13px] text-gray-mid mb-6"
            >
              <Link href="/" className="hover:text-brand transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <span className="text-dark">Blog</span>
            </nav>
            <h1 className="font-heading text-dark text-[36px] sm:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] mb-4">
              Le blog E-Major
            </h1>
            <p className="text-gray-text text-[17px] leading-relaxed max-w-2xl">
              Retours d&apos;expérience concrets, guides techniques et conseils
              pour vos installations électriques et plomberie à Paris et en
              Île-de-France. Rédigés par nos équipes, sans bullshit
              marketing.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sorted.map((a) => (
                <li key={a.slug}>
                  <article className="h-full">
                    <Link
                      href={`/blog/${a.slug}`}
                      className="group block h-full rounded-2xl border border-gray-200/80 bg-white hover:border-brand/40 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.2)] transition-all duration-300 p-7"
                    >
                      <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-wider mb-4">
                        <span className="text-brand">{a.category}</span>
                        <span className="text-gray-mid">•</span>
                        <time
                          dateTime={a.publishedAt}
                          className="text-gray-mid font-medium normal-case tracking-normal"
                        >
                          {formatFrenchDate(a.publishedAt)}
                        </time>
                        <span className="text-gray-mid">•</span>
                        <span className="text-gray-mid font-medium normal-case tracking-normal">
                          {a.readMinutes} min
                        </span>
                      </div>
                      <h2 className="font-heading text-dark text-[22px] sm:text-[24px] font-bold tracking-tight leading-snug mb-3 group-hover:text-brand transition-colors duration-300">
                        {a.title}
                      </h2>
                      <p className="text-gray-text text-[15px] leading-relaxed mb-5">
                        {a.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-brand text-[14px] font-semibold">
                        Lire l&apos;article
                        <span
                          aria-hidden
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
      <Script
        id="ld-json-blog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Script
        id="ld-json-blog-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
