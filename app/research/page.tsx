import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

const forbDefinition =
  String.raw`\operatorname{Forb}(F,n) = \max \left\{ m : \exists \text{ an } n\text{-rowed matrix avoiding } F \right\}`

const minForb =
  String.raw`\operatorname{min\_forb}(F,m,n)`

const doubleThresholdDefinition =
  String.raw`G \in \mathcal{C} \iff G \text{ contains no induced subgraph from } \mathcal{F}`

const concentrationBound =
  String.raw`\sum_{i=1}^{n} X_i \leq C \sqrt{n \log n}`

export default function ResearchPage() {
  return (
    <main className="space-y-20">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">Research</h1>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          My research interests include geometric functional analysis,
          high-dimensional probability, random matrices, and extremal combinatorics.
        </p>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I am particularly interested in probabilistic phenomena in discrete structures,
          concentration inequalities, random graphs, and asymptotic geometric analysis.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium">
          Forbidden Configurations in Hypergraph Incidence Matrices
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400">
          Research conducted at Budapest Semesters in Mathematics under Attila Sali.
        </p>

        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
          <p>
            Let <InlineMath math="F = I_2" /> denote the{' '}
            <InlineMath math={String.raw`2 \times 2`} /> identity matrix.
          </p>

          <p>The classical forbidden configuration problem:</p>

          <BlockMath math={forbDefinition} />

          <p>
            After the Turán regime, we study refined extremal behavior:
          </p>

          <BlockMath math={minForb} />

          <p>
            This counts minimal occurrences of <InlineMath math="I_2" /> under row/column
            permutations, and relates to down-shifted hypergraph structures.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium">
          Double Threshold Graphs
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400">
          Undergraduate research under Vaidyanathan Sivaraman at Mississippi State University.
        </p>

        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
          <p>
            We study a class of graphs defined by two threshold constraints
            governing adjacency.
          </p>

          <BlockMath math={doubleThresholdDefinition} />

          <p>
            where <InlineMath math={String.raw`\mathcal{F}`} /> is the minimal obstruction family.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium">
          Probabilistic and Analytical Bounds
        </h2>

        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
          <p>
            Work on concentration inequalities and random matrix theory yields bounds of the form:
          </p>

          <BlockMath math={concentrationBound} />

          <p>
            These arise from subgaussian comparison techniques and high-dimensional probability.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-medium">
          Talks &amp; Presentations
        </h2>

        <div className="space-y-5 text-zinc-600 dark:text-zinc-400">
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Spring 2026 — Subgaussian Comparison Theorem (Van Handel)
            </p>
          </div>

          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Fall 2025 — Large Deviation Inequality for Matrix Rank (Rudelson)
            </p>

            <a
              className="text-blue-500 underline"
              href="https://www.overleaf.com/read/hwtjyjptxxck#007fae"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notes
            </a>
          </div>

          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Spring 2025 — Talagrand’s Convex Inequality
            </p>

            <a
              className="text-blue-500 underline"
              href="https://www.overleaf.com/read/hwtjyjptxxck#007fae"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notes
            </a>
          </div>

          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Fall 2024 — Furstenberg’s Recurrence &amp; Szemerédi’s Theorem
            </p>

            <a
              className="text-blue-500 underline"
              href="https://www.overleaf.com/read/ffjmhsdxwzrs#f1e657"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slides
            </a>
          </div>

          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Spring 2024 — Triangle-Free Graphs (Shearer)
            </p>

            <a
              className="text-blue-500 underline"
              href="https://www.overleaf.com/project/66199d0d3b0245da3dea1209"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slides
            </a>
          </div>

          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Fall 2023 — Pigeonhole Principle Applications
            </p>
          </div>

          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Summer 2022 — Forbidden Configurations
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium">Seminars</h2>

        <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
          <p>
            <strong className="text-zinc-900 dark:text-zinc-100">2025–2026</strong>{' '}
            — Convex Geometry &amp; Probability Seminar (Texas A&amp;M)
          </p>

          <p>
            <strong className="text-zinc-900 dark:text-zinc-100">2024</strong>{' '}
            — Combinatorics &amp; Probability Seminar (UIC)
          </p>

          <p>
            <strong className="text-zinc-900 dark:text-zinc-100">2023</strong>{' '}
            — Graduate Combinatorics Seminar (UIC)
          </p>
        </div>
      </section>
    </main>
  )
}