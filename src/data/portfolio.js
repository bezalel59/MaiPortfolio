export const profile = {
  name: "Mai",
  title: "Digital product designer",
  statement: "I design interfaces that make complex things feel simple.",
  status: "Portfolio in progress",
  disciplines: ["UI / UX", "Interaction", "Product", "Frontend"],
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

const storySections = [
  ["problem", "The problem", "Add the problem this project addresses, and who experiences it."],
  ["approach", "The approach", "Describe the approach and the constraints that shaped the work."],
  ["research", "Research", "Add research notes, observations, or clearly labeled assumptions."],
  ["ideation", "Ideation", "Show the directions explored and why some were set aside."],
  ["wireframes", "Wireframes", "Add early flows, sketches, or low-fidelity screens."],
  ["system", "Design system", "Document the type, color, components, and rules used here."],
  ["interaction", "Interaction", "Describe the key states, transitions, and feedback."],
  ["decisions", "Design decisions", "Explain why a key design decision improves the experience."],
  ["final", "Final interface", "Add final screens and explain how they answer the original need."],
  ["result", "Result", "Add a verified outcome when one is available. Do not estimate or invent metrics."],
];

export const caseFiles = ["001", "002", "003"].map((id) => ({
  id,
  title: "PROJECT TITLE",
  description: "Replace with one clear sentence about the project and the people it serves.",
  role: "UI / UX / PRODUCT",
  year: "ADD YEAR",
  state: "Draft",
  sections: storySections.map(([key, title, placeholder]) => ({ key, title, placeholder })),
  decision: {
    problem: "The primary action needs clearer hierarchy.",
    choice: "Reduce competing signals and make the next step explicit.",
    before: "BEFORE",
    after: "AFTER",
  },
  links: { figma: "", prototype: "", github: "" },
}));

export const playgroundStages = ["Default", "Hover", "Pressed", "Loading", "Success"];