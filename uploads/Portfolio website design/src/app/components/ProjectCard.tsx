import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl mb-6 bg-neutral-900 aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-neutral-100 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-neutral-400 mb-4 max-w-md line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-neutral-300 bg-neutral-900 rounded-full border border-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="p-3 bg-neutral-900 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-white">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </motion.div>
  );
}
