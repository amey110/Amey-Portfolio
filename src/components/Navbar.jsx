import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Menu, X, Download } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact']
        
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        
        sections.forEach(id => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => {
            sections.forEach(id => {
                const el = document.getElementById(id)
                if (el) observer.unobserve(el)
            })
        }
    }, [])

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (isOpen) {
            const handleClick = () => setIsOpen(false)
            document.addEventListener('click', handleClick)
            return () => document.removeEventListener('click', handleClick)
        }
    }, [isOpen])

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled ? 'py-3' : 'py-4'
        }`}>
            <div className={`max-w-5xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl mx-4 sm:mx-6 lg:mx-auto transition-all duration-500 ${
                scrolled 
                ? 'bg-white/80 backdrop-blur-xl border border-border-subtle shadow-nav' 
                : 'bg-transparent border border-transparent'
            }`}>
                {/* Logo */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
                >
                    AJ<span className="text-primary">.</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link, i) => {
                        const targetId = link.href === '#' ? 'home' : link.href.slice(1)
                        const isActive = activeSection === targetId

                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.06, duration: 0.4 }}
                                className={`relative text-[13px] font-semibold transition-all duration-300 py-2 px-3.5 rounded-lg ${
                                    isActive 
                                    ? 'text-primary bg-blue-50' 
                                    : 'text-foreground-secondary hover:text-foreground hover:bg-slate-50'
                                }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-blue-50 rounded-lg"
                                        style={{ zIndex: 0 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        )
                    })}
                </div>

                {/* Right side: Resume + Socials */}
                <div className="hidden md:flex items-center gap-3">
                    <motion.a
                        href="https://github.com/amey110"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-foreground-secondary hover:text-foreground p-2 rounded-lg hover:bg-slate-50 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={17} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/amey-jadhav-6a677b28a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-foreground-secondary hover:text-foreground p-2 rounded-lg hover:bg-slate-50 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={17} />
                    </motion.a>
                    <motion.a
                        href="/resume/Amey_Jadhav_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="ml-1 px-4 py-2 bg-foreground text-white rounded-lg text-[13px] font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all duration-300 shadow-button"
                    >
                        <Download size={14} />
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsOpen(!isOpen)
                        }}
                        aria-label="Toggle mobile menu"
                        className="text-foreground p-2 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl p-4 rounded-2xl flex flex-col gap-1 shadow-card-hover border border-border-subtle z-50"
                    >
                        {navLinks.map((link) => {
                            const targetId = link.href === '#' ? 'home' : link.href.slice(1)
                            const isActive = activeSection === targetId

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 ${
                                        isActive 
                                        ? 'text-primary bg-blue-50 font-bold' 
                                        : 'text-foreground-secondary hover:text-foreground hover:bg-slate-50'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            )
                        })}
                        
                        {/* Mobile Resume Button */}
                        <div className="pt-2 mt-1 border-t border-border-subtle">
                            <a
                                href="/resume/Amey_Jadhav_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-foreground text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all"
                            >
                                <Download size={15} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
