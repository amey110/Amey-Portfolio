import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Phone, Download, CheckCircle2 } from 'lucide-react'
import { RESUME_URL } from '../constants'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) return
        
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormData({ name: '', email: '', message: '' })
        }, 800)
    }

    const contactItems = [
        { 
            icon: Mail, 
            label: 'Email', 
            value: 'ameyjadhav2211@gmail.com', 
            href: 'mailto:ameyjadhav2211@gmail.com',
            external: false 
        },
        { 
            icon: Phone, 
            label: 'Phone', 
            value: '+91 8433517958', 
            href: 'tel:+918433517958',
            external: false 
        },
        { 
            icon: Github, 
            label: 'GitHub', 
            value: 'github.com/amey110', 
            href: 'https://github.com/amey110', 
            external: true 
        },
        { 
            icon: Linkedin, 
            label: 'LinkedIn', 
            value: 'amey-jadhav', 
            href: 'https://www.linkedin.com/in/amey-jadhav-6a677b28a/', 
            external: true 
        },
    ]

    return (
        <section id="contact" className="scroll-mt-24 py-20 md:py-28 bg-bg-alt border-y border-border transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="section-header">
                    <p className="text-accent font-mono text-[0.75rem] uppercase tracking-[0.08em] font-medium mb-2">
                        05 / Contact
                    </p>
                    <h2 className="text-h2 text-text mb-3">
                        Get in touch
                    </h2>
                    <p className="text-text-muted text-body max-w-[65ch] leading-[1.7]">
                        Have an opportunity, questions about my work, or want to connect? Send a note or reach out directly.
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-4xl bg-card rounded-xl border border-border p-6 sm:p-8 md:p-10">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
                        {/* Left: Contact Info */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-h3 mb-2 text-text">Let's collaborate</h3>
                                <p className="text-text-muted text-sm leading-[1.7] max-w-[65ch]">
                                    I'm currently open to <span className="text-text font-semibold">Fullstack Developer</span>, <span className="text-text font-semibold">React Developer</span>, and <span className="text-text font-semibold">Software Developer</span> opportunities.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-2.5">
                                {contactItems.map((item) => (
                                     <a
                                         key={item.label}
                                         href={item.href}
                                         {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                         className="flex items-center gap-3 p-3 rounded-md border border-border hover:border-accent bg-bg transition-colors duration-150 group"
                                     >
                                         <div className="p-2 rounded bg-bg-alt border border-border text-accent group-hover:text-accent-hover transition-colors flex-shrink-0">
                                             <item.icon size={15} />
                                         </div>
                                         <div className="min-w-0">
                                             <p className="text-text-muted font-mono text-[0.75rem] uppercase tracking-[0.08em] font-medium">{item.label}</p>
                                             <p className="text-text font-medium text-sm truncate group-hover:text-accent transition-colors">{item.value}</p>
                                         </div>
                                     </a>
                                ))}
                            </div>

                            {/* Download Resume Button */}
                            <a
                                href={RESUME_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="flex items-center justify-center gap-2 w-full py-2.5 bg-text text-bg rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                                <Download size={14} />
                                Download Resume
                            </a>
                        </div>

                        {/* Right: Contact Form */}
                        <div>
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <form 
                                        key="contact-form"
                                        className="space-y-4" 
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="space-y-1">
                                            <label className="font-mono text-[0.75rem] text-text-muted uppercase tracking-[0.08em] font-medium">Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Amey Jadhav"
                                                className="w-full px-3.5 py-2.5 bg-bg rounded-md border border-border text-text placeholder:text-text-muted/50 font-medium text-xs sm:text-sm transition-colors focus:outline-none focus:border-accent"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="font-mono text-[0.75rem] text-text-muted uppercase tracking-[0.08em] font-medium">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="you@example.com"
                                                className="w-full px-3.5 py-2.5 bg-bg rounded-md border border-border text-text placeholder:text-text-muted/50 font-medium text-xs sm:text-sm transition-colors focus:outline-none focus:border-accent"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="font-mono text-[0.75rem] text-text-muted uppercase tracking-[0.08em] font-medium">Message</label>
                                            <textarea
                                                rows="4"
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Tell me about your project or opportunity..."
                                                className="w-full px-3.5 py-2.5 bg-bg rounded-md border border-border text-text placeholder:text-text-muted/50 font-medium text-xs sm:text-sm resize-none transition-colors focus:outline-none focus:border-accent"
                                            ></textarea>
                                        </div>
                                        <button 
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-2.5 bg-accent hover:bg-accent-hover text-accent-contrast rounded-md font-medium flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <Send size={14} className={isSubmitting ? 'animate-pulse' : ''} />
                                        </button>
                                    </form>
                                ) : (
                                    <div
                                        key="success-message"
                                        className="flex flex-col items-center justify-center text-center p-8 min-h-[300px] bg-bg border border-border rounded-xl"
                                    >
                                        <div className="w-10 h-10 text-accent mb-3 flex items-center justify-center">
                                            <CheckCircle2 size={36} />
                                        </div>
                                        <h4 className="text-base font-medium text-text mb-1">Message Sent</h4>
                                        <p className="text-text-muted text-sm max-w-[65ch] mb-5 leading-[1.7]">
                                            Thank you for reaching out. I will review your message and respond shortly.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-4 py-2 bg-card border border-border text-text hover:border-accent rounded-md font-medium text-sm transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
