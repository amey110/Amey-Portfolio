import { motion } from 'framer-motion'
import { Laptop, Brain, Lightbulb } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="scroll-mt-24 py-20 md:py-28 bg-bg-alt border-y border-border transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="section-header">
                    <p className="text-accent font-mono text-[0.75rem] uppercase tracking-[0.08em] font-medium mb-2">
                        01 / About
                    </p>
                    <h2 className="text-h2 mb-3 text-text">
                        Get to know me
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Text Content */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-h3 text-text">
                                Amey Jadhav
                            </h3>
                            <p className="text-accent font-medium text-sm">
                                Fullstack Developer • B.E. in AI & ML (2026)
                            </p>
                        </div>
                        
                        <div className="space-y-4 text-text-muted text-base leading-[1.7] max-w-[65ch]">
                            <p>
                                I am pursuing a Bachelor of Engineering in Artificial Intelligence & Machine Learning (graduating 2026) in Pune, India. As a fullstack developer, I focus on building complete, responsive web applications from user interfaces down to backend APIs and database schemas.
                            </p>
                            <p>
                                On the frontend, I create fast, structured React interfaces using JavaScript and Tailwind CSS. On the backend, I design reliable APIs using FastAPI and Node.js, connected to MySQL and MongoDB databases.
                            </p>
                            <p>
                                My background in AI and machine learning helps me bridge modern web engineering with intelligent features, writing clean, maintainable code for real-world products.
                            </p>
                            <p className="pt-2 text-text font-medium text-sm">
                                Currently open to: <span className="text-accent">Fullstack Developer</span>, <span className="text-accent">React Developer</span>, and <span className="text-accent">Software Developer</span> opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
                        {[
                            {
                                icon: Laptop,
                                title: 'Fullstack Development',
                                desc: 'Building complete applications with React on the client, and FastAPI or Node.js on the server.',
                            },
                            {
                                icon: Brain,
                                title: 'AI Integration',
                                desc: 'Connecting web applications with AI and machine learning capabilities using Python and modern APIs.',
                            },
                            {
                                icon: Lightbulb,
                                title: 'Clean Architecture',
                                desc: 'Writing maintainable code, structured REST endpoints, and efficient relational and document database queries.',
                            }
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 transition-colors hover:border-accent"
                            >
                                <div className="p-2 rounded-lg bg-bg-alt border border-border text-accent flex-shrink-0 flex items-center justify-center">
                                    <item.icon size={18} />
                                </div>
                                <div className="space-y-1 min-w-0">
                                    <h4 className="text-sm font-medium text-text">{item.title}</h4>
                                    <p className="text-text-muted text-xs leading-[1.6]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
