import React from "react";
import CardPrestasiMahawasiwa from "../../components/CardPrestasiMahasiswa/CardPrestasiMahasiswa";
import '../css/PrestasiMahasiswa.css';
import GambarLomba1 from "../../assets/Prestasi Mahasiswa/Selamat dan sukses.webp";

const PrestasiMahasiswaID = () => {
  return (
    <section className="prestasiPage">
      <div className="PrestasiTerbaru">
        <header className="titlePrestasi">
          <p className="prestasiEyebrow">PPKn UNPAM</p>
          <h1>Prestasi Mahasiswa Terbaru</h1>
          <p className="prestasiLead">
            Karya dan perjuangan mahasiswa PPKn di tingkat nasional.
          </p>
        </header>

        <div className="prestasiGrid">
          <CardPrestasiMahawasiwa
            gambarLomba={GambarLomba1}
            juara="Juara 2"
            katagoriSubjek="Kelompok"
            tingkatLomba="Nasional"
          />
        </div>
      </div>
    </section>
  );
}

export default PrestasiMahasiswaID