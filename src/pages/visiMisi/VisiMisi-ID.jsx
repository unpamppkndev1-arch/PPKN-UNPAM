import React from "react";
import "../css/VisiMisi.css";

const VISI = (
  <>
    Mengembangkan keilmuan Pendidikan Pancasila dan Kewarganegaraan yang{" "}
    <strong className="vmp-quote-hl">integratif</strong> berlandaskan nilai{" "}
    <strong className="vmp-quote-hl">humanis dan religius</strong> untuk
    menghasilkan lulusan yang{" "}
    <strong className="vmp-quote-hl">
      berwawasan global dan berdaya saing
    </strong>
    .
  </>
);

const NILAI = [
  {
    judul: "Integratif",
    deskripsi:
      "Keilmuan PPKn dipadukan lintas disiplin agar pembelajaran bermakna dan menyeluruh.",
  },
  {
    judul: "Humanis",
    deskripsi:
      "Menempatkan manusia sebagai pusat pendidikan dengan penuh empati dan penghormatan.",
  },
  {
    judul: "Religius",
    deskripsi:
      "Berlandaskan iman dan ketakwaan dalam setiap proses akademik di kampus.",
  },
  {
    judul: "Berwawasan Global",
    deskripsi:
      "Terbuka terhadap dinamika dunia dan perkembangan ilmu di tingkat internasional.",
  },
  {
    judul: "Berdaya Saing",
    deskripsi:
      "Mencetak lulusan unggul yang siap berkontribusi bagi bangsa dan negara.",
  },
];

const MISI = [
  "Menyelenggarakan pendidikan dan pembelajaran yang integratif bagi calon guru Pendidikan Pancasila dan Kewarganegaraan.",
  "Menyelenggarakan penelitian interdisipliner yang inovatif untuk menunjang pengembangan ilmu pengetahuan di bidang PPKn.",
  "Menyelenggarakan pengabdian di bidang pendidikan PPKn berbasis penelitian, berkelanjutan, dan berdampak bagi kemajuan masyarakat.",
  "Menyelenggarakan tata kelola akademik yang efektif dan responsif untuk menunjang kualitas lulusan yang berwawasan global dan berdaya saing.",
  "Menjalin kemitraan di tingkat lokal, nasional, dan internasional dalam rangka memperkuat implementasi tridharma.",
];

const TUJUAN = [
  "Menghasilkan pendidikan dan pembelajaran yang integratif bagi calon guru Pendidikan Pancasila dan Kewarganegaraan.",
  "Menghasilkan penelitian interdisipliner yang inovatif untuk menunjang pengembangan ilmu pengetahuan di bidang Pendidikan Pancasila dan Kewarganegaraan.",
  "Menghasilkan pengabdian di bidang pendidikan Pancasila dan Kewarganegaraan berbasis penelitian, berkelanjutan, dan berdampak bagi kemajuan masyarakat.",
  "Terlaksananya tata kelola akademik yang efektif dan responsif untuk menunjang kualitas lulusan yang berwawasan global dan berdaya saing.",
  "Terjalinnya kemitraan di tingkat lokal, nasional, dan internasional dalam rangka memperkuat implementasi tridharma.",
];

const formatNomor = (i) => String(i + 1).padStart(2, "0");

const VisiMisiID = () => {
  return (
    <section className="vmp-section">
      <div className="vmp-container">
        {/* Header */}
        <header className="vmp-header">
          <span className="vmp-eyebrow">Profil Program Studi</span>
          <h1 className="vmp-title">
            Visi <span className="vmp-title-accent">&amp;</span> Misi
          </h1>
          <p className="vmp-subtitle">
            Program Studi Pendidikan Pancasila dan Kewarganegaraan
          </p>
        </header>

        {/* Visi */}
        <div className="vmp-visi">
          <span className="vmp-visi-badge">Visi</span>
          <blockquote className="vmp-quote">&ldquo;{VISI}&rdquo;</blockquote>
        </div>

        {/* Nilai Utama */}
        <div className="vmp-block">
          <div className="vmp-block-head">
            <h2 className="vmp-block-title">Nilai Utama</h2>
            <p className="vmp-block-desc">
              Landasan karakter yang menjadi ruh dalam seluruh proses
              pendidikan.
            </p>
          </div>
          <div className="vmp-values-grid">
            {NILAI.map((nilai) => (
              <div className="vmp-value-card" key={nilai.judul}>
                <span className="vmp-value-dot" aria-hidden="true" />
                <h3 className="vmp-value-title">{nilai.judul}</h3>
                <p className="vmp-value-desc">{nilai.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Misi */}
        <div className="vmp-block">
          <div className="vmp-block-head">
            <h2 className="vmp-block-title">Misi</h2>
            <p className="vmp-block-desc">
              Langkah strategis untuk mewujudkan visi program studi.
            </p>
          </div>
          <ol className="vmp-list">
            {MISI.map((item, i) => (
              <li className="vmp-item" key={i}>
                <span className="vmp-number">{formatNomor(i)}</span>
                <p className="vmp-text">{item}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Tujuan */}
        <div className="vmp-block">
          <div className="vmp-block-head">
            <h2 className="vmp-block-title">Tujuan</h2>
            <p className="vmp-block-desc">
              Hasil yang ingin dicapai melalui pelaksanaan misi.
            </p>
          </div>
          <ol className="vmp-list">
            {TUJUAN.map((item, i) => (
              <li className="vmp-item" key={i}>
                <span className="vmp-number">{formatNomor(i)}</span>
                <p className="vmp-text">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default VisiMisiID;
