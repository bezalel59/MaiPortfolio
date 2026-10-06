import {
  AppWindow,
  Blocks,
  CircleUserRound,
  Command,
  FlaskConical,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const sections = [
  { id: "overview", label: "Overview", Icon: AppWindow },
  { id: "work", label: "Case files", Icon: Blocks },
  { id: "playground", label: "Playground", Icon: FlaskConical },
  { id: "system", label: "Design system", Icon: SlidersHorizontal },
  { id: "about", label: "Profile", Icon: CircleUserRound },
];

export function Sidebar({ active, onNavigate, onCommand, name }) {
  return (
    <aside className="sidebar">
      <a className="brand" href="#overview" onClick={(event) => { event.preventDefault(); onNavigate("overview"); }}>
        <span className="brand-mark" aria-hidden="true">M</span>
        <span><strong>{name}<i>.</i></strong><small>DESIGN WORKSPACE</small></span>
      </a>

      <div className="side-label">WORKSPACE <span>01</span></div>
      <nav className="side-nav" aria-label="Workspace navigation">
        {sections.map(({ id, label, Icon }) => (
          <button className={`nav-item${active === id ? " is-active" : ""}`} key={id} onClick={() => onNavigate(id)} aria-current={active === id ? "page" : undefined}>
            <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
            <span>{label}</span>
            {id === "work" && <span className="nav-count">03</span>}
          </button>
        ))}
      </nav>

      <div className="side-bottom">
        <button className="command-hint" onClick={onCommand} aria-label="Open command palette">
          <Search size={15} aria-hidden="true" /><span>Quick find</span><kbd><Command size={11} aria-hidden="true" /> K</kbd>
        </button>
        <div className="side-status"><span className="status-dot" /> PERSONAL SPACE <span className="status-version">V.01</span></div>
      </div>
    </aside>
  );
}

export function Topbar({ title, route, onRecruiter, onCommand, recruiterActive }) {
  const isCase = route.startsWith("case/");
  return (
    <header className="topbar">
      <div className="breadcrumbs">
        <span>MAI / SPACE</span><span className="crumb-slash">/</span><strong>{isCase ? "CASE FILE" : title.toUpperCase()}</strong>
      </div>
      <div className="topbar-actions">
        <button className="top-search" onClick={onCommand}><Search size={14} aria-hidden="true" /><span>Find anything</span><kbd>Ctrl K</kbd></button>
        <span className="top-divider" aria-hidden="true" />
        <button className={`recruiter-button${recruiterActive ? " is-active" : ""}`} onClick={onRecruiter} aria-pressed={recruiterActive}>
          <span className="recruiter-indicator" />{recruiterActive ? "Exit recruiter" : "Recruiter mode"}
        </button>
        <button className="mobile-search" onClick={onCommand} aria-label="Open command palette"><Search size={18} /></button>
      </div>
    </header>
  );
}