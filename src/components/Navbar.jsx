import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
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
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
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

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled ? 'py-3 px-6' : 'py-5 px-6'
        }`}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-500 border ${
                scrolled 
                ? 'glass bg-white/72 border-white/40 shadow-[0_12px_40px_-12px_rgba(37,99,235,0.08)] backdrop-blur-[18px]' 
                : 'bg-white/35 border-transparent shadow-none backdrop-blur-md'
            }`}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-extrabold text-gradient tracking-tight"
                >
                    AJ.
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-2">
                    {navLinks.map((link, i) => {
                        const targetId = link.href === '#' ? 'home' : link.href.slice(1)
                        const isActive = activeSection === targetId

                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className={`relative text-xs lg:text-sm font-semibold transition-all duration-300 py-1.5 px-4 rounded-full ${
                                    isActive ? 'text-primary' : 'text-slate-655 hover:text-slate-900 hover:bg-slate-900/5'
                                }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <motion.span
                                        layoutId="activeNavUnderline"
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        )
                    })}
                </div>

                {/* CTA / Socials */}
                <div className="hidden md:flex items-center space-x-4">
                    <motion.a
                        href="https://github.com/amey110"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12, rotate: 5, boxShadow: "0 4px 12px rgba(37,99,235,0.06)" }}
                        whileTap={{ scale: 0.95 }}
                        className="text-slate-600 hover:text-primary p-2 rounded-full hover:bg-primary/5 transition-all duration-300"
                    >
                        <Github size={18} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/amey-jadhav-6a677b28a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12, rotate: -5, boxShadow: "0 4px 12px rgba(37,99,235,0.06)" }}
                        whileTap={{ scale: 0.95 }}
                        className="text-slate-600 hover:text-primary p-2 rounded-full hover:bg-primary/5 transition-all duration-300"
                    >
                        <Linkedin size={18} />
                    </motion.a>
                </div>

                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        aria-label="Toggle mobile menu"
                        className="text-slate-900 p-1.5 rounded-full hover:bg-slate-900/5 transition-colors focus:outline-none"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden absolute top-20 left-6 right-6 glass p-6 rounded-2xl flex flex-col space-y-3 shadow-xl border border-white/40 z-50"
                    >
                        {navLinks.map((link) => {
                            const targetId = link.href === '#' ? 'home' : link.href.slice(1)
                            const isActive = activeSection === targetId

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-base font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 ${
                                        isActive 
                                        ? 'text-primary bg-primary/5 font-bold border-l-2 border-primary' 
                                        : 'text-slate-600 hover:text-primary hover:bg-slate-900/5'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
