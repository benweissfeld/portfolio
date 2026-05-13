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
      "I'm Ben, finishing my MBA at Kellogg, and I'm usually drawn to the kind of work that sits between big questions and practical execution — usually at the intersection of strategy, marketing, and AI.",
      "My path's been a non-obvious one. I've moved through very different environments; military, legal, performance marketing, startups, and business school, and somehow I keep ending up in messy, ambiguous situations where I'm asked to make sense of things with limited time and incomplete information. Most of what I've gotten good at, I learned in that loop.",
      "I'm drawn to problems that don't arrive neatly packaged. I like breaking complexity down to first principles, finding the signal inside it, and turning it into something a team can actually act on. I care about clear thinking, useful products, and work that feels connected to real people and real situations.",
      "Outside of work, I'm usually following basketball, exploring new places, or thinking about consumer behavior more than is probably normal.",
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
      category: 'Product · Consumer fintech',
      year: '2025',
      role: 'Sole builder — product, design, build, integrations',
      span: 'Ongoing',
      tags: ['Consumer fintech', '0-to-1 product', 'Plaid API', 'Anthropic API', 'LLMs', 'Real-time AI', 'Behavioral nudges', 'Browser extension', 'Prompt engineering', 'Solo build'],
      summary:
        "The savings app that meets you at checkout. Real-time, LLM-powered, built solo.",
      problem:
        "frug. is the consumer fintech app I wish existed.\n\nEvery personal finance tool I've used tells you what you already spent. Mint, your bank app, the friendly little monthly summary email — they all show up after the money's gone. They turn personal finance into a postmortem. And the thing is, by the time you're reading the summary, the decision is six weeks old. You can't undo it. You can only feel slightly worse about it.\n\nThe actual decision moment is checkout. That's where the money moves. That's where nudges would matter. And nothing meets you there with anything useful.",
      approach:
        "frug. does.\n\nIt lives in the browser. When you're about to buy something — checking out on Amazon, on a DTC site, on a flight booking — frug. notices. It cross-references what you're about to spend against how you actually spend your money, pulled live from your accounts through a Plaid integration. Then it uses an LLM to generate a single nudge: short, specific, grounded in your behavior. Not \"consider whether you need this\" — something like \"you've spent $340 on takeout this month, and this is $52. Worth it?\" Or sometimes: \"actually, this is well below your average — go ahead.\"\n\nThe point isn't to guilt you out of buying things. The point is to put a small, honest signal between you and the click — the kind of signal a friend who saw your bank account would give you. Cheap to ignore. Easy to act on. And tuned to you, not a generic budgeting heuristic.\n\nUnder the hood: live Plaid integration for the spending data, an LLM for the nudge, a browser extension as the surface. I built every layer of it — product thinking, design, code, integrations, prompts. No team, no funding, no co-founder. Just me figuring out one piece at a time and shipping the next thing.\n\nIt's the project I'm proudest of, because everything I care about shows up in it. AI as a building material, not a feature you bolt on. Shipping solo and learning by doing. Finding the gap nobody's filling — the moment between \"I want this\" and \"I bought this\" — and putting something useful in it.\n\nIt's still early. I'm dogfooding it, iterating on the nudge logic, and figuring out what changes when the AI actually knows you. So far: more than I expected.",
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
      category: 'Creative · Conversational AI game',
      year: '2025',
      role: 'Sole builder',
      span: 'A few weeks',
      tags: ['Conversational AI', 'Character prompting', 'Persona engineering', 'LLMs', 'Anthropic API', 'Game design', 'Persistent state', 'React'],
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
      category: 'Engineering · Browser audio tool',
      year: '2026',
      role: 'Sole builder',
      span: 'Day 0 — working prototype',
      tags: ['Consumer product', '0-to-1 prototype', 'Audio engineering', 'Web Audio API', 'BPM detection', 'EQ automation', 'Client-side processing', 'React', 'Audio ML (roadmap)'],
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
      category: 'Productivity · AI Chrome extension',
      year: '2026',
      role: 'Sole builder',
      span: 'A few weeks',
      tags: ['Productivity tooling', 'AI Chrome extension', 'Anthropic API', 'LLMs', 'Prompt engineering', 'Resume parsing', 'JD analysis', 'Self-built tool', 'TypeScript'],
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
      video: 'uploads/bose-hero.mp4',
      images: ['uploads/bose-detail-1.png', 'uploads/bose-detail-2.png'],
      imagesPositions: ['top', 'center'],
      title: 'Bose Presence',
      client: 'Kellogg AIML 901 · course engagement',
      category: 'Marketing strategy · Full-cycle engagement',
      year: '2025',
      role: 'Marketing strategist — full cycle, AI-augmented',
      span: '~10 weeks',
      tags: ['Marketing strategy', 'K-Means segmentation', 'ICP development', 'Pricing & positioning', 'Creative testing', 'Statistical analysis', 'Executive memos', 'Synthetic personas', 'LLMs', 'Python', 'Kellogg AIML 901'],
      summary:
        "A full-cycle AI marketing engagement, from segmentation to executive memo.",
      problem:
        "A simulated internship inside Kellogg's AI & Machine Learning for Marketing course (AIML 901), structured as a full-cycle marketing engagement for Bose: develop a new product, position it, price it, prove it.\n\nI treated the LLM as a research partner across every stage of the work, not just a writing assistant at the end. The output was a complete marketing artifact — and an honest test of what AI-native marketing actually looks like when you commit to it from segmentation through to the executive memo.",
      approach:
        "The work, in order:\n\n1. Deep research — built the foundational view of Bose's market position, competitive set, and brand equity. LLMs did the heavy lifting on synthesis across analyst reports, press, product reviews, and earnings calls. I directed the queries and stress-tested the conclusions.\n\n2. K-Means quantitative segmentation — clustered the consumer audio market into distinct buyer segments using behavioral and attitudinal data. The model surfaced the segments; I named them, interpreted them, and made the strategic call on which one to pursue.\n\n3. ICP development — \"Jordan, The Premium Believer\" — a qualitative persona built on top of the K-Means output. Jordan is the buyer who believes premium audio is worth premium prices and wants the product to feel like an upgrade in their life, not just their ears. LLM-assisted persona development, but the strategic distinction — Premium Believer vs. Premium Skeptic — was the call that shaped everything downstream.\n\n4. Product concept — \"Bose Presence\" — a $329 AI-powered earbud concept built specifically for Jordan. Price point, feature set, and positioning all derived from the segmentation and ICP work, not invented and then justified.\n\n5. Creative asset test with statistical analysis — generated multiple creative directions, tested them in a structured experiment, and ran the statistical analysis to identify which message and visual actually moved Jordan. Real significance testing, not vibes.\n\n6. Executive memo, structured as 3-Whats — what we found, what it means, what to do. Tight, decision-oriented, written for a CMO who has eight minutes.\n\nWhat this project proves about how I work:\n\nI can run a marketing arc end-to-end — segmentation, positioning, pricing, creative, decision memo — and I use AI as a building material at every step, not just to write the final draft. The model is a research partner, a synthesis engine, and a creative generator. The judgment — which segment matters, what the ICP actually wants, what the executive needs to hear — stays with me. That division of labor is the whole game in modern marketing, and most teams haven't figured it out yet.",
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
