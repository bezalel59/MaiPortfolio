import { ArrowLeft, ArrowUpRight, Check, ChevronRight } from "lucide-react";

function DecisionPreview({ label, after }) {
  return (
    <div className={`decision-preview${after ? " is-after" : ""}`} aria-label={`${label} interface placeholder`}>
      <div className="preview-toolbar"><span /><span /><span /><small>{label} / UI SKETCH</small></div>
      <div className="preview-content">
        <div className="preview-nav"><b>•••</b><i /><i /><i /></div>
        <div className="preview-main"><span className="preview-kicker">PROJECT SPACE</span><b className="preview-title" /><i className="preview-line" /><i className="preview-line short" /><div className="preview-action">{after ? "CONTINUE" : "NEXT"}</div></div>
      </div>
    </div>
  );
}

function DesignDecision({ decision }) {
  return (
    <div className="decision-board">
      <div className="decision-before"><span className="micro-label">BEFORE / EXAMPLE</span><DecisionPreview label={decision.before} /></div>
      <div className="decision-center">
        <div className="decision-step"><span>01</span><strong>Problem</strong><p>{decision.problem}</p></div>
        <ChevronRight size={17} aria-hidden="true" />
        <div className="decision-step"><span>02</span><strong>Decision</strong><p>{decision.choice}</p></div>
      </div>
      <div className="decision-after"><span className="micro-label">AFTER / EXAMPLE</span><DecisionPreview label={decision.after} after /></div>
      <p className="decision-note">Interface sketches are illustrative placeholders, not project evidence.</p>
    </div>
  );
}

export default function CaseStudy({ project, onBack, onNotice }) {
  return (
    <article className="case-study">
      <button className="back-link" onClick={onBack}><ArrowLeft size={15} aria-hidden="true" /> All case files</button>
      <div className="case-intro">
        <div className="case-kicker"><span>CASE {project.id}</span><span className="draft-tag"><i />{project.state}</span></div>
        <h1>{project.title}</h1>
        <p className="case-description">{project.description}</p>
        <div className="case-meta">
          <div><span>ROLE</span><strong>{project.role}</strong></div>
          <div><span>YEAR</span><strong>{project.year}</strong></div>
          <div><span>STATUS</span><strong>Editable draft</strong></div>
        </div>
      </div>

      <div className="story-list">
        {project.sections.map((section, index) => (
          <section className="story-section" key={section.key}>
            <div className="story-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="story-content">
              <h2>{section.title}</h2>
              {section.key === "decisions" ? <><p>{section.placeholder}</p><DesignDecision decision={project.decision} /></> : <div className="story-placeholder"><span className="placeholder-marker" /><p>{section.placeholder}</p></div>}
            </div>
          </section>
        ))}
      </div>

      <div className="case-links">
        <div><span className="micro-label">NEXT STEP</span><h2>Continue the story.</h2></div>
        <div className="case-link-actions">
          {[['Figma', project.links.figma], ['Prototype', project.links.prototype], ['GitHub', project.links.github]].map(([label, url]) => url ? (
            <a className="button button-secondary" key={label} href={url} target="_blank" rel="noreferrer">Open {label}<ArrowUpRight size={14} /></a>
          ) : (
            <button className="button button-muted" key={label} onClick={() => onNotice(`Add the ${label} URL in src/data/portfolio.js.`)}>{label}<span className="button-add">+</span></button>
          ))}
        </div>
      </div>
      <div className="case-bottom"><span>END OF CASE FILE</span><button onClick={onBack}>Back to index <Check size={14} /></button></div>
    </article>
  );
}