import { motion } from "motion/react";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// Imported (rather than referenced as a "/src/..." string) so Vite emits this file
// into dist/ with a hashed, base-path-aware URL.
import profilePhoto from "@/imports/ALEXRESURRECCION_Pic-removebg-preview.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(#64FFDA 1px, transparent 1px), linear-gradient(90deg, #64FFDA 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Professional Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 bg-card">
              <ImageWithFallback
                src={profilePhoto}
                alt="Alex Resurreccion - Professional Photo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Active status indicator */}
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-primary">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-primary">Available for Opportunities</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
          style={{ fontWeight: 700 }}
        >
          Alex Resurreccion
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl text-primary mb-4"
          style={{ fontWeight: 600 }}
        >
          Operations Leadership & Software Technology
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Bridging <span className="text-primary">6+ years of operational leadership</span> and financial administration with professional QA testing and software development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            View Technical Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border border-primary/30 text-foreground rounded-lg hover:bg-primary/5 transition-all flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </button>

          <a
            href="https://drive.google.com/file/d/1z2EXybGf-JAQ5_77sjSLpwkqy1AIl-kU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-primary/30 text-foreground rounded-lg hover:bg-primary/5 transition-all flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}