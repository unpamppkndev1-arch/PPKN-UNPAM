import React, { useState, useEffect, useRef } from "react";
import "../css/PMB.css";
import Gambar from "../../assets/image-removebg-preview.webp";

/* ========== Reveal on scroll ========== */
const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ========== ICONS ========== */
const cardIcons = [
  // Akademik - bintang
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.3L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,

  // Pemerintahan - gedung/buku
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 19V5C4 4.4 4.4 4 5 4H19C19.6 4 20 4.4 20 5V19"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M4 19C4 17.9 4.9 17 6 17H20"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 8H16M8 12H14"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,

  // Sosial & Kemasyarakatan - orang
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M5 20C5.5 16.5 8 14 12 14C16 14 18.5 16.5 19 20"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,

  // Media & Komunikasi - dokumen
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 7H20M7 4V7M17 4V7M5 10H19V20H5V10Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14H16M8 17H13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,

  // Digital & Global - globe
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M3.5 12H20.5M12 3.5C14.3 6 15.5 9 15.5 12C15.5 15 14.3 18 12 20.5C9.7 18 8.5 15 8.5 12C8.5 9 9.7 6 12 3.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>,

  // Wirausaha & Profesional - koper
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3.5"
      y="8"
      width="17"
      height="11"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8.5 8V6.5C8.5 5.7 9.2 5 10 5H14C14.8 5 15.5 5.7 15.5 6.5V8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path d="M3.5 13H20.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
];

/* ========== PROGRAM (TABS) ========== */
const programs = [
  {
    id: "kerja",
    label: "Prospek Kerja",
    type: "kerja",
    title: "Prospek Kerja Lulusan PPKn",
    subtitle:
      "Lulusan PPKn UNPAM siap berkiprah di berbagai bidang, mulai dari pendidikan, pemerintahan, hingga kewirausahaan sosial.",
    categories: [
      {
        title: "Bidang Akademik",
        items: [
          "Guru PPKn (SD, SMP, SMA/SMK)",
          "Dosen (dengan studi lanjut S2/S3)",
          "Pengembang kurikulum & media pembelajaran",
          "Trainer pendidikan karakter & kebangsaan",
        ],
      },
      {
        title: "Bidang Pemerintahan",
        items: [
          "Aparatur Sipil Negara (ASN/PNS)",
          "Staf kementerian & lembaga negara",
          "Analis kebijakan publik",
          "Tenaga ahli bidang hukum, politik, dan kewarganegaraan",
        ],
      },
      {
        title: "Bidang Sosial & Kemasyarakatan",
        items: [
          "Aktivis LSM/NGO (demokrasi, HAM, pendidikan)",
          "Penggerak masyarakat (community development)",
          "Fasilitator pemberdayaan & partisipasi publik",
          "Praktisi civic governance",
        ],
      },
      {
        title: "Bidang Media & Komunikasi",
        items: [
          "Jurnalis bidang politik & hukum",
          "Penulis buku & konten edukasi",
          "Content creator (civic & literasi digital)",
          "Pengembang media pembelajaran digital",
        ],
      },
      {
        title: "Bidang Digital & Global",
        items: [
          "Praktisi literasi digital & etika digital",
          "Analis komunikasi publik & opini masyarakat",
          "Konsultan komunikasi politik",
          "Pengelola kampanye sosial berbasis digital",
        ],
      },
      {
        title: "Bidang Wirausaha & Profesional",
        items: [
          "Wirausahawan sosial (social entrepreneur)",
          "Konsultan pendidikan & kebijakan publik",
          "Pengelola lembaga pelatihan (training center)",
          "Founder komunitas/edukasi kebangsaan",
        ],
      },
    ],
  },
  {
    id: "belajar",
    label: "Sistem Belajar",
    type: "belajar",
    title: "Sistem Belajar",
    subtitle:
      "Perkuliahan yang fleksibel dan relevan, dirancang untuk menyesuaikan kebutuhan mahasiswa dari berbagai latar belakang.",
    description:
      "Menggunakan blended learning yang didukung dengan Learning Management System handal, serta waktu kuliah yang fleksibel dengan 3 program yaitu Reguler A, B, CK, dan CS.",
    schedule: [
      {
        program: "Reguler A",
        desc: "Tatap muka pada hari Senin–Jum'at (07.10–17.40)",
      },
      {
        program: "Reguler B",
        desc: "Tatap muka pada hari Senin–Jum'at (18.20–21.45)",
      },
      {
        program: "Reguler CK",
        desc: "Tatap muka hari Kamis (07.45–17.45) dan Online hari Senin–Jumat",
      },
      {
        program: "Reguler CS",
        desc: "Tatap muka hari Sabtu (07.45–17.45) dan Online hari Senin–Jumat",
      },
    ],
  },
  {
    id: "kegiatan",
    label: "Kegiatan & Program",
    type: "kegiatan",
    title: "Kegiatan & Program Unggulan",
    subtitle:
      "Pengalaman belajar di luar kelas untuk memperkuat wawasan kebangsaan dan keterampilan mahasiswa PPKn.",
    activities: [
      "Kunjungan Lembaga pemerintah KPK, BPIP, dan Lemhanas",
      "Kunjungan Desa Adat Baduy",
      "Duta Program Studi Pendidikan Pancasila dan Kewarganegaraan",
    ],
    unggulan: [
      "Potential Mapping Class",
      "Pelopor Etika Kehidupan Kampus",
      "Gerakan Peduli Lingkungan",
      "Magang di Lembaga Pendidikan",
      "Laboratorium Pancasila",
      "Edu Speak",
      "Civic Write",
      "Ciap Expo",
    ],
  },
];

/* ========== GELOMBANG ========== */
const waves = [
  {
    id: 1,
    date: "Gelombang 1",
    status: "closed",
    statusLabel: "Ditutup",
    title: "Pendaftaran Gelombang 1",
    wave: "Gelombang 1",
  },
  {
    id: 2,
    date: "Gelombang 2",
    status: "closed",
    statusLabel: "Ditutup",
    title: "Pendaftaran Gelombang 2",
    wave: "Gelombang 2",
  },
  {
    id: 3,
    date: "Gelombang 3",
    status: "closed",
    statusLabel: "Ditutup",
    title: "Pendaftaran Gelombang 3",
    wave: "Gelombang 3",
  },
  {
    id: 4,
    date: "Gelombang 4",
    status: "open",
    statusLabel: "Dibuka",
    title: "Pendaftaran Gelombang 4",
    wave: "Gelombang 4",
  },
];

/* ========== BIAYA ========== */
const tuition = {
  level: "S-1",
  campus: "Tangsel",

  rows: [
        { label: "Formulir Pendaftaran", regAB: "Rp100.000", regC: "Rp100.000", note: "Gel. 1: Diskon 50%" },
        { label: "Jaket Almamater + KTM", regAB: "Rp250.000", regC: "Rp250.000", note: "Setelah lulus SPMB" },
        { label: "Registrasi Awal Semester", regAB: "Rp250.000", regC: "Rp250.000", note: "Setiap awal semester" },
        { label: "Biaya Kuliah (per semester)", regAB: "Rp1.500.000", regC: "Rp2.400.000", note: "A&B: Rp250rb/angsuran; C&CK: Rp400rb/angsuran", highlight: true },
        { label: "Angsuran Praktikum", subLabel: "Khusus Fak. Teknik, MIPA, Ilmu Komputer, Ilmu Komunikasi & Desain, serta Pend. Jasmani", regAB: "Rp200.000", regC: "Rp300.000", note: "Dilunasi sebelum UAS" },
        { label: "Biaya UTS", regAB: "Rp300.000", regC: "Rp400.000", note: "Dilunasi sebelum UTS" },
        { label: "Biaya UAS", regAB: "Rp300.000", regC: "Rp400.000", note: "Dilunasi sebelum UAS" },
  ],

  registration: {
    regAB: "Rp100.000",
    regC: "Rp100.000",
  },
};

/* ========== LINK ========== */
const linked = () => {
  window.open("https://pmb.unpam.ac.id/", "_blank", "noopener,noreferrer");
};

export default function PMB() {
  useEffect(() => {
    document.title =
      "PMB UNPAM - Penerimaan Mahasiswa Baru Program Studi PPKn Universitas Pamulang";
  }, []);

  const [activeId, setActiveId] = useState(programs[0].id);
  const active = programs.find((p) => p.id === activeId);

  return (
    <div className="pmbPage">
      {/* ================= HERO ================= */}
      <section className="pmb">
        <div className="pmb__hero">
          <Reveal className="pmb__left" delay={100}>
            <h1 className="pmb__title">
              <span className="pmb__title-base">Penerimaan Mahasiswa Baru</span>
              <span className="pmb__title-accent">
                Gelombang 4 Telah Dibuka
              </span>
            </h1>

            <p className="pmb__desc">
              Bergabunglah dengan Program Studi Pendidikan Pancasila dan
              Kewarganegaraan Universitas Pamulang, dan siapkan diri menjadi
              pendidik, warga negara yang cerdas, serta pemimpin masa depan yang
              berintegritas.
            </p>

            <a href="#program" className="pmb__cta">
              Pelajari Program
              <span className="pmb__cta-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </Reveal>

          <Reveal className="pmb__right" delay={200}>
            <div className="pmb__imageFrame">
              <div className="pmb__imagePlaceholder">

                <img
                  src={Gambar}
                  alt="Ilustrasi Penerimaan Mahasiswa Baru"
                  className="pmb__image"
                />

                {/* <span className="pmb__imagePlaceholder-label">
                  Ganti gambar di sini
                </span> */}
              </div>

              <svg
                className="pmb__pattern"
                viewBox="0 0 220 220"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  x="10"
                  y="10"
                  width="90"
                  height="90"
                  rx="45"
                  fill="none"
                  stroke="var(--pmb-ink)"
                  strokeWidth="1.2"
                />
                <path
                  d="M120 10 L200 10 L200 90"
                  fill="none"
                  stroke="var(--pmb-maroon)"
                  strokeWidth="1.2"
                />
                <path
                  d="M120 90 L200 90"
                  fill="none"
                  stroke="var(--pmb-ink)"
                  strokeWidth="1.2"
                />
                <rect
                  x="10"
                  y="120"
                  width="90"
                  height="90"
                  fill="none"
                  stroke="var(--pmb-maroon)"
                  strokeWidth="1.2"
                />
                <circle
                  cx="165"
                  cy="165"
                  r="45"
                  fill="none"
                  stroke="var(--pmb-ink)"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PROGRAM ================= */}
      <section className="pmbProgram" id="program">
        <div className="pmbProgram__inner">
          <Reveal>
            <span className="pmbProgram__badge">Program</span>

            <h2 className="pmbProgram__heading">
              Wujudkan Peran Anda Sebagai Pendidik dan Warga Negara yang Cerdas,
              Berkarakter, dan Berkontribusi bagi Bangsa
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="pmbProgram__tabs" role="tablist">
              {programs.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={activeId === p.id}
                  className={`pmbProgram__tab${
                    activeId === p.id ? " is-active" : ""
                  }`}
                  onClick={() => setActiveId(p.id)}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="pmbProgram__panel" role="tabpanel">
              <div className="pmbProgram__panelTop">
                <h3 className="pmbProgram__panelTitle">{active.title}</h3>

                <p className="pmbProgram__panelSubtitle">{active.subtitle}</p>
              </div>

              {/* ---- Konten: Prospek Kerja ---- */}
              {active.type === "kerja" && (
                <div className="pmbProgram__jobGrid">
                  {active.categories.map((cat, i) => (
                    <div className="pmbProgram__jobCategory" key={cat.title}>
                      <div className="pmbProgram__jobHead">
                        <span
                          className="pmbProgram__jobIcon"
                          aria-hidden="true"
                        >
                          {cardIcons[i % cardIcons.length]}
                        </span>
                        <h4 className="pmbProgram__jobTitle">{cat.title}</h4>
                      </div>

                      <ul className="pmbProgram__jobList">
                        {cat.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* ---- Konten: Sistem Belajar ---- */}
              {active.type === "belajar" && (
                <>
                  <p className="pmbProgram__belajarText">
                    {active.description}
                  </p>

                  <p className="pmbProgram__label">Jadwal Kuliah</p>

                  <div className="pmbProgram__schedule">
                    {active.schedule.map((s) => (
                      <div className="pmbProgram__scheduleRow" key={s.program}>
                        <span className="pmbProgram__scheduleProgram">
                          {s.program}
                        </span>
                        <span className="pmbProgram__scheduleDesc">
                          {s.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* ---- Konten: Kegiatan & Program Unggulan ---- */}
              {active.type === "kegiatan" && (
                <>
                  <p className="pmbProgram__label">Kegiatan Mahasiswa</p>

                  <div className="pmbProgram__timeline">
                    {active.activities.map((a) => (
                      <div className="pmbProgram__timelineItem" key={a}>
                        <span
                          className="pmbProgram__timelineDot"
                          aria-hidden="true"
                        />
                        <p className="pmbProgram__timelineText">{a}</p>
                      </div>
                    ))}
                  </div>

                  <p className="pmbProgram__label">Program Unggulan</p>

                  <div className="pmbProgram__tags">
                    {active.unggulan.map((t) => (
                      <span className="pmbProgram__tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className="pmbProgram__actions">
                <a
                  href="#studi"
                  className="pmbProgram__btn pmbProgram__btn--outline"
                >
                  Lihat Program Studi
                </a>

                <a
                  href="#program"
                  className="pmbProgram__btn pmbProgram__btn--solid"
                >
                  Pelajari Program
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= ADMISSION 2026 ================= */}
      <section className="pmbDates" id="jadwal">
        <div className="pmbDates__inner">
          <Reveal>
            <div className="pmbDatesTitles">
              <h1>PMB 2026</h1>
            </div>

            <div className="pmbDates__listHead">
              <h2>Program Gelar</h2>

              <a href="#jadwal" className="pmbDates__more">
                Lihat Jadwal Lebih Banyak
                <span className="pmbDates__moreIcon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </Reveal>

          <div className="pmbbox">
            {waves.map((w, index) => (
              <Reveal key={w.id} delay={index * 100}>
                <div className="pmbbox__row">
                  <div className="pmbbox__date">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M3 9h18M8 3v4M16 3v4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>

                    <span>{w.date}</span>
                  </div>

                  <span
                    className={`pmbbox__status pmbbox__status--${w.status}`}
                  >
                    {w.statusLabel}
                  </span>

                  <p className="pmbbox__title">{w.title}</p>

                  <span className="pmbbox__wave">{w.wave}</span>

                  {w.status !== "closed" ? (
                    <a onClick={linked} className="pmbbox__cta">
                      Daftar Sekarang
                    </a>
                  ) : (
                    <a className="pmbbox__ctac">Pendaftaran tutup</a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RINCIAN BIAYA ================= */}
      <section className="pmbCost" id="biaya">
        <div className="pmbCost__inner">
          <Reveal>
            <h2 className="pmbCost__heading">
              Rincian{" "}
              <span className="pmbCost__heading-accent">Biaya Pendidikan</span>
            </h2>

            <p className="pmbCost__sub">
              Biaya kuliah terjangkau tanpa uang gedung, khusus untuk Program{" "}
              {tuition.level} PPKn {tuition.campus}.
            </p>

            <div className="pmbCost__badges">
              <span className="pmbCost__badge pmbCost__badge--discount">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6 9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Diskon 50% Formulir Gelombang 1 (Sarjana & Diploma)
              </span>

              <span className="pmbCost__badge pmbCost__badge--wave">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                4 Gelombang Pendaftaran
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="pmbCost__tabs">
              <span className="pmbCost__tab is-active">
                Sarjana (S-1) Tangsel
              </span>
            </div>

            <div className="pmbCost__card">
              <div className="pmbCost__cardHeader">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="2.5"
                    y="6"
                    width="19"
                    height="13"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M2.5 10h19M16 15h2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                {tuition.level} – {tuition.campus}
              </div>

              <div className="pmbCost__tableWrap">
                <table className="pmbCost__table">
                  <thead>
                    <tr>
                      <th>Uraian Biaya</th>
                      <th>Reg. A &amp; B</th>
                      <th>Reg. C, S &amp; CK</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>

                  <tbody>
                    {tuition.rows.map((r, i) => (
                      <tr
                        key={i}
                        className={r.highlight ? "is-highlight" : undefined}
                      >
                        <td>
                          <span className="pmbCost__rowLabel">{r.label}</span>

                          {r.subLabel && (
                            <span className="pmbCost__rowSub">
                              {r.subLabel}
                            </span>
                          )}
                        </td>

                        <td className="pmbCost__amount">{r.regAB}</td>

                        <td className="pmbCost__amount">{r.regC}</td>

                        <td className="pmbCost__note">{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pmbCost__summary">
                <span className="pmbCost__summaryIcon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 8h.01M11 11h1v5h1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <div>
                  <p className="pmbCost__summaryTitle">Biaya Registrasi Awal</p>

                  <div className="pmbCost__summaryValues">
                    <span>
                      Reg. A &amp; B:{" "}
                      <strong>{tuition.registration.regAB}</strong>
                    </span>

                    <span>
                      Reg. C, S &amp; CK:{" "}
                      <strong>{tuition.registration.regC}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}