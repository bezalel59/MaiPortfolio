import { ArrowRight, ArrowUpRight, CircleDot, Plus } from "lucide-react";

export function SectionHeading({ eyebrow, title, detail }) {
  return (
    <div className="section-heading-row">
      <div><span className="micro-label">{eyebrow}</span><h1>{title}</h1></div>
      {detail && <p>{detail}</p>}
    </div>
  );
}

export function CaseRow({ project, onOpen }) {
  return (
    <button className="case-row" onClick={onOpen}>
      <span className="case-row-id">CASE<br /><strong>{project.id}</strong></span>
      {project.gallery?.length > 0 && <img className="case-row-thumb" src={(project.gallery[3] || project.gallery[0]).src} alt="" loading="eager" />}
      <span className="case-row-main"><span className="case-row-title"><span dir="auto">{project.title}</span><span className={`draft-tag${project.state === "Selected" ? " is-selected" : ""}`}><i />{project.state}</span></span><span className="case-row-description" dir="auto">{project.description}</span></span>
      <span className="case-row-meta"><span>{project.role}</span><span>{project.context || project.year}</span></span>
      <span className="case-row-action" aria-hidden="true"><ArrowRight size={17} /></span>
    </button>
  );
}

function ProjectArtwork({ project, onPointerMove, onOpen }) {
  return (
    <div className="project-artwork" onPointerMove={onPointerMove}>
      <div className="artwork-topline"><span>CASE {project.id} / {project.role}</span><span>01 / {String(project.gallery.length).padStart(2, "0")}</span></div>
      <button className="artwork-preview" onClick={onOpen} aria-label={`Open image collection for ${project.title}`}>
        <img src={project.gallery[3].src} alt={project.gallery[3].alt} fetchPriority="high" />
        <span className="artwork-open">VIEW THE WORK <ArrowRight size={13} /></span>
      </button>
      <div className="artwork-caption"><span>{project.title}</span><span>{project.context}</span></div>
    </div>
  );
}

export function Overview({ caseFiles, onOpenCase, onWork }) {
  const featured = caseFiles[0];
  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 8}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 8}px`);
  };

  return (
    <div className="overview-view">
      <section className="overview-lead">
        <div className="lead-copy">
          <div className="eyebrow-row"><span className="live-mark"><i />SELECTED WORK / 001</span><span className="eyebrow-version">MAI.PORTFOLIO</span></div>
          <h1>{featured.title}</h1>
          <p className="lead-subtitle">{featured.description}</p>
          <div className="lead-actions"><button className="button button-primary" onClick={() => onOpenCase(featured.id)}>View all images <ArrowRight size={15} /></button><button className="text-button" onClick={onWork}>All work <span>+</span></button></div>
        </div>
        <ProjectArtwork project={featured} onPointerMove={handlePointerMove} onOpen={() => onOpenCase(featured.id)} />
      </section>

      <div className="metadata-strip" aria-label="Workspace metadata">
        <div><span>PROJECTS</span><strong>{String(caseFiles.length).padStart(2, "0")}</strong></div>
        <div><span>DISCIPLINE</span><strong>{featured.role}</strong></div>
        <div><span>IMAGE COLLECTION</span><strong>{String(featured.gallery.length).padStart(2, "0")} <small>original boards</small></strong></div>
      </div>

      <section className="overview-cases">
        <div className="section-bar"><div><span className="micro-label">WORK / INDEX</span><h2>Selected work</h2></div><button className="link-button" onClick={onWork}>View project <ArrowRight size={14} /></button></div>
        <div className="case-list">{caseFiles.map((project) => <CaseRow key={project.id} project={project} onOpen={() => onOpenCase(project.id)} />)}</div>
      </section>

    </div>
  );
}

export function WorkView({ caseFiles, onOpenCase }) {
  return (
    <div className="content-view">
      <SectionHeading eyebrow="WORK / INDEX" title="Selected work" detail="Identity, visual systems, and applications." />
      <div className="index-column-labels"><span>CASE</span><span>PREVIEW</span><span>PROJECT</span><span>ROLE / CONTEXT</span></div>
      <div className="case-list">{caseFiles.map((project) => <CaseRow key={project.id} project={project} onOpen={() => onOpenCase(project.id)} />)}</div>
    </div>
  );
}

export function AboutView({ profile, onNotice }) {
  return (
    <div className="content-view profile-view">
      <SectionHeading eyebrow="PROFILE / RECORD" title="A working profile" detail="A concise snapshot. Edit every value in the central portfolio data file." />
      <section className="profile-sheet">
        <div className="profile-identity"><div className="profile-avatar">{profile.name.slice(0, 1).toUpperCase()}</div><div><span className="micro-label">NAME / EDITABLE</span><h2>{profile.name}</h2><p>{profile.title}</p></div><span className="profile-status"><i />{profile.status}</span></div>
        <div className="profile-field"><span className="micro-label">CURRENT STATEMENT</span><p>{profile.statement}</p></div>
        <div className="profile-columns">
          <div className="profile-field"><span className="micro-label">DISCIPLINES</span><div className="tag-list">{profile.disciplines.map((item) => <span className="outline-tag" key={item}>{item}</span>)}</div></div>
          <div className="profile-field"><span className="micro-label">TOOLS</span><div className="tag-list">{profile.tools.length ? profile.tools.map((item) => <span className="outline-tag" key={item}>{item}</span>) : <button className="placeholder-inline" onClick={() => onNotice("Add your tools in the tools array in src/data/portfolio.js.")}>Add tools in portfolio.js <ArrowUpRight size={13} /></button>}</div></div>
          <div className="profile-field"><span className="micro-label">CURRENTLY EXPLORING</span><div className="tag-list">{profile.explorations.length ? profile.explorations.map((item) => <span className="outline-tag" key={item}>{item}</span>) : <button className="placeholder-inline" onClick={() => onNotice("Add current explorations in src/data/portfolio.js.")}>Add topics in portfolio.js <ArrowUpRight size={13} /></button>}</div></div>
          <div className="profile-field"><span className="micro-label">PROFILE NOTE</span><p className="profile-bio">{profile.bio || "No biography added. Keep this short and grounded in what you want people to know."}</p></div>
        </div>
      </section>
      <div className="quiet-note"><CircleDot size={15} /><span>No companies, education, or achievements are assumed in this profile.</span></div>
    </div>
  );
}

export function ContactView({ profile, onNotice }) {
  return (
    <div className="content-view contact-view">
      <SectionHeading eyebrow="CONTACT / LINKS" title="Continue the conversation" detail="Only verified links are enabled. Add the rest when you are ready." />
      <div className="contact-link-list">
        <a className="contact-link-row" href={profile.links.github} target="_blank" rel="noreferrer"><span className="contact-link-icon">GH</span><span><strong>GitHub</strong><small>Code and experiments</small></span><ArrowUpRight size={17} /></a>
        {[['Figma', profile.links.figma], ['LinkedIn', profile.links.linkedin], ['Email', profile.email]].map(([label, value]) => value ? (
          <a className="contact-link-row" key={label} href={label === "Email" ? `mailto:${value}` : value} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"}><span className="contact-link-icon">{label.slice(0, 2).toUpperCase()}</span><span><strong>{label}</strong><small>{value}</small></span><ArrowUpRight size={17} /></a>
        ) : (
          <button className="contact-link-row is-unset" key={label} onClick={() => onNotice(`Add ${label} in src/data/portfolio.js when ready.`)}><span className="contact-link-icon">{label.slice(0, 2).toUpperCase()}</span><span><strong>{label}</strong><small>Not added yet</small></span><Plus size={17} /></button>
        ))}
      </div>
    </div>
  );
}