import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Menu, X, Download, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'))
    }, [])

    const toggleTheme = () => {
        const nextDark = !document.documentElement.classList.contains('dark')
        if (nextDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
        setIsDark(nextDark)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
        
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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
            scrolled ? 'py-3 bg-bg/95 border-b border-border shadow-none' : 'py-4 bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight text-text hover:text-accent font-display transition-colors"
                >
                    AJ<span className="text-accent">.</span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const targetId = link.href === '#' ? 'home' : link.href.slice(1)
                        const isActive = activeSection === targetId

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-[13px] font-medium transition-colors duration-150 py-1.5 px-3 rounded-md ${
                                    isActive 
                                    ? 'text-accent font-semibold' 
                                    : 'text-text-muted hover:text-text'
                                }`}
                            >
                                {link.name}
                            </a>
                        )
                    })}
                </div>

                {/* Right side: Theme Toggle + Resume + Socials */}
                <div className="hidden md:flex items-center gap-2">
                    {/* Theme Toggle Button */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                        className="p-2 rounded-md border border-border text-text hover:text-accent hover:border-accent transition-colors duration-150"
                    >
                        {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>

                    <a
                        href="https://github.com/amey110"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text p-2 rounded-md transition-colors duration-150"
                        aria-label="GitHub"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/amey-jadhav-6a677b28a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text p-2 rounded-md transition-colors duration-150"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a
                        href="/resume/Amey_Jadhav_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="ml-1 px-3.5 py-1.5 bg-text text-bg rounded-md text-[13px] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity duration-150"
                    >
                        <Download size={13} />
                        Resume
                    </a>
                </div>

                {/* Mobile Right Controls: Theme Toggle + Hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                        className="p-2 rounded-md border border-border text-text hover:text-accent transition-colors"
                    >
                        {isDark ? <Sun size={17} /> : <Moon size={17} />}
                    </button>

                    <button 
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsOpen(!isOpen)
                        }}
                        aria-label="Toggle mobile menu"
                        className="text-text p-2 rounded-md border border-border hover:bg-bg-alt transition-colors focus:outline-none"
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        onClick={(e) => e.stopPropagation()}
                        className="md:hidden absolute top-full left-4 right-4 mt-2 bg-bg border border-border p-4 rounded-xl flex flex-col gap-1 shadow-subtle z-50"
                    >
                        {navLinks.map((link) => {
                            const targetId = link.href === '#' ? 'home' : link.href.slice(1)
                            const isActive = activeSection === targetId

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-sm font-medium py-2 px-3 rounded-md transition-colors duration-150 ${
                                        isActive 
                                        ? 'text-accent font-semibold bg-bg-alt' 
                                        : 'text-text-muted hover:text-text'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            )
                        })}
                        
                        {/* Mobile Resume & Social Links */}
                        <div className="pt-3 mt-2 border-t border-border flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://github.com/amey110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-text-muted hover:text-text"
                                    aria-label="GitHub"
                                >
                                    <Github size={16} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/amey-jadhav-6a677b28a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-text-muted hover:text-text"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={16} />
                                </a>
                            </div>

                            <a
                                href="/resume/Amey_Jadhav_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="flex items-center gap-1.5 py-1.5 px-3 bg-text text-bg rounded-md text-xs font-medium hover:opacity-90 transition-opacity"
                            >
                                <Download size={13} />
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
