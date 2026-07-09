import { motion } from 'framer-motion'
import { Github, ExternalLink, Rocket } from 'lucide-react'
import aiCodeReviewerImg from '../assets/ai-code-reviewer.png'
import personalPortfolioImg from '../assets/personal-portfolio.png'

const projects = [
    {
        title: "AI Code Reviewer",
        status: "🚧 Currently Building",
        badge: "Current Project",
        desc: "An AI-powered application that reviews source code, identifies issues, explains improvements, and provides intelligent suggestions using modern AI models. This project helps me strengthen my React, Python, FastAPI, API integration, and prompt engineering skills.",
        tech: ["React", "Python", "FastAPI", "OpenAI API", "Swagger", "GitHub"],
        github: "https://github.com",
        demo: null, // Coming Soon
        image: aiCodeReviewerImg,
        stats: ["Current Project", "AI", "React", "FastAPI"]
    },
    {
        title: "Personal Portfolio",
        desc: "A modern developer portfolio built with React, featuring premium UI, glassmorphism, smooth animations, responsive layouts, and clean component architecture.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        github: "https://github.com",
        demo: "#",
        image: personalPortfolioImg,
        stats: ["Portfolio", "UI/UX", "React", "Vite"]
    }
]

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-32">
            <div className="flex flex-col items-center text-center mb-16 px-4">
                <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-6" />
                <p className="max-w-2xl text-foreground/60 leading-relaxed text-sm md:text-base">
                    These projects represent my learning journey and practical experience in frontend development and AI. Each project has helped me strengthen my technical skills by solving real-world problems.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -8, scale: 1.015 }}
                        className="group relative rounded-[20px] p-[1px] transition-all duration-500 h-full flex flex-col"
                    >
                        {/* Glowing/animated gradient border background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[20px] -z-10" />
                        
                        {/* Fallback subtle border when not hovered */}
                        <div className="absolute inset-0 bg-slate-200/30 group-hover:opacity-0 transition-opacity duration-500 rounded-[20px] -z-10" />

                        {/* Soft Glow Shadow behind the card */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-[20px] -z-20" />

                        {/* Glassmorphic Card Container */}
                        <div className="relative glass rounded-[19px] overflow-hidden flex flex-col h-full bg-white/70 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_24px_50px_rgba(37,99,235,0.06)]">
                            
                            {/* Project Preview Image Area */}
                            <div className="relative h-56 overflow-hidden rounded-t-[19px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                                
                                {/* Floating Badge / Ribbon */}
                                {project.badge && (
                                    <span className="absolute top-4 right-4 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/20 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                        {project.badge}
                                    </span>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Status badge if applicable */}
                                {project.status && (
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2.5 py-1 text-xs font-semibold bg-amber-500/10 text-amber-600 rounded-full border border-amber-500/20 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                            {project.status}
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                {/* Tech Stack Chips */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span 
                                            key={t} 
                                            className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-blue-50/50 text-blue-700 rounded-full border border-blue-500/10 transition-colors duration-300 group-hover:bg-blue-50"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Statistics Badges */}
                                <div className="flex flex-wrap gap-1.5 mt-auto mb-6 pt-4 border-t border-slate-100/80">
                                    {project.stats.map(stat => (
                                        <span 
                                            key={stat} 
                                            className="px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest bg-slate-100/50 text-slate-500 rounded-full border border-slate-200/40 transition-colors group-hover:bg-slate-100 group-hover:text-slate-600"
                                        >
                                            {stat}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3">
                                    {/* GitHub View Code (Primary style) */}
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -2, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20"
                                    >
                                        <Github size={16} />
                                        View Code (GitHub)
                                    </motion.a>

                                    {/* Live Demo (Secondary style) */}
                                    {project.demo ? (
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -2, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-4 py-2.5 bg-white border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 text-slate-700 rounded-full text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                                        >
                                            Live Demo
                                            <ExternalLink size={14} />
                                        </motion.a>
                                    ) : (
                                        <button
                                            disabled
                                            className="px-4 py-2.5 bg-slate-100/80 text-slate-400 border border-slate-200/60 rounded-full text-xs md:text-sm font-semibold flex items-center justify-center gap-2 cursor-not-allowed opacity-75"
                                        >
                                            Coming Soon
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Teaser section: More Projects Coming Soon */}
            <div className="mt-20 flex justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, scale: 1.01, borderColor: 'rgba(37, 99, 235, 0.15)', boxShadow: '0 20px 40px -20px rgba(17, 24, 39, 0.04)' }}
                    className="glass max-w-2xl p-8 md:p-10 rounded-[20px] text-center relative overflow-hidden border border-white/40 shadow-sm bg-white/70"
                >
                    {/* Animated Background Glow elements */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex justify-center mb-5">
                            <motion.div
                                animate={{
                                    y: [0, -6, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-500/10 shadow-sm"
                            >
                                <Rocket className="w-6 h-6 animate-pulse" />
                            </motion.div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-800">
                            More Projects Coming Soon 🚀
                        </h3>
                        <p className="text-slate-500 leading-relaxed text-xs md:text-sm max-w-lg mx-auto">
                            I continuously build new projects to strengthen my frontend and AI development skills. This portfolio will grow as I create more practical applications.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
