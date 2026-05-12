import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 flex flex-col items-start gap-12 lg:flex-row lg:items-end"
      >
        <div className="w-full lg:w-2/3">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
            Hello.
          </h1>
          <div className="text-xl md:text-2xl text-neutral-400 space-y-6 leading-relaxed font-light">
            <p>
              I'm <span className="text-white font-medium">John Doe</span>, a product engineer and designer based in San Francisco. I build digital products that combine beautiful design with robust engineering.
            </p>
            <p>
              With over 5 years of experience in the tech industry, I've had the privilege of building products for startups and enterprises alike. My focus is on creating scalable, accessible, and performant web applications that users love.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex lg:justify-end">
          <img 
            src="https://images.unsplash.com/photo-1691239261796-b3f4c678bf7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzc4NDY3ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="John Doe"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl grayscale"
          />
        </div>
      </motion.div>

      <div className="border-t border-neutral-900 pt-16 mb-24 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-white">Experience</h2>
          <div className="space-y-12">
            {[
              { role: "Senior Frontend Engineer", company: "TechNova", year: "2023 - Present", desc: "Leading the core frontend team, building scalable design systems and enterprise dashboards." },
              { role: "Product Developer", company: "Nexus Labs", year: "2020 - 2023", desc: "Developed responsive web applications for multiple high-profile client projects." },
              { role: "UI/UX Designer", company: "Creative Studio", year: "2018 - 2020", desc: "Designed intuitive user interfaces and user flows for SaaS platforms." },
            ].map((item, i) => (
              <div key={i} className="group border-l-2 border-neutral-900 pl-6 hover:border-emerald-500 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">{item.role}</h3>
                <div className="flex justify-between items-center mb-4 text-sm text-neutral-500">
                  <span>{item.company}</span>
                  <span className="font-mono">{item.year}</span>
                </div>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-white">Skills</h2>
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-medium text-neutral-500 mb-3 uppercase tracking-wider">Engineering</h4>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "GraphQL", "Framer Motion"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-500 mb-3 uppercase tracking-wider">Design</h4>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Wireframing", "Prototyping", "Figma", "Design Systems"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-white">Let's work together</h3>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
              >
                <Mail size={18} /> Email Me
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-colors border border-neutral-700"
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
