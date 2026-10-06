import { useState } from "react";
import { Check, ChevronDown, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "./WorkspaceViews.jsx";

const colorTokens = [
  { name: "Signal", hex: "#c5f26b" },
  { name: "Poppy", hex: "#ef7058" },
  { name: "Cobalt", hex: "#5474e8" },
  { name: "Ink", hex: "#1c2822" },
  { name: "Canvas", hex: "#f2f4f0" },
];

export default function DesignSystem({ accent, onAccentChange }) {
  const [selected, setSelected] = useState("Signal");
  const [switchOn, setSwitchOn] = useState(true);
  const [notice, setNotice] = useState(false);

  const chooseColor = (token) => {
    setSelected(token.name);
    onAccentChange(token.hex);
  };

  return (
    <div className="content-view system-view">
      <SectionHeading eyebrow="SYSTEM / COMPONENTS" title="A small design language" detail="Live components and tokens used by this interface. Select a signal color to change the workspace accent." />
      <div className="system-grid">
        <section className="system-panel type-panel"><div className="system-panel-heading"><span className="micro-label">01 / TYPE</span><span>SPACE GROTESK + DM SANS</span></div><div className="type-specimen"><span>DISPLAY / 32</span><strong>Make the complex clear.</strong></div><div className="type-specimen body-specimen"><span>BODY / 15</span><p>Interface language should help people understand what is happening and what to do next.</p></div><div className="type-specimen mono-specimen"><span>MONO / 11</span><code>STATE / READY&nbsp;&nbsp;·&nbsp;&nbsp;01</code></div></section>
        <section className="system-panel color-panel"><div className="system-panel-heading"><span className="micro-label">02 / COLOR</span><span>CLICK TO APPLY</span></div><div className="swatch-list">{colorTokens.map((token) => <button className={`swatch-row${selected === token.name ? " is-selected" : ""}`} key={token.name} onClick={() => chooseColor(token)} aria-pressed={selected === token.name}><span className="swatch-chip" style={{ "--swatch": token.hex }} /><span><strong>{token.name}</strong><small>{token.hex.toUpperCase()}</small></span>{selected === token.name && <Check size={15} />}</button>)}</div></section>
        <section className="system-panel controls-panel"><div className="system-panel-heading"><span className="micro-label">03 / CONTROLS</span><span>INTERACTIVE</span></div><div className="component-row"><span>Primary action</span><button className="button button-primary" onClick={() => setNotice(true)}>Save changes <Check size={14} /></button></div><div className="component-row"><span>Secondary action</span><button className="button button-secondary" onClick={() => setNotice(false)}>Cancel</button></div><div className="component-row"><span>Quiet action</span><button className="text-button" onClick={() => setNotice(!notice)}>View details <ChevronDown size={14} /></button></div><div className="component-row"><span>Status badge</span><span className="draft-tag"><i />{notice ? "Saved" : "Draft"}</span></div></section>
        <section className="system-panel input-panel"><div className="system-panel-heading"><span className="micro-label">04 / INPUT</span><span>FOCUS / VALUE</span></div><label className="system-input"><span>LABEL</span><input type="text" placeholder="A considered placeholder" /><small>Helper text explains what belongs here.</small></label><div className="component-row switch-row"><span><strong>Enable notifications</strong><small>Binary preference</small></span><button className={`switch${switchOn ? " is-on" : ""}`} role="switch" aria-checked={switchOn} onClick={() => setSwitchOn((value) => !value)}><span /></button></div></section>
        <section className="system-panel surface-panel"><div className="system-panel-heading"><span className="micro-label">05 / SURFACE</span><span>REPEATED ITEM</span></div><div className="system-sample-card"><div className="sample-card-top"><span className="sample-card-icon"><SlidersHorizontal size={15} /></span><span className="draft-tag"><i />System</span></div><strong>Component record</strong><p>Consistent spacing and a clear action make repeated items easy to scan.</p><button className="text-button" onClick={() => onAccentChange(accent === "#c5f26b" ? "#5474e8" : "#c5f26b")}>Toggle accent <ChevronDown size={13} /></button></div></section>
      </div>
      <div className="system-footer"><span className="status-dot" />TOKENS ARE LIVE<span>ACCENT / {accent.toUpperCase()}</span></div>
    </div>
  );
}