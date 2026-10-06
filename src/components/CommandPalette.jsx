import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Command, CornerDownLeft, Search } from "lucide-react";

export function CommandPalette({ open, commands, onClose }) {
  const inputRef = useRef(null);
  const previousFocus = useRef(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const filtered = commands.filter((command) => `${command.label} ${command.group}`.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!open) {
      previousFocus.current?.focus();
      return;
    }
    previousFocus.current = document.activeElement;
    setQuery("");
    setActiveIndex(0);
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  const choose = (command) => {
    command.run();
    onClose();
  };

  const handleDialogKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    } else if (event.key === "Tab") {
      const focusable = [...event.currentTarget.querySelectorAll("input, button:not([disabled])")];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && event.currentTarget.ownerDocument.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && event.currentTarget.ownerDocument.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(filtered.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
    } else if (event.key === "Enter" && filtered[activeIndex]) {
      event.preventDefault();
      choose(filtered[activeIndex]);
    }
  };

  return (
    <div className="palette-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="command-palette" role="dialog" aria-modal="true" aria-labelledby="palette-title" onKeyDown={handleDialogKeyDown}>
        <h2 className="sr-only" id="palette-title">Command palette</h2>
        <div className="palette-input-row">
          <Search size={18} aria-hidden="true" />
          <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search workspace..." aria-label="Search commands" aria-controls="palette-results" aria-activedescendant={filtered[activeIndex] ? `command-${activeIndex}` : undefined} />
          <kbd>ESC</kbd>
        </div>
        <div className="palette-group-label">NAVIGATION <span>{filtered.length.toString().padStart(2, "0")}</span></div>
        <div className="palette-results" id="palette-results" role="listbox" aria-label="Commands">
          {filtered.map((command, index) => {
            const Icon = command.Icon;
            return (
              <button id={`command-${index}`} className={`palette-option${activeIndex === index ? " is-selected" : ""}`} key={command.label} role="option" aria-selected={activeIndex === index} tabIndex={0} onMouseEnter={() => setActiveIndex(index)} onClick={() => choose(command)}>
                <span className="palette-option-icon"><Icon size={16} aria-hidden="true" /></span>
                <span className="palette-option-copy"><strong>{command.label}</strong><small>{command.group}</small></span>
                {command.external ? <ArrowUpRight size={15} aria-hidden="true" /> : <CornerDownLeft size={15} aria-hidden="true" />}
              </button>
            );
          })}
          {filtered.length === 0 && <p className="palette-empty">No matching commands.</p>}
        </div>
        <footer className="palette-footer"><span><kbd><Command size={10} /> K</kbd> TO OPEN</span><span><kbd>↑</kbd><kbd>↓</kbd> TO NAVIGATE</span><span><kbd>↵</kbd> TO SELECT</span></footer>
      </section>
    </div>
  );
}