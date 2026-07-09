import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen"
        >
            {/* Background Layer */}
            <div className="aurora-bg" />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="container mx-auto px-6 space-y-36 pb-20">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </motion.div>
    )
}

export default App
