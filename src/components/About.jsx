import { useState, useEffect } from 'react'
import '../styles/About.css'

function About() {
  const quote = "It always seems impossible until it's done"
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < quote.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + quote[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <section id="about" className="section about">
      <div className="profile-container">
        <img
          src="https://img2.pixhost.to/images/6703/708085391_image.jpg"
          alt="Profile Avatar"
          className="avatar"
        />
      </div>
      <h1 className="name">Muhammad Fikri</h1>
      <p className="status">Pelajar Sekolah</p>
      <p className="bio">
        <span className="typing-text">{displayedText}</span>
        <span className="cursor"></span>
      </p>
    </section>
  )
}

export default About
