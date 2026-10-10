import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, Mail, Copy, Check, Terminal } from 'lucide-react'

const TYPING_WORDS = ['React UI', 'REST APIs', 'Databases', 'Deployment']

const TECH_BADGES = [
    'React',
    'Tailwind',
    'Node.js',
    'FastAPI',
    'Python',
    'MySQL',
    'MongoDB',
    'Vercel',
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
        { text: 'import ', color: 'text-sky-400' },
        { text: '{ useState, useEffect } ', color: 'text-cyan-300' },
        { text: 'from ', color: 'text-sky-400' },
        { text: "'react'", color: 'text-emerald-300' },
    ],
    [],
    [
        { text: 'export default function ', color: 'text-sky-400' },
        { text: 'App', color: 'text-sky-300' },
        { text: '() {', color: 'text-slate-300' },
    ],
    [
        { text: '  const ', color: 'text-sky-400' },
        { text: '[data, setData] = ', color: 'text-slate-300' },
        { text: 'useState', color: 'text-cyan-300' },
        { text: '([])', color: 'text-slate-300' },
    ],
    [],
    [
        { text: '  useEffect', color: 'text-cyan-300' },
        { text: '(() => {', color: 'text-slate-300' },
    ],
    [
        { text: '    fetch', color: 'text-sky-300' },
        { text: "('/api/v1/projects')", color: 'text-emerald-300' },
    ],
    [
        { text: '      .then(res => res.', color: 'text-slate-400' },
        { text: 'json', color: 'text-sky-300' },
        { text: '())', color: 'text-slate-400' },
    ],
    [
        { text: '      .then(json => ', color: 'text-slate-400' },
        { text: 'setData', color: 'text-sky-300' },
        { text: '(json))', color: 'text-slate-400' },
    ],
    [{ text: '  }, [])', color: 'text-slate-300' }],
    [],
    [
        { text: '  return ', color: 'text-sky-400' },
        { text: '<', color: 'text-slate-500' },
        { text: 'ProjectsGrid', color: 'text-cyan-300' },
        { text: ' items={data} />', color: 'text-slate-300' },
    ],
    [{ text: '}', color: 'text-slate-300' }],
]

const fastApiLines = [
    [{ text: '# main.py — FastAPI Backend Service', color: 'text-slate-500' }],
    [
        { text: 'from ', color: 'text-sky-400' },
        { text: 'fastapi ', color: 'text-slate-300' },
        { text: 'import ', color: 'text-sky-400' },
        { text: 'FastAPI, Depends', color: 'text-cyan-300' },
    ],
    [
        { text: 'from ', color: 'text-sky-400' },
        { text: 'sqlalchemy.orm ', color: 'text-slate-300' },
        { text: 'import ', color: 'text-sky-400' },
        { text: 'Session', color: 'text-cyan-300' },
    ],
    [],
    [
        { text: 'app = ', color: 'text-slate-300' },
        { text: 'FastAPI', color: 'text-cyan-300' },
        { text: '(title=', color: 'text-slate-400' },
        { text: '"Fullstack API"', color: 'text-emerald-300' },
        { text: ')', color: 'text-slate-400' },
    ],
    [],
    [
        { text: '@app.get', color: 'text-sky-400' },
        { text: '("/api/v1/projects")', color: 'text-emerald-300' },
    ],
    [
        { text: 'def ', color: 'text-sky-400' },
        { text: 'get_projects', color: 'text-sky-300' },
        { text: '(db: Session = ', color: 'text-slate-400' },
        { text: 'Depends', color: 'text-cyan-300' },
        { text: '(get_db)):', color: 'text-slate-400' },
    ],
    [
        { text: '    return ', color: 'text-sky-400' },
        { text: 'db.query(Project).filter(Project.active == ', color: 'text-slate-300' },
        { text: 'True', color: 'text-sky-400' },
        { text: ').all()', color: 'text-slate-300' },
    ],
]

const Hero = () => {
    // Typewriter state
    const [wordIndex, setWordIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    // Code window tab state
    const [activeTab, setActiveTab] = useState('react')
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
        <section id="home" className="scroll-mt-24 pt-32 md:pt-40 pb-20 md:pb-28 bg-bg transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
                    
                    {/* Left Column: Editorial Intro */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        {/* Status Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card font-mono text-[0.75rem] uppercase tracking-[0.08em] font-medium text-text-muted">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                            Available for Opportunities
                        </div>

                        {/* Title */}
                        <h1 className="text-h1 mb-4 text-text">
                            Amey Jadhav
                        </h1>

                        {/* Role Pills */}
                        <div className="flex flex-wrap items-center gap-2 mb-5">
                            <span className="px-2.5 py-1 font-mono text-[0.75rem] uppercase tracking-[0.08em] font-medium rounded-md border border-accent-border bg-accent-subtle text-accent">
                                Fullstack Developer
                            </span>
                            <span className="px-2.5 py-1 font-mono text-[0.75rem] uppercase tracking-[0.08em] font-medium rounded-md border border-border bg-bg-alt text-text-muted">
                                B.E. in AI & ML (2026)
                            </span>
                        </div>

                        {/* Typewriter Pipeline */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-md border border-border bg-card font-mono text-[0.75rem] tracking-[0.08em] font-medium text-text-muted">
                            <Terminal size={13} className="text-accent" />
                            <span className="text-text-muted uppercase">pipeline:</span>
                            <span className="font-medium text-text min-w-[110px] text-left">
                                {displayedText}
                                <span className="inline-block w-1.5 h-3 ml-0.5 bg-accent animate-pulse align-middle" />
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-base text-text-muted leading-[1.7] mb-8 max-w-[65ch]">
                            I build complete web applications, from responsive React interfaces to APIs and databases.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
                            <a
                                href="/resume/Amey_Jadhav_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-accent-contrast rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-150"
                            >
                                <Download size={15} />
                                Download Resume
                            </a>

                            <a
                                href="#projects"
                                className="px-5 py-2.5 bg-card border border-border text-text hover:border-accent rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-150"
                            >
                                View Projects
                                <ArrowRight size={15} />
                            </a>

                            <a
                                href="#contact"
                                className="px-5 py-2.5 bg-card border border-border text-text-muted hover:text-text hover:border-accent rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-150"
                            >
                                <Mail size={15} />
                                Contact Me
                            </a>
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] font-medium text-text-muted mr-1.5">Stack:</span>
                            {TECH_BADGES.map((name) => (
                                <span
                                    key={name}
                                    className="px-2.5 py-1 font-mono text-[0.75rem] font-medium rounded-md bg-card border border-border text-text-muted hover:text-text hover:border-accent transition-colors duration-150"
                                >
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Editorial Dark Code Window */}
                    <div className="lg:col-span-5 w-full">
                        <div className="w-full text-left rounded-xl bg-[#0D1117] text-slate-200 border border-[#21262D] overflow-hidden shadow-subtle">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-[#21262D] select-none">
                                {/* Window dots */}
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
                                </div>

                                {/* Tab Toggles */}
                                <div className="flex items-center gap-1 bg-[#0D1117] p-0.5 rounded-md border border-[#21262D]">
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('react')}
                                        className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-colors ${
                                            activeTab === 'react'
                                                ? 'bg-[#21262D] text-sky-400'
                                                : 'text-slate-400 hover:text-slate-200'
                                        }`}
                                    >
                                        App.jsx
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('fastapi')}
                                        className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-colors ${
                                            activeTab === 'fastapi'
                                                ? 'bg-[#21262D] text-sky-400'
                                                : 'text-slate-400 hover:text-slate-200'
                                        }`}
                                    >
                                        main.py
                                    </button>
                                </div>

                                {/* Copy action */}
                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    aria-label="Copy snippet"
                                    className="p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-[#21262D] transition-colors"
                                >
                                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                                </button>
                            </div>

                            {/* Code Window Body */}
                            <div className="p-4 overflow-x-auto select-text font-mono text-xs leading-relaxed">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.12 }}
                                        className="space-y-1"
                                    >
                                        {(activeTab === 'react' ? reactLines : fastApiLines).map((tokens, idx) => (
                                            <div key={idx} className="flex min-h-[1.25rem]">
                                                <span className="w-6 select-none text-slate-600 text-right pr-3 flex-shrink-0">
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
                            <div className="flex items-center justify-between px-4 py-2 bg-[#161B22] border-t border-[#21262D] text-[11px] font-mono text-slate-400">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block animate-pulse" />
                                    fullstack: synced
                                </span>
                                <span>{activeTab === 'react' ? 'Client' : 'API'}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
