import { motion } from "motion/react";
import { Code2, Bug, Layers, Database, Cloud, GitBranch } from "lucide-react";

export function TechStack() {
  const categories = [
    {
      title: "Testing & QA",
      icon: Bug,
      color: "#64FFDA",
      skills: [
        "Manual Testing",
        "Automated Testing",
        "Bug Tracking",
        "QA Documentation",
        "Test Planning",
      ],
    },
    {
      title: "Languages",
      icon: Code2,
      color: "#64FFDA",
      skills: [
        "Java (OOP/AOOP)",
        "Kotlin",
        "JavaScript",
        "Python",
        "SQL",
        "HTML/CSS",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "#64FFDA",
      skills: [
        "Spring Boot",
        "React",
        "Node.js",
        "Android SDK",
        "Express.js",
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "#64FFDA",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Firebase",
        "Database Design",
      ],
    },
    {
      title: "Infrastructure & Tools",
      icon: Cloud,
      color: "#64FFDA",
      skills: [
        "AWS",
        "Git/GitHub",
        "Google Workspace",
        "Docker",
      ],
    },
    {
      title: "Development Practices",
      icon: GitBranch,
      color: "#64FFDA",
      skills: [
        "Agile/Scrum",
        "CI/CD",
        "Version Control",
        "Code Review",
        "API Development",
        "REST APIs",
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 700 }}>
            Tech Stack & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A foundational toolkit spanning testing, development, and infrastructure, reflecting working academic and introductory knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl" style={{ fontWeight: 600 }}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted text-foreground rounded-md text-sm border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The QA Edge Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Bug className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                The QA Edge
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike most developers, my formal QA testing experience means I write cleaner, 
                more reliable code with a deep understanding of edge cases, test coverage, and 
                production-ready quality standards. Every line of code is written with testing in mind.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
