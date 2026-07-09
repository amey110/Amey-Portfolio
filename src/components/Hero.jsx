import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'

const Hero = () => {
    return (
        <section id="home" className="scroll-mt-32 pt-40 md:pt-52 pb-24 md:pb-32 flex flex-col items-center text-center relative overflow-hidden px-6">
            {/* Status Badge */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8 px-4 py-2 bg-emerald-50 rounded-full text-[13px] font-semibold text-emerald-700 flex items-center gap-2.5 border border-emerald-200/60"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Opportunities
            </motion.div>

            {/* Main Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-hero-sm md:text-hero-md lg:text-hero font-extrabold tracking-tight mb-5 max-w-4xl text-foreground"
            >
                Hi, I'm Amey Jadhav
            </motion.h1>

            {/* Subtitle */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
            >
                <span className="px-4 py-1.5 text-sm font-semibold text-primary bg-blue-50 rounded-full border border-blue-100">
                    React Frontend Developer
                </span>
                <span className="px-4 py-1.5 text-sm font-semibold text-foreground-secondary bg-slate-50 rounded-full border border-border-subtle">
                    AI & ML Graduate (2026)
                </span>
            </motion.div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg text-foreground-secondary max-w-2xl leading-relaxed mb-5"
            >
                I build modern, responsive and user-friendly web applications using React.js, JavaScript and modern frontend technologies.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg text-foreground-secondary max-w-2xl leading-relaxed mb-10"
            >
                Alongside frontend development, I continuously learn AI integration and backend technologies by building real-world projects.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
                {/* Primary: Download Resume */}
                <motion.a
                    href="/resume/Amey_Jadhav_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    whileHover={{ y: -2, boxShadow: "0 8px 24px -4px rgba(37,99,235,0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-full sm:w-auto px-7 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold flex items-center justify-center gap-2.5 shadow-button transition-colors duration-300 text-[15px]"
                >
                    <Download size={17} />
                    Download Resume
                </motion.a>

                {/* Secondary: View Projects */}
                <motion.a
                    href="#projects"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-full sm:w-auto px-7 py-3.5 bg-white border border-border-subtle text-foreground rounded-xl font-semibold flex items-center justify-center gap-2.5 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 text-[15px] shadow-button group"
                >
                    View Projects
                    <ArrowRight className="group-hover:translate-x-0.5 transition-transform duration-300" size={17} />
                </motion.a>

                {/* Tertiary: Contact Me */}
                <motion.a
                    href="#contact"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-full sm:w-auto px-7 py-3.5 bg-white border border-border-subtle text-foreground-secondary rounded-xl font-semibold flex items-center justify-center gap-2.5 hover:bg-slate-50 hover:border-slate-300 hover:text-foreground transition-all duration-300 text-[15px] shadow-button group"
                >
                    <Mail size={16} className="text-foreground-secondary group-hover:text-primary transition-colors" />
                    Contact Me
                </motion.a>
            </motion.div>

            {/* Floating Background Shapes */}
            <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none animate-float opacity-40" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl pointer-events-none animate-float-delayed opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl pointer-events-none opacity-20" />
        </section>
    )
}

export default Hero
