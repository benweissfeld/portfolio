import { motion } from "motion/react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function Works() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
          All Works.
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
          A comprehensive showcase of products I've built, ranging from web applications to mobile experiences and enterprise dashboards.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
