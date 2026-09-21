import { motion } from "motion/react";
import { Code2, ExternalLink, Github, Globe } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "MotorPH Payroll System",
      description: "Comprehensive payroll management system with automated calculations, employee records management, and detailed reporting capabilities.",
      tech: ["Java", "OOP/AOOP", "MySQL", "JavaFX"],
      highlights: [
        "Complex business logic for payroll calculations",
        "Automated salary computation and deductions",
        "Employee data management system",
        "Comprehensive reporting features",
      ],
      icon: Code2,
      color: "#64FFDA",
      featured: true,
      github: "https://github.com/Resulex?tab=repositories",
    },
    {
      title: "KaBarangayConnect (In-Progress Capstone)",
      description: "An Integrated Web-Based Management and Real-Time Incident Reporting System connecting residents, local officials, and services. Features a monorepo architecture with independent frontend and serverless API backends.",
      tech: ["Next.js 15", "React 19", "Material UI", "Node.js 20", "AWS Lambda", "MongoDB Atlas"],
      highlights: [
        "Role-based access (Super Admin, Operations Clerk, Info Officer) with TOTP MFA",
        "Serverless API with Function-per-Use-Case architecture",
        "Automated CI/CD pipelines via GitHub Actions (AWS Amplify & Database migrations)",
      ],
      icon: Globe,
      color: "#64FFDA",
      featured: true,
      github: "https://github.com/Resulex?tab=repositories",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
              Project Showcase
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Featured work demonstrating full-stack capabilities and QA mindset
          </p>
        </motion.div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isFeatured = project.featured;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-card border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col ${
                  isFeatured ? "md:col-span-1 border-primary/30" : "border-border"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="w-9 h-9 rounded-lg border border-border hover:border-primary/50 flex items-center justify-center transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="w-9 h-9 rounded-lg border border-border hover:border-primary/50 flex items-center justify-center transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* GitHub CTA fills the slot left by the removed project card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <a
              href="https://github.com/Resulex?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full flex flex-col items-center justify-center text-center rounded-lg p-6 border-2 border-dashed border-primary/30 bg-primary/5 hover:border-primary/60 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                Sample Previous School Projects
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Additional coursework and practice builds beyond the featured projects above.
              </p>
              <span
                className="inline-flex items-center gap-2 text-primary text-sm"
                style={{ fontWeight: 500 }}
              >
                Browse repositories
                <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            All projects emphasize <span className="text-primary">code quality</span>, 
            <span className="text-primary"> comprehensive testing</span>, and 
            <span className="text-primary"> production-ready standards</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
