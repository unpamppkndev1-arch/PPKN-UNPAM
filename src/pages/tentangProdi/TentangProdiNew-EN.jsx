import { useEffect, useRef, useState } from "react";
import "../css/TentangProdiNew.css";

import heroImage from "../../assets/GedungdanFasilitasUNPAM/Pendidikan_Pancasila_dan_Kewarganegaraan.jpg";
import kaprodiImage from "../../assets/Bu_ichwani_with_text.webp";

/* =====================================================================
   CONFIGURATION — change all content & links here
   ===================================================================== */
const PRODI = {
  nama: "Pancasila and Civic Education",
  singkatan: "PPKn",
  fakultas: "Faculty of Teacher Training and Education",
  universitas: "Pamulang University",
  heroImage,
  kaprodiImage,
  videoId: "t0TRfkNVWJk",
  deskripsi:
    "The Pancasila and Civic Education Study Program (PPKn) is one of the flagship study programs under the Faculty of Teacher Training and Education (FKIP) at Pamulang University. The study program was officially established on July 25, 2008, based on the Decree of the Directorate General of Higher Education No. 2359/D/T/2008.",
  keunggulan: [
    "Officially established under the Decree of the Directorate General of Higher Education No. 2359/D/T/2008",
    "Under the auspices of the Faculty of Teacher Training and Education (FKIP)",
    "Focused on character education, Pancasila, and civic education",
  ],
  kaprodi: {
    jabatan: "Head of Study Program",
    nama: "Dr. Ichwani Siti Utami, S.Pd., M.H.",
    deskripsi:
      "Dr. Ichwani Siti Utami, S.Pd., M.H. is the head of the Pancasila and Civic Education Study Program at Pamulang University.",
  },
  lokasi: {
    nama: "Campus 2 (UNPAM Viktor)",
    alamat:
      "Jl. Puspitek, Buaran, Pamulang District, South Tangerang City, Banten 15310",
    jam: "Monday – Saturday · 09.00 – 18.00 WIB",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.531125393861!2d106.69161309884123!3d-6.345802704278216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5a6e26dc3cd%3A0xccd6344b8021119d!2sUniversitas%20Pamulang%20Kampus%202%20(UNPAM%20Viktor)!5e0!3m2!1sid!2sid!4v1786337962117!5m2!1sid!2sid",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Universitas+Pamulang+Kampus+2+Viktor",
  },
  tautan: {
    sambutan: "https://ppkn.unpam.ac.id/sambutan-ketua-program-studi",
    sejarah:
      "https://ppkn.unpam.ac.id/berita/posts/informasi-umum-dan-sejarah-unpam-ppkn",
    pendaftaran: "https://pmb.unpam.ac.id/", // TODO: adjust with the official admission link
  },
};

/* ⚠️ Adjust the numbers with the official study program data */
const STATISTIK = [
  { angka: 2008, suffix: "", label: "Year Founded" },
  { angka: 15, suffix: "+", label: "Years of Service" },
  { angka: 40, suffix: "+", label: "Lecturers & Educators" },
  { angka: 98, suffix: "%", label: "Alumni Employed" },
];

/* =====================================================================
   ICONS — inline SVG, no external dependency
   ===================================================================== */
const Icons = {
  Arrow: () => (
    <svg
      className="ic"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
  ArrowUp: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  ),
  Check: () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Pin: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Play: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.86l10.4-6.86a1 1 0 0 0 0-1.72L9.56 4.28A1 1 0 0 0 8 5.14Z" />
    </svg>
  ),
  Cap: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10v6" />
      <path d="m2 10 10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
};

/* =====================================================================
   HOOKS
   ===================================================================== */

/** Detect when an element enters the viewport (once) — for reveal animations */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

/** Count-up number animation with easing */
function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

/** Smooth parallax effect (throttled with rAF) */
function useParallax(factor = 0.28) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return offset * factor;
}

/* =====================================================================
   BASE COMPONENTS
   ===================================================================== */

/** Animation wrapper when an element enters the viewport */
function Reveal({ children, delay = 0, variant = "up", className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${
        inView ? "is-visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <Reveal
      className={`section-heading ${light ? "section-heading--light" : ""}`}
    >
      <span className="section-heading__eyebrow">
        <span className="section-heading__line" />
        {eyebrow}
        <span className="section-heading__line" />
      </span>
      <h2 className="section-heading__title">{title}</h2>
    </Reveal>
  );
}

/* =====================================================================
   SECTION 1 — HERO (parallax + breadcrumb + glassmorphism badge)
   ===================================================================== */
function Hero() {
  const y = useParallax(0.28);

  return (
    <header className="hero" id="beranda">
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(${PRODI.heroImage})`,
          transform: `translate3d(0, ${y}px, 0) scale(1.12)`,
        }}
        role="img"
        aria-label={`Building of ${PRODI.universitas}`}
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <nav className="hero__breadcrumb" aria-label="Breadcrumb">
          <span>Home</span>
          <span className="sep">/</span>
          <span>{PRODI.fakultas}</span>
          <span className="sep">/</span>
          <span>{PRODI.singkatan} Study Program</span>
        </nav>

        <span className="hero__badge">
          <Icons.Cap />
          {PRODI.fakultas} · {PRODI.universitas}
        </span>

        <h1 className="hero__title">
          Study Program
          <span className="hero__accent">{PRODI.nama}</span>
        </h1>

        <p className="hero__subtitle">
          Shaping educators with Pancasila character, integrity, and
          competitiveness — dedicated since {STATISTIK[0].angka}.
        </p>

        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href={PRODI.tautan.pendaftaran}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now <Icons.Arrow />
          </a>
          <a className="btn btn--ghost" href="#profil-video">
            Watch Profile Video
          </a>
        </div>
      </div>
    </header>
  );
}

/* =====================================================================
   SECTION 2 — STATISTICS (overlapping hero + animated counter)
   ===================================================================== */
function Stat({ angka, suffix, label, active }) {
  const value = useCountUp(angka, active);
  return (
    <div className="stat">
      <span className="stat__value">
        {value}
        {suffix && <em className="stat__suffix">{suffix}</em>}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

/* =====================================================================
   SECTION 3 — ABOUT THE STUDY PROGRAM (photo + content + checklist)
   ===================================================================== */
function About() {
  return (
    <section className="section about" id="tentang">
      <div className="container about__grid">
        <Reveal variant="left" className="about__media">
          <div className="about__deco" aria-hidden="true" />
          <figure className="about__figure">
            <img
              src={PRODI.heroImage}
              alt={`Building of ${PRODI.universitas}`}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="about__stamp">
            <strong>Decree · 2359/D/T/2008</strong>
            <span>Officially established July 25, 2008</span>
          </div>
        </Reveal>

        <div className="about__body">
          <Reveal>
            <span className="section-heading__eyebrow">
              <span className="section-heading__line" />
              About the Study Program
              <span className="section-heading__line" />
            </span>
            <h2 className="about__title">
              Excellence in Character &amp; Civic Education
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="about__text">{PRODI.deskripsi}</p>
          </Reveal>

          <Reveal delay={160}>
            <ul className="about__list">
              {PRODI.keunggulan.map((item) => (
                <li key={item}>
                  <span className="about__check">
                    <Icons.Check />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={220}>
            <a
              className="btn btn--primary"
              href={PRODI.tautan.sejarah}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <Icons.Arrow />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   SECTION 4 — PROFILE VIDEO (dark cinematic + lazy-load iframe)
   ===================================================================== */
function VideoSection() {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <section className="section section--dark" id="profil-video">
      <div className="container">
        <SectionHeading
          light
          eyebrow="Profile Video"
          title="Get to Know Us Better"
        />

        <Reveal delay={120} variant="zoom">
          <div className="video__wrap" ref={ref}>
            <span className="video__glow" aria-hidden="true" />
            <div className="video__frame">
              {inView ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${PRODI.videoId}?rel=0`}
                  title={`Profile Video of the ${PRODI.singkatan} Study Program, ${PRODI.universitas}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="video__skeleton">
                  <span className="video__play">
                    <Icons.Play />
                  </span>
                  <p>Loading video…</p>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =====================================================================
   SECTION 5 — STUDY PROGRAM LEADERSHIP (editorial card + quote mark)
   ===================================================================== */
function Leader() {
  return (
    <section className="section leader" id="pimpinan">
      <div className="container">
        <SectionHeading
          eyebrow="Study Program Leadership"
          title="Greeting from the Head of Study Program"
        />

        <Reveal delay={100}>
          <article className="leader__card">
            <div className="leader__photo">
              <img
                src={PRODI.kaprodiImage}
                alt={`Photo of ${PRODI.kaprodi.nama}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="leader__body">
              <span className="leader__quote" aria-hidden="true">
                "
              </span>
              <p className="leader__role">{PRODI.kaprodi.jabatan}</p>
              <h3 className="leader__name">{PRODI.kaprodi.nama}</h3>
              <p className="leader__text">{PRODI.kaprodi.deskripsi}</p>
              <div className="leader__actions">
                <a
                  className="btn btn--primary"
                  href={PRODI.tautan.sambutan}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Greeting <Icons.Arrow />
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* =====================================================================
   SECTION 6 — LOCATION (lazy-load maps + info card)
   ===================================================================== */
function LazyMap() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div className="lokasi__map-inner" ref={ref}>
      {inView ? (
        <iframe
          src={PRODI.lokasi.mapsEmbed}
          title={`Location map of ${PRODI.universitas} ${PRODI.lokasi.nama}`}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="map__skeleton">
          <Icons.Pin />
          <span>Loading map…</span>
        </div>
      )}
    </div>
  );
}

function Lokasi() {
  return (
    <section className="section lokasi" id="lokasi">
      <div className="container">
        <SectionHeading
          eyebrow="Campus Location"
          title="Visit Campus 2 UNPAM Viktor"
        />

        <div className="lokasi__grid">
          <Reveal variant="left" className="lokasi__map">
            <LazyMap />
          </Reveal>

          <Reveal variant="right" delay={120} className="lokasi__panel">
            <div className="info-card">
              <span className="info-card__icon">
                <Icons.Pin />
              </span>
              <div>
                <h3>Campus Address</h3>
                <p>{PRODI.lokasi.alamat}</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-card__icon">
                <Icons.Clock />
              </span>
              <div>
                <h3>Service Hours</h3>
                <p>{PRODI.lokasi.jam}</p>
              </div>
            </div>

            <a
              className="btn btn--outline lokasi__btn"
              href={PRODI.lokasi.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps <Icons.Arrow />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   MAIN
   ===================================================================== */
export default function TentangProdiNewEN() {
  return (
    <main className="prodi">
      <Hero />
      <About />
      <VideoSection />
      <Leader />
      <Lokasi />
    </main>
  );
}
