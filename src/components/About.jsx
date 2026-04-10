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
          src="https://cdn.ditzdigital.my.id/files/1775829493633_lf0x1li3_148fd1ade78d7ea66ed0e88e7af173d9.jpg"
          alt="Profile Avatar"
          className="avatar"
        />
      </div>
      <h1 className="name">Aditya Nur Wahyuda</h1>
      <p className="status">Pelajar Sekolah</p>
      <p className="bio">
        <span className="typing-text">{displayedText}</span>
        <span className="cursor"></span>
      </p>
    </section>
  )
}

export default About
