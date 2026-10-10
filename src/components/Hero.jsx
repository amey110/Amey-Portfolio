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
    [{ text: '// App.jsx — React Client', color: 'text-stone-500' }],
    [
        { text: 'import ', color: 'text-orange-400' },
        { text: '{ useState, useEffect } ', color: 'text-stone-200' },
        { text: 'from ', color: 'text-orange-400' },
        { text: "'react'", color: 'text-amber-300' },
    ],
    [],
    [
        { text: 'export default function ', color: 'text-orange-400' },
        { text: 'App', color: 'text-stone-100' },
        { text: '() {', color: 'text-stone-300' },
    ],
    [
        { text: '  const ', color: 'text-orange-400' },
        { text: '[data, setData] = ', color: 'text-stone-300' },
        { text: 'useState', color: 'text-amber-400' },
        { text: '([])', color: 'text-stone-300' },
    ],
    [],
    [
        { text: '  useEffect', color: 'text-amber-400' },
        { text: '(() => {', color: 'text-stone-300' },
    ],
    [
        { text: '    fetch', color: 'text-stone-100' },
        { text: "('/api/v1/projects')", color: 'text-amber-300' },
    ],
    [
        { text: '      .then(res => res.', color: 'text-stone-400' },
        { text: 'json', color: 'text-stone-100' },
        { text: '())', color: 'text-stone-400' },
    ],
    [
        { text: '      .then(json => ', color: 'text-stone-400' },
        { text: 'setData', color: 'text-stone-100' },
        { text: '(json))', color: 'text-stone-400' },
    ],
    [{ text: '  }, [])', color: 'text-stone-300' }],
    [],
    [
        { text: '  return ', color: 'text-orange-400' },
        { text: '<', color: 'text-stone-500' },
        { text: 'ProjectsGrid', color: 'text-orange-300' },
        { text: ' items={data} />', color: 'text-stone-300' },
    ],
    [{ text: '}', color: 'text-stone-300' }],
]

const fastApiLines = [
    [{ text: '# main.py — FastAPI Backend Service', color: 'text-stone-500' }],
    [
        { text: 'from ', color: 'text-orange-400' },
        { text: 'fastapi ', color: 'text-stone-300' },
        { text: 'import ', color: 'text-orange-400' },
        { text: 'FastAPI, Depends', color: 'text-stone-200' },
    ],
    [
        { text: 'from ', color: 'text-orange-400' },
        { text: 'sqlalchemy.orm ', color: 'text-stone-300' },
        { text: 'import ', color: 'text-orange-400' },
        { text: 'Session', color: 'text-stone-200' },
    ],
    [],
    [
        { text: 'app = ', color: 'text-stone-300' },
        { text: 'FastAPI', color: 'text-amber-400' },
        { text: '(title=', color: 'text-stone-400' },
        { text: '"Fullstack API"', color: 'text-amber-300' },
        { text: ')', color: 'text-stone-400' },
    ],
    [],
    [
        { text: '@app.get', color: 'text-orange-400' },
        { text: '("/api/v1/projects")', color: 'text-amber-300' },
    ],
    [
        { text: 'def ', color: 'text-orange-400' },
        { text: 'get_projects', color: 'text-stone-100' },
        { text: '(db: Session = ', color: 'text-stone-400' },
        { text: 'Depends', color: 'text-amber-400' },
        { text: '(get_db)):', color: 'text-stone-400' },
    ],
    [
        { text: '    return ', color: 'text-orange-400' },
        { text: 'db.query(Project).filter(Project.active == ', color: 'text-stone-300' },
        { text: 'True', color: 'text-orange-400' },
        { text: ').all()', color: 'text-stone-300' },
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
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-medium text-text-muted">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
                            Available for Opportunities
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text font-display">
                            Amey Jadhav
                        </h1>

                        {/* Role Pills */}
                        <div className="flex flex-wrap items-center gap-2 mb-5">
                            <span className="px-2.5 py-1 text-xs font-semibold rounded-md border border-accent/40 bg-accent/10 text-accent">
                                Fullstack Developer
                            </span>
                            <span className="px-2.5 py-1 text-xs font-medium rounded-md border border-border bg-bg-alt text-text-muted">
                                B.E. in AI & ML (2026)
                            </span>
                        </div>

                        {/* Typewriter Pipeline */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-md border border-border bg-card font-mono text-xs text-text-muted">
                            <Terminal size={13} className="text-accent" />
                            <span className="text-text-muted">pipeline:</span>
                            <span className="font-semibold text-text min-w-[110px] text-left">
                                {displayedText}
                                <span className="inline-block w-1.5 h-3 ml-0.5 bg-accent animate-pulse align-middle" />
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg text-text-muted leading-relaxed mb-8 max-w-xl">
                            I build complete web applications, from responsive React interfaces to APIs and databases.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
                            <a
                                href="/resume/Amey_Jadhav_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-150"
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
                            <span className="text-xs font-medium text-text-muted mr-1.5">Stack:</span>
                            {TECH_BADGES.map((name) => (
                                <span
                                    key={name}
                                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-card border border-border text-text-muted hover:text-text hover:border-accent transition-colors duration-150"
                                >
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Editorial Dark Code Window */}
                    <div className="lg:col-span-5 w-full">
                        <div className="w-full text-left rounded-xl bg-[#141414] text-stone-200 border border-[#2E2E2E] overflow-hidden shadow-subtle">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#1C1C1C] border-b border-[#2E2E2E] select-none">
                                {/* Window dots */}
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
                                </div>

                                {/* Tab Toggles */}
                                <div className="flex items-center gap-1 bg-[#121212] p-0.5 rounded-md border border-[#2E2E2E]">
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('react')}
                                        className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-colors ${
                                            activeTab === 'react'
                                                ? 'bg-[#242424] text-orange-300'
                                                : 'text-stone-400 hover:text-stone-200'
                                        }`}
                                    >
                                        App.jsx
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('fastapi')}
                                        className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-colors ${
                                            activeTab === 'fastapi'
                                                ? 'bg-[#242424] text-orange-300'
                                                : 'text-stone-400 hover:text-stone-200'
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
                                    className="p-1.5 rounded text-stone-400 hover:text-stone-100 hover:bg-[#2A2A2A] transition-colors"
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
                                                <span className="w-6 select-none text-stone-600 text-right pr-3 flex-shrink-0">
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
                            <div className="flex items-center justify-between px-4 py-2 bg-[#181818] border-t border-[#2E2E2E] text-[11px] font-mono text-stone-500">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
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
