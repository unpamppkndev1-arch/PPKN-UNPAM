import React from "react";
import "./strukturOrganisasi.css";

/* ------------------------------------------------------------------
   Helper: get initials from name for avatar
   ------------------------------------------------------------------ */
const getInitials = (nama = "") => {
  const tokens = nama.replace(/,/g, " ").split(/\s+/).filter(Boolean);
  const bersih = tokens.filter((t) => /^[A-Za-z]{3,}$/.test(t));
  const dipakai = bersih.length ? bersih : tokens;
  return dipakai
    .slice(0, 2)
    .map((t) => t[0].toUpperCase())
    .join("");
};

/* ------------------------------------------------------------------
   STRUCTURE DATA (English)
   ------------------------------------------------------------------ */
const KETUA = {
  nama: "Dr. Ichwani Siti Utami, S.Pd., M.H",
  nidn: "0413018901",
  jabatan: "Head of Study Program",
};

const DIVISI = [
  {
    id: "research",
    title: "Research and Community Service",
    members: [
      {
        role: "Research Developer",
        nama: "Mas Fierna J.L.P, S.Pd., M.Pd",
        nidn: "0416017705",
        tipe: "utama",
      },
      {
        role: "Community Service Developer",
        nama: "Dewi Purnama Sari, M.Pd",
        nidn: "0419069002",
        tipe: "utama",
      },
      {
        role: "Support",
        nama: "Heri Kurnia, S.Pd., M.Pd",
        nidn: "9990613986",
        tipe: "pendukung",
      },
      {
        role: "Support",
        nama: "Dr. R. Dede Siswandi, S.Sos., M.Pd",
        nidn: "8847200016",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "education",
    title: "Education and Online Learning",
    members: [
      {
        role: "Developer",
        nama: "Ety Hayati, M.Pd",
        nidn: "0414038402",
        tipe: "utama",
      },
      {
        role: "Online Coordinator",
        nama: "Roni Rustandi, S.Pd., M.H",
        nidn: "0431088803",
        tipe: "utama",
      },
      {
        role: "Marketing Communication Coordinator",
        nama: "Lathifah Sandra Devi, M.Pd",
        nidn: "0416019701",
        tipe: "utama",
      },
      {
        role: "Developer",
        nama: "Hendri, M.Pd",
        nidn: "0427038803",
        tipe: "utama",
      },
      {
        role: "Support",
        nama: "Dr. Aeng Muhidin, S.Pd., M.Pd",
        nidn: "0421108203",
        tipe: "pendukung",
      },
      {
        role: "Support",
        nama: "Darto Wahidin, S.Pd., M.Sc",
        nidn: "0404119303",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "student",
    title: "Student Affairs",
    members: [
      {
        role: "Developer",
        nama: "Nurullita Sari, S.Pd., M.H",
        nidn: "0409079201",
        tipe: "utama",
      },
      {
        role: "Developer",
        nama: "Raistin Nur Abidin, M.Pd",
        nidn: "0403069206",
        tipe: "utama",
      },
      {
        role: "Developer",
        nama: "Yayuk Muji Rahayu, M.Pd",
        nidn: "-",
        tipe: "utama",
      },
      {
        role: "Developer",
        nama: "Dr. Herdi Wisma Jaya, S.Pd., M.H",
        nidn: "0410088203",
        tipe: "utama",
      },
      {
        role: "Support",
        nama: "Endang Prastini, S.Pd., M.H",
        nidn: "0430126802",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "output",
    title: "Outputs and Infrastructure",
    members: [
      {
        role: "Developer",
        nama: "Setiawati, S.Pd., M.H",
        nidn: "0416089002",
        tipe: "utama",
      },
      {
        role: "Developer",
        nama: "Sulastri, S.Pd., M.H",
        nidn: "0417029001",
        tipe: "utama",
      },
      {
        role: "Support",
        nama: "Abi Robian, S.Pd., M.H",
        nidn: "0404098603",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "hr",
    title: "Human Resources and Cooperation",
    members: [
      {
        role: "HR Developer",
        nama: "Saepudin Karta Sasmita, M.Pd",
        nidn: "0418099003",
        tipe: "utama",
      },
      {
        role: "Cooperation Developer",
        nama: "Susi, M.Pd",
        nidn: "0405047904",
        tipe: "utama",
      },
      {
        role: "HR Developer",
        nama: "Nurdiyana, S.Pd., M.H",
        nidn: "0416018202",
        tipe: "utama",
      },
      {
        role: "Cooperation Support",
        nama: "Dr. Sugiyanto, S.Ip",
        nidn: "0403106403",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "iqa",
    title: "Internal Quality Audit",
    members: [
      {
        role: "Study Program IQA",
        nama: "Suanto, S.Pd., M.H",
        nidn: "0427108902",
        tipe: "utama",
      },
      {
        role: "Study Program IQA",
        nama: "Abd. Chaidir Marasabessy, M.Pd",
        nidn: "1228077002",
        tipe: "utama",
      },
    ],
  },
];

const DOSEN_PRODI = [
  { nama: "Aulia Nursyifa, S.Pd., M.Pd", nidn: "0417079201" },
  { nama: "Eka Setiana, S.Pd., M.H", nidn: "0418109304" },
  { nama: "Dini Handayani, S.Pd., M.H", nidn: "0402018807" },
  { nama: "Muhammad Suheppy, S.Pd., M.Pd", nidn: "0413057405" },
  { nama: "M. Finandar, S.Pd., M.Pd", nidn: "-" },
  { nama: "Ruli Hardi, S.Pd., M.Pd", nidn: "8875200016" },
  { nama: "Amrizal Siagian, S.Hum., M.Si.", nidn: "0406017703" },
  { nama: "Supandri, M.H", nidn: "-" },
  { nama: "Ivana Aprillia Harlyanikova, M.H", nidn: "-" },
  { nama: "Dr. Yatti Rosmiati, M.Pd", nidn: "8995420021" },
  { nama: "Dr. Akhirudin, M.Pd", nidn: "-" },
  { nama: "Lina Marlina, S.Pd., M.Pd", nidn: "0421038901" },
  { nama: "Dr. Ahmad Nana Mahmur, M.Pd", nidn: "0430106001" },
  { nama: "Dr. Dra. Neng Nurhemah, M.Pd", nidn: "0427076201" },
];

/* ------------------------------------------------------------------
   Component
   ------------------------------------------------------------------ */
export default function StrukturOrganisasiEN() {
  const totalDosen = new Set([
    KETUA.nama,
    ...DIVISI.flatMap((d) => d.members.map((m) => m.nama)),
    ...DOSEN_PRODI.map((d) => d.nama),
  ]).size;

  return (
    <div className="so-page">
      <div className="so-inner">
        {/* HEADER */}
        <header className="so-header">
          <p className="so-eyebrow">
            Pancasila and Civic Education Study Program
          </p>
          <h1 className="so-title">Organizational Structure</h1>
          <p className="so-subtitle">
            Organizational chart &amp; division of lecturer duties
          </p>
        </header>

        {/* HEAD OF STUDY PROGRAM */}
        <div className="so-root">
          <article className="so-ketua">
            <div className="so-avatar so-avatar--lg" aria-hidden="true">
              {getInitials(KETUA.nama)}
            </div>
            <div className="so-ketua-info">
              <span className="so-ketua-badge">{KETUA.jabatan}</span>
              <h2 className="so-ketua-nama">{KETUA.nama}</h2>
              <p className="so-ketua-meta">NIDN {KETUA.nidn}</p>
            </div>
          </article>
        </div>

        {/* TRUNK LINE */}
        <div className="so-trunk" aria-hidden="true" />

        {/* DIVISIONS */}
        <section className="so-branches">
          {DIVISI.map((div) => (
            <div className="so-branch" key={div.id}>
              <div className="so-drop" aria-hidden="true" />
              <h3 className="so-branch-head">{div.title}</h3>

              <div className="so-branch-body">
                {div.members.map((m, i) => (
                  <div
                    className={`so-member ${
                      m.tipe === "pendukung" ? "so-member--pendukung" : ""
                    }`}
                    key={`${div.id}-${i}`}
                  >
                    <div className="so-avatar" aria-hidden="true">
                      {getInitials(m.nama)}
                    </div>
                    <div className="so-member-info">
                      <span className="so-role">{m.role}</span>
                      <p className="so-member-name">{m.nama}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* BOTTOM TRUNK */}
        <div className="so-trunk so-trunk--bottom" aria-hidden="true" />

        {/* STUDY PROGRAM LECTURERS */}
        <section className="so-bottom">
          <h3 className="so-bottom-head">Study Program Lecturers</h3>

          <div className="so-bottom-grid">
            {DOSEN_PRODI.map((d, i) => (
              <article className="so-dosen" key={i}>
                <div className="so-avatar so-avatar--sm" aria-hidden="true">
                  {getInitials(d.nama)}
                </div>
                <div className="so-dosen-body">
                  <p className="so-dosen-nama">{d.nama}</p>
                  <p className="so-dosen-meta">
                    {d.nidn && d.nidn !== "-" ? `NIDN ${d.nidn}` : "NIDN —"}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER / LEGEND */}
        <footer className="so-footer">
          <div className="so-legend">
            <span className="so-legend-item">
              <i className="so-dot so-dot--utama" /> Developer / Coordinator
            </span>
            <span className="so-legend-item">
              <i className="so-dot so-dot--pendukung" /> Support
            </span>
          </div>
          <p className="so-footer-note">{totalDosen} registered lecturers</p>
        </footer>
      </div>
    </div>
  );
}
