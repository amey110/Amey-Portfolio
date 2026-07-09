import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-200/50 relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-xl font-extrabold text-gradient tracking-tight font-sans">AJ.</div>

                {/* Animated Social Icons */}
                <div className="flex items-center gap-2">
                    {[
                        { icon: Github, href: 'https://github.com/amey110' },
                        { icon: Linkedin, href: 'https://www.linkedin.com/in/amey-jadhav-6a677b28a/' },
                        { icon: Mail, href: 'mailto:ameyjadhav2211@gmail.com' }
                    ].map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, rotate: idx % 2 === 0 ? 5 : -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="text-slate-400 hover:text-primary p-2 rounded-full hover:bg-slate-900/5 transition-all"
                        >
                            <social.icon size={18} />
                        </motion.a>
                    ))}
                </div>

                <div className="flex flex-col items-center md:items-end text-center md:text-right gap-1">
                    <p className="text-slate-500 font-semibold text-sm">
                        Designed & Developed by Amey Jadhav
                    </p>
                    <p className="text-slate-400 text-xs font-bold">
                        &copy; 2026 All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
