import { useEffect, useRef } from 'react'
import './Hero.css'

const TYPING_WORDS = ['Developer', 'Designer', 'Creator', 'Engineer']

export default function Hero() {
  const typingRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timeout: ReturnType<typeof setTimeout>

    const type = () => {
      const current = TYPING_WORDS[wordIndex]
      if (!typingRef.current) return

      if (!deleting) {
        typingRef.current.textContent = current.slice(0, charIndex + 1)
        charIndex++
        if (charIndex === current.length) {
          timeout = setTimeout(() => { deleting = true; type() }, 2000)
          return
        }
        timeout = setTimeout(type, 100)
      } else {
        typingRef.current.textContent = current.slice(0, charIndex)
        charIndex--
        if (charIndex < 0) {
          deleting = false
          charIndex = 0
          wordIndex = (wordIndex + 1) % TYPING_WORDS.length
        }
        timeout = setTimeout(type, 50)
      }
    }

    type()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__title">
          <span className="hero__name">Modern Portfolio</span>
          <span className="hero__role">
            <span ref={typingRef} className="hero__typing" />
            <span className="hero__cursor">|</span>
          </span>
        </h1>
        <p className="hero__description">
          Building beautiful, performant web experiences with modern technologies.
          Passionate about clean code and pixel-perfect design.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">View Projects</a>
          <a href="#contact" className="hero__btn hero__btn--secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
