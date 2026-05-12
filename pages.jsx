// Pages: Home, Works, ProjectDetail, About

const { useState: useStateP, useEffect: useEffectP, useMemo: useMemoP } = React;

/* ─── HOME ─────────────────────────────────────────────────────── */

function HomePage({ go, openProject, tweaks }) {
  const { persona, projects } = window.PORTFOLIO;
  const featured = projects.slice(0, 3);
  const heroLayout = tweaks.heroLayout;
  const cardVariant = tweaks.cardStyle;

  return (
    <div className="page-anim">
      {heroLayout === 'centered'  && <HeroCentered  persona={persona} go={go} />}
      {heroLayout === 'split'     && <HeroSplit     persona={persona} go={go} />}
      {heroLayout === 'editorial' && <HeroEditorial persona={persona} go={go} projects={projects} />}
      {heroLayout === 'left'      && <HeroLeft      persona={persona} go={go} />}

      <SelectedWorks projects={featured} cardVariant={cardVariant}
                     openProject={openProject} go={go} />

      <Marquee />

      <Footer go={go} onContact={() => null} />
    </div>
  );
}

function HeroLeft({ persona, go }) {
  return (
    <section className="hero hero-left">
      <style>{`
        .hero { padding-top: 140px; padding-bottom: clamp(40px, 5vw, 72px); }
        .hero .container { display: flex; flex-direction: column; align-items: flex-start; gap: 28px; }
        .hero h1 {
          font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); line-height: 0.98;
          font-size: clamp(48px, 8.5vw, 132px);
          margin: 0; max-width: 14ch; text-wrap: balance;
        }
        .hero h1 em { font-family: 'Instrument Serif', serif;
          font-style: italic; font-weight: 400; letter-spacing: -0.01em; color: var(--fg-2); }
        .hero p.lede { font-size: clamp(18px, 1.6vw, 22px); color: var(--fg-2);
          max-width: 56ch; margin: 0; line-height: 1.5; }
        .hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-meta { display: flex; gap: 32px; margin-top: 16px;
          color: var(--fg-3); font-family: var(--f-mono); font-size: 12px;
          letter-spacing: 0.06em; flex-wrap: wrap; }
        .hero-meta b { display: block; color: var(--fg); font-weight: 500;
          font-family: var(--f-body); letter-spacing: -0.01em;
          font-size: 14px; text-transform: none; }
      `}</style>
      <div className="container">
        <div className="pill fade-in">
          <span className="dot-live" /> AVAILABLE · Q3 2026
        </div>
        <h1 className="display fade-in d1">
          <em>Building</em> things.
        </h1>
        <p className="lede fade-in d2">
          Operator, builder, AI-native. I work where strategy meets shipped product.
          I'm {persona.first} — finishing my MBA at Kellogg, with seven years operating
          next to decision-makers under pressure: military intelligence, law, adtech,
          a stealth AI startup.
        </p>
        <div className="hero-cta fade-in d3">
          <button className="btn primary" onClick={() => go('works')}>See works <span aria-hidden>→</span></button>
          <button className="btn ghost" onClick={() => go('about')}>About me</button>
        </div>
        <div className="hero-meta fade-in d4">
          <div><span className="eyebrow">MBA</span><b>Kellogg · 2026</b></div>
          <div><span className="eyebrow">Open to</span><b>AI roles · Q3 2026</b></div>
          <div><span className="eyebrow">Flagship</span><b>frug. — checkout nudges</b></div>
        </div>
      </div>
    </section>
  );
}

function HeroCentered({ persona, go }) {
  return (
    <section className="hero hero-centered">
      <style>{`
        .hero-centered { padding-top: 160px; padding-bottom: var(--gap-y);
          text-align: center; }
        .hero-centered .container { align-items: center; }
        .hero-centered h1 {
          font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); line-height: 0.96;
          font-size: clamp(48px, 9vw, 156px); margin: 0; text-wrap: balance;
          max-width: 18ch;
        }
        .hero-centered h1 em { font-family: 'Instrument Serif', serif;
          font-style: italic; font-weight: 400; color: var(--accent); }
        .hero-centered p { font-size: clamp(18px, 1.6vw, 22px);
          color: var(--fg-2); max-width: 60ch; margin: 24px auto 0; }
      `}</style>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
        <div className="pill fade-in"><span className="dot-live" /> AVAILABLE · Q3 2026</div>
        <h1 className="display fade-in d1">
          Building with AI,<br/>
          not <em>about</em> AI.
        </h1>
        <p className="fade-in d2">
          I'm <strong style={{ color: 'var(--fg)' }}>{persona.first} {persona.last}</strong> — operator, builder,
          AI-native. Finishing my MBA at Kellogg with seven years operating next to
          decision-makers across military intel, law, adtech, and a stealth AI startup.
          Five products built solo, frug. as the flagship.
        </p>
        <div className="fade-in d3" style={{ display: 'flex', gap: 12 }}>
          <button className="btn primary" onClick={() => go('works')}>See works <span aria-hidden>→</span></button>
          <button className="btn ghost" onClick={() => go('about')}>About</button>
        </div>
      </div>
    </section>
  );
}

function HeroSplit({ persona, go }) {
  return (
    <section className="hero hero-split">
      <style>{`
        .hero-split { padding-top: 140px; padding-bottom: var(--gap-y); }
        .hero-split .container {
          display: grid; grid-template-columns: 1.4fr 1fr; gap: 64px; align-items: end;
        }
        @media (max-width: 880px) { .hero-split .container { grid-template-columns: 1fr; } }
        .hero-split h1 {
          font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); line-height: 0.95;
          font-size: clamp(48px, 7.5vw, 110px); margin: 16px 0 24px; text-wrap: balance;
        }
        .hero-split h1 em { font-family: 'Instrument Serif', serif; font-style: italic; font-weight: 400; }
        .hero-split p { font-size: 18px; color: var(--fg-2); max-width: 50ch; }
        .hero-split .portrait {
          aspect-ratio: 3/4; border-radius: var(--radius);
          border: 1px solid var(--line); overflow: hidden;
          background: linear-gradient(135deg, var(--bg-1), var(--bg-2));
          position: relative;
        }
        .hero-split .portrait::before {
          content: ''; position: absolute; inset: 0;
          background-image: repeating-linear-gradient(45deg,
            transparent 0px, transparent 12px,
            color-mix(in oklch, var(--fg) 4%, transparent) 12px,
            color-mix(in oklch, var(--fg) 4%, transparent) 13px);
        }
        .hero-split .portrait::after {
          content: 'PORTRAIT — DROP A SQUARE PHOTO HERE';
          position: absolute; inset: 0; display: grid; place-items: center;
          font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.16em;
          color: var(--fg-4); text-align: center; padding: 20px;
        }
        .hero-split .badge-row { display: flex; flex-direction: column; gap: 18px; padding-top: 16px;
          border-top: 1px solid var(--line); margin-top: 28px; font-family: var(--f-mono);
          font-size: 12px; color: var(--fg-3); letter-spacing: 0.06em; }
        .hero-split .badge-row b { color: var(--fg); font-family: var(--f-body); letter-spacing: -0.01em;
          font-size: 15px; font-weight: 500; text-transform: none; display: block; margin-top: 2px; }
      `}</style>
      <div className="container">
        <div>
          <div className="pill fade-in"><span className="dot-live" /> AVAILABLE · Q3 2026</div>
          <h1 className="display fade-in d1">
            Shipping AI products<br/>from <em>scratch</em>.
          </h1>
          <p className="fade-in d2">
            {persona.first} {persona.last}. Operator, builder, AI-native. Five products
            built solo — frug. as the flagship, four others as proof the impulse generalizes.
          </p>
          <div className="fade-in d3" style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <button className="btn primary" onClick={() => go('works')}>See works <span aria-hidden>→</span></button>
            <button className="btn ghost" onClick={() => go('about')}>About</button>
          </div>
        </div>
        <div className="fade-in d2">
          <div className="portrait" />
          <div className="badge-row">
            <div><span>BASED IN</span><b>{persona.location}</b></div>
            <div><span>WORKS WITH</span><b>Decision-makers under pressure</b></div>
            <div><span>AVAILABLE</span><b>Q3 2026</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroEditorial({ persona, go, projects }) {
  return (
    <section className="hero hero-ed">
      <style>{`
        .hero-ed { padding-top: 130px; padding-bottom: var(--gap-y); }
        .hero-ed .container { display: flex; flex-direction: column; gap: 24px; }
        .hero-ed .meta-row {
          display: flex; justify-content: space-between; font-family: var(--f-mono);
          font-size: 11px; color: var(--fg-3); letter-spacing: 0.16em; text-transform: uppercase;
          padding-bottom: 16px; border-bottom: 1px solid var(--line);
        }
        .hero-ed h1 {
          font-family: 'Instrument Serif', 'Newsreader', Georgia, serif;
          font-weight: 400; font-style: normal; line-height: 0.95; letter-spacing: -0.02em;
          font-size: clamp(56px, 10vw, 168px); margin: 28px 0 0; text-wrap: balance;
        }
        .hero-ed h1 em { font-style: italic; color: var(--accent); }
        .hero-ed h1 strong { font-family: var(--f-display); font-weight: var(--display-weight);
          font-style: normal; }
        .hero-ed .footer-row {
          display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 32px;
          margin-top: 24px; padding-top: 28px; border-top: 1px solid var(--line);
        }
        @media (max-width: 760px) { .hero-ed .footer-row { grid-template-columns: 1fr; } }
        .hero-ed .footer-row p { margin: 0; color: var(--fg-2); }
        .hero-ed .num-big { font-family: var(--f-display); font-size: 56px;
          font-weight: 500; letter-spacing: -0.04em; line-height: 1; }
      `}</style>
      <div className="container">
        <div className="meta-row fade-in">
          <span>Vol. 01 — May 2026</span>
          <span>{persona.location}</span>
          <span>Available · Q3</span>
        </div>
        <h1 className="fade-in d1">
          <strong>{persona.first}</strong> {persona.last}, <em>builds</em><br/>
          with AI.
        </h1>
        <div className="footer-row">
          <p className="fade-in d2">
            Operator, builder, AI-native. Finishing his MBA at Kellogg. Five products
            shipped solo, frug. as the flagship. Open to full-time AI roles starting Q3 2026.
          </p>
          <div className="fade-in d3">
            <div className="eyebrow" style={{ marginBottom: 6 }}>SHIPPED</div>
            <div className="num-big">{projects.length}</div>
            <div className="eyebrow" style={{ marginTop: 4 }}>AI PROJECTS, 2025 →</div>
          </div>
          <div className="fade-in d4" style={{ display: 'flex', alignItems: 'flex-end', gap: 8, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button className="btn primary" onClick={() => go('works')}>Works →</button>
            <button className="btn ghost" onClick={() => go('about')}>About</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Selected works */

function SelectedWorks({ projects, cardVariant, openProject, go }) {
  return (
    <section className="sel-works">
      <style>{`
        .sel-works { padding-bottom: var(--gap-y); }
        .sel-head { display: flex; justify-content: space-between; align-items: end; gap: 24px;
          margin-bottom: 64px; flex-wrap: wrap; }
        .sel-head h2 { font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); font-size: clamp(32px, 4.5vw, 56px);
          line-height: 1.02; margin: 0; }
        .sel-head h2 em { font-family: 'Instrument Serif', serif; font-style: italic; font-weight: 400; }
        .sel-head p { color: var(--fg-3); margin: 8px 0 0; max-width: 40ch; }
      `}</style>
      <div className="container">
        <div className="rule-mono" style={{ marginBottom: 24 }}>
          <span>(01)</span><span>SELECTED WORKS</span>
        </div>
        <div className="sel-head">
          <div>
            <h2>Selected <em>works</em>.</h2>
            <p>Five AI-native products built solo. frug. is the flagship — the others are the proof the impulse generalizes.</p>
          </div>
          <a className="rule-mono" onClick={() => go('works')}
             style={{ cursor: 'pointer', maxWidth: 220 }} data-hov>
            <span>ALL WORKS →</span>
          </a>
        </div>
        <div className={
          cardVariant === 'list'   ? 'sel-grid-list'  :
          cardVariant === 'masonry'? 'sel-grid-mason' : 'sel-grid-img'
        }>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i}
              variant={cardVariant} onOpen={openProject} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const labels = ['frug.', 'TAMAGOTCHI CELEB', 'SEGUE AUDIO', 'GOTFIT?', 'BOSE PRESENCE',
                  'PLAID', 'ANTHROPIC', 'KELLOGG', 'LLM-IN-THE-LOOP'];
  return (
    <section className="mq">
      <style>{`
        .mq { padding: 0 0 0; overflow: hidden; }
        .mq .container { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
          padding-top: 0; padding-bottom: 0; max-width: none; padding-left: 0; padding-right: 0; }
        .mq-track { display: flex; gap: 64px; padding: 28px 0;
          animation: mq 38s linear infinite; white-space: nowrap; }
        .mq-track span { font-family: var(--f-mono); font-size: 13px; color: var(--fg-3);
          letter-spacing: 0.16em; }
        .mq-track span::before { content: '◆'; margin-right: 64px; color: var(--fg-4); }
        @keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <div className="container">
        <div className="mq-track">
          {[...labels, ...labels, ...labels].map((c, i) => <span key={i}>{c}</span>)}
        </div>
      </div>
    </section>
  );
}

/* ─── WORKS ────────────────────────────────────────────────────── */

function WorksPage({ go, openProject, tweaks }) {
  const { projects } = window.PORTFOLIO;
  const variant = tweaks.cardStyle;
  return (
    <div className="page-anim">
      <section style={{ paddingTop: 160, paddingBottom: 80 }}>
        <div className="container">
          <div className="rule-mono fade-in" style={{ marginBottom: 24 }}>
            <span>WORKS · 2025 — 2026</span>
            <span style={{ flex: 'none' }}>{String(projects.length).padStart(2, '0')} projects</span>
          </div>
          <h1 className="display fade-in d1" style={{
            fontSize: 'clamp(48px, 8vw, 128px)', margin: '0 0 28px',
            maxWidth: '14ch'
          }}>
            All <em>works</em>.
          </h1>
          <p className="fade-in d2" style={{
            color: 'var(--fg-2)', maxWidth: '60ch', fontSize: 18, margin: 0,
          }}>
            A complete index of AI-native products built solo. frug. is the flagship; the
            others are the proof the impulse generalizes. Every entry written up the same
            way: problem, approach, outcome.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 'var(--gap-y)' }}>
        <div className="container">
          <div className={
            variant === 'list'    ? 'sel-grid-list'  :
            variant === 'masonry' ? 'sel-grid-mason' : 'sel-grid-img'
          }>
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i}
                variant={variant} onOpen={openProject} />
            ))}
          </div>
        </div>
      </section>

      <Footer go={go} onContact={() => null} />
    </div>
  );
}

/* ─── PROJECT DETAIL ───────────────────────────────────────────── */

function ProjectPage({ projectId, go, openProject }) {
  const { projects } = window.PORTFOLIO;
  const p = projects.find(x => x.id === projectId) || projects[0];
  const i = projects.findIndex(x => x.id === p.id);
  const next = projects[(i + 1) % projects.length];

  return (
    <div className="page-anim">
      <style>{`
        .proj-hero { padding-top: 130px; padding-bottom: 64px; }
        .proj-hero .meta {
          display: flex; gap: 32px; font-family: var(--f-mono); font-size: 11px;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--fg-3);
          padding-bottom: 24px; border-bottom: 1px solid var(--line); flex-wrap: wrap;
        }
        .proj-hero h1 {
          font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); line-height: 0.96;
          font-size: clamp(48px, 9vw, 144px); margin: 40px 0 16px;
        }
        .proj-hero h1 em { font-family: 'Instrument Serif', serif; font-style: italic; font-weight: 400; }
        .proj-hero p.lede { font-size: clamp(20px, 2vw, 28px); color: var(--fg-2);
          max-width: 32ch; margin: 0; line-height: 1.3; }
        .proj-hero .row {
          display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 32px;
          margin-top: 56px; padding-top: 24px; border-top: 1px solid var(--line);
        }
        @media (max-width: 720px) { .proj-hero .row { grid-template-columns: 1fr 1fr; } }
        .proj-hero .row .eyebrow { display: block; margin-bottom: 6px; }
        .proj-hero .row b { font-weight: 500; font-size: 15px; color: var(--fg); }

        .proj-art { padding: 0 0 64px; }
        .proj-art .container { max-width: none; padding: 0 var(--pad-x); }
        .proj-art .frame {
          border-radius: var(--radius); overflow: hidden;
          border: 1px solid var(--line); aspect-ratio: 16/9;
          max-width: 1400px; margin: 0 auto;
        }

        .proj-body { padding-bottom: 80px; }
        .proj-body .grid { display: grid; grid-template-columns: 240px 1fr; gap: 64px; max-width: 1100px; margin: 0 auto; }
        @media (max-width: 880px) { .proj-body .grid { grid-template-columns: 1fr; gap: 32px; } }
        .proj-body h2 { font-family: var(--f-mono); font-size: 11px; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--fg-3); margin: 0; }
        .proj-body .prose p { font-size: 18px; color: var(--fg-2); margin: 0 0 16px;
          max-width: 60ch; line-height: 1.55; }
        .proj-body .prose p:first-child { color: var(--fg); font-size: 22px;
          line-height: 1.4; font-weight: 400; }

        .proj-outcome { padding: 64px 0 var(--gap-y); border-top: 1px solid var(--line); }
        .proj-outcome .container { max-width: 1100px; }
        .proj-outcome .stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
        }
        @media (max-width: 720px) { .proj-outcome .stats { grid-template-columns: 1fr; } }
        .proj-outcome .stat { padding: 24px 0; }
        .proj-outcome .stat .v {
          font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); font-size: clamp(48px, 6vw, 80px);
          line-height: 1; color: var(--fg); margin-bottom: 12px;
        }
        .proj-outcome .stat .l { color: var(--fg-2); }

        .proj-detail-strip {
          display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
          padding: 0 var(--pad-x); max-width: var(--container); margin: 0 auto var(--gap-y);
        }
        .proj-detail-strip.single { grid-template-columns: 1fr; }
        @media (max-width: 720px) { .proj-detail-strip { grid-template-columns: 1fr; } }
        .proj-detail-strip .frame {
          aspect-ratio: 4/3; border-radius: var(--radius); overflow: hidden;
          border: 1px solid var(--line);
        }
        .proj-detail-strip.single .frame { aspect-ratio: 16/9; }

        .proj-next { padding: 64px 0 var(--gap-y); border-top: 1px solid var(--line); }
        .proj-next-card {
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          padding: 40px 0; cursor: pointer; transition: padding 240ms cubic-bezier(.2,.7,.2,1);
        }
        body[data-cursor="native"] .proj-next-card { cursor: pointer; }
        .proj-next-card:hover { padding-left: 16px; padding-right: 16px; }
        .proj-next-card .label { font-family: var(--f-mono); font-size: 11px; color: var(--fg-3);
          letter-spacing: 0.16em; }
        .proj-next-card .ttl { font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); font-size: clamp(32px, 5vw, 64px);
          line-height: 1; transition: color 220ms; }
        .proj-next-card:hover .ttl { color: var(--accent); }
        .proj-next-card .preview { aspect-ratio: 4/3; width: 200px;
          border-radius: 10px; overflow: hidden; border: 1px solid var(--line); flex: none; }
        @media (max-width: 720px) { .proj-next-card .preview { display: none; } }
      `}</style>

      <section className="proj-hero">
        <div className="container">
          <div className="meta fade-in">
            <span>← <a onClick={() => go('works')} data-hov style={{ cursor: 'pointer' }}>Index</a></span>
            <span style={{ flex: 1 }} />
            <span>{String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
            <span>{p.year}</span>
            <span>{p.category}</span>
          </div>
          <h1 className="fade-in d1">{p.title}<em>.</em></h1>
          <p className="lede fade-in d2">{p.summary}</p>
          <div className="row">
            <div className="fade-in d3">
              <span className="eyebrow">Client</span>
              <b>{p.client}</b>
            </div>
            <div className="fade-in d3">
              <span className="eyebrow">Role</span>
              <b>{p.role}</b>
            </div>
            <div className="fade-in d3">
              <span className="eyebrow">Span</span>
              <b>{p.span}</b>
            </div>
            <div className="fade-in d3">
              <span className="eyebrow">Stack</span>
              <b>{p.tags.join(', ')}</b>
            </div>
          </div>
        </div>
      </section>

      <section className="proj-art fade-in d2">
        <div className="container">
          {p.heroImages?.length >= 2 ? (
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
              {p.heroImages.map((src, i) => (
                <img key={i} src={src} alt="" style={{ height: 320, width: 'auto', display: 'block', borderRadius: 10, border: '1px solid var(--line)' }} />
              ))}
            </div>
          ) : (
            <div className="frame">
              <ProjectArt project={p} ratio="16/9" />
            </div>
          )}
        </div>
      </section>

      <section className="proj-body">
        <div className="container">
          <div className="grid">
            <h2>The brief</h2>
            <div className="prose">
              <p>{p.problem}</p>
              {p.approach && <p>{p.approach}</p>}
            </div>
          </div>
        </div>
      </section>

      {(p.images?.length ?? 2) > 0 && (
        <div className={`proj-detail-strip${p.images?.length === 1 ? ' single' : ''}`}>
          <div className="frame">
            {p.images?.[0]
              ? <img src={p.images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              : <ProjectArt project={{ ...p, shape: 'lines' }} />}
          </div>
          {(p.images?.length ?? 0) !== 1 && (
            <div className="frame">
              {p.images?.[1]
                ? <img src={p.images[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                : <ProjectArt project={{ ...p, shape: 'grid' }} />}
            </div>
          )}
        </div>
      )}

      <section className="proj-outcome">
        <div className="container">
          <div className="rule-mono" style={{ marginBottom: 32 }}>
            <span>OUTCOME</span>
          </div>
          <div className="stats">
            {p.outcome.map(([v, l], idx) => (
              <div className="stat fade-in" key={idx} style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="v">{v}</div>
                <div className="l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="proj-next">
        <div className="container">
          <div className="rule-mono" style={{ marginBottom: 0 }}>
            <span>NEXT PROJECT</span>
          </div>
          <div className="proj-next-card" data-hov onClick={() => openProject(next.id)}>
            <div>
              <div className="label">{String((i + 1) % projects.length + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</div>
              <div className="ttl">{next.title} →</div>
            </div>
            <div className="preview"><ProjectArt project={next} /></div>
          </div>
        </div>
      </section>

      <Footer go={go} onContact={() => null} />
    </div>
  );
}

/* ─── ABOUT ────────────────────────────────────────────────────── */

function AboutPage({ go }) {
  const { persona } = window.PORTFOLIO;
  const skills = {
    'Build': [
      'LLM integration', 'Prompt engineering', 'Agentic workflows',
      'Browser extensions', 'Full-stack', 'API integrations',
      'Real-time systems', 'Conversational AI', 'Audio processing',
      'Market research', 'Segmentation analysis', '0-to-1 shipping',
    ],
    'Stack': [
      'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Python',
      'Anthropic API', 'OpenAI API', 'Plaid API', 'Chrome APIs',
      'Web Audio API', 'HTML / CSS',
    ],
    'Tools': [
      'Cursor', 'Claude', 'ChatGPT', 'GitHub', 'VS Code',
      'Figma', 'Notion', 'Linear', 'Slack', 'Miro', 'Loom', 'Excel / Sheets',
    ],
  };
  return (
    <div className="page-anim">
      <style>{`
        .ab-hero { padding-top: 130px; padding-bottom: var(--gap-y); }
        .ab-hero .meta {
          display: flex; gap: 32px; font-family: var(--f-mono); font-size: 11px;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--fg-3);
          padding-bottom: 24px; border-bottom: 1px solid var(--line); flex-wrap: wrap;
        }
        .ab-hero h1 {
          font-family: var(--f-display); font-weight: var(--display-weight);
          letter-spacing: var(--display-letter); line-height: 0.95;
          font-size: clamp(56px, 11vw, 196px); margin: 40px 0 32px;
        }
        .ab-hero h1 em { font-family: 'Instrument Serif', serif; font-style: italic; font-weight: 400; }
        .ab-hero .lede {
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start;
        }
        @media (max-width: 880px) { .ab-hero .lede { grid-template-columns: 1fr; gap: 32px; } }
        .ab-hero .lede p { font-size: clamp(18px, 1.6vw, 22px);
          color: var(--fg-2); margin: 0 0 20px; line-height: 1.5; max-width: 60ch; }
        .ab-hero .lede p:first-child { color: var(--fg); }
        .ab-portrait {
          aspect-ratio: 4/5; border-radius: var(--radius); overflow: hidden;
          border: 1px solid var(--line); background: var(--bg-1);
          position: relative;
        }
        .ab-portrait img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }

        .ab-section { padding: 64px 0; border-top: 1px solid var(--line); }
        .ab-section .container { display: grid; grid-template-columns: 240px 1fr; gap: 64px; max-width: 1100px; }
        @media (max-width: 880px) { .ab-section .container { grid-template-columns: 1fr; gap: 24px; } }
        .ab-section h2 { font-family: var(--f-mono); font-size: 11px; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--fg-3); margin: 0; }
        .ab-skills { display: flex; flex-direction: column; gap: 32px; }
        .ab-skill h4 { font-family: var(--f-mono); font-size: 11px;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--fg-3);
          margin: 0 0 12px; font-weight: 500; }
        .ab-skill .tags { display: flex; flex-wrap: wrap; gap: 8px; }
      `}</style>

      <section className="ab-hero">
        <div className="container">
          <div className="meta fade-in">
            <span>{persona.location} · {persona.timezone}</span>
            <span style={{ flex: 1 }} />
            <span>KELLOGG MBA · 2026</span>
            <span>AI-NATIVE BUILDER</span>
          </div>
          <h1 className="fade-in d1">
            Hello<em>.</em>
          </h1>
          <div className="lede">
            <div className="ab-portrait fade-in d2">
              <img src="uploads/recent.png" alt={`${persona.first} ${persona.last}`} />
            </div>
            <div className="fade-in d3">
              {persona.long.map((par, i) => <p key={i}>{par}</p>)}
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                <a className="btn primary" href={`mailto:${persona.email}`}>Email me ↗</a>
                <a className="btn ghost" href="#">Download CV (PDF)</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-section">
        <div className="container">
          <h2>Skills</h2>
          <div className="ab-skills">
            {Object.entries(skills).map(([k, v]) => (
              <div className="ab-skill" key={k}>
                <h4>{k}</h4>
                <div className="tags">
                  {v.map(t => <span key={t} className="pill">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer go={go} onContact={() => null} />
    </div>
  );
}

Object.assign(window, { HomePage, WorksPage, ProjectPage, AboutPage });
