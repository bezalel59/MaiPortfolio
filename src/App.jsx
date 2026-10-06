import { useEffect, useState } from "react";
import { AppWindow, Blocks, FlaskConical, Github, SlidersHorizontal, UserRound } from "lucide-react";
import { caseFiles, profile } from "./data/portfolio.js";
import { CommandPalette } from "./components/CommandPalette.jsx";
import CaseStudy from "./components/CaseStudy.jsx";
import DesignSystem from "./components/DesignSystem.jsx";
import Playground from "./components/Playground.jsx";
import RecruiterMode from "./components/RecruiterMode.jsx";
import { Sidebar, Topbar } from "./components/Shell.jsx";
import { AboutView, ContactView, Overview, WorkView } from "./components/WorkspaceViews.jsx";

const titles = {
  overview: "Overview",
  work: "Case files",
  playground: "Playground",
  system: "Design system",
  about: "Profile",
  contact: "Contact",
  recruiter: "Recruiter mode",
};

function readRoute() {
  const route = window.location.hash.replace(/^#\/?/, "");
  return route || "overview";
}

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [accent, setAccent] = useState("#c5f26b");

  const navigate = (nextRoute) => {
    if (window.location.hash !== `#${nextRoute}`) window.location.hash = nextRoute;
    setRoute(nextRoute);
  };

  const notify = (message) => {
    setNotice(message);
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => setNotice(""), 2800);
  };

  useEffect(() => {
    const syncRoute = () => setRoute(readRoute());
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(notify.timer);
    };
  }, []);

  useEffect(() => {
    document.title = `MaiPortfolio / ${titles[route] || (route.startsWith("case/") ? "Case file" : "Workspace")}`;
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, [route]);

  const activeNav = route.startsWith("case/") ? "work" : route === "recruiter" ? "overview" : route;
  const project = route.startsWith("case/") ? caseFiles.find((item) => item.id === route.slice(5)) : null;
  const openCase = (id) => navigate(`case/${id}`);
  const navigateHome = () => navigate("overview");

  const commands = [
    { label: "Overview", group: "Workspace", Icon: AppWindow, run: () => navigate("overview") },
    { label: "Work / case files", group: "Workspace", Icon: Blocks, run: () => navigate("work") },
    { label: "Playground", group: "Workspace", Icon: FlaskConical, run: () => navigate("playground") },
    { label: "Design system", group: "Workspace", Icon: SlidersHorizontal, run: () => navigate("system") },
    { label: "About / profile", group: "Workspace", Icon: UserRound, run: () => navigate("about") },
    { label: "Contact", group: "Workspace", Icon: UserRound, run: () => navigate("contact") },
    { label: "GitHub", group: "External", Icon: Github, external: true, run: () => window.open(profile.links.github, "_blank", "noopener,noreferrer") },
    { label: "Figma", group: "External / add your link", Icon: SlidersHorizontal, run: () => notify("Add your Figma URL in src/data/portfolio.js when ready.") },
  ];

  const renderContent = () => {
    if (route === "overview") return <Overview caseFiles={caseFiles} onOpenCase={openCase} onWork={() => navigate("work")} />;
    if (route === "work") return <WorkView caseFiles={caseFiles} onOpenCase={openCase} />;
    if (route === "playground") return <Playground onNotice={notify} />;
    if (route === "system") return <DesignSystem accent={accent} onAccentChange={setAccent} />;
    if (route === "about") return <AboutView profile={profile} onNotice={notify} />;
    if (route === "contact") return <ContactView profile={profile} onNotice={notify} />;
    if (route === "recruiter") return <RecruiterMode onBack={navigateHome} onOpenCase={openCase} onNotice={notify} />;
    if (project) return <CaseStudy project={project} onBack={() => navigate("work")} onNotice={notify} />;
    return <WorkView caseFiles={caseFiles} onOpenCase={openCase} />;
  };

  return (
    <div className="app-shell" style={{ "--accent": accent }}>
      <Sidebar active={activeNav} onNavigate={navigate} onCommand={() => setPaletteOpen(true)} name={profile.name} caseCount={caseFiles.length} />
      <div className="workspace-column">
        <Topbar title={titles[route] || "Case file"} route={route} onRecruiter={() => navigate(route === "recruiter" ? "overview" : "recruiter")} onCommand={() => setPaletteOpen(true)} recruiterActive={route === "recruiter"} />
        <main className="workspace-main" id="main-content" key={route}>{renderContent()}</main>
        <footer className="app-footer"><span>MAI.PORTFOLIO <i>·</i> PERSONAL INTERFACE</span><span>BUILT TO BE EDITED <b>↗</b></span></footer>
      </div>
      <CommandPalette open={paletteOpen} commands={commands} onClose={() => setPaletteOpen(false)} />
      {notice && <div className="toast" role="status"><span className="toast-indicator" />{notice}</div>}
    </div>
  );
}