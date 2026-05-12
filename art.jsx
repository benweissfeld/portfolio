// ProjectArt — generative SVG placeholders for each project, derived from
// a `shape` token and a `palette` of 3 colors. No photos required.

function ProjectArt({ project, ratio = '4/3', small = false }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: project.imagePosition || 'center' }}
      />
    );
  }

  const [a, b, c] = project.palette;
  const W = 800, H = ratio === '16/9' ? 450 : ratio === '1/1' ? 800 : 600;
  const common = {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: 'xMidYMid slice',
    style: { width: '100%', height: '100%', display: 'block', background: a },
  };

  const id = `pa-${project.id}`;

  switch (project.shape) {
    case 'topo':
      return (
        <svg {...common}>
          <defs>
            <radialGradient id={`${id}-g`} cx="30%" cy="60%" r="80%">
              <stop offset="0%"  stopColor={b} stopOpacity="0.95" />
              <stop offset="100%" stopColor={a} stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width={W} height={H} fill={`url(#${id}-g)`} />
          {Array.from({ length: 14 }).map((_, i) => {
            const r = 60 + i * 38;
            return (
              <ellipse key={i} cx={W * 0.32} cy={H * 0.58} rx={r * 1.7} ry={r}
                fill="none" stroke={c} strokeOpacity={0.18 + i * 0.015} strokeWidth={1} />
            );
          })}
          <g fill={c} fontFamily="ui-monospace, monospace" fontSize="11" opacity="0.5">
            <text x="32" y={H - 32}>52.3676° N · 4.9041° E</text>
            <text x={W - 220} y="40">→ 41229 · ROT–HAM</text>
          </g>
        </svg>
      );

    case 'wave':
      return (
        <svg {...common}>
          <rect width={W} height={H} fill={a} />
          {Array.from({ length: 22 }).map((_, i) => {
            const y = H * 0.5 + Math.sin(i * 0.6) * 6;
            const amp = 80 - Math.abs(i - 11) * 4;
            return (
              <path key={i}
                d={`M0 ${y + i * 4} Q ${W * 0.25} ${y + i * 4 - amp} ${W * 0.5} ${y + i * 4} T ${W} ${y + i * 4}`}
                fill="none" stroke={c} strokeOpacity={0.35 + Math.abs(i - 11) * 0.04} strokeWidth={1.2} />
            );
          })}
          <circle cx={W * 0.78} cy={H * 0.32} r={60} fill="none" stroke={c} strokeWidth="1" opacity="0.6" />
          <circle cx={W * 0.78} cy={H * 0.32} r={3} fill={c} />
          <g fill={c} fontFamily="ui-monospace, monospace" fontSize="11" opacity="0.55">
            <text x="32" y="42">aural / now playing</text>
            <text x="32" y={H - 32}>—  WHO IS LISTENING  —</text>
          </g>
        </svg>
      );

    case 'grid':
      return (
        <svg {...common}>
          <rect width={W} height={H} fill={a} />
          {Array.from({ length: 41 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2={H} stroke={c} strokeOpacity="0.06" />
          ))}
          {Array.from({ length: 31 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 20} x2={W} y2={i * 20} stroke={c} strokeOpacity="0.06" />
          ))}
          {/* Order book bars */}
          <g transform={`translate(${W * 0.15}, ${H * 0.18})`}>
            {Array.from({ length: 14 }).map((_, i) => (
              <rect key={i} x="0" y={i * 22} width={120 + Math.sin(i) * 50 + i * 8} height="14"
                fill={b} opacity={0.85 - i * 0.04} />
            ))}
            {Array.from({ length: 14 }).map((_, i) => (
              <rect key={i + 'r'} x="320" y={i * 22} width={100 + Math.cos(i * 1.3) * 60 + i * 6} height="14"
                fill={c} opacity={0.65 - i * 0.035} />
            ))}
            <line x1="300" y1="-10" x2="300" y2={14 * 22 + 6} stroke={c} strokeWidth="0.5" opacity="0.6" />
          </g>
          <g fontFamily="ui-monospace, monospace" fontSize="11">
            <text x="32" y="42" fill={c} opacity="0.7">ETH-USDC · ORDER BOOK</text>
            <text x={W - 130} y="42" fill={c} opacity="0.55">1834.21</text>
          </g>
        </svg>
      );

    case 'arch':
      return (
        <svg {...common}>
          <rect width={W} height={H} fill={a} />
          {[0.18, 0.42, 0.66, 0.88].map((cx, i) => (
            <g key={i}>
              <path d={`M ${W * cx - 80} ${H * 0.78} L ${W * cx - 80} ${H * 0.42} A 80 80 0 0 1 ${W * cx + 80} ${H * 0.42} L ${W * cx + 80} ${H * 0.78} Z`}
                fill={i % 2 ? b : c} opacity={0.85 - i * 0.08} />
            </g>
          ))}
          <line x1="0" y1={H * 0.78} x2={W} y2={H * 0.78} stroke={c} strokeWidth="1" opacity="0.5" />
          <g fontFamily="ui-monospace, monospace" fontSize="11" fill={c} opacity="0.55">
            <text x="32" y="42">LUNA — AW · 25</text>
            <text x={W - 200} y={H - 24}>EIGHT  PIECES  ·  ONE  DROP</text>
          </g>
        </svg>
      );

    case 'lines':
      return (
        <svg {...common}>
          <rect width={W} height={H} fill={a} />
          {Array.from({ length: 80 }).map((_, i) => {
            const x = 30 + i * (W - 60) / 80;
            const len = 80 + Math.sin(i * 0.4) * 60 + (i % 9) * 16;
            return (
              <line key={i} x1={x} y1={H * 0.5 - len / 2} x2={x} y2={H * 0.5 + len / 2}
                stroke={c} strokeWidth="1.2" opacity={0.35 + (i % 7) * 0.05} />
            );
          })}
          <g transform={`translate(${W * 0.62}, ${H * 0.22})`} fill={b}>
            <rect width="200" height="120" rx="2" />
            <rect x="14" y="16" width="120" height="6" fill={a} opacity="0.4" />
            <rect x="14" y="32" width="160" height="3" fill={a} opacity="0.25" />
            <rect x="14" y="40" width="150" height="3" fill={a} opacity="0.25" />
            <rect x="14" y="48" width="140" height="3" fill={a} opacity="0.25" />
          </g>
          <g fontFamily="ui-monospace, monospace" fontSize="11" fill={c} opacity="0.55">
            <text x="32" y="42">MERIDIAN / OBJECT GRAPH</text>
            <text x="32" y={H - 32}>1.2M DOCS · 41K ENTITIES</text>
          </g>
        </svg>
      );

    case 'room':
    default:
      return (
        <svg {...common}>
          <rect width={W} height={H} fill={a} />
          {/* simple room: floor + walls + chair */}
          <polygon points={`0,${H * 0.62} ${W},${H * 0.62} ${W},${H} 0,${H}`} fill={c} opacity="0.18" />
          <polygon points={`0,0 ${W * 0.5},${H * 0.18} ${W},0`} fill={c} opacity="0.06" />
          <rect x={W * 0.18} y={H * 0.3} width={W * 0.28} height={H * 0.32} fill="none" stroke={c} strokeWidth="1" opacity="0.35" />
          <circle cx={W * 0.74} cy={H * 0.34} r={48} fill={b} />
          <line x1={W * 0.74} y1={H * 0.34 + 48} x2={W * 0.74} y2={H * 0.62} stroke={c} strokeWidth="1" opacity="0.45" />
          {/* chair */}
          <g transform={`translate(${W * 0.5}, ${H * 0.5})`}>
            <rect x="0"  y="0"   width="60" height="46" fill={c} opacity="0.55" />
            <rect x="0"  y="0"   width="60" height="8"  fill={c} opacity="0.85" />
            <rect x="4"  y="46"  width="4"  height="40" fill={c} opacity="0.7" />
            <rect x="52" y="46"  width="4"  height="40" fill={c} opacity="0.7" />
          </g>
          <g fontFamily="ui-monospace, monospace" fontSize="11" fill={c} opacity="0.55">
            <text x="32" y="42">ROOMS · 0234 — LAUNDERETTE</text>
            <text x={W - 140} y={H - 24}>02:14 LOCAL</text>
          </g>
        </svg>
      );
  }
}

window.ProjectArt = ProjectArt;
