import { useEffect, useRef, useState } from "react";
import "../css/TentangProdiNew.css";

import heroImage from "../../assets/GedungdanFasilitasUNPAM/Pendidikan_Pancasila_dan_Kewarganegaraan.jpg";
import kaprodiImage from "../../assets/Bu_ichwani_with_text.webp";

/* =====================================================================
   KONFIGURASI — semua konten & tautan cukup diubah di sini
   ===================================================================== */
const PRODI = {
  nama: "Pendidikan Pancasila dan Kewarganegaraan",
  singkatan: "PPKn",
  fakultas: "Fakultas Keguruan dan Ilmu Pendidikan",
  universitas: "Universitas Pamulang",
  heroImage,
  kaprodiImage,
  videoId: "t0TRfkNVWJk",
  deskripsi:
    "Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKn) merupakan salah satu program studi unggulan yang bernaung di bawah Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Universitas Pamulang. Program studi ini secara resmi didirikan pada tanggal 25 Juli 2008 berdasarkan Surat Keputusan Direktorat Jenderal Pendidikan Tinggi Nomor 2359/D/T/2008.",
  keunggulan: [
    "Berdiri resmi berdasarkan SK Dirjen Dikti No. 2359/D/T/2008",
    "Bernaung di bawah Fakultas Keguruan dan Ilmu Pendidikan (FKIP)",
    "Fokus pada pendidikan karakter, Pancasila, dan kewarganegaraan",
  ],
  kaprodi: {
    jabatan: "Kepala Program Studi",
    nama: "Dr. Ichwani Siti Utami, S.Pd., M.H.",
    deskripsi:
      "Dr. Ichwani Siti Utami, S.Pd., M.H. adalah kepala program studi Pendidikan Pancasila dan Kewarganegaraan di Universitas Pamulang.",
  },
  lokasi: {
    nama: "Kampus 2 (UNPAM Viktor)",
    alamat:
      "Jl. Puspitek, Buaran, Kecamatan Pamulang, Kota Tangerang Selatan, Banten 15310",
    jam: "Senin – Sabtu · 09.00 – 18.00 WIB",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.531125393861!2d106.69161309884123!3d-6.345802704278216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5a6e26dc3cd%3A0xccd6344b8021119d!2sUniversitas%20Pamulang%20Kampus%202%20(UNPAM%20Viktor)!5e0!3m2!1sid!2sid!4v1786337962117!5m2!1sid!2sid",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Universitas+Pamulang+Kampus+2+Viktor",
  },
  tautan: {
    sambutan: "https://ppkn.unpam.ac.id/sambutan-ketua-program-studi",
    sejarah:
      "https://ppkn.unpam.ac.id/berita/posts/informasi-umum-dan-sejarah-unpam-ppkn",
    pendaftaran: "https://pmb.unpam.ac.id/", // TODO: sesuaikan link PMB resmi
  },
};

/* ⚠️ Sesuaikan angka dengan data resmi prodi */
const STATISTIK = [
  { angka: 2008, suffix: "", label: "Tahun Didirikan" },
  { angka: 15, suffix: "+", label: "Tahun Berkiprah" },
  { angka: 40, suffix: "+", label: "Dosen & Pendidik" },
  { angka: 98, suffix: "%", label: "Alumni Terserap" },
];

/* =====================================================================
   IKON — inline SVG, tanpa dependency eksternal
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
      width="17"
      height="17"
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

/** Deteksi elemen masuk viewport (sekali saja) — untuk animasi reveal */
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

/** Animasi angka naik (count-up) dengan easing */
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

/** Efek parallax smooth (throttle pakai rAF) */
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
   KOMPONEN DASAR
   ===================================================================== */

/** Wrapper animasi saat elemen masuk viewport */
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
   SECTION 1 — HERO (parallax + breadcrumb + badge glassmorphism)
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
        aria-label={`Gedung ${PRODI.universitas}`}
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <nav className="hero__breadcrumb" aria-label="Breadcrumb">
          <span>Beranda</span>
          <span className="sep">/</span>
          <span>{PRODI.fakultas}</span>
          <span className="sep">/</span>
          <span aria-current="page">Prodi {PRODI.singkatan}</span>
        </nav>

        <span className="hero__badge">
          <Icons.Cap />
          {PRODI.fakultas} · {PRODI.universitas}
        </span>

        <h1 className="hero__title">
          Program Studi
          <span className="hero__accent">{PRODI.nama}</span>
        </h1>

        <p className="hero__subtitle">
          Mencetak pendidik yang berkarakter Pancasila, berintegritas, dan
          berdaya saing berkiprah sejak {STATISTIK[0].angka}.
        </p>

        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href={PRODI.tautan.pendaftaran}
            target="_blank"
            rel="noopener noreferrer"
          >
            Daftar Sekarang <Icons.Arrow />
          </a>
          <a className="btn btn--ghost" href="#profil-video">
            Tonton Video Profil
          </a>
        </div>
      </div>
    </header>
  );
}

/* =====================================================================
   SECTION 2 — STATISTIK (overlap hero + animated counter)
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
   SECTION 3 — TENTANG PRODI (foto + konten + checklist)
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
              alt={`Gedung ${PRODI.universitas}`}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="about__stamp">
            <strong>SK · 2359/D/T/2008</strong>
            <span>Resmi berdiri 25 Juli 2008</span>
          </div>
        </Reveal>

        <div className="about__body">
          <Reveal>
            <span className="section-heading__eyebrow">
              <span className="section-heading__line" />
              Tentang Program Studi
              <span className="section-heading__line" />
            </span>
            <h2 className="about__title">
              Unggul dalam Pendidikan Karakter &amp; Kewarganegaraan
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
              Selengkapnya <Icons.Arrow />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   SECTION 4 — VIDEO PROFIL (dark cinematic + lazy-load iframe)
   ===================================================================== */
function VideoSection() {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <section className="section section--dark" id="profil-video">
      <div className="container">
        <SectionHeading
          light
          eyebrow="Video Profil"
          title="Kenali Kami Lebih Dekat"
        />

        <Reveal delay={120} variant="zoom">
          <div className="video__wrap" ref={ref}>
            <span className="video__glow" aria-hidden="true" />
            <div className="video__frame">
              {inView ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${PRODI.videoId}?rel=0`}
                  title={`Video Profil Prodi ${PRODI.singkatan} ${PRODI.universitas}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="video__skeleton">
                  <span className="video__play">
                    <Icons.Play />
                  </span>
                  <p>Memuat video…</p>
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
   SECTION 5 — PIMPINAN PRODI (kartu editorial + quote mark)
   ===================================================================== */
function Leader() {
  return (
    <section className="section leader" id="pimpinan">
      <div className="container">
        <SectionHeading
          eyebrow="Pimpinan Prodi"
          title="Sambutan Kepala Program Studi"
        />

        <Reveal delay={100}>
          <article className="leader__card">
            <div className="leader__photo">
              <img
                src={PRODI.kaprodiImage}
                alt={`Foto ${PRODI.kaprodi.nama}`}
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
                  Baca Sambutan Lengkap <Icons.Arrow />
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
   SECTION 6 — LOKASI (lazy-load maps + info card)
   ===================================================================== */
function LazyMap() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div className="lokasi__map-inner" ref={ref}>
      {inView ? (
        <iframe
          src={PRODI.lokasi.mapsEmbed}
          title={`Peta lokasi ${PRODI.universitas} ${PRODI.lokasi.nama}`}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="map__skeleton">
          <Icons.Pin />
          <span>Memuat peta…</span>
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
          eyebrow="Lokasi Kampus"
          title="Kunjungi Kampus 2 — UNPAM Viktor"
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
                <h3>Alamat Kampus</h3>
                <p>{PRODI.lokasi.alamat}</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-card__icon">
                <Icons.Clock />
              </span>
              <div>
                <h3>Jam Layanan</h3>
                <p>{PRODI.lokasi.jam}</p>
              </div>
            </div>

            <a
              className="btn btn--outline lokasi__btn"
              href={PRODI.lokasi.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka di Google Maps <Icons.Arrow />
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
export default function TentangProdiNewID() {
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
