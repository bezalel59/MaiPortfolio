import { ArrowLeft, ArrowUpRight } from "lucide-react";

function ImageGallery({ project, onBack }) {
  return (
    <article className="case-study image-case-study">
      <button className="back-link" onClick={onBack}><ArrowLeft size={15} aria-hidden="true" /> All work</button>
      <header className="gallery-heading">
        <div className="case-kicker"><span>CASE {project.id}</span><span>{project.context}</span></div>
        <h1>{project.title}</h1>
        <p className="case-description">{project.description}</p>
        <a className="behance-link" href={project.behanceUrl || project.prototypeUrl} target="_blank" rel="noreferrer">{project.behanceUrl ? "View on Behance" : "Open Figma prototype"} <ArrowUpRight size={14} aria-hidden="true" /></a>
      </header>
      <div className="artwork-gallery" aria-label={`${project.title} image collection`}>
        {project.gallery.map((image, index) => (
          <figure className="gallery-figure" key={image.src}>
            <div className="gallery-counter"><span>{String(index + 1).padStart(2, "0")}</span><i /><span>{String(project.gallery.length).padStart(2, "0")}</span></div>
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" />
          </figure>
        ))}
      </div>
      <footer className="gallery-footer"><span>END / {String(project.gallery.length).padStart(2, "0")} BOARDS</span><button onClick={onBack}>Back to work <ArrowLeft size={14} /></button></footer>
    </article>
  );
}

export default function CaseStudy({ project, onBack }) {
  return <ImageGallery project={project} onBack={onBack} />;
}