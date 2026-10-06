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
  {
    id: "002",
    title: "First Investment — UX/UI",
    description: "A Hebrew-language app case study exploring how to make a first investment feel clearer and more approachable.",
    role: "UX / UI DESIGN",
    context: "APP CASE STUDY",
    state: "Prototype",
    prototypeUrl: "https://www.figma.com/proto/wh8hcZPWrB56AioWR0gBi0/%D7%93%D7%99%D7%95%D7%9B%D7%90%D7%9F---%D7%90%D7%A4%D7%9C%D7%99%D7%A7%D7%A6%D7%99%D7%94?node-id=6727-7145&t=MkzgtvCyLaFqQLXV-1",
    gallery: [
      { src: "./projects/diyukan/01-ar-try-on.png", width: 450, height: 520, alt: "Augmented-reality jewelry try-on screen from a Hebrew UX/UI investment app case study" },
    ],
    links: { figma: "", prototype: "", github: "" },
  },
];

export const playgroundStages = ["Default", "Hover", "Pressed", "Loading", "Success"];