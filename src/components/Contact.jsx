import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MessageSquare, Phone } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) return
        
        setIsSubmitting(true)
        // Simulate message submission
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
            label: 'Mobile Number', 
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
            value: 'linkedin.com/in/amey-jadhav-6a677b28a', 
            href: 'https://www.linkedin.com/in/amey-jadhav-6a677b28a/', 
            external: true 
        },
    ]

    return (
        <section id="contact" className="scroll-mt-32">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto glass p-6 sm:p-8 md:p-12 rounded-[24px] relative overflow-hidden group border border-white/40 shadow-sm">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <MessageSquare size={160} className="text-slate-400" />
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-12 relative z-10">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-extrabold mb-4 text-slate-850">Let's collaborate</h3>
                            <p className="text-slate-600 text-base leading-relaxed">
                                I'm currently open to Frontend Developer, React Developer, and Software Developer opportunities. Whether you have an opportunity, a collaboration idea, or simply want to connect, I'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactItems.map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="flex items-center gap-4 p-4 glass rounded-[20px] border border-white/40 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/60 group/item cursor-pointer"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                                        <item.icon size={18} className="group-hover/item:scale-110 transition-transform duration-300" />
                                    </div>
                                    <div className="space-y-0.5 min-w-0">
                                        <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">{item.label}</p>
                                        <p className="text-slate-700 font-bold text-xs sm:text-sm md:text-base transition-colors duration-300 group-hover/item:text-primary break-all">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form 
                                    key="contact-form"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6" 
                                    onSubmit={handleSubmit}
                                >
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-550 uppercase tracking-wider ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="w-full px-5 py-3.5 glass rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary/50 focus:bg-white transition-all duration-300 bg-white/40 border border-slate-200/50 text-slate-800 placeholder:text-slate-400/70 placeholder:font-normal font-medium shadow-inner"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-550 uppercase tracking-wider ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-3.5 glass rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary/50 focus:bg-white transition-all duration-300 bg-white/40 border border-slate-200/50 text-slate-800 placeholder:text-slate-400/70 placeholder:font-normal font-medium shadow-inner"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-550 uppercase tracking-wider ml-1">Message</label>
                                        <textarea
                                            rows="4"
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="How can I help you?"
                                            className="w-full px-5 py-3.5 glass rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary/50 focus:bg-white transition-all duration-300 bg-white/40 border border-slate-200/50 text-slate-800 placeholder:text-slate-400/70 placeholder:font-normal resize-none font-medium shadow-inner"
                                        ></textarea>
                                    </div>
                                    <motion.button 
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02, y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_14px_rgba(37,99,235,0.18)] hover:shadow-[0_12px_25px_-5px_rgba(37,99,235,0.35)] group disabled:opacity-75 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <Send size={16} className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isSubmitting ? 'animate-pulse' : ''}`} />
                                    </motion.button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="flex flex-col items-center justify-center text-center p-8 min-h-[380px] bg-emerald-50/10 border border-emerald-500/20 rounded-[20px] backdrop-blur-md"
                                >
                                    <motion.div 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
                                        className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(16,185,129,0.3)]"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">Message Sent!</h3>
                                    <p className="text-emerald-700/80 font-medium text-sm md:text-base max-w-sm mb-8">
                                        Thank you for reaching out. I've received your message and will get back to you soon!
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm transition-all duration-300 shadow-sm"
                                    >
                                        Send Another Message
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
