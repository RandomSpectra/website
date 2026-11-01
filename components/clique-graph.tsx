'use client'

const nodes = [
  [54, 52], [112, 39], [170, 75], [226, 42], [292, 72], [354, 44],
  [80, 133], [146, 138], [211, 119], [282, 145], [359, 127],
  [43, 211], [113, 224], [182, 203], [248, 224], [322, 211], [383, 201],
  [77, 290], [149, 277], [221, 300], [297, 282], [360, 294],
]
const clique = [7, 8, 9, 13, 14]
const edges: [number, number][] = []
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    if ((i * 13 + j * 19 + i * j * 7) % 17 < 4) edges.push([i, j])
  }
}
for (let i = 0; i < clique.length; i++) {
  for (let j = i + 1; j < clique.length; j++) edges.push([clique[i], clique[j]])
}

export function CliqueGraph() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#0c1524]" aria-label="Animated random graph with a highlighted planted clique" role="img">
      <svg viewBox="0 0 420 335" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="graph-glow"><stop offset="0%" stopColor="#234e66" stopOpacity=".75" /><stop offset="100%" stopColor="#0c1524" stopOpacity="0" /></radialGradient>
          <filter id="node-glow"><feGaussianBlur stdDeviation="4" /></filter>
        </defs>
        <rect width="420" height="335" fill="#0c1524" />
        <circle cx="210" cy="160" r="180" fill="url(#graph-glow)" />
        {edges.map(([a,b],i) => {
          const active = clique.includes(a) && clique.includes(b)
          return <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={active ? '#73d9cf' : '#62819b'} strokeWidth={active ? 1.65 : .75} opacity={active ? .8 : .24}>
            {active && <animate attributeName="opacity" values=".18;.95;.18" dur="4s" begin={`${(i%8)*.2}s`} repeatCount="indefinite" />}
          </line>
        })}
        {nodes.map(([x,y],i) => {
          const active=clique.includes(i)
          return <g key={i}>
            {active && <circle cx={x} cy={y} r="11" fill="#62dfd2" opacity=".3" filter="url(#node-glow)" />}
            <circle cx={x} cy={y} r={active ? 4.5 : 2.8} fill={active ? '#a0fff0' : '#9cb6ca'} opacity={active ? 1 : .8}>
              <animate attributeName="r" values={active ? "4;5.8;4" : "2.6;3.1;2.6"} dur={active ? "3s" : "6s"} begin={`${i*.13}s`} repeatCount="indefinite" />
            </circle>
          </g>
        })}
      </svg>
      <div className="pointer-events-none absolute bottom-3 left-4 text-[11px] tracking-[.16em] text-teal-100/70">PLANTED CLIQUE · SPECTRAL RECOVERY</div>
    </div>
  )
}
