import { motion } from 'framer-motion'
import { Laptop, Brain, Lightbulb } from 'lucide-react'

const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
}

const About = () => {
    return (
        <section id="about" className="scroll-mt-32 py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="section-header">
                    <motion.p
                        {...fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-semibold text-sm tracking-wide uppercase mb-3"
                    >
                        About Me
                    </motion.p>
                    <motion.h2 
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-3xl md:text-section font-bold tracking-tight text-foreground mb-4"
                    >
                        Get to know me
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="h-1 w-16 bg-primary rounded-full"
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Text Content */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="space-y-1.5">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                                Amey Jadhav
                            </h3>
                            <p className="text-primary font-semibold text-base md:text-lg">
                                React Frontend Developer
                            </p>
                        </div>
                        
                        <div className="space-y-4 text-foreground-secondary text-base md:text-body leading-relaxed">
                            <p>
                                I am pursuing a Bachelor of Engineering in Artificial Intelligence & Machine Learning (graduating 2026) with a strong passion for frontend development. I enjoy building modern, responsive, and user-friendly web applications using React.js.
                            </p>
                            <p>
                                My core focus is React development — creating clean component architectures, intuitive interfaces, and seamless user experiences using JavaScript, HTML, CSS, and Tailwind CSS.
                            </p>
                            <p>
                                I also explore backend technologies like FastAPI and Node.js, and work with Python to build practical AI-integrated projects. I believe in continuous learning, writing clean code, and solving real-world problems through software.
                            </p>
                            <p>
                                I'm currently open to Frontend Developer, React Developer, and Software Developer opportunities where I can contribute and grow.
                            </p>
                        </div>
                    </motion.div>

                    {/* Info Cards */}
                    <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                        {[
                            {
                                icon: Laptop,
                                title: 'Frontend Development',
                                desc: 'Building responsive web applications with React, JavaScript, and modern frontend tooling.',
                                color: 'text-blue-600',
                                bgColor: 'bg-blue-50'
                            },
                            {
                                icon: Brain,
                                title: 'AI & ML Student',
                                desc: 'Exploring artificial intelligence through Python, building practical AI-powered applications.',
                                color: 'text-indigo-600',
                                bgColor: 'bg-indigo-50'
                            },
                            {
                                icon: Lightbulb,
                                title: 'Problem Solver',
                                desc: 'Passionate about clean code, continuous learning, and creating impactful software solutions.',
                                color: 'text-amber-600',
                                bgColor: 'bg-amber-50'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="premium-card flex items-start gap-4 cursor-default !p-5"
                            >
                                <div className={`p-3 rounded-xl ${item.bgColor} ${item.color} flex-shrink-0 flex items-center justify-center`}>
                                    <item.icon size={22} />
                                </div>
                                <div className="space-y-1.5 min-w-0">
                                    <h3 className="text-base font-bold text-foreground leading-tight">{item.title}</h3>
                                    <p className="text-foreground-secondary text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
