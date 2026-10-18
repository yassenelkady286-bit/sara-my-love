import AnniversaryTimer from "@/components/AnniversaryTimer";

export default function LovePage() {
  return (
    <main className="love-page">
      <nav className="topbar">
        <a className="brand" href="#top">S <span>♡</span> S</a>
        <span className="topbar-note">A story that is still being written</span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <p className="eyebrow">TO MY SARA, MY HOME</p>
        <h1>Every love story is beautiful,<br /><em>but ours is my favorite.</em></h1>
        <p className="hero-copy">If I could choose a thousand times, in a thousand lifetimes,<br className="desktop-break" /> I would still find my way back to you.</p>
        <div className="hero-heart" aria-hidden="true">♥</div>
        <a className="scroll-link" href="#our-time">SCROLL A LITTLE, MY LOVE <span>↓</span></a>
      </section>

      <section className="timer-section" id="our-time">
        <p className="eyebrow">OUR LITTLE FOREVER STARTED</p>
        <h2>Since the day <em>we became us</em></h2>
        <p className="date-line">11 · 11 · 2024</p>
        <AnniversaryTimer />
        <p className="timer-note">And somehow, every second makes me love you more.</p>
      </section>

      <section className="letter-section">
        <div className="letter-card">
          <span className="letter-mark">“</span>
          <p className="eyebrow">A LETTER FOR YOU</p>
          <h2>Dear Sara,</h2>
          <p className="letter-body">
            You turned an ordinary date into the beginning of one of my favorite things in this world: us.
            This little website is just a tiny place to keep a big feeling. No timer could ever count all
            the reasons I love you, but I wanted it to count every second I get to be yours.
          </p>
          <p className="signature">Forever choosing you, <span>♡</span></p>
        </div>
      </section>

      <section className="memory-section">
        <p className="eyebrow">MORE OF OUR STORY</p>
        <h2>Our memories, <em>our little universe.</em></h2>
        <p className="memory-intro">This space is waiting for your favorite photos, our funniest moments, and the memories only we understand.</p>
        <div className="memory-grid">
          <div className="memory-tile tile-one"><span>01</span><p>The day it all began</p><small>11 November 2024</small></div>
          <div className="memory-tile tile-two"><span>02</span><p>My favorite smile</p><small>A moment to remember</small></div>
          <div className="memory-tile tile-three"><span>03</span><p>To many more</p><small>Our story goes on...</small></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-heart">♥</div>
        <p>Made for Sara, with a love that keeps counting.</p>
        <span>11.11.2024 — ∞</span>
      </footer>
    </main>
  );
}
