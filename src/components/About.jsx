import { motion } from 'framer-motion'
import { Laptop, Brain, Lightbulb } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="scroll-mt-32 py-4">
            <div className="flex flex-col items-center text-center mb-16 md:mb-20">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-foreground"
                >
                    About <span className="text-gradient">Me</span>
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="h-1.5 w-24 bg-primary rounded-full glow-primary"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-6"
                >
                    <div className="space-y-2">
                        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                            Amey <span className="text-gradient">Jadhav</span>
                        </h3>
                        <p className="text-primary font-semibold text-lg md:text-xl">
                            React Frontend Developer | AI & ML Graduate
                        </p>
                    </div>
                    
                    <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed font-normal">
                        <p>
                            I am a Bachelor of Engineering graduate in Artificial Intelligence & Machine Learning (2026) with a passion for building modern, responsive, and user-friendly web applications.
                        </p>
                        <p>
                            My primary expertise is React frontend development, where I enjoy creating clean interfaces and delivering great user experiences using JavaScript, HTML, CSS, Tailwind CSS, and modern frontend tools.
                        </p>
                        <p>
                            Alongside frontend development, I am continuously learning Python, FastAPI, and AI integration by building practical projects that solve real-world problems.
                        </p>
                        <p>
                            I believe in continuous learning, writing clean code, and creating software that is simple, intuitive, and impactful.
                        </p>
                        <p>
                            I am currently open to Frontend Developer, React Developer, and Software Developer opportunities.
                        </p>
                    </div>
                </motion.div>

                <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                    {[
                        {
                            icon: Laptop,
                            title: 'Frontend Development',
                            desc: 'Building modern, responsive, and user-friendly web applications using React, JavaScript, HTML, CSS, and Tailwind CSS.',
                            color: 'text-blue-600',
                            bgColor: 'bg-blue-50/30 border border-blue-100/30'
                        },
                        {
                            icon: Brain,
                            title: 'AI Learning Journey',
                            desc: 'Exploring Artificial Intelligence with Python by building practical projects and integrating AI into modern web applications.',
                            color: 'text-indigo-600',
                            bgColor: 'bg-indigo-50/30 border border-indigo-100/30'
                        },
                        {
                            icon: Lightbulb,
                            title: 'Continuous Learning',
                            desc: 'Passionate about learning new technologies, solving real-world problems, and improving through hands-on development.',
                            color: 'text-slate-600',
                            bgColor: 'bg-slate-100/30 border border-slate-200/30'
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(37, 99, 235, 0.15)', boxShadow: '0 20px 40px -20px rgba(17, 24, 39, 0.05)' }}
                            className="glass p-6 rounded-[20px] flex items-start gap-5 glass-hover cursor-pointer border border-white/40 shadow-sm"
                        >
                            <div className={`p-3.5 rounded-xl ${item.bgColor} ${item.color} flex-shrink-0 flex items-center justify-center`}>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <item.icon size={24} />
                                </motion.div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-slate-800 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 text-sm md:text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About

