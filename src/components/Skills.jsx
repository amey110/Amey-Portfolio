import { motion } from 'framer-motion'
import { Laptop, Server, Database, Terminal, ArrowRight } from 'lucide-react'

const skillGroups = [
    {
        title: "Frontend",
        icon: Laptop,
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["FastAPI", "Node.js", "Python"]
    },
    {
        title: "Database",
        icon: Database,
        skills: ["MySQL", "MongoDB", "SQL"]
    },
    {
        title: "Tools & Deployment",
        icon: Terminal,
        skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"]
    },
]

const requestFlowSteps = [
    { label: "Browser", sub: "React Client", tag: "UI Layer" },
    { label: "API Service", sub: "FastAPI / Node.js", tag: "REST Endpoints" },
    { label: "Database", sub: "MySQL / MongoDB", tag: "Persistence" },
    { label: "Response", sub: "JSON Payload", tag: "Client Render" },
]

const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-24 py-20 md:py-28 bg-bg transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="section-header">
                    <p className="text-accent font-mono text-[0.75rem] uppercase tracking-[0.08em] font-medium mb-2">
                        02 / Skills
                    </p>
                    <h2 className="text-h2 mb-3 text-text">
                        Technologies I work with
                    </h2>
                    <p className="text-text-muted text-base leading-[1.7] max-w-[65ch]">
                        Technologies across the full stack used in building web applications, backend services, and databases.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {skillGroups.map((group) => {
                        const IconComponent = group.icon
                        return (
                            <div
                                key={group.title}
                                className="bg-card border border-border rounded-xl p-5 flex flex-col transition-colors hover:border-accent"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="p-1.5 rounded-md bg-bg-alt border border-border text-accent">
                                        <IconComponent size={16} />
                                    </div>
                                    <h3 className="text-sm font-medium text-text">{group.title}</h3>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 font-mono text-[0.75rem] font-medium rounded-md bg-bg-alt border border-border text-text-muted hover:text-text hover:border-accent transition-colors duration-150 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Request Flow Diagram */}
                <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                        <div>
                            <span className="font-mono text-[0.75rem] text-accent uppercase tracking-[0.08em] font-medium block mb-1">Architecture</span>
                            <h3 className="text-h3 text-text">Fullstack Request Flow</h3>
                        </div>
                        <p className="font-mono text-[0.75rem] text-text-muted">Client &rarr; Server &rarr; DB &rarr; Client</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {requestFlowSteps.map((step, idx) => (
                            <div
                                key={step.label}
                                className="relative bg-bg-alt border border-border rounded-lg p-4 flex flex-col justify-between"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-mono text-[0.75rem] text-accent font-medium">0{idx + 1}</span>
                                    <span className="font-mono text-[0.75rem] tracking-[0.08em] uppercase px-2 py-0.5 rounded bg-card border border-border text-text-muted font-medium">
                                        {step.tag}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-text">{step.label}</h4>
                                    <p className="text-xs text-text-muted font-mono">{step.sub}</p>
                                </div>
                                {idx < requestFlowSteps.length - 1 && (
                                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-card border border-border items-center justify-center text-text-muted">
                                        <ArrowRight size={12} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
