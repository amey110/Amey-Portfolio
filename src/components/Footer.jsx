import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-10 border-t border-border bg-bg transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo */}
                <a
                    href="#"
                    className="text-lg font-semibold tracking-tight text-text hover:text-accent transition-colors"
                >
                    AJ<span className="text-accent">.</span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-1">
                    {[
                        { icon: Github, href: 'https://github.com/amey110', label: 'GitHub' },
                        { icon: Linkedin, href: 'https://www.linkedin.com/in/amey-jadhav-6a677b28a/', label: 'LinkedIn' },
                        { icon: Mail, href: 'mailto:ameyjadhav2211@gmail.com', label: 'Email' }
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="text-text-muted hover:text-accent p-2 rounded-md hover:bg-bg-alt transition-colors duration-150"
                        >
                            <social.icon size={16} />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right gap-0.5">
                    <p className="text-text-muted text-xs font-medium">
                        Designed & Built by Amey Jadhav
                    </p>
                    <p className="text-text-muted/70 font-mono text-[0.75rem] font-medium">
                        &copy; {currentYear} • Pune, India
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
