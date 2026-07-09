import { motion } from 'framer-motion'
import { Github, ExternalLink, Rocket } from 'lucide-react'
import aiCodeReviewerImg from '../assets/ai-code-reviewer.png'
import personalPortfolioImg from '../assets/personal-portfolio.png'

const projects = [
    {
        title: "AI Code Reviewer",
        badge: "Work In Progress",
        desc: "An AI-powered code review platform that analyzes source code and provides intelligent suggestions for improving code quality and maintainability.",
        tech: ["React", "FastAPI", "Python", "JavaScript", "Git"],
        github: "https://github.com/amey110",
        demo: null,
        image: aiCodeReviewerImg,
    },
    {
        title: "Personal Portfolio",
        desc: "A modern responsive portfolio showcasing my projects, technical skills and developer journey.",
        tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        github: "https://github.com/amey110/Amey-Portfolio",
        demo: "#",
        image: personalPortfolioImg,
    }
]

const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
}

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-32 py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="section-header">
                    <motion.p
                        {...fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-semibold text-sm tracking-wide uppercase mb-3"
                    >
                        Projects
                    </motion.p>
                    <motion.h2
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-3xl md:text-section font-bold tracking-tight text-foreground mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="h-1 w-16 bg-primary rounded-full mb-6"
                    />
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="max-w-2xl text-foreground-secondary text-base leading-relaxed"
                    >
                        Real-world projects that showcase my frontend development skills and continuous learning journey.
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-white rounded-3xl border border-border-subtle overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:border-slate-300 hover:-translate-y-1"
                        >
                            {/* Project Image */}
                            <div className="relative h-52 md:h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-60" />
                                
                                {/* Badge */}
                                {project.badge && (
                                    <span className="absolute top-4 right-4 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 rounded-lg border border-amber-200 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                        {project.badge}
                                    </span>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col">
                                <h3 className="text-xl font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <p className="text-foreground-secondary text-sm leading-relaxed mb-5">
                                    {project.desc}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {project.tech.map(t => (
                                        <span 
                                            key={t} 
                                            className="px-2.5 py-1 text-xs font-semibold bg-slate-50 text-foreground-secondary rounded-md border border-border-subtle"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3 mt-auto">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 px-4 py-2.5 bg-foreground hover:bg-slate-800 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-button"
                                    >
                                        <Github size={15} />
                                        GitHub
                                    </motion.a>

                                    {project.demo ? (
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex-1 px-4 py-2.5 bg-white border border-border-subtle hover:bg-slate-50 hover:border-slate-300 text-foreground rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                                        >
                                            Live Demo
                                            <ExternalLink size={14} />
                                        </motion.a>
                                    ) : (
                                        <span className="flex-1 px-4 py-2.5 bg-slate-50 text-foreground-secondary border border-border-subtle rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-not-allowed opacity-60">
                                            Coming Soon
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* More Projects Coming Soon */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="max-w-xl mx-auto mt-14 premium-card text-center !p-8"
                >
                    <div className="flex justify-center mb-4">
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="p-3 rounded-xl bg-blue-50 text-primary border border-blue-100"
                        >
                            <Rocket size={22} />
                        </motion.div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">
                        More Projects Coming Soon
                    </h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed max-w-md mx-auto">
                        I continuously build new projects to strengthen my frontend and AI development skills. Stay tuned for more.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
