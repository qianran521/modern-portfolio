import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (Demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's build something together</p>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__item">
              <span className="contact__icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>hello@example.com</p>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Remote / Worldwide</p>
              </div>
            </div>
            <div className="contact__socials">
              <a href="https://github.com/qianran521" className="contact__social" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" className="contact__social">LinkedIn</a>
              <a href="#" className="contact__social">Twitter</a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What's on your mind?"
                rows={5}
                required
              />
            </div>
            <button type="submit" className="contact__submit">Send Message</button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__container">
          <p className="footer__copy">© 2026 Modern Portfolio. Built with React + TypeScript.</p>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
