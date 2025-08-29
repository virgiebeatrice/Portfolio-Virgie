import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import SkillSection from './components/SkillSection.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Background from './components/Background.jsx'


import { motion, useSpring, useScroll } from "motion/react"


export default function App(){
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 100,
        restDelta: 0.001,
    })
    return(
        <>
            <motion.div
                className='z-300 bg-mandarin'
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    originX: 0,
                }}
            />
                           
            <Background>
                
                <Navbar />
                <HeroSection />
                <AboutSection />
                <ProjectSection />
                <ExperienceSection />
                <SkillSection />
                <Footer />
            </Background>
                
            


            
        </>
    )
}