import CardPrestasiMahasiswa from "../../components/CardPrestasiMahasiswa/CardPrestasiMahasiswa";
import "../css/PrestasiMahasiswa.css";
import GambarLomba1 from "../../assets/Prestasi Mahasiswa/Selamat dan sukses.webp";

const PrestasiMahasiswaEN = () => {
  const daftarPrestasi = [
    {
      id: 1,
      gambarLomba: GambarLomba1,
      juara: "2nd Place",
      katagoriSubjek: "Group",
      tingkatLomba: "National",
    },
  ];

  return (
    <section className="P-prestasiPage">
      {/* Background decoration */}
      <div className="P-decor P-decor--top" aria-hidden="true" />
      <div className="P-decor P-decor--bottom" aria-hidden="true" />

      <div className="P-container">
        {/* Header */}
        <header className="P-header">
          <span className="P-eyebrow">
            <span className="P-eyebrowDot" />
            PPKn UNPAM
          </span>

          <h1 className="P-title">
            Latest Student <span className="P-titleAccent">Achievements</span>
          </h1>

          <p className="P-lead">
            The work, dedication, and journey of PPKn UNPAM students in
            achieving national-level accomplishments.
          </p>
        </header>

        {/* Summary statistics */}
        <div className="P-stats">
          <div className="P-stat">
            <span className="P-statValue">12+</span>
            <span className="P-statLabel">Total Achievements</span>
          </div>
          <div className="P-stat">
            <span className="P-statValue">5</span>
            <span className="P-statLabel">National Winners</span>
          </div>
          <div className="P-stat">
            <span className="P-statValue">8+</span>
            <span className="P-statLabel">Competition Fields</span>
          </div>
        </div>

        {/* Achievements grid */}
        {daftarPrestasi.length > 0 ? (
          <div className="P-grid">
            {daftarPrestasi.map((item, index) => (
              <CardPrestasiMahasiswa
                key={item.id}
                gambarLomba={item.gambarLomba}
                juara={item.juara}
                katagoriSubjek={item.katagoriSubjek}
                tingkatLomba={item.tingkatLomba}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="P-empty">
            <span className="P-emptyIcon">🏆</span>
            <p className="P-emptyText">
              No achievements have been published yet. Stay tuned for the next update!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrestasiMahasiswaEN;