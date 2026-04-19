import type { ReactNode } from "react";

export type BlogCategory =
  | "Électricité"
  | "Plomberie"
  | "Rénovation"
  | "Dépannage";

export type Article = {
  slug: string;
  title: string;
  /** Short meta description, used for <meta name="description">. */
  description: string;
  /** Longer teaser displayed on the blog index card. */
  excerpt: string;
  category: BlogCategory;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  updatedAt?: string;
  readMinutes: number;
  /** Article body — rendered inside a prose container. */
  content: ReactNode;
};

/* --- Prose helpers (no @tailwindcss/typography, kept inline) ------------ */

const h2 = "font-heading text-dark text-[26px] sm:text-[30px] font-bold tracking-tight leading-tight mt-12 mb-4";
const h3 = "font-heading text-dark text-[20px] sm:text-[22px] font-semibold tracking-tight leading-snug mt-8 mb-3";
const p = "text-gray-text text-[16px] leading-[1.75] mb-5";
const ul = "list-disc list-outside pl-5 space-y-2 text-gray-text text-[16px] leading-[1.75] mb-5 marker:text-brand";
const callout = "not-prose rounded-2xl border border-brand/20 bg-brand-pale/60 p-5 my-7 text-gray-text text-[15px] leading-[1.7]";

function P({ children }: { children: ReactNode }) {
  return <p className={p}>{children}</p>;
}
function H2({ children }: { children: ReactNode }) {
  return <h2 className={h2}>{children}</h2>;
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className={h3}>{children}</h3>;
}
function UL({ children }: { children: ReactNode }) {
  return <ul className={ul}>{children}</ul>;
}
function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className={callout}>
      <strong className="text-brand-dark font-semibold">À retenir — </strong>
      {children}
    </aside>
  );
}

/* --- Articles ----------------------------------------------------------- */

export const articles: Article[] = [
  {
    slug: "mise-aux-normes-nf-c-15-100",
    title: "Mise aux normes NF C 15-100 à Paris : le guide complet",
    description:
      "Tout ce qu'il faut savoir sur la norme électrique NF C 15-100 à Paris : obligations, équipements requis, points de contrôle et coût d'une mise aux normes.",
    excerpt:
      "Vente, rénovation ou simple sécurité : savoir quand la NF C 15-100 s'applique évite les mauvaises surprises. On démystifie les obligations et les postes de dépense.",
    category: "Électricité",
    publishedAt: "2026-03-02",
    updatedAt: "2026-04-15",
    readMinutes: 6,
    content: (
      <>
        <P>
          La norme <strong>NF C 15-100</strong> encadre l&apos;ensemble des
          installations électriques basse tension en France. Depuis sa
          révision, elle impose un socle de sécurité pour protéger les
          occupants des risques d&apos;électrisation, d&apos;incendie et de
          surtension. À Paris, où l&apos;habitat ancien domine, une mise aux
          normes bien conduite fait la différence lors d&apos;une vente ou
          d&apos;une location.
        </P>
        <H2>Quand la mise aux normes est-elle obligatoire ?</H2>
        <P>
          La norme s&apos;applique pleinement pour toute{" "}
          <strong>installation neuve ou entièrement rénovée</strong>. Pour un
          logement existant, un diagnostic électrique (DIAG) est requis à la
          vente si l&apos;installation a plus de 15 ans, et à la mise en
          location. Les travaux ne sont pas imposés par ce diagnostic, mais
          ses conclusions pèsent lourd dans la négociation.
        </P>
        <Callout>
          Un logement non conforme peut faire perdre <strong>5 à 10 %</strong>{" "}
          de sa valeur à la revente, en plus de poser un risque d&apos;assurance
          en cas de sinistre.
        </Callout>
        <H2>Les 6 exigences à connaître</H2>
        <UL>
          <li>
            <strong>Disjoncteur différentiel 30 mA</strong> en tête de chaque
            circuit dédié (salle de bain, cuisine, circuits prises).
          </li>
          <li>
            <strong>Prise de terre</strong> sur tous les circuits, y compris
            l&apos;éclairage.
          </li>
          <li>
            <strong>Tableau électrique avec réserve de 20 %</strong> pour
            permettre des extensions futures.
          </li>
          <li>
            <strong>Volumes de sécurité</strong> respectés en salle de bain
            (aucune prise à moins de 60 cm de la baignoire).
          </li>
          <li>
            <strong>Section de câble adaptée</strong> à l&apos;intensité (1,5
            mm² pour l&apos;éclairage, 2,5 mm² pour les prises).
          </li>
          <li>
            <strong>Repérage clair</strong> de chaque départ sur le tableau
            (étiquettes pérennes).
          </li>
        </UL>
        <H2>Combien coûte une mise aux normes à Paris ?</H2>
        <P>
          Pour un <strong>T3 de 60 m²</strong> dans un immeuble
          haussmannien, prévoir entre <strong>4 500 € et 8 500 €</strong>{" "}
          selon l&apos;état du tableau, l&apos;accessibilité des gaines et le
          nombre de points à remplacer. Un devis détaillé, poste par poste,
          est indispensable pour éviter les surprises.
        </P>
        <H3>Ce qu&apos;E-Major inclut systématiquement</H3>
        <UL>
          <li>Visite technique préalable gratuite.</li>
          <li>
            Attestation Consuel obligatoire pour la remise en service du
            compteur.
          </li>
          <li>Garantie décennale sur l&apos;installation.</li>
          <li>Remise de l&apos;ancien matériel et nettoyage du chantier.</li>
        </UL>
      </>
    ),
  },
  {
    slug: "renovation-electrique-haussmannien",
    title:
      "Rénovation électrique d'un appartement haussmannien : étapes et budget",
    description:
      "Rénover l'électricité dans un haussmannien parisien demande méthode et discrétion. Étapes, contraintes patrimoniales et budget au m² détaillé.",
    excerpt:
      "Moulures, parquet point de Hongrie, cheminées en marbre : rénover l'électricité d'un haussmannien, c'est intervenir sans rien abîmer. Méthode et budget réel.",
    category: "Rénovation",
    publishedAt: "2026-02-10",
    readMinutes: 7,
    content: (
      <>
        <P>
          Le bâti haussmannien concentre les contraintes : plafonds à
          moulures, parquets massifs, huisseries en bois et colonnes
          montantes anciennes. Toucher à l&apos;électricité sans défigurer
          l&apos;appartement demande une approche de <em>tailleur</em>, pas de
          démolisseur.
        </P>
        <H2>Étape 1 — Diagnostic et relevé</H2>
        <P>
          On cartographie le tableau existant, on repère les circuits actifs
          et on identifie les zones à risque (anciens fils en textile, gaines
          non MRT, prises sans terre). Un relevé photo complète le dossier.
        </P>
        <H2>Étape 2 — Plan de passage</H2>
        <P>
          L&apos;objectif : passer le maximum de gaines{" "}
          <strong>sans casser les moulures ni le parquet</strong>. On
          privilégie les plinthes électriques sur mesure, les faux-plafonds
          ponctuels et les passages par les cheminées condamnées. Pour les
          points lumineux centraux, on réutilise les pavillons existants.
        </P>
        <Callout>
          Un haussmannien bien rénové conserve toutes ses moulures visibles.
          Si votre artisan propose d&apos;en démonter, demandez un second
          avis.
        </Callout>
        <H2>Étape 3 — Tableau et circuits</H2>
        <UL>
          <li>Nouveau tableau modulaire avec réserve 20 % (NF C 15-100).</li>
          <li>
            Circuits séparés : éclairage, prises séjour, prises chambres,
            cuisine, salle de bain, VMC, four, plaque, lave-linge, lave-
            vaisselle.
          </li>
          <li>
            Différentiels 30 mA par tranche, parafoudre obligatoire en zone à
            risque (AQ2).
          </li>
        </UL>
        <H2>Étape 4 — Finitions et Consuel</H2>
        <P>
          Les enduits sont repris à l&apos;identique, les plinthes reposées et
          les parquets refaits si nécessaire. On termine par la visite
          Consuel qui valide la remise sous tension par Enedis.
        </P>
        <H2>Budget réel à Paris en 2026</H2>
        <UL>
          <li>
            <strong>Studio 25 m²</strong> : 3 500 à 5 500 €.
          </li>
          <li>
            <strong>T3 60 m²</strong> : 7 000 à 11 000 €.
          </li>
          <li>
            <strong>T5 100 m²</strong> : 12 000 à 18 000 €.
          </li>
        </UL>
        <P>
          Ces fourchettes incluent matériel, main d&apos;œuvre, visite Consuel
          et finitions peinture courante. Les luminaires décoratifs, la
          domotique et les interrupteurs haut de gamme sont en supplément.
        </P>
      </>
    ),
  },
  {
    slug: "fuite-eau-que-faire",
    title: "Fuite d'eau à Paris : les 5 gestes avant l'arrivée du plombier",
    description:
      "Une fuite d'eau dans votre appartement parisien ? Voici les 5 réflexes qui limitent les dégâts avant notre intervention, et ce qu'il faut préparer pour votre assurance.",
    excerpt:
      "Une fuite, c'est souvent l'équivalent de deux pleins de baignoire par heure qui se déverse chez vous. Quelques gestes limitent l'ampleur des dégâts.",
    category: "Dépannage",
    publishedAt: "2026-01-20",
    readMinutes: 4,
    content: (
      <>
        <P>
          Avant même d&apos;appeler un plombier, cinq gestes permettent de{" "}
          <strong>réduire les dégâts de 70 %</strong> dans les premières
          minutes. Ils facilitent aussi la prise en charge par votre
          assurance habitation.
        </P>
        <H2>1. Couper l&apos;arrivée d&apos;eau</H2>
        <P>
          Repérez la <strong>vanne générale</strong> de votre logement
          (souvent près du compteur, sous l&apos;évier ou en entrée). Fermez-la
          en tournant dans le sens des aiguilles d&apos;une montre. Si la
          vanne est bloquée, fermez au niveau du compteur d&apos;immeuble.
        </P>
        <H2>2. Couper l&apos;électricité des pièces touchées</H2>
        <P>
          L&apos;eau et l&apos;électricité ne font pas bon ménage. Coupez le
          ou les disjoncteurs des circuits concernés depuis le tableau, sans
          marcher dans l&apos;eau.
        </P>
        <H2>3. Documenter pour l&apos;assurance</H2>
        <UL>
          <li>Photos de la fuite et des dégâts (meubles, sol, plafonds).</li>
          <li>Vidéo courte montrant l&apos;origine apparente.</li>
          <li>Relevé du compteur avant / après si possible.</li>
        </UL>
        <Callout>
          Une déclaration à votre assurance sous <strong>5 jours</strong> est
          en général obligatoire. Les photos datées valent preuve.
        </Callout>
        <H2>4. Limiter la propagation</H2>
        <P>
          Épongez, dégagez les meubles, protégez les objets de valeur.
          N&apos;utilisez pas d&apos;aspirateur classique sur l&apos;eau —
          seul un aspirateur eau &amp; poussière est adapté.
        </P>
        <H2>5. Appeler un plombier qualifié</H2>
        <P>
          Décrivez précisément : origine visible, pression estimée (goutte /
          filet / jet), depuis combien de temps, ce qui est touché. Un bon
          diagnostic au téléphone fait gagner 20 minutes sur place.
        </P>
        <H3>E-Major en urgence</H3>
        <P>
          Sur Paris et proche couronne, nous intervenons{" "}
          <strong>en moins de 2 h</strong> du lundi au samedi. Devis chiffré
          remis avant toute intervention non urgente.
        </P>
      </>
    ),
  },
  {
    slug: "choisir-chauffe-eau",
    title:
      "Chauffe-eau : gaz, électrique ou thermodynamique ? Comment choisir",
    description:
      "Comparatif honnête des chauffe-eau : coût d'achat, consommation, durée de vie et contraintes d'installation en appartement parisien.",
    excerpt:
      "Le bon chauffe-eau dépend de votre logement, pas d'une mode. On compare coût réel, durée de vie et contraintes d'installation.",
    category: "Plomberie",
    publishedAt: "2025-12-12",
    readMinutes: 5,
    content: (
      <>
        <P>
          Changer un chauffe-eau est un investissement de <strong>10 à 15 ans</strong>.
          Trois technologies dominent le marché en 2026, avec des logiques
          très différentes selon votre consommation et votre logement.
        </P>
        <H2>Électrique à accumulation (cumulus)</H2>
        <UL>
          <li>
            <strong>Prix posé</strong> : 700 à 1 400 €.
          </li>
          <li>
            <strong>Consommation</strong> : ~1 800 kWh/an pour un couple (≈
            370 € / an au tarif réglementé).
          </li>
          <li>
            <strong>Installation</strong> : simple, compatible avec tous les
            tableaux récents.
          </li>
          <li>
            <strong>Durée de vie</strong> : 10 à 12 ans avec un bon
            détartrage (eau calcaire parisienne).
          </li>
        </UL>
        <P>
          C&apos;est le choix par défaut en appartement quand le gaz
          n&apos;est pas disponible et qu&apos;il n&apos;y a pas la place
          pour un thermodynamique.
        </P>
        <H2>Gaz instantané</H2>
        <UL>
          <li>
            <strong>Prix posé</strong> : 1 200 à 2 200 € (évacuation ventouse
            comprise).
          </li>
          <li>
            <strong>Consommation</strong> : très faible hors usage, bon
            rendement sur un foyer qui consomme peu.
          </li>
          <li>
            <strong>Contraintes</strong> : arrivée gaz obligatoire, entretien
            annuel, évacuation conforme.
          </li>
        </UL>
        <Callout>
          Le gaz instantané reste pertinent si votre immeuble est déjà
          alimenté. En neuf, la RE2020 le décourage.
        </Callout>
        <H2>Thermodynamique (pompe à chaleur eau)</H2>
        <UL>
          <li>
            <strong>Prix posé</strong> : 2 800 à 4 500 €, souvent éligible à
            MaPrimeRénov&apos;.
          </li>
          <li>
            <strong>Consommation</strong> : 3 à 4 × moins d&apos;énergie
            qu&apos;un cumulus classique.
          </li>
          <li>
            <strong>Contraintes</strong> : volume d&apos;air minimum (10 à 20
            m³), local non chauffé idéalement, bruit ≈ 40 dB.
          </li>
        </UL>
        <H2>Quel modèle pour votre logement ?</H2>
        <UL>
          <li>
            <strong>Studio Paris intra-muros</strong> : électrique compact
            sous évier ou instantané gaz si raccordement.
          </li>
          <li>
            <strong>Famille 4 personnes appartement</strong> : cumulus 200 L
            ou thermo si local technique ventilé.
          </li>
          <li>
            <strong>Maison IDF</strong> : thermodynamique dans la grande
            majorité des cas (gain énergétique, prime disponible).
          </li>
        </UL>
        <P>
          En doute, demandez un <strong>diagnostic sur place</strong> : le
          bon choix dépend autant de la plomberie en place que de votre
          usage réel.
        </P>
      </>
    ),
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function formatFrenchDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
