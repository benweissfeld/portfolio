window.PORTFOLIO = {
  persona: {
    initials: 'BW',
    first: 'Ben',
    last: 'Weissfeld',
    handle: 'benweissfeld',
    role: 'Operator, builder, AI-native — where strategy meets shipped product',
    location: 'Evanston, IL (Chicago)',
    timezone: 'CST / UTC−6',
    email: 'benweissfeld@gmail.com',
    blurb:
      "Operator, builder, AI-native. I work where strategy meets shipped product — and I'd rather prove an idea than pitch it.",
    long: [
      "I'm Ben. I'm finishing my MBA at Kellogg, and the throughline of my career so far has been getting dropped into ambiguous problems and figuring out how to ship something useful. Military intelligence, civil litigation, programmatic adtech, a stealth AI startup — different worlds, same instinct.",
      "I treat AI as a building material, not a buzzword. My projects usually start the same way: I notice a workflow that's clunky or a question nobody's actually answering well, and I prototype my way to whether an LLM can change the shape of it. Sometimes that's a consumer product. Sometimes it's a tool I built for myself first. Sometimes it's an audio thing or a game. The shape varies; the impulse is the same.",
      "I came to the US from Israel for the MBA, so a chunk of this year has also been about building a new life in a new city. Turns out that's its own kind of 0-to-1 project.",
    ],
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ben-weissfeld/', short: 'in'  },
      { label: 'Email',    href: 'mailto:benweissfeld@gmail.com',        short: 'em'  },
    ],
  },
  projects: [
    {
      id: 'frug',
      image: 'uploads/frug-cover.png',
      imagePosition: 'top',
      images: ['uploads/frug2.png', 'uploads/frug3.png'],
      title: 'frug.',
      client: 'Self-initiated',
      category: 'Consumer · Fintech browser extension',
      year: '2025',
      role: 'Sole builder — product, design, build, integrations',
      span: 'Ongoing',
      tags: ['Plaid API', 'LLMs', 'Browser extension', 'Behavioral signals', 'Prompt engineering'],
      summary:
        "The savings app that meets you at checkout. Real-time, LLM-powered, built solo.",
      problem:
        "frug. is the consumer fintech app I wish existed. Every personal finance tool I've used tells you what you already spent — Mint, your bank app, the monthly summary email. The decision moment is checkout, and nothing meets you there with anything useful.",
      approach:
        "frug. does. It watches what you're about to buy, reads your actual spending behavior through a live Plaid integration, and uses an LLM to generate a real-time nudge — grounded in your behavior, not generic advice. I built it end-to-end: product, design, code, integrations. It's the project I'm proudest of, because everything I care about — AI as building material, shipping solo, finding the gap nobody's filling — shows up in it.",
      outcome: [
        ['Plaid',    'live API integration, shipped end-to-end, solo'],
        ['0→1',      'idea to working product, no team, no funding'],
        ['realtime', 'LLM nudges grounded in actual spend, not stated budgets'],
      ],
      palette: ['#0a3d2e', '#b8e8c8', '#0f1f17'],
      shape: 'wave',
    },
    {
      id: 'tamagotchi-celeb',
      image: 'uploads/tama1.png',
      images: ['uploads/tama2.png'],
      title: 'Tamagotchi Celeb',
      client: 'Self-initiated',
      category: 'Consumer · LLM-powered game',
      year: '2025',
      role: 'Sole builder',
      span: 'A few weeks',
      tags: ['LLMs', 'Character prompting', 'Persistent state', 'React'],
      summary:
        "The pet turned into your favorite movie character.",
      problem:
        "Tamagotchis were great until they weren't — the mechanic was care-or-die with no real personality on the other end. Thank god for our favorite characters.",
      outcome: [
        ['character', 'your favorite movie and tv character'],
        ['0→1',          'concept to playable, solo'],
        ['mechanic',     'old care-loop, new personality layer'],
      ],
      palette: ['#1a1020', '#f4c95d', '#c47aaa'],
      shape: 'room',
    },
    {
      id: 'segue-audio',
      image: 'uploads/Segue.png',
      imagePosition: 'top left',
      images: [],
      title: 'Segue Audio',
      client: 'Self-initiated',
      category: 'Consumer · Web audio tool',
      year: '2026',
      role: 'Sole builder',
      span: 'Day 0 — working prototype',
      tags: ['React', 'Web Audio API', 'BPM detection', 'EQ automation', 'Client-side audio processing'],
      summary:
        "Smart auto-mix for the rest of us.",
      problem:
        "There's a hole in the middle of the market between Spotify's five-second crossfade and Rekordbox's pro learning curve. Pro DJ software is built for performers. Spotify's fade is a blunt instrument. Nobody serves the person who just wants music to flow at a dinner, a house party, or a workout — someone who'll decide when to switch tracks but doesn't want to learn the craft of how.",
      approach:
        "Segue is that tool. You load tracks, pick the moment to transition, and it handles the technical move: tempo-matching, equal-power crossfade, swapping the bass so the two basslines don't clash. Day 0 right now  working prototype, no users yet, dogfooding it for myself first.",
      outcome: [
        ['day 0',     'working prototype, client-side audio, no backend'],
        ['the wedge', 'sits between dumb crossfade and full pro deck'],
        ['next',      'ML structure detection + harmonic key matching'],
      ],
      palette: ['#0d0a1a', '#8b5cf6', '#e9e2ff'],
      shape: 'arch',
    },
    {
      id: 'gotfit',
      heroImages: ['uploads/gotfit1.png', 'uploads/gotfit2.png', 'uploads/gotfit3.png'],
      images: [],
      title: 'GotFit?',
      client: 'Self-initiated',
      category: 'Productivity · Chrome extension',
      year: '2026',
      role: 'Sole builder',
      span: 'A few weeks',
      tags: ['Chrome extension', 'TypeScript', 'Anthropic API', 'Resume parsing', 'JD analysis'],
      summary:
        "The JD-to-resume fit checker I built for myself. One click. Honest answers.",
      problem:
        "MBA job search is a volume game with a customization tax. Every JD wants slightly different language. Every recruiter scans for slightly different keywords. Tailoring a resume by hand for every application doesn't scale, and existing ATS tools are clunky, opaque, and built for HR — not for the candidate.",
      approach:
        "GotFit? sits in the browser, reads whatever JD you're looking at, scores it against your resume, and tells you the truth: what matches, what's missing, how to rewrite the bullets. I built it for myself first. It worked. So I packaged it for everyone else stuck in the same loop.",
      outcome: [
        ['1-click',   'JD-to-resume fit analysis on any posting'],
        ['per-JD',    'LLM-driven gap detection and bullet rewrites'],
        ['self→tool', 'built for me, packaged for anyone'],
      ],
      palette: ['#101a2e', '#3a86ff', '#f0f4ff'],
      shape: 'grid',
    },
    {
      id: 'bose-presence',
      title: 'Bose Presence',
      client: 'Kellogg AIML 901 · course engagement',
      category: 'Consumer · AI-driven marketing strategy',
      year: '2025',
      role: 'Marketing strategist — full cycle, AI-augmented',
      span: '~10 weeks',
      tags: ['LLMs', 'K-Means segmentation', 'Synthetic ICP generation', 'Creative testing', 'Statistical analysis'],
      summary:
        "A simulated marketing engagement, done AI-native. LLM as research partner, not just writer.",
      problem:
        "This was a course-based engagement at Kellogg, but I treated it like the lab experiment I actually wanted to run: what does strategy work look like when the LLM is a research partner across the whole cycle, not just at the writing stage?",
      approach:
        "The output was a complete marketing artifact for Bose — deep research, K-Means quantitative segmentation, a qualitative ICP I called 'Jordan — The Premium Believer,' a $329 AI-powered earbud concept ('Bose Presence'), a creative asset test with statistical analysis, and a structured executive memo. The answer to the lab question: yes, faster — and the rigor goes up if you treat the model like a partner instead of a shortcut.",
      outcome: [
        ['ICP',     'LLM-assisted synthesis from qual + quant, not summarization'],
        ['$329',    'concept priced and positioned against a validated segment'],
        ['3-Whats', 'executive memo via a structured AI-augmented workflow'],
      ],
      palette: ['#1a1a18', '#c9c4b8', '#3d3530'],
      shape: 'topo',
    },
  ],
};
