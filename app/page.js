'use client'
import { useEffect, useRef } from 'react'

const posts = [
  {
    id: 1,
    tag: 'AI', tagClass: 'tag-ai',
    title: 'Neural Architectures at the Edge of Human Cognition',
    excerpt: 'How transformer models are rewriting the boundary between machine inference and biological reasoning — and what it means for the next decade of human-AI collaboration.',
    date: '2026.04.08',
    read: '7 MIN READ',
    size: 'featured',
  },
  {
    id: 2,
    tag: 'CYBER', tagClass: 'tag-cyber',
    title: 'Zero-Trust Networks in a Post-Quantum World',
    excerpt: 'Cryptographic assumptions we built the internet on are collapsing. Here is how forward-thinking architects are already building the next layer of defense.',
    date: '2026.04.05',
    read: '5 MIN READ',
    size: 'side',
  },
  {
    id: 3,
    tag: 'FUTURE', tagClass: 'tag-future',
    title: 'The Datafication of Consciousness',
    excerpt: 'Brain-computer interfaces inch closer to consumer reality, and with them arrive questions we are not ready to answer.',
    date: '2026.04.02',
    read: '6 MIN READ',
    size: 'small',
  },
  {
    id: 4,
    tag: 'AI', tagClass: 'tag-ai',
    title: 'Emergent Behavior in Large Language Systems',
    excerpt: 'Capabilities that appear without explicit training — and why researchers are both thrilled and alarmed.',
    date: '2026.03.30',
    read: '4 MIN READ',
    size: 'small',
  },
  {
    id: 5,
    tag: 'NET', tagClass: 'tag-net',
    title: 'Decentralized Identity and the End of Passwords',
    excerpt: 'Web3 authentication protocols are maturing fast. The username/password paradigm has an expiry date.',
    date: '2026.03.27',
    read: '5 MIN READ',
    size: 'small',
  },
]

const topics = [
  { name: 'Artificial Intelligence', count: '024' },
  { name: 'Cybersecurity', count: '018' },
  { name: 'Quantum Computing', count: '011' },
  { name: 'Neural Interfaces', count: '009' },
  { name: 'Decentralized Systems', count: '015' },
  { name: 'Space & Deep Tech', count: '007' },
]

const tickerItems = [
  { label: 'LATEST:', text: 'Neural Architectures at the Edge of Human Cognition' },
  { label: 'TRENDING:', text: 'Zero-Trust Networks in a Post-Quantum World' },
  { label: 'FEATURED:', text: 'The Datafication of Consciousness' },
  { label: 'NEW:', text: 'Emergent Behavior in Large Language Systems' },
  { label: 'LATEST:', text: 'Neural Architectures at the Edge of Human Cognition' },
  { label: 'TRENDING:', text: 'Zero-Trust Networks in a Post-Quantum World' },
  { label: 'FEATURED:', text: 'The Datafication of Consciousness' },
  { label: 'NEW:', text: 'Emergent Behavior in Large Language Systems' },
]

export default function Home() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      {/* Cursor */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="nav-logo">NEX<span>_</span>US</a>
        <ul className="nav-links">
          <li><a href="#">// HOME</a></li>
          <li><a href="#">// TOPICS</a></li>
          <li><a href="#">// ARCHIVE</a></li>
          <li><a href="#">// ABOUT</a></li>
        </ul>
        <div className="nav-status">
          <span className="status-dot" />
          LIVE FEED ACTIVE
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-orb" />
        <div className="hero-bg-orb2" />

        {/* Hexagon SVG decoration */}
        <div className="hex-deco">
          <svg width="320" height="360" viewBox="0 0 320 360" fill="none">
            <polygon points="160,10 310,90 310,270 160,350 10,270 10,90"
              stroke="rgba(0,245,255,1)" strokeWidth="1" fill="none" />
            <polygon points="160,40 280,110 280,250 160,320 40,250 40,110"
              stroke="rgba(0,136,255,0.5)" strokeWidth="0.5" fill="none" />
            <polygon points="160,80 250,133 250,227 160,280 70,227 70,133"
              stroke="rgba(0,245,255,0.3)" strokeWidth="0.5" fill="none" />
            <circle cx="160" cy="180" r="6" fill="rgba(0,245,255,0.8)" />
            <circle cx="160" cy="180" r="20" stroke="rgba(0,245,255,0.2)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">SIGNAL RECEIVED // 2026.04.09</div>
          <h1 className="hero-title">
            <span className="line1">DISPATCHES FROM</span>
            <span className="line1">THE EDGE OF</span>
            <span className="glitch-word" data-text="TOMORROW">TOMORROW</span>
          </h1>
          <p className="hero-desc">
            Tech, AI, and the future — dissected with precision. 
            No noise, only signal. Cutting-edge analysis for those 
            who refuse to be left behind.
          </p>
          <div className="hero-actions">
            <a href="#posts" className="btn-primary">ACCESS FEED</a>
            <a href="#subscribe" className="btn-outline">JOIN NETWORK</a>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker">
          {tickerItems.map((item, i) => (
            <span key={i} className="ticker-item">
              <span>{item.label}</span>{item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Main Posts */}
      <section className="section" id="posts">
        <div className="section-header">
          <h2 className="section-title">// LATEST <span className="accent">TRANSMISSIONS</span></h2>
          <span className="section-count">ENTRIES_005 / PAGE_01</span>
        </div>

        <div className="content-layout">
          {/* Blog Grid */}
          <div>
            <div className="blog-grid" style={{ marginBottom: '2px' }}>
              {posts.slice(0, 2).map(post => (
                <article key={post.id} className={`post-card ${post.size}`}>
                  <div className="corner" />
                  <span className={`post-tag ${post.tagClass}`}>{post.tag}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read">{post.read}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="blog-grid">
              {posts.slice(2).map(post => (
                <article key={post.id} className={`post-card ${post.size}`}>
                  <div className="corner" />
                  <span className={`post-tag ${post.tagClass}`}>{post.tag}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read">{post.read}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-widget">
              <div className="widget-title">// SIGNAL STRENGTH</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div className="signal-bars">
                  <div className="signal-bar active" />
                  <div className="signal-bar active" />
                  <div className="signal-bar active" />
                  <div className="signal-bar active" />
                </div>
                <span style={{ fontFamily: "'Share Tech Mono'", fontSize: '0.7rem', color: 'var(--neon-green)', letterSpacing: '0.15em' }}>OPTIMAL</span>
              </div>
              <div style={{ fontFamily: "'Share Tech Mono'", fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', lineHeight: '2' }}>
                <div>UPTIME: 99.97%</div>
                <div>ARTICLES THIS MONTH: 14</div>
                <div>READERS ONLINE: 2,847</div>
                <div>LAST UPDATE: 2026.04.09</div>
              </div>
            </div>

            <div className="sidebar-widget">
              <div className="widget-title">// TOPICS</div>
              <ul className="topic-list">
                {topics.map((topic, i) => (
                  <li key={i} className="topic-item">
                    <span className="topic-name">{topic.name}</span>
                    <span className="topic-count">{topic.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <div className="widget-title">// SYSTEM LOG</div>
              {[
                'Deploying next post batch...',
                'Indexing new entries [OK]',
                'Cache warmed successfully',
                'RSS feed synchronized',
                'Security scan complete',
              ].map((log, i) => (
                <div key={i} style={{
                  fontFamily: "'Share Tech Mono'",
                  fontSize: '0.65rem',
                  color: i === 0 ? 'var(--neon-cyan)' : 'var(--text-dim)',
                  letterSpacing: '0.08em',
                  padding: '6px 0',
                  borderBottom: '1px solid rgba(0,245,255,0.04)',
                  display: 'flex',
                  gap: '10px',
                }}>
                  <span style={{ color: 'var(--neon-green)', opacity: 0.6 }}>&gt;</span>
                  {log}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Subscribe */}
      <section className="subscribe-section" id="subscribe">
        <div className="subscribe-box">
          <div>
            <div className="subscribe-label">// UPLINK PROTOCOL</div>
            <h2 className="subscribe-title">
              STAY AHEAD OF<br />
              THE <span className="accent">SIGNAL</span>
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: "'Rajdhani'", fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '28px', letterSpacing: '0.03em', lineHeight: '1.7' }}>
              Weekly transmissions. No spam, no noise — only the most 
              critical developments from the frontier of technology.
            </p>
            <div className="input-row">
              <input
                type="email"
                className="email-input"
                placeholder="ENTER_YOUR@EMAIL.COM"
              />
              <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                UPLINK
              </button>
            </div>
            <div style={{ fontFamily: "'Share Tech Mono'", fontSize: '0.6rem', color: 'var(--text-dim)', marginTop: '12px', letterSpacing: '0.15em' }}>
              ENCRYPTED // NO TRACKING // UNSUBSCRIBE ANYTIME
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">NEX_US // DIGITAL CHRONICLES</div>
        <span className="footer-copy">© 2026 NEXUS. ALL RIGHTS RESERVED.</span>
        <ul className="footer-links">
          <li><a href="#">PRIVACY</a></li>
          <li><a href="#">RSS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </footer>
    </>
  )
}
