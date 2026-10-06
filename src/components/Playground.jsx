import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, MousePointer2, RotateCcw } from "lucide-react";
import { playgroundStages } from "../data/portfolio.js";
import { SectionHeading } from "./WorkspaceViews.jsx";

export default function Playground({ onNotice }) {
  const [stage, setStage] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => window.clearInterval(timer.current), []);

  const runSequence = () => {
    window.clearInterval(timer.current);
    setStage(0);
    setRunning(true);
    let nextStage = 0;
    timer.current = window.setInterval(() => {
      nextStage += 1;
      setStage(nextStage);
      if (nextStage >= playgroundStages.length - 1) {
        window.clearInterval(timer.current);
        setRunning(false);
      }
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 80 : 420);
  };

  const reset = () => {
    window.clearInterval(timer.current);
    setRunning(false);
    setStage(0);
  };

  return (
    <div className="content-view playground-view">
      <SectionHeading eyebrow="PLAYGROUND / INTERACTION" title="Small things, made tangible" detail="A controlled space for testing interface feedback. Each experiment is independent and touch friendly." />
      <section className="experiment-block">
        <div className="experiment-heading"><div><span className="micro-label">EXPERIMENT 001 / BUTTON LAB</span><h2>One action, five states.</h2></div><span className="experiment-readout">STATE / {String(stage + 1).padStart(2, "0")}</span></div>
        <div className="button-lab">
          <div className="lab-stage-panel">
            <div className="lab-crosshair" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className={`demo-control${stage === 3 ? " is-loading" : ""}${stage === 4 ? " is-success" : ""}`} data-stage={playgroundStages[stage].toLowerCase()}>
              <button className="demo-button" disabled={stage === 3 || running} onClick={() => onNotice("Action received. The control is ready for your own interaction experiment.")}>{stage === 3 ? <span className="loading-ring" /> : stage === 4 ? <Check size={17} /> : <MousePointer2 size={15} />}{stage === 3 ? "Working" : stage === 4 ? "Complete" : "Try the control"}<ArrowRight size={14} className="demo-arrow" /></button>
              <span className="demo-state-label">{playgroundStages[stage].toUpperCase()}</span>
            </div>
            <div className="lab-coordinate">X 240 / Y 120</div>
          </div>
          <div className="lab-controls">
            <div className="lab-controls-head"><span className="micro-label">STATE SEQUENCE</span><span>INTERACTION / 001</span></div>
            <ol className="state-steps">{playgroundStages.map((name, index) => <li className={stage === index ? "is-current" : stage > index ? "is-done" : ""} key={name}><span>{stage > index ? <Check size={12} /> : String(index + 1).padStart(2, "0")}</span><b>{name}</b>{index < playgroundStages.length - 1 && <i />}</li>)}</ol>
            <div className="lab-control-actions"><button className="button button-primary" onClick={runSequence} disabled={running}>{running ? "Running sequence" : "Run sequence"}<ArrowRight size={14} /></button><button className="icon-button" onClick={reset} aria-label="Reset button sequence"><RotateCcw size={15} /></button></div>
            <p className="lab-caption">Hover the control, press it, or run the sequence. Motion shortens when reduced motion is enabled.</p>
          </div>
        </div>
      </section>
      <section className="experiment-secondary">
        <div><span className="micro-label">EXPERIMENT 002 / INPUT</span><h2>Field states</h2><p>Focus, enter a value, and clear it to see the input's feedback.</p></div>
        <label className="demo-input-wrap"><span>PROJECT SEARCH</span><input type="search" placeholder="Try a project name..." onChange={(event) => event.currentTarget.parentElement.dataset.hasValue = Boolean(event.target.value)} /><small>SEARCH / LOCAL ONLY</small></label>
      </section>
    </div>
  );
}