import { GraduationCap, Briefcase } from 'lucide-react'

const experiences = [
    {
        role: "B.E. in Artificial Intelligence & Machine Learning",
        organization: "University of Pune",
        period: "2022 — 2026 (Expected)",
        location: "Pune, India",
        icon: GraduationCap,
        tag: "Education",
        description: "Studying core computer science fundamentals, artificial intelligence, algorithms, and fullstack software development. Applying theoretical knowledge to end-to-end web applications.",
        highlights: ["AI & ML Algorithms", "Fullstack Web Systems", "Database Design", "REST APIs"]
    },
    {
        role: "Fullstack Web Developer",
        organization: "Independent & Open Source Projects",
        period: "2023 — Present",
        location: "Pune, India",
        icon: Briefcase,
        tag: "Engineering",
        description: "Designing and deploying fullstack web applications. Building responsive client interfaces with React and Tailwind CSS, backend microservices with FastAPI and Node.js, and integrating AI workflows.",
        highlights: ["AI Code Reviewer", "FastAPI Endpoints", "React Component Systems", "Database Integration"]
    }
]

const Experience = () => {
    return (
        <section id="experience" className="scroll-mt-24 py-20 md:py-28 bg-bg transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="section-header">
                    <p className="text-accent font-mono text-xs uppercase tracking-wider mb-2">
                        04 / Experience
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text font-display mb-3">
                        Experience & Education
                    </h2>
                    <p className="text-text-muted text-sm md:text-base max-w-2xl leading-relaxed">
                        My academic background in AI & ML alongside practical fullstack development experience.
                    </p>
                </div>

                {/* Timeline Cards */}
                <div className="max-w-4xl space-y-4">
                    {experiences.map((item) => {
                        const IconComponent = item.icon
                        return (
                            <div
                                key={item.role}
                                className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors duration-150"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-md bg-bg-alt border border-border text-accent flex-shrink-0">
                                            <IconComponent size={16} />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-text font-display">{item.role}</h3>
                                            <p className="text-xs text-text-muted font-medium">
                                                {item.organization} • {item.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 self-start sm:self-auto">
                                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-alt border border-border text-text-muted">
                                            {item.tag}
                                        </span>
                                        <span className="text-xs font-mono text-accent">
                                            {item.period}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4 pl-0 sm:pl-11">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap items-center gap-1.5 pl-0 sm:pl-11">
                                    {item.highlights.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-alt border border-border text-text-muted"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience
