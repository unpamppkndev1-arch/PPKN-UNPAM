import React from "react";
import "./strukturOrganisasi.css";
import { getStrukturFotoByNama } from "../../data/strukturOrganisasiFotoMap";

/* ------------------------------------------------------------------
   Helper: ambil inisial nama untuk avatar
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
   DATA STRUKTUR
   (nama & NIDN diambil dari dataDosenEN, role mengikuti bagan)
   ------------------------------------------------------------------ */
const KETUA = {
  nama: "Dr. Ichwani Siti Utami, S.Pd., M.H",
  nidn: "0413018901",
  jabatan: "Ketua Program Studi",
};

const DIVISI = [
  {
    id: "penelitian",
    title: "Penelitian dan PKM",
    members: [
      {
        role: "Pengembang Penelitian",
        nama: "Mas Fierna J.L.P, S.Pd., M.Pd",
        nidn: "0416017705",
        tipe: "utama",
      },
      {
        role: "Pengembang PKM",
        nama: "Dewi Purnama Sari, M.Pd",
        nidn: "0419069002",
        tipe: "utama",
      },
      {
        role: "Pendukung",
        nama: "Heri Kurnia, S.Pd., M.Pd",
        nidn: "9990613986",
        tipe: "pendukung",
      },
      {
        role: "Pendukung",
        nama: "Dr. R. Dede Siswandi, S.Sos., M.Pd",
        nidn: "8847200016",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "pendidikan",
    title: "Pendidikan dan Pembelajaran Daring",
    members: [
      {
        role: "Pengembang",
        nama: "Ety Hayati, M.Pd",
        nidn: "0414038402",
        tipe: "utama",
      },
      {
        role: "Koordinator Daring",
        nama: "Roni Rustandi, S.Pd., M.H",
        nidn: "0431088803",
        tipe: "utama",
      },
      {
        role: "Koordinator Markom",
        nama: "Lathifah Sandra Devi, M.Pd",
        nidn: "0416019701",
        tipe: "utama",
      },
      {
        role: "Pengembang",
        nama: "Hendri, M.Pd",
        nidn: "0427038803",
        tipe: "utama",
      },
      {
        role: "Pendukung",
        nama: "Dr. Aeng Muhidin, S.Pd., M.Pd",
        nidn: "0421108203",
        tipe: "pendukung",
      },
      {
        role: "Pendukung",
        nama: "Darto Wahidin, S.Pd., M.Sc",
        nidn: "0404119303",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "kemahasiswaan",
    title: "Kemahasiswaan",
    members: [
      {
        role: "Pengembang",
        nama: "Nurullita Sari, S.Pd., M.H",
        nidn: "0409079201",
        tipe: "utama",
      },
      {
        role: "Pengembang",
        nama: "Raistin Nur Abidin, M.Pd",
        nidn: "0403069206",
        tipe: "utama",
      },
      {
        role: "Pengembang",
        nama: "Yayuk Muji Rahayu, M.Pd",
        nidn: "-",
        tipe: "utama",
      },
      {
        role: "Pengembang",
        nama: "Dr. Herdi Wisma Jaya, S.Pd., M.H",
        nidn: "0410088203",
        tipe: "utama",
      },
      {
        role: "Pendukung",
        nama: "Endang Prastini, S.Pd., M.H",
        nidn: "0430126802",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "luaran",
    title: "Luaran dan Sarana Prasarana",
    members: [
      {
        role: "Pengembang",
        nama: "Setiawati, S.Pd., M.H",
        nidn: "0416089002",
        tipe: "utama",
      },
      {
        role: "Pengembang",
        nama: "Sulastri, S.Pd., M.H",
        nidn: "0417029001",
        tipe: "utama",
      },
      {
        role: "Pendukung",
        nama: "Abi Robian, S.Pd., M.H",
        nidn: "0404098603",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "sdm",
    title: "SDM dan Kerjasama",
    members: [
      {
        role: "Pengembang SDM",
        nama: "Saepudin Karta Sasmita, M.Pd",
        nidn: "0418099003",
        tipe: "utama",
      },
      {
        role: "Pengembang Kerjasama",
        nama: "Susi, M.Pd",
        nidn: "0405047904",
        tipe: "utama",
      },
      {
        role: "Pengembang SDM",
        nama: "Nurdiyana, S.Pd., M.H",
        nidn: "0416018202",
        tipe: "utama",
      },
      {
        role: "Pendukung Kerjasama",
        nama: "Dr. Sugiyanto, S.Ip",
        nidn: "0403106403",
        tipe: "pendukung",
      },
    ],
  },
  {
    id: "ami",
    title: "Audit Mutu Internal",
    members: [
      {
        role: "AMI Prodi",
        nama: "Suanto, S.Pd., M.H",
        nidn: "0427108902",
        tipe: "utama",
      },
      {
        role: "AMI Prodi",
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
   Komponen
   ------------------------------------------------------------------ */
export default function StrukturOrganisasiID() {
  const ketuaFoto = getStrukturFotoByNama(KETUA.nama);

  const totalDosen = new Set([
    KETUA.nama,
    ...DIVISI.flatMap((d) => d.members.map((m) => m.nama)),
    ...DOSEN_PRODI.map((d) => d.nama),
  ]).size;

  return (
    <div className="so-page">
      <div className="so-inner">
        {/* ---------- HEADER ---------- */}
        <header className="so-header">
          <p className="so-eyebrow">
            Program Studi Pendidikan Pancasila &amp; Kewarganegaraan
          </p>
          <h1 className="so-title">Struktur Organisasi</h1>
          <p className="so-subtitle">
            Bagan kepengurusan &amp; pembagian tugas dosen
          </p>
        </header>

        {/* ---------- KETUA PRODI ---------- */}
        <div className="so-root">
          <article className="so-ketua">
            <div
              className={`so-avatar so-avatar--lg ${ketuaFoto ? "so-avatar--photo" : ""}`}
              aria-hidden="true"
            >
              {ketuaFoto ? (
                <img src={ketuaFoto} alt="" className="so-avatar-image" loading="lazy" />
              ) : (
                getInitials(KETUA.nama)
              )}
            </div>
            <div className="so-ketua-info">
              <span className="so-ketua-badge">{KETUA.jabatan}</span>
              <h2 className="so-ketua-nama">{KETUA.nama}</h2>
              <p className="so-ketua-meta">NIDN {KETUA.nidn}</p>
            </div>
          </article>
        </div>

        {/* ---------- GARIS TURUN ---------- */}
        <div className="so-trunk" aria-hidden="true" />

        {/* ---------- 6 DIVISI ---------- */}
        <section className="so-branches">
          {DIVISI.map((div) => (
            <div className="so-branch" key={div.id}>
              <div className="so-drop" aria-hidden="true" />
              <h3 className="so-branch-head">{div.title}</h3>

              <div className="so-branch-body">
                {div.members.map((m, i) => {
                  const memberFoto = getStrukturFotoByNama(m.nama);

                  return (
                  <div
                    className={`so-member ${
                      m.tipe === "pendukung" ? "so-member--pendukung" : ""
                    }`}
                    key={`${div.id}-${i}`}
                  >
                    <div
                      className={`so-avatar ${memberFoto ? "so-avatar--photo" : ""}`}
                      aria-hidden="true"
                    >
                      {memberFoto ? (
                        <img src={memberFoto} alt="" className="so-avatar-image" loading="lazy" />
                      ) : (
                        getInitials(m.nama)
                      )}
                    </div>
                    <div className="so-member-info">
                      <span className="so-role">{m.role}</span>
                      <p className="so-member-name">{m.nama}</p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* ---------- GARIS KE BAWAH ---------- */}
        <div className="so-trunk so-trunk--bottom" aria-hidden="true" />

        {/* ---------- DOSEN PRODI ---------- */}
        <section className="so-bottom">
          <h3 className="so-bottom-head">Dosen Program Studi</h3>

          <div className="so-bottom-grid">
            {DOSEN_PRODI.map((d, i) => {
              const dosenFoto = getStrukturFotoByNama(d.nama);

              return (
              <article className="so-dosen" key={i}>
                <div
                  className={`so-avatar so-avatar--sm ${dosenFoto ? "so-avatar--photo" : ""}`}
                  aria-hidden="true"
                >
                  {dosenFoto ? (
                    <img src={dosenFoto} alt="" className="so-avatar-image" loading="lazy" />
                  ) : (
                    getInitials(d.nama)
                  )}
                </div>
                <div className="so-dosen-body">
                  <p className="so-dosen-nama">{d.nama}</p>
                  <p className="so-dosen-meta">
                    {d.nidn && d.nidn !== "-" ? `NIDN ${d.nidn}` : "NIDN —"}
                  </p>
                </div>
              </article>
              );
            })}
          </div>
        </section>

        {/* ---------- FOOTER / LEGENDA ---------- */}
        <footer className="so-footer">
          <div className="so-legend">
            <span className="so-legend-item">
              <i className="so-dot so-dot--utama" /> Pengembang / Koordinator
            </span>
            <span className="so-legend-item">
              <i className="so-dot so-dot--pendukung" /> Pendukung
            </span>
          </div>
          <p className="so-footer-note">{totalDosen} dosen terdaftar</p>
        </footer>
      </div>
    </div>
  );
}
