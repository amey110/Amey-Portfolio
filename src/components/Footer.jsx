import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-10 border-t border-border-subtle relative z-10 bg-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo */}
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-extrabold tracking-tight text-foreground"
                >
                    AJ<span className="text-primary">.</span>
                </motion.a>

                {/* Social Icons */}
                <div className="flex items-center gap-1">
                    {[
                        { icon: Github, href: 'https://github.com/amey110', label: 'GitHub' },
                        { icon: Linkedin, href: 'https://www.linkedin.com/in/amey-jadhav-6a677b28a/', label: 'LinkedIn' },
                        { icon: Mail, href: 'mailto:ameyjadhav2211@gmail.com', label: 'Email' }
                    ].map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={social.label}
                            className="text-foreground-secondary hover:text-primary p-2.5 rounded-lg hover:bg-blue-50 transition-all duration-300"
                        >
                            <social.icon size={17} />
                        </motion.a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right gap-0.5">
                    <p className="text-foreground-secondary font-medium text-sm">
                        Designed & Developed by Amey Jadhav
                    </p>
                    <p className="text-slate-400 text-xs font-medium">
                        &copy; {currentYear} All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
