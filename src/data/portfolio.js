export const profile = {
  name: "Mai",
  title: "Designer",
  statement: "Selected work by Mai.",
  status: "Portfolio in progress",
  disciplines: ["Brand identity", "Visual design", "Art direction"],
  explorations: [],
  tools: [],
  bio: "",
  email: "",
  links: {
    github: "https://github.com/bezalel59",
    figma: "",
    linkedin: "",
    cv: "",
  },
};

export const caseFiles = [
  {
    id: "001",
    title: "Mamali — Brand Identity",
    description: "Brand identity for an organic maternity-fashion label.",
    role: "BRAND IDENTITY",
    context: "ACADEMIC PROJECT",
    state: "Selected",
    behanceUrl: "https://www.behance.net/gallery/242117139/Mamali-Brand-Identity",
    gallery: [
      { src: "./projects/mamali/01-identity-system.webp", width: 1200, height: 1193, alt: "Mamali identity introduction with textile production, organic cotton, and skin-comfort imagery" },
      { src: "./projects/mamali/02-brand-applications.webp", width: 1200, height: 966, alt: "Mamali color palette, typefaces, and Hebrew logo variations" },
      { src: "./projects/mamali/03-social-campaign.webp", width: 1200, height: 2576, alt: "Mamali graphic language with maternity photography, leaf patterns, product icons, tags, and postcards" },
      { src: "./projects/mamali/04-digital-campaign.webp", width: 1200, height: 684, alt: "Mamali Instagram story, feed advertisement, and social profile mockups" },
      { src: "./projects/mamali/05-poster-and-packaging.webp", width: 1200, height: 2067, alt: "Mamali outdoor poster, branded delivery vehicle, and packaging applications" },
      { src: "./projects/mamali/06-brand-editorial.webp", width: 1200, height: 900, alt: "Mamali reusable bottle with the green Hebrew wordmark" },
    ],
    links: { figma: "", prototype: "", github: "" },
  },
];

export const playgroundStages = ["Default", "Hover", "Pressed", "Loading", "Success"];