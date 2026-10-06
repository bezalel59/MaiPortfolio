import { ArrowLeft, ArrowUpRight, Check, Download, Github, Mail, Plus } from "lucide-react";
import { caseFiles } from "../data/portfolio.js";
import { profile } from "../data/portfolio.js";

function QuickList({ label, values }) {
  return (
    <div className="quick-list"><span className="micro-label">{label}</span>{values.length ? <ul>{values.map((value) => <li key={value}><Check size={13} />{value}</li>)}</ul> : <p className="recruiter-empty">Not added yet. Edit <code>portfolio.js</code> to fill this section.</p>}</div>
  );
}

export default function RecruiterMode({ onBack, onOpenCase, onNotice }) {
  return (
    <div className="content-view recruiter-view">
      <button className="back-link" onClick={onBack}><ArrowLeft size={15} /> Return to workspace</button>
      <div className="recruiter-heading"><span className="micro-label"><i className="status-dot" />QUICK READ / 45 SECONDS</span><h1>{profile.name} <span>/</span> {profile.title}</h1><p>{profile.statement}</p></div>
      <div className="recruiter-grid">
        <section className="recruiter-cases"><div className="section-bar"><div><span className="micro-label">WORK / SELECTED</span><h2>Case files</h2></div></div><div className="case-list">{caseFiles.slice(0, 3).map((project) => <button className="recruiter-case" key={project.id} onClick={() => onOpenCase(project.id)}><span>CASE {project.id}</span><strong>{project.title}</strong><small>{project.description}</small><ArrowUpRight size={15} /></button>)}</div></section>
        <aside className="recruiter-details"><QuickList label="SKILLS" values={profile.disciplines} /><QuickList label="TOOLS" values={profile.tools} /><div className="recruiter-links"><span className="micro-label">LINKS</span><a href={profile.links.github} target="_blank" rel="noreferrer"><Github size={15} />GitHub<ArrowUpRight size={13} /></a>{[["CV", profile.links.cv, Download], ["LinkedIn", profile.links.linkedin, ArrowUpRight], ["Contact", profile.email, Mail]].map(([label, value, Icon]) => value ? <a href={label === "Contact" ? `mailto:${value}` : value} key={label} target={label === "Contact" ? undefined : "_blank"} rel={label === "Contact" ? undefined : "noreferrer"}><Icon size={15} />{label}<ArrowUpRight size={13} /></a> : <button key={label} onClick={() => onNotice(`Add ${label} in src/data/portfolio.js when ready.`)}><Plus size={15} />Add {label}<ArrowUpRight size={13} /></button>)}</div></aside>
      </div>
      <div className="recruiter-footnote"><span className="status-dot" />No experience, outcomes, or credentials are inferred. Add verified details in <code>src/data/portfolio.js</code>.</div>
    </div>
  );
}