import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import Image from "next/image"

export default function PlantedCliquePage() {
  return (
    <main className="max-w-15xl space-y-10 px-4 py-8 text-zinc-200">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">
          Spectral Recovery of a Planted Clique
        </h1>
        <p className="text-zinc-300">
          Below you'll find my implementation of a spectral recovery algorithm designed by
          Alon, Krivelevich, and Sudakov (1998), as well as an empirical evaluation of its
          performance using Monte Carlo methods. In short, the project is a case study of how one can use linear algebraic methods
          to detect "manufactured" or "planted" structure in a random system.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium">The Planted Clique Problem</h2>
        <p className="text-zinc-300">
          Let <InlineMath math="G(n,1/2)" /> denote the Erdős-Rényi graph
          on <InlineMath math="n" /> vertices, where each possible edge is
          included independently with probability <InlineMath math="1/2" />. One can view the graph as selected by the following selection process: 
          Flip <InlineMath math = "\binom{n}{2}"/> coins, that is one coin for each edge in the graph, tracking whether heads is up throughout its time in the air until it hits the ground.
          If one were to keep their eye on the graph while the coins flip and land, it would look something like the following: 
      
        </p>
      <section className="space-y-4">
          <h2 className="text-2xl font-medium"></h2>
          <video
            src="/videos/Graph_Cycling_Animation.mp4"
            autoPlay
            loop
            muted
            controls
            className="w-full rounded-2xl"
          />
        </section>

        

        <p className="text-zinc-300">
          A <em>clique</em> is a set of vertices for which every pair is
          connected by an edge. In a purely random graph, cliques already arise
          by chance. Our task is to answer the following question: if we first
          sample a graph from <InlineMath math="G(n,1/2)" /> and have an adversary plant a clique inside the graph
          - i.e. we choose <InlineMath math="k" /> vertices and connect all pairs among
          them,  can we determine which vertices our adversary chose to form the clique?
        </p>
       <p className="text-zinc-300">
        The difficulty of the problem depends strongly on the size of the planted clique.
        In a typical graph from <InlineMath math="G(n,1/2)" />, the largest naturally
        occurring clique has size on the order of <InlineMath math="2\log_2 n" />.
        Below this scale, planted cliques are hidden among cliques that already occur
        by chance. On the other hand, when the planted clique is sufficiently large,
        simpler methods already begin to detect it. The most interesting regime is the
        intermediate one, where spectral structure becomes visible.
      </p>
      <BlockMath math="k \asymp c\sqrt{n}" />
      <p className="text-zinc-300">
        The algorithm studied here is designed for this regime, where the planted clique
        is large enough to perturb the adjacency matrix in a detectable way, but not so
        large that recovery is completely trivial.
      </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Spectral Idea</h2>
        <p className="text-zinc-300">
          We'll study the adjacency array of our random graph, say <InlineMath math="A" />; in particular, we care about the eigenvalues and eigenvectors of A - these are widely referred to 
          as spectral properties of a matrix. One can show that the  planted clique introduces a
          structured perturbation into the random matrix, and this perturbation
          appears in the second eigenvector: that is to say vertices belonging to the planted
          clique tend to have unusually large coordinates in that eigenvector.
        </p>
        <p className="text-zinc-300">
          The algorithm exploits this information to produce first a
          candidate set of vertices, and then final filtering/replacement 
          step to refine that candidate into the recovered clique with high probability.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Algorithm</h2>
        <p className="text-zinc-300">
          For a graph on <InlineMath math="n" /> vertices and planted clique
          size approximately <InlineMath math="k" />, the procedure is:
        </p>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
          <pre className="whitespace-pre-wrap font-mono text-sm text-zinc-300">
{`Input: adjacency matrix A, target size k

1. Compute a the second eigenvector v of A.
2. Select the k vertices corresponding to the largest entries in absolute value of v.
   Call this set W.
3. For each vertex i, count how many neighbors it has inside W.
4. Form the set
      Q = { i : deg(i, W) >= 3k/4 }.
5. Output Q as the recovered clique.`}
          </pre>
        </div>

        <p className="text-zinc-300">
          One can find the code for this in the github link at the bottom of the page.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Simulation Setup</h2>
        <p className="text-zinc-300">
          To test the method empirically, I generate random instances from the
          planted model and repeated the recovery experiment several hundreds of times. For
          each trial:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-zinc-300">
          <li>
            sample a random graph from <InlineMath math="G(n,1/2)" />,
          </li>
          <li>plant a clique of size <InlineMath math="k" />,</li>
          <li>run the spectral recovery algorithm,</li>
          <li>record whether the planted clique is exactly recovered.</li>
        </ul>
        <p className="text-zinc-300">
          One can see the performance of the algorithm across different sizes of <InlineMath math="k"/> and <InlineMath math ="n"/> below
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Results</h2>
        <p className="text-zinc-300">
          One can see a clear improvement in performance as <InlineMath math="n"/> grows:
        </p>
        <Image
         src="/Images/Success_Rate.png"
         alt="Success rate vs n"
         width={1000}
         height={600}
         className="rounded-2xl"
        />
            
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Reference</h2>
        <p className="text-zinc-300">
          Noga Alon, Michael Krivelevich, and Benny Sudakov,{' '}
          <em>Finding a Large Hidden Clique in a Random Graph</em>, 1998.
        </p>
      </section>

      <section className="space-y-4">
        <a
          href="https://github.com/RandomSpectra/Spectral_Recovery_of_Planted_Clique"
          className="inline-block underline text-zinc-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </section>
    </main>
  )
}