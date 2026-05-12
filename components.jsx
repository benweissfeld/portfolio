// Shared components: Layout (nav, footer), ProjectCard variants, contact modal.

const { useState, useEffect, useRef } = React;

const NAV_ITEMS = [
  { id: 'home',  label: 'Index' },
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About' },
];

function NavBar({ page, go, onContact }) {
  const { persona } = window.PORTFOLIO;
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="nav" data-scrolled={scrolled ? '1' : '0'}>
      <style>{`
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          transition: background 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease;
          border-bottom: 1px solid transparent; }
        .nav[data-scrolled="1"] {
          background: color-mix(in oklch, var(--bg) 78%, transparent);
          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          border-bottom-color: var(--line);
        }
        .nav-inner { max-width: var(--container); margin: 0 auto;
          padding: 18px var(--pad-x); display: flex; align-items: center;
          justify-content: space-between; gap: 24px; }
        .brand { display: flex; align-items: center; gap: 12px; font-weight: 500; letter-spacing: -0.01em; }
        .brand-mark {
          width: 28px; height: 28px; border-radius: 7px;
          background: var(--fg); color: var(--bg);
          display: grid; place-items: center;
          font-family: var(--f-mono); font-size: 11px; font-weight: 600;
          letter-spacing: 0;
        }
        .brand small { color: var(--fg-3); font-family: var(--f-mono);
          font-size: 11px; letter-spacing: 0.06em; }
        .nav-links { display: flex; align-items: center; gap: 4px; }
        .nav-link { padding: 8px 14px; border-radius: 999px; font-size: 14px;
          color: var(--fg-3); transition: color 160ms, background 160ms; }
        .nav-link:hover { color: var(--fg); }
        .nav-link[data-active="1"] { color: var(--fg); background: var(--bg-1); }
        .nav-meta { display: flex; align-items: center; gap: 10px; color: var(--fg-3);
          font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.06em; }
        @media (max-width: 720px) { .nav-meta { display: none; } .nav-links { gap: 0; } }
      `}</style>
      <div className="nav-inner">
        <a className="brand" onClick={() => go('home')} role="button" tabIndex={0}>
          <span className="brand-mark">{persona.initials}</span>
          <span>{persona.first.toLowerCase()} {persona.last.toLowerCase()}</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map(n => (
            <a key={n.id} className="nav-link"
               data-active={page === n.id ? '1' : '0'}
               onClick={() => go(n.id)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-meta">
          <span className="dot-live" />
          <span>CHI · {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Chicago' })}</span>
          <button className="btn ghost" style={{ height: 34, padding: '0 14px', fontSize: 12 }} onClick={onContact}>
            Contact ↗
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer({ go, onContact }) {
  const { persona } = window.PORTFOLIO;
  return (
    <footer className="footer">
      <style>{`
        .footer { margin-top: var(--gap-y); border-top: 1px solid var(--line);
          padding: 80px 0 28px; background: var(--bg); position: relative; z-index: 1; }
        .footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 48px;
          padding-bottom: 64px; }
        @media (max-width: 760px) { .footer-grid { grid-template-columns: 1fr; gap: 32px; } }
        .footer h3 { font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--fg-3); margin: 0 0 16px; font-weight: 500; }
        .footer-cta { font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); font-size: clamp(28px, 4vw, 44px);
          line-height: 1.05; margin: 0 0 20px; }
        .footer-cta em { font-family: 'Instrument Serif', serif; font-style: italic; font-weight: 400; }
        .footer-list { display: flex; flex-direction: column; gap: 8px; }
        .footer-list a { color: var(--fg-2); font-size: 14px; }
        .footer-list a:hover { color: var(--fg); }
        .footer-bottom { display: flex; justify-content: space-between; gap: 24px;
          padding-top: 24px; border-top: 1px solid var(--line);
          font-family: var(--f-mono); font-size: 11px; color: var(--fg-3);
          letter-spacing: 0.06em; text-transform: uppercase; }
        @media (max-width: 760px) { .footer-bottom { flex-direction: column; } }
      `}</style>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Currently</h3>
            <p className="footer-cta">
              open to <em>full-time</em> roles
            </p>
            <button className="btn primary" onClick={onContact}>
              Get in touch <span aria-hidden>→</span>
            </button>
          </div>
          <div>
            <h3>Index</h3>
            <div className="footer-list">
              {NAV_ITEMS.map(n => (
                <a key={n.id} onClick={() => go(n.id)}>{n.label}</a>
              ))}
              <a onClick={onContact}>Contact</a>
            </div>
          </div>
          <div>
            <h3>Elsewhere</h3>
            <div className="footer-list">
              {persona.socials.map(s => (
                <a key={s.label} href={s.href}>{s.label} <span style={{ color: 'var(--fg-4)' }}>↗</span></a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Ben Weissfeld</span>
          <span>{persona.location} · {persona.timezone}</span>
          <span>v1 · last updated may ‘26</span>
        </div>
      </div>
    </footer>
  );
}

/* ── Project cards — three layouts ───────────────────────────────── */

function ProjectCard({ project, index, variant, onOpen }) {
  if (variant === 'list') return <ProjectRow project={project} index={index} onOpen={onOpen} />;
  if (variant === 'masonry') return <ProjectMasonryCard project={project} index={index} onOpen={onOpen} />;
  return <ProjectImageCard project={project} index={index} onOpen={onOpen} />;
}

function ProjectImageCard({ project, index, onOpen }) {
  return (
    <article className="pc-img fade-in" style={{ animationDelay: `${index * 80}ms` }}
             onClick={() => onOpen(project.id)} data-hov>
      <style>{`
        .pc-img { cursor: pointer; }
        body[data-cursor="native"] .pc-img { cursor: pointer; }
        .pc-img .frame {
          aspect-ratio: 4/3; border-radius: var(--radius); overflow: hidden;
          background: var(--bg-1); border: 1px solid var(--line);
          margin-bottom: 20px; position: relative;
        }
        .pc-img .frame svg { transition: transform 700ms cubic-bezier(.2,.7,.2,1); }
        .pc-img:hover .frame svg { transform: scale(1.04); }
        .pc-img .frame::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, color-mix(in oklch, var(--bg) 70%, transparent) 0%, transparent 30%);
          opacity: 0; transition: opacity 320ms;
        }
        .pc-img:hover .frame::after { opacity: 1; }
        .pc-meta { display: flex; align-items: center; justify-content: space-between;
          gap: 16px; font-family: var(--f-mono); font-size: 11px;
          color: var(--fg-3); letter-spacing: 0.06em; margin-bottom: 10px; }
        .pc-meta b { color: var(--fg-2); font-weight: 500; }
        .pc-title {
          font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter);
          font-size: clamp(28px, 3.4vw, 40px); line-height: 1.02;
          margin: 0 0 12px; color: var(--fg);
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .pc-title .arrow {
          width: 40px; height: 40px; border-radius: 999px;
          border: 1px solid var(--line-strong); display: grid; place-items: center;
          transition: all 240ms cubic-bezier(.2,.7,.2,1); flex-shrink: 0;
        }
        .pc-img:hover .pc-title .arrow {
          background: var(--accent); border-color: var(--accent); color: var(--accent-ink);
          transform: rotate(-45deg);
        }
        .pc-sum { color: var(--fg-2); margin: 0; max-width: 56ch; }
        .pc-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }
      `}</style>
      <div className="frame">
        <ProjectArt project={project} />
      </div>
      <div className="pc-meta">
        <span>{String(index + 1).padStart(2, '0')} / {project.year}</span>
        <span><b>{project.client}</b></span>
      </div>
      <h3 className="pc-title">
        <span>{project.title}</span>
        <span className="arrow" aria-hidden>→</span>
      </h3>
      <p className="pc-sum">{project.summary}</p>
      <div className="pc-tags">
        {project.tags.map(t => <span key={t} className="pill">{t}</span>)}
      </div>
    </article>
  );
}

function ProjectRow({ project, index, onOpen }) {
  return (
    <article className="pc-row fade-in" style={{ animationDelay: `${index * 60}ms` }}
             onClick={() => onOpen(project.id)}>
      <style>{`
        .pc-row { display: grid; grid-template-columns: 80px 1fr 280px 80px;
          align-items: center; gap: 24px; padding: 28px 0;
          border-top: 1px solid var(--line); cursor: pointer;
          transition: padding 240ms cubic-bezier(.2,.7,.2,1); }
        body[data-cursor="native"] .pc-row { cursor: pointer; }
        .pc-row:hover { padding-left: 16px; padding-right: 16px; }
        .pc-row:last-of-type { border-bottom: 1px solid var(--line); }
        .pc-row .num { font-family: var(--f-mono); font-size: 11px;
          color: var(--fg-3); letter-spacing: 0.06em; }
        .pc-row .main { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
        .pc-row .ttl {
          font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); font-size: clamp(22px, 2.4vw, 32px);
          line-height: 1.02; transition: color 220ms;
        }
        .pc-row:hover .ttl { color: var(--accent); }
        .pc-row .sub { color: var(--fg-3); font-size: 14px; }
        .pc-row .thumb { aspect-ratio: 4/3; border-radius: 8px; overflow: hidden;
          border: 1px solid var(--line); height: 100px; justify-self: end; }
        .pc-row .arr { justify-self: end; color: var(--fg-3); font-family: var(--f-mono);
          font-size: 13px; transition: transform 240ms, color 220ms; }
        .pc-row:hover .arr { color: var(--fg); transform: translateX(6px); }
        @media (max-width: 760px) {
          .pc-row { grid-template-columns: 50px 1fr 40px; }
          .pc-row .thumb { display: none; }
        }
      `}</style>
      <span className="num">{String(index + 1).padStart(2, '0')}</span>
      <div className="main">
        <span className="ttl">{project.title}</span>
        <span className="sub">{project.client} · {project.category}</span>
      </div>
      <div className="thumb"><ProjectArt project={project} /></div>
      <span className="arr">{project.year} →</span>
    </article>
  );
}

function ProjectMasonryCard({ project, index, onOpen }) {
  // Vary aspect ratio for masonry feel
  const ratios = ['4/3', '4/5', '1/1', '4/3', '3/4', '5/4'];
  const ratio = ratios[index % ratios.length];
  return (
    <article className="pc-m fade-in" style={{ animationDelay: `${index * 80}ms` }}
             onClick={() => onOpen(project.id)}>
      <style>{`
        .pc-m { cursor: pointer; break-inside: avoid; margin-bottom: 32px; display: block; }
        body[data-cursor="native"] .pc-m { cursor: pointer; }
        .pc-m .frame { border-radius: var(--radius); overflow: hidden;
          border: 1px solid var(--line); margin-bottom: 14px; background: var(--bg-1); }
        .pc-m .frame svg { transition: transform 700ms cubic-bezier(.2,.7,.2,1); }
        .pc-m:hover .frame svg { transform: scale(1.05); }
        .pc-m .meta { display: flex; justify-content: space-between;
          font-family: var(--f-mono); font-size: 11px; color: var(--fg-3);
          letter-spacing: 0.06em; margin-bottom: 6px; }
        .pc-m .ttl {
          font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); font-size: 22px; line-height: 1.1;
          color: var(--fg); margin: 0 0 4px;
        }
        .pc-m .sub { color: var(--fg-3); font-size: 13px; }
        .pc-m:hover .ttl { color: var(--accent); }
      `}</style>
      <div className="frame" style={{ aspectRatio: ratio }}>
        <ProjectArt project={project} />
      </div>
      <div className="meta">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="ttl">{project.title}</h3>
      <p className="sub">{project.category}</p>
    </article>
  );
}

/* ── Contact modal ─────────────────────────────────────────────── */

function ContactModal({ open, onClose }) {
  const [state, setState] = useState({ name: '', email: '', budget: 'Q3 2026', kind: 'Full-time role', message: '' });
  const [sent, setSent] = useState(false);
  const firstRef = useRef(null);
  useEffect(() => {
    if (open) {
      setSent(false);
      setTimeout(() => firstRef.current?.focus(), 120);
      document.body.style.overflow = 'hidden';
      const onKey = (e) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', onKey);
      return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    }
  }, [open, onClose]);
  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.message) return;
    setSent(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <style>{`
        .modal-overlay { position: fixed; inset: 0; z-index: 200;
          background: color-mix(in oklch, var(--bg) 80%, transparent);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          display: grid; place-items: center; padding: 24px;
          animation: fadeUp 220ms ease both; }
        .modal {
          width: min(680px, 100%); background: var(--bg-1);
          border: 1px solid var(--line); border-radius: 20px;
          padding: 40px; position: relative; max-height: 90vh; overflow: auto;
        }
        .modal h2 { font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); font-size: clamp(28px, 4vw, 44px);
          line-height: 1.05; margin: 0 0 8px; }
        .modal h2 em { font-family: 'Instrument Serif', serif; font-style: italic; font-weight: 400; }
        .modal .sub { color: var(--fg-3); margin: 0 0 28px; }
        .modal .close {
          position: absolute; top: 18px; right: 18px;
          width: 36px; height: 36px; border-radius: 999px;
          border: 1px solid var(--line); background: transparent; color: var(--fg-2);
        }
        .modal .close:hover { background: var(--bg-2); color: var(--fg); }
        .field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
        .field label { font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--fg-3); }
        .field input, .field textarea, .field select {
          width: 100%; padding: 14px; border-radius: 10px;
          background: var(--bg); border: 1px solid var(--line); color: var(--fg);
          font-family: var(--f-body); font-size: 15px;
        }
        .field input:focus, .field textarea:focus, .field select:focus {
          outline: none; border-color: var(--accent); }
        .field textarea { min-height: 120px; resize: vertical; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 540px) { .field-row { grid-template-columns: 1fr; } }
        .chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          padding: 10px 16px; border-radius: 999px;
          background: var(--bg); border: 1px solid var(--line);
          color: var(--fg-2); font-size: 13px; cursor: pointer;
        }
        body[data-cursor="native"] .chip { cursor: pointer; }
        .chip[data-on="1"] { background: var(--accent); color: var(--accent-ink);
          border-color: var(--accent); }
        .sent { text-align: center; padding: 40px 20px; }
        .sent-mark { width: 56px; height: 56px; border-radius: 999px;
          background: var(--accent); color: var(--accent-ink);
          display: grid; place-items: center; margin: 0 auto 20px; font-size: 24px; }
      `}</style>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">✕</button>
        {sent ? (
          <div className="sent">
            <div className="sent-mark">✓</div>
            <h2>Got it.</h2>
            <p className="sub">I'll write back within a day or two.<br/>
            If it's urgent: <a href="mailto:benweissfeld@gmail.com" style={{ color: 'var(--accent)' }}>benweissfeld@gmail.com</a></p>
            <button className="btn ghost" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h2>Let's <em>talk</em>.</h2>
            <p className="sub">What you're working on, or what you're hiring for. Brief is fine.</p>
            <div className="field-row">
              <div className="field">
                <label>Your name</label>
                <input ref={firstRef} value={state.name}
                  onChange={(e) => setState(s => ({ ...s, name: e.target.value }))}
                  placeholder="Anya Costa" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" value={state.email}
                  onChange={(e) => setState(s => ({ ...s, email: e.target.value }))}
                  placeholder="anya@…" required />
              </div>
            </div>
            <div className="field">
              <label>This is about</label>
              <div className="chip-row">
                {['Full-time role', 'Project / collab', 'Just saying hi', 'Other'].map(k => (
                  <button key={k} type="button" className="chip"
                    data-on={state.kind === k ? '1' : '0'}
                    onClick={() => setState(s => ({ ...s, kind: k }))}>{k}</button>
                ))}
              </div>
            </div>
            <div className="field">
              <label>Timeline</label>
              <div className="chip-row">
                {['Immediate', 'Q3 2026', 'Flexible', 'Just exploring'].map(k => (
                  <button key={k} type="button" className="chip"
                    data-on={state.budget === k ? '1' : '0'}
                    onClick={() => setState(s => ({ ...s, budget: k }))}>{k}</button>
                ))}
              </div>
            </div>
            <div className="field">
              <label>Tell me about it</label>
              <textarea value={state.message}
                onChange={(e) => setState(s => ({ ...s, message: e.target.value }))}
                placeholder="Two paragraphs is plenty. Links welcome." required />
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 12 }}>
              <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn primary">Send note →</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/* ── Custom cursor ─────────────────────────────────────────────── */

function CursorTracker() {
  useEffect(() => {
    if (document.body.dataset.cursor === 'native') return;
    const dot = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');
    let x = 0, y = 0, rx = 0, ry = 0, raf = 0;
    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      if (dot) dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      if (e.target.closest('[data-hov], a, button, .btn, .pill, .chip, .nav-link, .brand'))
        document.body.classList.add('cur-hover');
    };
    const onOut = (e) => {
      if (e.target.closest('[data-hov], a, button, .btn, .pill, .chip, .nav-link, .brand'))
        document.body.classList.remove('cur-hover');
    };
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}

Object.assign(window, {
  NavBar, Footer, ProjectCard, ContactModal, CursorTracker,
  ProjectImageCard, ProjectRow, ProjectMasonryCard,
});
