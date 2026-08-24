import React from "react";
import CardPrestasiMahawasiwa from "../../components/CardPrestasiMahasiswa/CardPrestasiMahasiswa";
import '../css/PrestasiMahasiswa.css';
import GambarLomba1 from "../../assets/Prestasi Mahasiswa/Selamat dan sukses.webp";

const PrestasiMahasiswaEN = () => {
  return (
    <section className="prestasiPage">
      <div className="PrestasiTerbaru">
        <header className="titlePrestasi">
          <p className="prestasiEyebrow">PPKn UNPAM</p>
          <h1>Latest Student Achievements</h1>
          <p className="prestasiLead">
            The work and dedication of PPKn students at the national level.
          </p>
        </header>

        <div className="prestasiGrid">
          <CardPrestasiMahawasiwa
            gambarLomba={GambarLomba1}
            juara="2nd Place"
            katagoriSubjek="Group"
            tingkatLomba="National"
          />
        </div>
      </div>
    </section>
  );
}

export default PrestasiMahasiswaEN