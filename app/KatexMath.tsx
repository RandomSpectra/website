export default function ResearchPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-20 text-zinc-200">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">Research</h1>

        <p className="text-zinc-400 leading-relaxed">
          My research interests include geometric functional analysis,
          high-dimensional probability, random matrices, and extremal combinatorics.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          I am particularly interested in probabilistic phenomena in discrete structures,
          concentration inequalities, random graphs, and asymptotic geometric analysis.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium">
          Forbidden Configurations in Hypergraph Incidence Matrices
        </h2>

        <p className="text-zinc-400">
          Research conducted at Budapest Semesters in Mathematics under Attila Sali.
        </p>

        <div className="space-y-4 text-zinc-300">
          <p>
            Let F be the two by two identity matrix.
          </p>

          <p>
            The classical forbidden configuration problem asks for the maximum number
            of columns in an n-rowed matrix avoiding a fixed configuration F.
          </p>

          <p>
            After the Turan regime, we study refined extremal behavior involving
            minimal occurrences under row and column permutations.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium">Double Threshold Graphs</h2>

        <p className="text-zinc-400">
          Undergraduate research under Sivaram Vaidyanathan at Mississippi State University.
        </p>

        <div className="space-y-4 text-zinc-300">
          <p>
            We study a class of graphs defined by two threshold constraints governing adjacency.
          </p>

          <p>
            The goal is to understand the minimal obstruction family for this graph class.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium">Probabilistic and Analytical Bounds</h2>

        <div className="space-y-4 text-zinc-300">
          <p>
            Work on concentration inequalities and random matrix theory yields bounds
            from subgaussian comparison techniques and high-dimensional probability.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-medium">Talks and Presentations</h2>

        <div className="space-y-5 text-zinc-300">
          <div>
            <p className="font-medium">
              Spring 2026 — Subgaussian Comparison Theorem, Van Handel
            </p>
          </div>

          <div>
            <p className="font-medium">
              Fall 2025 — Large Deviation Inequality for Matrix Rank, Rudelson
            </p>
            <a
              className="text-blue-400 underline"
              href="https://www.overleaf.com/read/hwtjyjptxxck#007fae"
            >
              Notes
            </a>
          </div>

          <div>
            <p className="font-medium">Spring 2025 — Talagrand Convex Inequality</p>
            <a
              className="text-blue-400 underline"
              href="https://www.overleaf.com/read/hwtjyjptxxck#007fae"
            >
              Notes
            </a>
          </div>

          <div>
            <p className="font-medium">
              Fall 2024 — Furstenberg Recurrence and Szemeredi Theorem
            </p>
            <a
              className="text-blue-400 underline"
              href="https://www.overleaf.com/read/ffjmhsdxwzrs#f1e657"
            >
              Slides
            </a>
          </div>

          <div>
            <p className="font-medium">Spring 2024 — Triangle-Free Graphs, Shearer</p>
            <a
              className="text-blue-400 underline"
              href="https://www.overleaf.com/project/66199d0d3b0245da3dea1209"
            >
              Slides
            </a>
          </div>

          <div>
            <p className="font-medium">Fall 2023 — Pigeonhole Principle Applications</p>
          </div>

          <div>
            <p className="font-medium">Summer 2022 — Forbidden Configurations</p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium">Seminars</h2>

        <div className="space-y-3 text-zinc-300">
          <p>
            <strong>2025-2026</strong> — Convex Geometry and Probability Seminar, Texas A and M
          </p>

          <p>
            <strong>2024</strong> — Combinatorics and Probability Seminar, UIC
          </p>

          <p>
            <strong>2023</strong> — Graduate Combinatorics Seminar, UIC
          </p>
        </div>
      </section>
    </main>
  )
}