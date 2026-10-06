import { ArrowRight, ArrowUpRight, CircleDot, FileText, Layers3, MousePointer2, Plus } from "lucide-react";

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
      <span className="case-row-main"><span className="case-row-title">{project.title}<span className="draft-tag"><i />{project.state}</span></span><span className="case-row-description">{project.description}</span></span>
      <span className="case-row-meta"><span>{project.role}</span><span>{project.year}</span></span>
      <span className="case-row-action" aria-hidden="true"><ArrowRight size={17} /></span>
    </button>
  );
}

function InterfaceMap({ onPointerMove }) {
  return (
    <div className="interface-map" onPointerMove={onPointerMove} aria-label="A schematic preview of an interface workspace">
      <div className="map-topline"><span><i />INTERFACE MAP</span><span>FRAME / 01</span></div>
      <div className="map-layout">
        <div className="map-sidebar"><b>m.</b><i /><i /><i /><span /></div>
        <div className="map-canvas">
          <div className="map-toolbar"><span /><span /><span /><b>OVERVIEW</b></div>
          <div className="map-content">
            <div className="map-copy"><small>PRODUCT DESIGN / 01</small><b>Make the next<br />step feel clear.</b><i /><i /><span>EXPLORE FLOW <ArrowRight size={11} /></span></div>
            <div className="map-orbit" aria-hidden="true"><div className="orbit-core"><MousePointer2 size={18} /></div><span className="orbit-tag tag-one">INPUT</span><span className="orbit-tag tag-two">STATE</span><span className="orbit-tag tag-three">FEEDBACK</span></div>
          </div>
          <div className="map-footer"><span>LAYOUT / 12 COL</span><span>INTERACTION / READY</span></div>
        </div>
      </div>
      <div className="map-caption"><span>FIG. 01</span><span>INTERFACES AS SYSTEMS</span></div>
    </div>
  );
}

export function Overview({ profile, caseFiles, onOpenCase, onWork, onNotice }) {
  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 8}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 8}px`);
  };

  return (
    <div className="overview-view">
      <section className="overview-lead">
        <div className="lead-copy">
          <div className="eyebrow-row"><span className="live-mark"><i />WORKSPACE / OVERVIEW</span><span className="eyebrow-version">MAI.PORTFOLIO / 01</span></div>
          <h1>{profile.statement}</h1>
          <p className="lead-subtitle">A product-minded practice across interface design, interaction, and the systems that hold them together.</p>
          <div className="lead-actions"><button className="button button-primary" onClick={onWork}>Explore case files <ArrowRight size={15} /></button><button className="text-button" onClick={() => onNotice("Use Ctrl K or Command K to move through the workspace.")}>How to navigate <span>?</span></button></div>
        </div>
        <InterfaceMap onPointerMove={handlePointerMove} />
      </section>

      <div className="metadata-strip" aria-label="Workspace metadata">
        <div><span>CASE FILES</span><strong>{String(caseFiles.length).padStart(2, "0")} <small>editable drafts</small></strong></div>
        <div><span>DISCIPLINES</span><strong>{profile.disciplines.slice(0, 3).join(" / ")}</strong></div>
        <div><span>CURRENT STATE</span><strong><i className="status-dot" />{profile.status}</strong></div>
      </div>

      <section className="overview-cases">
        <div className="section-bar"><div><span className="micro-label">WORK / INDEX</span><h2>Selected case files</h2></div><button className="link-button" onClick={onWork}>View all <ArrowRight size={14} /></button></div>
        <div className="case-list">{caseFiles.map((project) => <CaseRow key={project.id} project={project} onOpen={() => onOpenCase(project.id)} />)}</div>
      </section>

      <section className="overview-footer-band">
        <div className="footer-band-icon"><Layers3 size={19} /></div>
        <div><span className="micro-label">A NOTE ON THIS SPACE</span><p>Case files are starter templates. Replace each field with verified project details in <code>src/data/portfolio.js</code>.</p></div>
        <FileText size={17} className="footer-band-mark" aria-hidden="true" />
      </section>
    </div>
  );
}

export function WorkView({ caseFiles, onOpenCase }) {
  return (
    <div className="content-view">
      <SectionHeading eyebrow="WORK / INDEX" title="Selected case files" detail="Structured drafts for the work and thinking you choose to share." />
      <div className="index-column-labels"><span>REFERENCE</span><span>CASE / DESCRIPTION</span><span>ROLE / YEAR</span></div>
      <div className="case-list">{caseFiles.map((project) => <CaseRow key={project.id} project={project} onOpen={() => onOpenCase(project.id)} />)}</div>
      <div className="quiet-note"><Plus size={15} /><span>Add or remove case files from <code>src/data/portfolio.js</code>; the interface follows the data.</span></div>
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