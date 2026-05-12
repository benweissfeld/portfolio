import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-12">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center items-start mb-24 lg:mb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] text-white"
        >
          Building digital <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
            products that work.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 leading-relaxed"
        >
          Hi, I'm John Doe. A product engineer bridging the gap between design and engineering to build scalable, beautiful applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            to="/works"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
          >
            View Projects <ArrowRight size={20} />
          </Link>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800 border border-neutral-800 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* Selected Works */}
      <section className="mb-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3 text-white">
              Selected Works <Sparkles className="text-neutral-500" size={32} />
            </h2>
            <p className="text-neutral-400 max-w-lg">
              A curated collection of my recent projects, demonstrating my expertise in frontend development and product design.
            </p>
          </div>
          <Link
            to="/works"
            className="hidden md:inline-flex items-center gap-2 text-neutral-300 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white pb-1"
          >
            See all projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link
            to="/works"
            className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-colors"
          >
            See all projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Approach / Services */}
      <section className="mb-32 p-8 md:p-16 bg-neutral-900/50 rounded-3xl border border-neutral-800">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Design, build, ship.
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              I specialize in taking complex problems and turning them into simple, elegant digital solutions. From the initial concept to the final deployment, I ensure every detail is polished.
            </p>
            <ul className="space-y-4">
              {[
                "End-to-end Product Development",
                "UI/UX Design & Prototyping",
                "Scalable Frontend Architecture",
                "Performance Optimization",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-300 font-medium">
                  <CheckCircle2 className="text-emerald-500" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 to-neutral-800 mix-blend-multiply" />
               <img 
                 src="https://images.unsplash.com/photo-1691239261796-b3f4c678bf7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzc4NDY3ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                 alt="Professional Portrait"
                 className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-700"
               />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center p-4 shadow-2xl">
              <div className="w-full h-full border border-neutral-700 rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
              <div className="absolute font-bold text-white text-sm">Code.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
