import { useEffect, useState } from 'react'
import {
  profile,
  about,
  education,
  experience,
  projects,
  skills,
  socials,
} from './data.js'
import profileImg from './assets/profile.jpg'
import { SocialIcon } from './SocialIcon.jsx'
import './App.css'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const FORMSPARK_URL = 'https://submit-form.com/CARCkqSD'

function useActiveSection() {
  const [active, setActive] = useState(NAV[0].id)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    NAV.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])
  return active
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

function Entry({ title, org, date, detail, bullets }) {
  return (
    <div className="entry">
      <div className="entry-head">
        <span className="entry-title">{title}</span>
        {date && <span className="entry-date">{date}</span>}
      </div>
      {org && (
        <div className="entry-sub">
          <em>{org}</em>
        </div>
      )}
      {detail && <p className="entry-detail-block">{detail}</p>}
      {bullets && (
        <ul className="bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    try {
      const res = await fetch(FORMSPARK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, message }),
      })
      if (!res.ok) throw new Error('Failed')
      setEmail('')
      setMessage('')
      setStatus('ok')
    } catch {
      setStatus('err')
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        <span>Email</span>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <span>Message</span>
        <textarea
          placeholder="What's on your mind?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
        />
      </label>
      <button type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send message →'}
      </button>
      {status === 'ok' && <p className="form-msg ok">✓ Message sent — talk soon.</p>}
      {status === 'err' && (
        <p className="form-msg err">Something went wrong. Try emailing directly.</p>
      )}
    </form>
  )
}

export default function App() {
  const active = useActiveSection()

  return (
    <div className="layout">
      <aside className="sidebar">
        <img src={profileImg} alt={profile.name} className="avatar" />
        <h1 className="name">{profile.name}</h1>
        <p className="tagline">Software Engineer</p>
        <div className="contact">
          {profile.contact.map((c, i) => (
            <div key={i} className="contact-line">
              {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
            </div>
          ))}
        </div>

        <div className="socials">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={s.name}
              className="social-btn"
            >
              <SocialIcon name={s.name} />
            </a>
          ))}
        </div>

        <nav className="nav" aria-label="Section navigation">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`nav-link ${active === n.id ? 'active' : ''}`}
            >
              <span className="nav-indicator" />
              <span className="nav-label">{n.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <main className="main">
        <Section id="about" title="About Me">
          {about.map((p, i) => (
            <p key={i} className="about-p">{p}</p>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((e, i) => (
            <Entry key={i} {...e} />
          ))}
        </Section>

        <Section id="skills" title="Skills">
          {skills.map((s, i) => (
            <p className="skill-row" key={i}>
              <strong>{s.label}</strong>: {s.items}
            </p>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          {projects.map((p, i) => (
            <article className="project" key={i}>
              <div className="project-head">
                <h3 className="project-title">{p.title}</h3>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="project-link"
                  >
                    <SocialIcon name="GitHub" />
                  </a>
                )}
              </div>
              {p.description && <p className="project-desc">{p.description}</p>}
              {p.bullets && (
                <ul className="bullets">
                  {p.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
              {p.stack && (
                <ul className="project-stack">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </Section>

        <Section id="education" title="Education">
          {education.map((e, i) => (
            <Entry key={i} {...e} />
          ))}
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-blurb">
            Open to interesting collaborations, side projects, or a chat about
            distributed systems, identity, or music. Drop a message.
          </p>
          <ContactForm />
        </Section>
      </main>
    </div>
  )
}
