import { Github, ExternalLink, Code2 } from 'lucide-react'
import aiCodeReviewerImg from '../assets/ai-code-reviewer.png'
import personalPortfolioImg from '../assets/personal-portfolio.png'

const projects = [
    {
        title: "AI Code Reviewer",
        desc: "An AI-powered fullstack code review platform that analyzes source code, detecting bugs and security issues with automated feedback.",
        badge: "Fullstack",
        architecture: "React Client → FastAPI REST API → Analysis Engine",
        frontendTech: ["React", "JavaScript"],
        backendTech: ["FastAPI", "Python"],
        databaseTech: [],
        github: "https://github.com/amey110/CodePilot-AI",
        demo: "https://code-pilot-ai-beta.vercel.app/",
        image: aiCodeReviewerImg,
        hidden: false,
    },
    {
        title: "Personal Portfolio",
        desc: "A clean editorial developer portfolio showcasing fullstack applications, technical skill matrix, and interactive fullstack architecture flows.",
        badge: "Frontend",
        architecture: "React Client → Tailwind CSS → Vercel Edge",
        frontendTech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        backendTech: [],
        databaseTech: [],
        github: "https://github.com/amey110/Amey-Portfolio",
        demo: "https://amey-portfolio-murex.vercel.app/",
        image: personalPortfolioImg,
        hidden: false,
    },
    // Future Project Slot (set hidden: false when ready)
    {
        title: "Fullstack Project Slot",
        desc: "Next fullstack application in development.",
        badge: "Fullstack",
        architecture: "React → Node.js / FastAPI → MongoDB / MySQL",
        frontendTech: ["React"],
        backendTech: ["Node.js"],
        databaseTech: ["MongoDB"],
        github: "https://github.com/amey110",
        demo: "",
        image: "",
        hidden: true,
    }
]

const Projects = () => {
    const visibleProjects = projects.filter(p => !p.hidden)

    return (
        <section id="projects" className="scroll-mt-24 py-20 md:py-28 bg-bg-alt border-y border-border transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="section-header">
                    <p className="text-accent font-mono text-xs uppercase tracking-wider mb-2">
                        03 / Projects
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text font-display mb-3">
                        Featured Projects
                    </h2>
                    <p className="text-text-muted text-sm md:text-base max-w-2xl leading-relaxed">
                        Fullstack web applications and software built from the ground up, highlighting end-to-end architecture and clean execution.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
                    {visibleProjects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:border-accent transition-colors duration-150"
                        >
                            {/* Project Preview */}
                            <div className="relative h-48 md:h-52 bg-bg-alt border-b border-border overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top"
                                />
                                {project.badge && (
                                    <span className="absolute top-3 right-3 px-2 py-0.5 text-[11px] font-mono font-semibold rounded bg-card/95 border border-border text-accent">
                                        {project.badge}
                                    </span>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold mb-2 text-text font-display">
                                    {project.title}
                                </h3>
                                
                                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4">
                                    {project.desc}
                                </p>

                                {/* Architecture Flow */}
                                {project.architecture && (
                                    <div className="mb-4 p-2.5 rounded-md bg-bg-alt border border-border font-mono text-[11px] text-text-muted">
                                        <span className="text-accent font-semibold mr-1.5">&lambda;</span>
                                        {project.architecture}
                                    </div>
                                )}

                                {/* Categorized Tech Tags */}
                                <div className="space-y-1.5 mb-6 text-xs">
                                    {project.frontendTech.length > 0 && (
                                        <div className="flex flex-wrap items-center gap-1.5">
                                            <span className="text-[10px] font-mono uppercase text-text-muted w-14">Client:</span>
                                            {project.frontendTech.map(t => (
                                                <span key={t} className="px-2 py-0.5 rounded bg-bg-alt border border-border text-text font-mono text-[11px]">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {project.backendTech.length > 0 && (
                                        <div className="flex flex-wrap items-center gap-1.5">
                                            <span className="text-[10px] font-mono uppercase text-text-muted w-14">Server:</span>
                                            {project.backendTech.map(t => (
                                                <span key={t} className="px-2 py-0.5 rounded bg-bg-alt border border-border text-text font-mono text-[11px]">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {project.databaseTech.length > 0 && (
                                        <div className="flex flex-wrap items-center gap-1.5">
                                            <span className="text-[10px] font-mono uppercase text-text-muted w-14">Data:</span>
                                            {project.databaseTech.map(t => (
                                                <span key={t} className="px-2 py-0.5 rounded bg-bg-alt border border-border text-text font-mono text-[11px]">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Action Links */}
                                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-3 py-2 bg-card border border-border hover:border-accent text-text rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                                    >
                                        <Github size={14} />
                                        Source Code
                                    </a>

                                    {project.demo && project.demo !== '#' ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-3 py-2 bg-accent hover:bg-accent-hover text-white rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                                        >
                                            Live Demo
                                            <ExternalLink size={13} />
                                        </a>
                                    ) : (
                                        <span className="flex-1 px-3 py-2 bg-bg-alt border border-border text-text-muted rounded-md text-xs font-medium flex items-center justify-center gap-1.5 cursor-not-allowed opacity-60">
                                            Live Demo
                                            <ExternalLink size={13} />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects Coming Soon Note */}
                <div className="max-w-md mx-auto mt-12 bg-card border border-border rounded-xl p-5 text-center">
                    <div className="inline-flex p-2 rounded-md bg-bg-alt border border-border text-accent mb-2">
                        <Code2 size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-text mb-1">More Projects Coming Soon</h4>
                    <p className="text-text-muted text-xs leading-relaxed">
                        Currently engineering new fullstack web systems and AI integrations. Source repositories will be published here.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Projects
