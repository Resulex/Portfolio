import { motion } from "motion/react";
import { Briefcase, Users, Award, TrendingUp, ChefHat, type LucideIcon } from "lucide-react";

type Role = {
  title: string;
  period: string;
  highlights: string[];
};

type ExperienceEntry = {
  // Single-role companies are rendered flat via title + highlights.
  // Multi-role companies set roles[] and render a nested progression instead.
  title?: string;
  highlights?: string[];
  roles?: Role[];
  company: string;
  period: string;
  location?: string;
  featured: boolean;
  icon: LucideIcon;
  color: string;
};

export function Experience() {
  const experiences: ExperienceEntry[] = [
    {
      title: "Quality Assurance Tester",
      company: "PENTAJAC Technologies Inc.",
      period: "2026 (Part time)",
      location: "Mandaluyong City, NCR",
      featured: true,
      highlights: [
        "Performed manual testing, bug reporting, and defect tracking to ensure platform stability for School Web Services.",
      ],
      icon: Award,
      color: "#64FFDA",
    },
    {
      title: "Credit Controller",
      company: "Rentokil-Initial (Philippines) Inc.",
      period: "Apr 2023 - Dec 2023",
      location: "Finance Department",
      featured: false,
      highlights: [
        "Managed billing and collections across assigned client accounts",
        "Conducted creditworthiness assessments for new and existing clients",
        "Escalated and coordinated resolution of delinquent debts with legal and senior teams",
      ],
      icon: TrendingUp,
      color: "#8892B0",
    },
    {
      company: "Speedworks Courier Services Corporation",
      period: "January 2016 - February 2023",
      featured: false,
      roles: [
        {
          title: "Area Branch Head (Laguna Branch)",
          period: "June 2022 - February 2023",
          highlights: [
            "Took overall charge of branch logistics and operations within the area, ensuring optimal delivery performance of parcels and statements.",
            "Handled daily cash and check remittances, prepared comprehensive payroll reports, and resolved client complaints.",
            "Supervised and provided direct training to regular, freelance, and messenger employees regarding optimized work methods and delivery procedures.",
          ],
        },
        {
          title: "Reports Head / Department Head (Main Office)",
          period: "January 2021 - June 2022",
          highlights: [
            "Supported the Operations Manager by monitoring the reports team, tracking delivered statements, and overseeing outstanding balances.",
            "Handled the generation and distribution of critical performance data and metrics directly to major corporate accounts.",
            "Managed day-to-day administrative tasks, including workload delegation, performance evaluations, employee discipline, and promotional recommendations.",
          ],
        },
        {
          title: "Account Officer (Main Office)",
          period: "January 2018 - December 2020",
          highlights: [
            "Supervised and tracked the operational shipment and movement of parcels throughout the Luzon area.",
            "Managed account relations and provided customer support while ensuring precise parcel billing to client accounts.",
            "Prepared weekly progressive summaries and corporate billing reports for management review.",
          ],
        },
        {
          title: "Billing / Liaison Officer (Main Office)",
          period: "January 2016 - January 2018",
          highlights: [
            "Maintained branch financial records, monitored corporate assets, and handled the formal issuance of invoices and official receipts (OR).",
            "Assisted with human resources workflows, specifically managing timekeeping and employee benefits administration.",
            "Evaluated logistics vendors and facilitated external communications between private agencies and government organizations.",
          ],
        },
      ],
      icon: Users,
      color: "#8892B0",
    },
    {
      title: "Sous Chef",
      company: "International Rice Research Institute (IRRI)",
      period: "February 2012 - December 2014",
      featured: false,
      highlights: [
        "Managed food preparation and maintained rigorous food safety and quality standards.",
        "Performed food costing analysis and menu research to optimize cafeteria operations.",
      ],
      icon: ChefHat,
      color: "#8892B0",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
              Professional Experience
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            The Career Bridge: From Operations Leadership to Software Quality
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-card border rounded-lg p-6 md:p-8 ${
                  exp.featured ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                }`}
              >
                <div className={`flex flex-col md:flex-row gap-4 ${exp.roles ? "mb-8" : "mb-6"}`}>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        exp.featured ? "bg-primary/10" : "bg-muted"
                      }`}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{ color: exp.color }}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>
                      {exp.roles ? exp.company : exp.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground mb-2">
                      <span className="text-primary" style={{ fontWeight: 500 }}>
                        {exp.roles ? "Overall Tenure" : exp.company}
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.period}</span>
                      {!exp.roles && exp.location && (
                        <>
                          <span className="hidden md:inline">•</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {exp.roles ? (
                  <div className="relative pl-6">
                    {/* Rail connecting the career progression */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                    <div className="space-y-8">
                      {exp.roles.map((role) => (
                        <div key={role.title} className="relative">
                          <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary bg-card" />
                          <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-3">
                            <h4 className="text-lg" style={{ fontWeight: 600 }}>
                              {role.title}
                            </h4>
                            <span className="text-sm text-muted-foreground">
                              {role.period}
                            </span>
                          </div>
                          <ul className="space-y-3">
                            {role.highlights.map((highlight, i) => (
                              <li key={i} className="flex gap-3 text-foreground/90">
                                <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : exp.highlights && exp.highlights.length === 1 ? (
                  <p className="text-foreground/90 leading-relaxed">
                    {exp.highlights[0]}
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {(exp.highlights ?? []).map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-foreground/90">
                        <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
