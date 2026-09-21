import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
              Education & Certifications
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg shadow-primary/10"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-primary mb-1" style={{ fontWeight: 500 }}>
                  Major in Software Development
                </p>
                <p className="text-muted-foreground">
                  Mapúa Malayan Colleges Laguna (MMCL) under Mapúa Malayan Digital College (MMDC)
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  2023 - Present
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-border">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Remote-First Collaboration</p>
                  <p className="text-sm text-muted-foreground">
                    Experienced in digital-first learning and remote team environments
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Comprehensive Curriculum</p>
                  <p className="text-sm text-muted-foreground">
                    Focus on modern software development, testing, and architecture
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vocational Certificate */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>
                  Vocational Course in Computer Science
                </h3>
                <p className="text-primary mb-1" style={{ fontWeight: 500 }}>
                  STI College – Sta. Cruz, Laguna
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Certificate
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-3xl mb-2 text-primary" style={{ fontWeight: 700 }}>
              6+
            </div>
            <p className="text-muted-foreground">Years Leadership Experience</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-3xl mb-2 text-primary" style={{ fontWeight: 700 }}>
              100%
            </div>
            <p className="text-muted-foreground">Committed to Excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
