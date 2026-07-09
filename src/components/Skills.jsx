import { motion } from 'framer-motion'
import { Laptop, Code, Database, Terminal, Sparkles } from 'lucide-react'

const categories = [
    {
        title: "Frontend",
        icon: Laptop,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        skills: [
            { name: "React.js" },
            { name: "JavaScript" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Tailwind CSS" },
            { name: "Bootstrap" },
        ]
    },
    {
        title: "Programming",
        icon: Code,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        skills: [
            { name: "Python" },
            { name: "SQL" },
        ]
    },
    {
        title: "Backend",
        subtitle: "Learning",
        icon: Database,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        skills: [
            { name: "FastAPI", badge: "Learning" },
            { name: "Node.js", badge: "Learning" },
            { name: "PHP", badge: "Learning" },
        ]
    },
    {
        title: "Database",
        icon: Database,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        skills: [
            { name: "MySQL" },
            { name: "MongoDB" },
        ]
    },
    {
        title: "Tools",
        icon: Terminal,
        color: "text-slate-600",
        bgColor: "bg-slate-100",
        skills: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "VS Code" },
            { name: "Postman" },
            { name: "Vercel" },
        ]
    },
]

const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
}

const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-32 py-24 md:py-32 px-6 bg-background-secondary">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="section-header">
                    <motion.p
                        {...fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-semibold text-sm tracking-wide uppercase mb-3"
                    >
                        Technical Skills
                    </motion.p>
                    <motion.h2
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-3xl md:text-section font-bold tracking-tight text-foreground mb-4"
                    >
                        Technologies I work with
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
                        Here are the technologies I use and the tools I'm actively learning through real-world projects.
                    </motion.p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((cat, i) => {
                        const IconComponent = cat.icon
                        return (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="premium-card !p-6 flex flex-col"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`p-2.5 rounded-xl ${cat.bgColor} ${cat.color} flex-shrink-0`}>
                                        <IconComponent size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground leading-tight">{cat.title}</h3>
                                        {cat.subtitle && (
                                            <span className="text-xs font-semibold text-foreground-secondary">{cat.subtitle}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {cat.skills.map((skill) => (
                                        <motion.span
                                            key={skill.name}
                                            whileHover={{ y: -2, borderColor: "#2563EB", color: "#2563EB" }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                            className="px-3.5 py-1.5 text-sm bg-background-secondary border border-border-subtle rounded-lg text-foreground-secondary font-medium transition-all duration-300 cursor-default flex items-center gap-1.5"
                                        >
                                            {skill.name}
                                            {skill.badge && (
                                                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100">
                                                    {skill.badge}
                                                </span>
                                            )}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Always Learning Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="max-w-3xl mx-auto mt-12 premium-card !p-6 md:!p-8 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/50 border-blue-100/60"
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                        <div className="p-3.5 rounded-xl bg-blue-100 text-primary flex-shrink-0">
                            <motion.div
                                animate={{ rotate: [0, 8, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <Sparkles size={24} />
                            </motion.div>
                        </div>
                        <div className="space-y-1.5 text-center sm:text-left">
                            <h4 className="text-lg font-bold text-foreground">Always Learning</h4>
                            <p className="text-foreground-secondary text-sm leading-relaxed">
                                I continuously improve my skills by building projects, exploring new technologies, and practicing every day. The best developers never stop learning.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
