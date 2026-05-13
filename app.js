// App — routing, theme/tweak orchestration, mounts everything.

const {
  useState: useS,
  useEffect: useE,
  useMemo: useM
} = React;
const ACCENT_OPTIONS = {
  emerald: 'oklch(0.68 0.14 158)',
  amber: 'oklch(0.74 0.14 75)',
  electric: 'oklch(0.66 0.16 252)',
  magenta: 'oklch(0.66 0.16 350)',
  ivory: 'oklch(0.92 0.02 80)'
};
const TYPE_PRESETS = {
  neo: {
    display: "'Geist', 'Helvetica Neue', system-ui, sans-serif",
    body: "'Geist', 'Helvetica Neue', system-ui, sans-serif",
    mono: "'Geist Mono', ui-monospace, monospace",
    weight: 600,
    letter: '-0.035em',
    italic: 'normal'
  },
  editorial: {
    display: "'Instrument Serif', 'Newsreader', Georgia, serif",
    body: "'Geist', 'Helvetica Neue', system-ui, sans-serif",
    mono: "'Geist Mono', ui-monospace, monospace",
    weight: 400,
    letter: '-0.02em',
    italic: 'normal'
  },
  swiss: {
    display: "'Helvetica Neue', 'Geist', system-ui, sans-serif",
    body: "'Helvetica Neue', 'Geist', system-ui, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
    weight: 700,
    letter: '-0.04em',
    italic: 'normal'
  },
  mono: {
    display: "'JetBrains Mono', ui-monospace, monospace",
    body: "'Geist', 'Helvetica Neue', system-ui, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
    weight: 500,
    letter: '-0.02em',
    italic: 'normal'
  },
  newsreader: {
    display: "'Newsreader', 'Instrument Serif', Georgia, serif",
    body: "'Geist', system-ui, sans-serif",
    mono: "'Geist Mono', ui-monospace, monospace",
    weight: 500,
    letter: '-0.02em',
    italic: 'normal'
  }
};
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "emerald",
  "type": "neo",
  "heroLayout": "left",
  "cardStyle": "image",
  "density": "regular",
  "bgTexture": "plain",
  "cursor": "native"
} /*EDITMODE-END*/;
function applyTweaks(t) {
  const root = document.documentElement;
  const body = document.body;

  // Theme
  const dark = t.theme !== 'light';
  body.classList.toggle('theme-light', !dark);
  if (dark) {
    root.style.setProperty('--bg', '#0a0a09');
    root.style.setProperty('--bg-1', '#131311');
    root.style.setProperty('--bg-2', '#1d1d1a');
    root.style.setProperty('--line', 'rgba(255,255,255,0.08)');
    root.style.setProperty('--line-strong', 'rgba(255,255,255,0.18)');
    root.style.setProperty('--fg', '#f7f6f3');
    root.style.setProperty('--fg-2', '#c9c7c0');
    root.style.setProperty('--fg-3', '#8d8a82');
    root.style.setProperty('--fg-4', '#555049');
    root.style.setProperty('--accent-ink', '#0a0a09');
  } else {
    root.style.setProperty('--bg', '#f6f4ee');
    root.style.setProperty('--bg-1', '#eeece5');
    root.style.setProperty('--bg-2', '#e5e2d9');
    root.style.setProperty('--line', 'rgba(0,0,0,0.10)');
    root.style.setProperty('--line-strong', 'rgba(0,0,0,0.22)');
    root.style.setProperty('--fg', '#15140f');
    root.style.setProperty('--fg-2', '#3d3a31');
    root.style.setProperty('--fg-3', '#7a766b');
    root.style.setProperty('--fg-4', '#b1ada1');
    root.style.setProperty('--accent-ink', '#0a0a09');
  }

  // Accent
  root.style.setProperty('--accent', ACCENT_OPTIONS[t.accent] || ACCENT_OPTIONS.emerald);

  // Type
  const tp = TYPE_PRESETS[t.type] || TYPE_PRESETS.neo;
  root.style.setProperty('--f-display', tp.display);
  root.style.setProperty('--f-body', tp.body);
  root.style.setProperty('--f-mono', tp.mono);
  root.style.setProperty('--display-weight', tp.weight);
  root.style.setProperty('--display-letter', tp.letter);
  root.style.setProperty('--display-italic', tp.italic);

  // Body data attrs
  body.dataset.density = t.density;
  body.dataset.cursor = t.cursor;
  body.dataset.type = t.type;
  body.dataset.theme = t.theme;

  // Bg texture
  const bg = document.getElementById('bg-texture');
  if (bg) {
    bg.className = 'bg-shell ' + (t.bgTexture === 'plain' ? '' : t.bgTexture);
  }
}
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useS('home');
  const [projectId, setProjectId] = useS(null);
  const [contactOpen, setContactOpen] = useS(false);
  useE(() => {
    applyTweaks(t);
  }, [t]);
  const go = p => {
    setPage(p);
    setProjectId(null);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const openProject = id => {
    setProjectId(id);
    setPage('project');
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const openContact = () => setContactOpen(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CursorTracker, null), /*#__PURE__*/React.createElement(NavBar, {
    page: page,
    go: go,
    onContact: openContact
  }), page === 'home' && /*#__PURE__*/React.createElement(HomePage, {
    go: go,
    openProject: openProject,
    onContact: openContact,
    tweaks: t
  }), page === 'works' && /*#__PURE__*/React.createElement(WorksPage, {
    go: go,
    openProject: openProject,
    onContact: openContact,
    tweaks: t
  }), page === 'about' && /*#__PURE__*/React.createElement(AboutPage, {
    go: go,
    onContact: openContact
  }), page === 'project' && /*#__PURE__*/React.createElement(ProjectPage, {
    projectId: projectId,
    go: go,
    openProject: openProject,
    onContact: openContact
  }), /*#__PURE__*/React.createElement(ContactModal, {
    open: contactOpen,
    onClose: () => setContactOpen(false)
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Theme"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Mode",
    value: t.theme,
    options: [{
      value: 'dark',
      label: 'Dark'
    }, {
      value: 'light',
      label: 'Light'
    }],
    onChange: v => setTweak('theme', v)
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Accent",
    value: t.accent,
    options: [{
      value: 'emerald',
      label: 'Emerald (default)'
    }, {
      value: 'amber',
      label: 'Amber'
    }, {
      value: 'electric',
      label: 'Electric blue'
    }, {
      value: 'magenta',
      label: 'Magenta'
    }, {
      value: 'ivory',
      label: 'Ivory (mono)'
    }],
    onChange: v => setTweak('accent', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Typography"
  }, /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Type pair",
    value: t.type,
    options: [{
      value: 'neo',
      label: 'Geist · default'
    }, {
      value: 'editorial',
      label: 'Instrument Serif · editorial'
    }, {
      value: 'swiss',
      label: 'Helvetica · swiss'
    }, {
      value: 'mono',
      label: 'JetBrains Mono · raw'
    }, {
      value: 'newsreader',
      label: 'Newsreader · serif'
    }],
    onChange: v => setTweak('type', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Layout"
  }, /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Hero layout",
    value: t.heroLayout,
    options: [{
      value: 'left',
      label: 'Left-aligned'
    }, {
      value: 'centered',
      label: 'Centered'
    }, {
      value: 'split',
      label: 'Split with portrait'
    }, {
      value: 'editorial',
      label: 'Editorial'
    }],
    onChange: v => setTweak('heroLayout', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Cards",
    value: t.cardStyle,
    options: [{
      value: 'image',
      label: 'Image'
    }, {
      value: 'list',
      label: 'List'
    }, {
      value: 'masonry',
      label: 'Masonry'
    }],
    onChange: v => setTweak('cardStyle', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Density",
    value: t.density,
    options: [{
      value: 'airy',
      label: 'Airy'
    }, {
      value: 'regular',
      label: 'Regular'
    }, {
      value: 'compact',
      label: 'Compact'
    }],
    onChange: v => setTweak('density', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Atmosphere"
  }, /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Background",
    value: t.bgTexture,
    options: [{
      value: 'plain',
      label: 'Plain'
    }, {
      value: 'grid',
      label: 'Grid'
    }, {
      value: 'dots',
      label: 'Dots'
    }, {
      value: 'noise',
      label: 'Noise'
    }],
    onChange: v => setTweak('bgTexture', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Cursor",
    value: t.cursor,
    options: [{
      value: 'native',
      label: 'Native'
    }, {
      value: 'dot',
      label: 'Dot'
    }, {
      value: 'ring',
      label: 'Ring'
    }],
    onChange: v => setTweak('cursor', v)
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));