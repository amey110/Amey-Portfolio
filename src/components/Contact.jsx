import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Phone, Download } from 'lucide-react'

const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
}

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
        }, 1200)
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
        <section id="contact" className="scroll-mt-32 py-24 md:py-32 px-6 bg-background-secondary">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="section-header">
                    <motion.p
                        {...fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-semibold text-sm tracking-wide uppercase mb-3"
                    >
                        Contact
                    </motion.p>
                    <motion.h2
                        {...fadeInUp}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-3xl md:text-section font-bold tracking-tight text-foreground mb-4"
                    >
                        Get in touch
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="h-1 w-16 bg-primary rounded-full mb-6"
                    />
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="max-w-2xl text-foreground-secondary text-base leading-relaxed"
                    >
                        Have an opportunity or want to connect? I'd love to hear from you.
                    </motion.p>
                </div>

                {/* Content */}
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl border border-border-subtle p-6 sm:p-8 md:p-10 shadow-card"
                >
                    <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                        {/* Left: Contact Info */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">Let's collaborate</h3>
                                <p className="text-foreground-secondary text-sm leading-relaxed">
                                    I'm currently open to Frontend Developer, React Developer, and Software Developer opportunities. Whether you have a project idea or simply want to connect, feel free to reach out.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-3">
                                {contactItems.map((item) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        whileHover={{ x: 4 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                        className="flex items-center gap-3.5 p-3.5 rounded-xl border border-border-subtle hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 group/item"
                                    >
                                        <div className="p-2.5 rounded-lg bg-blue-50 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 flex-shrink-0">
                                            <item.icon size={16} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[11px] text-foreground-secondary font-semibold uppercase tracking-wider">{item.label}</p>
                                            <p className="text-foreground font-semibold text-sm truncate group-hover/item:text-primary transition-colors duration-300">{item.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Download Resume CTA */}
                            <motion.a
                                href="/resume/Amey_Jadhav_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-2.5 w-full py-3 bg-foreground hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-button"
                            >
                                <Download size={15} />
                                Download Resume
                            </motion.a>
                        </div>

                        {/* Right: Contact Form */}
                        <div>
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form 
                                        key="contact-form"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-5" 
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-foreground-secondary uppercase tracking-wider ml-0.5">Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 bg-background-secondary rounded-xl border border-border-subtle text-foreground placeholder:text-slate-400 font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-foreground-secondary uppercase tracking-wider ml-0.5">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 bg-background-secondary rounded-xl border border-border-subtle text-foreground placeholder:text-slate-400 font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-foreground-secondary uppercase tracking-wider ml-0.5">Message</label>
                                            <textarea
                                                rows="4"
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="How can I help you?"
                                                className="w-full px-4 py-3 bg-background-secondary rounded-xl border border-border-subtle text-foreground placeholder:text-slate-400 font-medium text-sm resize-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            ></textarea>
                                        </div>
                                        <motion.button 
                                            disabled={isSubmitting}
                                            whileHover={{ y: -2, boxShadow: "0 8px 24px -4px rgba(37,99,235,0.25)" }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                            className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold flex items-center justify-center gap-2.5 transition-colors duration-300 shadow-button text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <Send size={15} className={isSubmitting ? 'animate-pulse' : ''} />
                                        </motion.button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success-message"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="flex flex-col items-center justify-center text-center p-8 min-h-[380px] bg-emerald-50/50 border border-emerald-200 rounded-2xl"
                                    >
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
                                            className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-5 shadow-lg"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-emerald-800 mb-2">Message Sent!</h3>
                                        <p className="text-emerald-700/80 font-medium text-sm max-w-sm mb-6">
                                            Thank you for reaching out. I'll get back to you soon!
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm transition-all duration-300"
                                        >
                                            Send Another Message
                                        </motion.button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
