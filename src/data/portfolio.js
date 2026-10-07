export const profile = {
  name: "Mai",
  title: "Designer",
  statement: "Selected work by Mai.",
  status: "Portfolio in progress",
  disciplines: ["UX / UI", "Brand identity", "Visual design", "Art direction"],
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
    title: "דיוכאן - אפליקציה - קייססטאדי",
    description: "אפליקציה לגילוי אמני קעקועים, צפייה בתיקי עבודות ובזמינות, ותצוגת קעקוע במציאות רבודה.",
    role: "UX / UI DESIGN",
    context: "MOBILE APP CASE STUDY",
    state: "Selected",
    direction: "rtl",
    galleryLayout: "page",
    prototypeUrl: "https://www.figma.com/proto/wh8hcZPWrB56AioWR0gBi0/%D7%93%D7%99%D7%95%D7%9B%D7%90%D7%9F---%D7%90%D7%A4%D7%9C%D7%99%D7%A7%D7%A6%D7%99%D7%94?node-id=6727-7145&t=MkzgtvCyLaFqQLXV-1",
    gallery: [
      { src: "./projects/diyukan/figma-01.webp", width: 1032, height: 989, alt: "UX/UI case study opening: project summary, problem, solution and user research intro beside app mockups" },
      { src: "./projects/diyukan/figma-02.webp", width: 1032, height: 989, alt: "User research statistics, key insights, persona and her needs, goals and pain points" },
      { src: "./projects/diyukan/figma-03.webp", width: 1032, height: 989, alt: "Competitor analysis: Tattoodo, Book-ink and Instagram with their advantages and disadvantages" },
      { src: "./projects/diyukan/figma-04.webp", width: 1032, height: 989, alt: "Competitor research conclusions, project recommendations, site map and user flow" },
      { src: "./projects/diyukan/figma-05.webp", width: 1032, height: 989, alt: "Low-fidelity wireframes and the UI kit introduction with typography" },
      { src: "./projects/diyukan/figma-06.webp", width: 1032, height: 989, alt: "Color palette, buttons, cards and graphic elements of the UI kit" },
      { src: "./projects/diyukan/figma-07.webp", width: 1032, height: 989, alt: "Search and filter components, calendar picker, and final app screens including onboarding" },
      { src: "./projects/diyukan/figma-08.webp", width: 1032, height: 982, alt: "Closing section with link to the interactive prototype" },
    ],
    links: { figma: "", prototype: "", github: "" },
  },
];

export const playgroundStages = ["Default", "Hover", "Pressed", "Loading", "Success"];