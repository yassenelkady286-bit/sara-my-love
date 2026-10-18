
import AnniversaryTimer from "@/components/AnniversaryTimer";

const memories = [
  {
    src: "https://raw.githubusercontent.com/yassenelkady286-bit/sara-my-love/main/WhatsApp%20Image%202026-10-18%20at%208.27.27%20PM.jpeg",
    number: "01",
    title: "The day it all began",
    caption: "11 November 2024",
  },
  {
    src: "https://raw.githubusercontent.com/yassenelkady286-bit/sara-my-love/main/WhatsApp%20Image%202026-10-18%20at%208.26.49%20PM.jpeg",
    number: "02",
    title: "My favorite smile",
    caption: "A moment to remember",
  },
];

export default function LovePage() {
  return (
    <main className="love-page">
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="S heart Y">
          S <span>♡</span> Y
        </a>

        <span className="topbar-note">
          A story that is still being written
        </span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow" />

        <p className="eyebrow">TO MY SARA, MY HOME</p>

        <h1>
          Every love story is beautiful,
          <br />
          <em>but ours is my favorite.</em>
        </h1>

        <p className="hero-copy">
          If I could choose a thousand times, in a thousand lifetimes,
          <br className="desktop-break" /> I would still find my way back to
          you.
        </p>

        <div className="hero-heart" aria-hidden="true">
          ♥
        </div>

        <a className="scroll-link" href="#our-time">
          SCROLL A LITTLE, MY LOVE <span>↓</span>
        </a>
      </section>

      <section className="timer-section" id="our-time">
        <p className="eyebrow">OUR LITTLE FOREVER STARTED</p>

        <h2>
          Since the day <em>we became us</em>
        </h2>

        <p className="date-line">11 · 11 · 2024</p>

        <AnniversaryTimer />

        <p className="timer-note">
          And somehow, every second makes me love you more.
        </p>
      </section>

      <section className="letter-section">
        <div className="letter-card">
          <span className="letter-mark">“</span>

          <p className="eyebrow">A LETTER FOR YOU</p>

          <h2>Dear Eng Sara,</h2>

          <p className="letter-body">
            My fav Eng sara: Ahla Bashmohndsa F El 3alam Klo. اول حاجه
            حقك عليا انا مقصر معاكي فوق الوصف انا عارف والله بس انا والله
            من غير قصدي الدنيا مخبطه معايا جامد بس انشاءالله كل ال جاي
            خير و حلو والله انا بحبك اكتر من اي حاجه ف الدنيا كلها
            وانشاءالله نكمل عمرنا كله مع بعض احلى يوم ف حياتي كلها يوم م
            عرفتك و شوفتك بجد واحلى ايام حياتي ال عشناها انا وانتي مع بعض
            ف المدرسه كل حاجه معاكي حلوه وانشاءالله كل ال جاي مع بعض حلو
            وحشتيني اوي ونتقابل ع خير ي احلى بشمهندسه ف الدنيا كلها بحبك
            اوي.
          </p>

          <p className="signature">
            Forever choosing you, <span>♡</span>
          </p>
        </div>
      </section>

      <section className="memory-section" id="memories">
        <p className="eyebrow">MORE OF OUR STORY</p>

        <h2>
          Our memories, <em>our little universe.</em>
        </h2>

        <p className="memory-intro">
          Two little pieces of our story, kept here just for you.
        </p>

        <div className="memory-grid">
          {memories.map((memory) => (
            <article className="memory-tile" key={memory.src}>
              <img
                className="memory-photo"
                src={memory.src}
                alt={memory.title}
                loading="lazy"
              />

              <div className="memory-caption">
                <span>{memory.number}</span>
                <p>{memory.title}</p>
                <small>{memory.caption}</small>
              </div>
            </article>
          ))}
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
