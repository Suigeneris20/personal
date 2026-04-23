import type { Metadata } from "next";

export const siteConfig = {
  name: "Ife Adebiyi",
  description: "Engineer with an aptitude for learning.",
  url: "https://ifearifalodotcom.vercel.app",
};

export function generatePageMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.name;
  const pageDesc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDesc,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description: pageDesc,
    },
    alternates: { canonical: url },
  };
}
