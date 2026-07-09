import { motion } from 'framer-motion'
import { ArrowRight, Code, Cpu, Download } from 'lucide-react'

const Hero = () => {
    return (
        <section id="home" className="scroll-mt-32 pt-48 md:pt-60 pb-20 flex flex-col items-center text-center relative overflow-hidden">
            {/* Availability Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10 px-5 py-2 glass rounded-full text-[11px] font-bold uppercase tracking-widest text-slate-655 flex items-center gap-2.5 border border-white/50 shadow-sm"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open to Internships & Full-Time Opportunities
            </motion.div>

            {/* Name & Professional Title */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center mb-6"
            >
                <h2 className="text-xl md:text-2xl font-bold text-slate-500 mb-2 tracking-wide font-sans">
                    Amey <span className="text-slate-800">Jadhav</span>
                </h2>
                <p className="text-xs md:text-xs font-bold tracking-widest uppercase text-primary/85 bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                    React Frontend Developer | AI & ML Graduate
                </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight mb-8 max-w-5xl px-4 leading-[1.08] text-slate-900"
            >
                Building Modern Web Applications with <span className="text-gradient">React</span>
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-slate-600/90 max-w-3xl px-6 leading-relaxed mb-12 font-normal"
            >
                I am a B.E. graduate in Artificial Intelligence & Machine Learning (2026) with a passion for building clean, responsive, and user-friendly web applications. My primary focus is React frontend development, and I enjoy creating intuitive user experiences while continuously learning backend technologies and Artificial Intelligence through practical projects.
            </motion.p>

            {/* Buttons & Location */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-8 px-6 w-full sm:w-auto z-10"
            >
                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                    <motion.a
                        href="#projects"
                        whileHover={{ y: -2, scale: 1.03, boxShadow: "0 12px 30px -10px rgba(37,99,235,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(37,99,235,0.18)] transition-all duration-300 group"
                    >
                        View Projects
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ y: -2, scale: 1.03, bg: "rgba(255, 255, 255, 0.85)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="px-8 py-4 glass border border-white/40 text-slate-800 rounded-full font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:border-slate-300/80 hover:shadow-md group"
                    >
                        Download Resume
                        <Download size={18} className="text-slate-550 group-hover:text-primary group-hover:scale-105 transition-all duration-300" />
                    </motion.a>
                </div>
                
                <div className="text-sm font-semibold text-slate-400 flex items-center gap-1.5">
                    <span>📍</span> Maharashtra, India
                </div>
            </motion.div>

            {/* Floating Elements (Subtle Soft Blobs) */}
            <div className="absolute top-1/4 left-1/10 md:left-20 animate-pulse-slow opacity-15 pointer-events-none blur-3xl w-48 h-48 bg-primary/20 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/10 md:right-20 animate-pulse-slow delay-2000 opacity-15 pointer-events-none blur-3xl w-60 h-60 bg-indigo-500/20 rounded-full"></div>
        </section>
    )
}

export default Hero

