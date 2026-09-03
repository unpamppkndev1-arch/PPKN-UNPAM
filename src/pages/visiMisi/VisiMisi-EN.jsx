import React from "react";
import "../css/VisiMisi.css";

const VISI = (
  <>
    Developing integrative Pancasila and Civic Education scholarship based on{" "}
    <strong className="vmp-quote-hl">humanist and religious</strong> values to
    produce graduates who are{" "}
    <strong className="vmp-quote-hl">globally minded and competitive</strong>.
  </>
);

const NILAI = [
  {
    judul: "Integrative",
    deskripsi:
      "PPKn scholarship is integrated across disciplines to make learning meaningful and comprehensive.",
  },
  {
    judul: "Humanist",
    deskripsi:
      "Placing humans at the center of education with full empathy and respect.",
  },
  {
    judul: "Religious",
    deskripsi: "Based on faith and piety in every academic process on campus.",
  },
  {
    judul: "Globally Minded",
    deskripsi:
      "Open to global dynamics and scientific developments at the international level.",
  },
  {
    judul: "Competitive",
    deskripsi:
      "Producing excellent graduates ready to contribute to the nation and state.",
  },
];

const MISI = [
  "Organizing integrative education and learning for prospective Pancasila and Civic Education teachers.",
  "Conducting innovative interdisciplinary research to support the development of knowledge in the field of PPKn.",
  "Organizing research-based, sustainable community service in PPKn education that has an impact on community progress.",
  "Implementing effective and responsive academic governance to support the quality of graduates who are globally minded and competitive.",
  "Establishing partnerships at local, national, and international levels to strengthen the implementation of the tridharma (three pillars of higher education).",
];

const TUJUAN = [
  "Producing integrative education and learning for prospective Pancasila and Civic Education teachers.",
  "Producing innovative interdisciplinary research to support the development of knowledge in the field of Pancasila and Civic Education.",
  "Producing research-based, sustainable community service in Pancasila and Civic Education that has an impact on community progress.",
  "The implementation of effective and responsive academic governance to support the quality of graduates who are globally minded and competitive.",
  "The establishment of partnerships at local, national, and international levels to strengthen the implementation of the tridharma.",
];

const formatNomor = (i) => String(i + 1).padStart(2, "0");

const VisiMisiEN = () => {
  return (
    <section className="vmp-section">
      <div className="vmp-container">
        {/* Header */}
        <header className="vmp-header">
          <span className="vmp-eyebrow">Study Program Profile</span>
          <h1 className="vmp-title">
            Vision <span className="vmp-title-accent">&amp;</span> Mission
          </h1>
          <p className="vmp-subtitle">
            Pancasila and Civic Education Study Program
          </p>
        </header>

        {/* Vision */}
        <div className="vmp-visi">
          <span className="vmp-visi-badge">Vision</span>
          <blockquote className="vmp-quote">&ldquo;{VISI}&rdquo;</blockquote>
        </div>

        {/* Core Values */}
        <div className="vmp-block">
          <div className="vmp-block-head">
            <h2 className="vmp-block-title">Core Values</h2>
            <p className="vmp-block-desc">
              Character foundations that become the spirit in the entire
              educational process.
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

        {/* Mission */}
        <div className="vmp-block">
          <div className="vmp-block-head">
            <h2 className="vmp-block-title">Mission</h2>
            <p className="vmp-block-desc">
              Strategic steps to realize the vision of the study program.
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

        {/* Objectives */}
        <div className="vmp-block">
          <div className="vmp-block-head">
            <h2 className="vmp-block-title">Objectives</h2>
            <p className="vmp-block-desc">
              Outcomes to be achieved through the implementation of the mission.
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

export default VisiMisiEN;
