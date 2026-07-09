import { motion } from 'framer-motion'
import { Laptop, Brain, Code, Sparkles } from 'lucide-react'

const categories = [
    {
        title: "Frontend Development",
        description: "Building responsive, modern, and user-friendly web applications using React and modern frontend technologies.",
        icon: Laptop,
        color: "text-blue-600",
        bgColor: "bg-blue-50/40 border border-blue-100/30",
        glow: "from-blue-500/5 to-indigo-500/5",
        skills: [
            { name: "React.js" },
            { name: "JavaScript" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Tailwind CSS" },
            { name: "Bootstrap" },
            { name: "Responsive Web Design" }
        ]
    },
    {
        title: "Programming & AI",
        description: "Exploring Artificial Intelligence fundamentals and building practical AI-powered applications using Python.",
        icon: Brain,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50/40 border border-indigo-100/30",
        glow: "from-indigo-500/5 to-purple-500/5",
        skills: [
            { name: "Python" },
            { name: "Machine Learning", badge: "Beginner" },
            { name: "NumPy", badge: "Learning" },
            { name: "Pandas", badge: "Learning" },
            { name: "OpenAI API" },
            { name: "FastAPI", badge: "Learning" },
            { name: "Swagger" }
        ]
    },
    {
        title: "Tools",
        description: "Essential tools I use during development, debugging, version control, and API testing.",
        icon: Code,
        color: "text-slate-600",
        bgColor: "bg-slate-50/40 border border-slate-100/30",
        glow: "from-slate-500/5 to-slate-400/5",
        skills: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "VS Code" },
            { name: "Postman" },
            { name: "npm" },
            { name: "Vite" }
        ]
    }
]

const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-32 py-4">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-foreground"
                >
                    Technical <span className="text-gradient">Skills</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="h-1.5 w-24 bg-primary rounded-full glow-primary mb-6"
                />
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="max-w-3xl text-foreground/75 text-base md:text-lg leading-relaxed font-normal px-4"
                >
                    Here are the technologies I currently use and the tools I am actively learning through real-world projects and continuous practice.
                </motion.p>
            </div>

            {/* Grid layout for categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {categories.map((cat, i) => {
                    const IconComponent = cat.icon
                    return (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(37, 99, 235, 0.15)', boxShadow: '0 20px 40px -20px rgba(17, 24, 39, 0.05)' }}
                            className="glass p-8 rounded-[20px] relative overflow-hidden group flex flex-col justify-between h-full border border-white/40 glass-hover shadow-sm"
                        >
                            {/* Decorative Background Glow */}
                            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${cat.glow} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            <div>
                                {/* Header with Icon and Title */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`p-3.5 rounded-2xl ${cat.bgColor} ${cat.color} flex-shrink-0 flex items-center justify-center`}>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <IconComponent size={28} />
                                        </motion.div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800 leading-tight">{cat.title}</h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                                    {cat.description}
                                </p>
                            </div>

                            {/* Skills Badges */}
                            <div className="flex flex-wrap gap-2.5 mt-auto">
                                {cat.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ y: -4, scale: 1.03, boxShadow: "0 8px 20px -6px rgba(37,99,235,0.12)", borderColor: "rgba(37,99,235,0.25)", color: "#2563EB" }}
                                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                                        className="px-4 py-2 text-xs md:text-sm bg-white/50 backdrop-blur-sm border border-slate-200/40 rounded-full text-slate-600 font-semibold transition-all duration-300 cursor-default flex items-center gap-1.5 shadow-[0_2px_8px_-3px_rgba(17,24,39,0.02)]"
                                    >
                                        <span>{skill.name}</span>
                                        {skill.badge && (
                                            <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${
                                                skill.badge === 'Beginner' 
                                                ? 'bg-blue-50/80 text-blue-600 border-blue-100/50' 
                                                : 'bg-indigo-50/80 text-indigo-600 border-indigo-100/50'
                                            }`}>
                                                {skill.badge}
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Highlighted card at bottom: Always Learning */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01, borderColor: 'rgba(37, 99, 235, 0.2)', boxShadow: '0 20px 40px -20px rgba(17, 24, 39, 0.04)' }}
                className="max-w-3xl mx-auto mt-16 p-6 md:p-8 rounded-[20px] border border-primary/10 bg-gradient-to-r from-primary/5 via-indigo-500/5 to-transparent relative overflow-hidden group glass glass-hover shadow-sm"
            >
                {/* Background glow animation */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/25 transition-all duration-500 rounded-full" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-teal-500/10 blur-3xl group-hover:bg-teal-500/25 transition-all duration-500 rounded-full" />

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary-hover flex-shrink-0 flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut"
                            }}
                        >
                            <Sparkles size={28} />
                        </motion.div>
                    </div>
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-xl font-bold text-foreground">Always Learning</h4>
                        <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                            I believe the best developers never stop learning. I continuously improve my skills by building projects, exploring new technologies, and practicing every day.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Skills
