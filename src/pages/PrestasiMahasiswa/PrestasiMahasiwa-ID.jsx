import CardPrestasiMahasiswa from "../../components/CardPrestasiMahasiswa/CardPrestasiMahasiswa";
import "../css/PrestasiMahasiswa.css";
import GambarLomba1 from "../../assets/Prestasi Mahasiswa/Selamat dan sukses.webp";

const PrestasiMahasiswaID = () => {
  const daftarPrestasi = [
    {
      id: 1,
      gambarLomba: GambarLomba1,
      juara: "Juara 2",
      katagoriSubjek: "Kelompok",
      tingkatLomba: "Nasional",
    },
  ];

  return (
    <section className="P-prestasiPage">
      {/* Dekorasi background */}
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
            Prestasi Mahasiswa <span className="P-titleAccent">Terbaru</span>
          </h1>

          <p className="P-lead">
            Karya, dedikasi, dan perjuangan mahasiswa PPKn UNPAM dalam
            menorehkan prestasi di tingkat nasional.
          </p>
        </header>

        {/* Statistik ringkas */}
        <div className="P-stats">
          <div className="P-stat">
            <span className="P-statValue">12+</span>
            <span className="P-statLabel">Total Prestasi</span>
          </div>
          <div className="P-stat">
            <span className="P-statValue">5</span>
            <span className="P-statLabel">Juara Nasional</span>
          </div>
          <div className="P-stat">
            <span className="P-statValue">8+</span>
            <span className="P-statLabel">Bidang Lomba</span>
          </div>
        </div>

        {/* Grid prestasi */}
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
              Belum ada prestasi yang dipublikasikan. Nantikan update berikutnya!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrestasiMahasiswaID;