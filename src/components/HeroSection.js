import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
             <video src="/videos/video-1.mp4" autoPlay loop muted/> 
            <h1> QUEUEING SYSTEM ACCESSIBLE FOR E-CONSUMERS OF MOELCI - I CALAMBA</h1>
            <p>A virtual queue just for you.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    JOIN QUEUE
                </Button>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    OTHER SERVICES 
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
