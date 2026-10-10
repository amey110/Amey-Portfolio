import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, Mail, Copy, Check, Terminal } from 'lucide-react'

const TYPING_WORDS = ['React UI', 'REST APIs', 'Databases', 'Deployment']

const TECH_BADGES = [
    { name: 'React' },
    { name: 'Tailwind' },
    { name: 'Node.js' },
    { name: 'FastAPI' },
    { name: 'Python' },
    { name: 'MySQL' },
    { name: 'MongoDB' },
    { name: 'Vercel' },
]

const reactSnippetRaw = `// App.jsx — React Client
import { useState, useEffect } from 'react'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/v1/projects')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  return <ProjectsGrid items={data} />
}`

const fastApiSnippetRaw = `# main.py — FastAPI Backend Service
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

app = FastAPI(title="Fullstack API")

@app.get("/api/v1/projects")
def get_projects(db: Session = Depends(get_db)):
    return db.query(Project).filter(Project.active == True).all()`

const reactLines = [
    [{ text: '// App.jsx — React Client', color: 'text-slate-500' }],
    [
        { text: 'import ', color: 'text-purple-400' },
        { text: '{ useState, useEffect } ', color: 'text-yellow-300' },
        { text: 'from ', color: 'text-purple-400' },
        { text: "'react'", color: 'text-emerald-300' },
    ],
    [],
    [
        { text: 'export default function ', color: 'text-purple-400' },
        { text: 'App', color: 'text-blue-400' },
        { text: '() {', color: 'text-slate-200' },
    ],
    [
        { text: '  const ', color: 'text-purple-400' },
        { text: '[data, setData] = ', color: 'text-slate-200' },
        { text: 'useState', color: 'text-yellow-300' },
        { text: '([])', color: 'text-slate-200' },
    ],
    [],
    [
        { text: '  useEffect', color: 'text-yellow-300' },
        { text: '(() => {', color: 'text-slate-200' },
    ],
    [
        { text: '    fetch', color: 'text-blue-400' },
        { text: "('/api/v1/projects')", color: 'text-emerald-300' },
    ],
    [
        { text: '      .then(res => res.', color: 'text-slate-200' },
        { text: 'json', color: 'text-blue-400' },
        { text: '())', color: 'text-slate-200' },
    ],
    [
        { text: '      .then(json => ', color: 'text-slate-200' },
        { text: 'setData', color: 'text-blue-400' },
        { text: '(json))', color: 'text-slate-200' },
    ],
    [{ text: '  }, [])', color: 'text-slate-200' }],
    [],
    [
        { text: '  return ', color: 'text-purple-400' },
        { text: '<', color: 'text-slate-400' },
        { text: 'ProjectsGrid', color: 'text-yellow-400' },
        { text: ' items={data} />', color: 'text-slate-200' },
    ],
    [{ text: '}', color: 'text-slate-200' }],
]

const fastApiLines = [
    [{ text: '# main.py — FastAPI Backend Service', color: 'text-slate-500' }],
    [
        { text: 'from ', color: 'text-purple-400' },
        { text: 'fastapi ', color: 'text-slate-200' },
        { text: 'import ', color: 'text-purple-400' },
        { text: 'FastAPI, Depends', color: 'text-slate-200' },
    ],
    [
        { text: 'from ', color: 'text-purple-400' },
        { text: 'sqlalchemy.orm ', color: 'text-slate-200' },
        { text: 'import ', color: 'text-purple-400' },
        { text: 'Session', color: 'text-slate-200' },
    ],
    [],
    [
        { text: 'app = ', color: 'text-slate-200' },
        { text: 'FastAPI', color: 'text-yellow-400' },
        { text: '(title=', color: 'text-slate-200' },
        { text: '"Fullstack API"', color: 'text-emerald-300' },
        { text: ')', color: 'text-slate-200' },
    ],
    [],
    [
        { text: '@app.get', color: 'text-cyan-400' },
        { text: '("/api/v1/projects")', color: 'text-emerald-300' },
    ],
    [
        { text: 'def ', color: 'text-purple-400' },
        { text: 'get_projects', color: 'text-blue-400' },
        { text: '(db: Session = ', color: 'text-slate-200' },
        { text: 'Depends', color: 'text-yellow-400' },
        { text: '(get_db)):', color: 'text-slate-200' },
    ],
    [
        { text: '    return ', color: 'text-purple-400' },
        { text: 'db.query(Project).filter(Project.active == ', color: 'text-slate-200' },
        { text: 'True', color: 'text-purple-400' },
        { text: ').all()', color: 'text-slate-200' },
    ],
]

const Hero = () => {
    // Typewriter state
    const [wordIndex, setWordIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    // Code window tab state
    const [activeTab, setActiveTab] = useState('react') // 'react' | 'fastapi'
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const currentWord = TYPING_WORDS[wordIndex]
        const speed = isDeleting ? 40 : 85

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentWord.substring(0, displayedText.length + 1))
                if (displayedText.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                setDisplayedText(currentWord.substring(0, displayedText.length - 1))
                if (displayedText.length - 1 === 0) {
                    setIsDeleting(false)
                    setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length)
                }
            }
        }, speed)

        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, wordIndex])

    const handleCopy = () => {
        const snippet = activeTab === 'react' ? reactSnippetRaw : fastApiSnippetRaw
        navigator.clipboard.writeText(snippet)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="home" className="scroll-mt-32 pt-36 md:pt-48 pb-20 md:pb-28 flex flex-col items-center text-center relative overflow-hidden px-6">
            {/* Status Badge */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 px-4 py-2 bg-emerald-50 rounded-full text-[13px] font-semibold text-emerald-700 flex items-center gap-2.5 border border-emerald-200/60"
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
                className="text-hero-sm md:text-hero-md lg:text-hero font-extrabold tracking-tight mb-4 max-w-4xl text-foreground"
            >
                Hi, I'm Amey Jadhav
            </motion.h1>

            {/* Subtitle / Role Pills */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center gap-2.5 mb-5"
            >
                <span className="px-4 py-1.5 text-sm font-semibold text-primary bg-blue-50 rounded-full border border-blue-100 shadow-sm">
                    Fullstack Developer
                </span>
                <span className="px-4 py-1.5 text-sm font-semibold text-foreground-secondary bg-slate-50 rounded-full border border-border-subtle">
                    B.E. in AI & ML (2026)
                </span>
            </motion.div>

            {/* Animated Typing Line */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-lg bg-slate-100/80 border border-slate-200/60 font-mono text-xs md:text-sm text-foreground-secondary"
            >
                <Terminal size={14} className="text-primary" />
                <span className="text-slate-500 font-medium">pipeline:</span>
                <span className="font-semibold text-foreground min-w-[115px] text-left">
                    {displayedText}
                    <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-primary animate-pulse align-middle" />
                </span>
            </motion.div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base md:text-lg text-foreground-secondary max-w-2xl leading-relaxed mb-8"
            >
                I build complete web applications, from responsive React interfaces to APIs and databases.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8"
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

            {/* Tech Badge Strip */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="w-full max-w-2xl mb-12"
            >
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {TECH_BADGES.map((badge) => (
                        <span
                            key={badge.name}
                            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-50 text-slate-700 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:text-primary hover:bg-blue-50/50 transition-colors duration-200"
                        >
                            {badge.name}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Dark "Code Window" Card (Fullstack at a glance visual) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl text-left rounded-2xl md:rounded-3xl bg-[#0B1120] text-slate-200 border border-slate-800 shadow-2xl overflow-hidden"
            >
                {/* macOS Window Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0F172A] border-b border-slate-800/80 select-none">
                    {/* macOS Window Controls */}
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#EF4444]/90 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-[#F59E0B]/90 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-[#10B981]/90 inline-block" />
                    </div>

                    {/* Window Tabs */}
                    <div className="flex items-center gap-1 bg-[#090D16] p-1 rounded-xl border border-slate-800/80">
                        <button
                            type="button"
                            onClick={() => setActiveTab('react')}
                            className={`px-3 py-1 text-xs font-mono font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                                activeTab === 'react'
                                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-xs'
                                    : 'text-slate-400 hover:text-slate-200'
                            }`}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            App.jsx
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('fastapi')}
                            className={`px-3 py-1 text-xs font-mono font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                                activeTab === 'fastapi'
                                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shadow-xs'
                                    : 'text-slate-400 hover:text-slate-200'
                            }`}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            main.py
                        </button>
                    </div>

                    {/* Copy action */}
                    <button
                        type="button"
                        onClick={handleCopy}
                        aria-label="Copy code snippet"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors"
                    >
                        {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                </div>

                {/* Code Window Body */}
                <div className="p-4 sm:p-5 overflow-x-auto select-text">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="space-y-1 font-mono text-xs sm:text-[13px] leading-relaxed"
                        >
                            {(activeTab === 'react' ? reactLines : fastApiLines).map((tokens, idx) => (
                                <div key={idx} className="flex min-h-[1.35rem]">
                                    <span className="w-6 sm:w-8 select-none text-slate-600 text-right pr-3 sm:pr-4 flex-shrink-0">
                                        {idx + 1}
                                    </span>
                                    <div className="flex-1 overflow-x-auto whitespace-pre">
                                        {tokens.length === 0 ? (
                                            <span>&nbsp;</span>
                                        ) : (
                                            tokens.map((tok, tIdx) => (
                                                <span key={tIdx} className={tok.color}>
                                                    {tok.text}
                                                </span>
                                            ))
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#090D16] border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                        Pipeline: active
                    </span>
                    <span>{activeTab === 'react' ? 'React 18 • Client' : 'FastAPI • REST API'}</span>
                </div>
            </motion.div>

            {/* Floating Background Shapes */}
            <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none animate-float opacity-40" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl pointer-events-none animate-float-delayed opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl pointer-events-none opacity-20" />
        </section>
    )
}

export default Hero
