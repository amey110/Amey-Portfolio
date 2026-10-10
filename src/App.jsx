import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen bg-bg text-text transition-colors duration-200"
        >
            {/* Navigation */}
            <Navbar />

            {/* Alternating Sections */}
            <main className="space-y-0 pb-0">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </motion.div>
    )
}

export default App
