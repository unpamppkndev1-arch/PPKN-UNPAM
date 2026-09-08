import '../css/TentangProdiNew.css';

import unnpam from "../../assets/GedungdanFasilitasUNPAM/Pendidikan_Pancasila_dan_Kewarganegaraan.jpg"
import Gambar_kaprodi from "../../assets/Bu_ichwani_with_text.webp";

export default function TentangProdiNewID() {
  const linked = () =>{
    window.open("https://ppkn.unpam.ac.id/sambutan-ketua-program-studi")
  }

  const linked2 = () =>{
    window.open("https://ppkn.unpam.ac.id/berita/posts/informasi-umum-dan-sejarah-unpam-ppkn")
  }

  return (
    <div className="tentang-prodi-new">
      <div className="con">
        <img src={unnpam}  className="gambar" alt="Gedung Universitas Pamulang" />

      </div>

        <div className="content">
            <p>Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKn) merupakan salah satu program studi unggulan yang bernaung di bawah Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Universitas Pamulang. Program studi ini secara resmi didirikan pada tanggal 25 Juli 2008 berdasarkan Surat Keputusan Direktorat Jenderal Pendidikan Tinggi Nomor 2359/D/T/2008.</p>
            <button className="btn" onClick={linked2}>
              Selengkapnya
            </button>
        </div>

        <div className="titlevideo">
          <h2>Profil</h2>
        </div>

        <div className="videocontainer">
          <div className="video">
            <iframe
              width="1200"
              height="515"
              src="https://www.youtube.com/embed/t0TRfkNVWJk?t=0"
              title="Profil Program Studi PPKn Universitas Pamulang"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="titlevideo title-pimpinan-prodi">
          <h2>Pimpinan Prodi</h2>
        </div>
        <div className="pimpinan">
          <div className="left">
           <p className="title-pimpinan">Kepala Prodi</p>
          <p className="title-pimpinan">Dr. Ichwani Siti Utami, S.Pd. M.H</p>
          <p>Dr. Ichwani Siti Utami, S.Pd. M.H adalah kepala program studi Pendidikan Pancasila dan Kewarganegaraan di Universitas Pamulang.</p>
          <button className="btn" onClick={linked}>Sambutan Kepala Prodi</button>
          </div>
          <div className="right">
            <img src={Gambar_kaprodi} alt="Kepala Prodi" />
          </div>
        </div>

        <div className="maps">
          <div className="maps-left">
            <div className="maps-iframe-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.531125393861!2d106.69161309884123!3d-6.345802704278216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5a6e26dc3cd%3A0xccd6344b8021119d!2sUniversitas%20Pamulang%20Kampus%202%20(UNPAM%20Viktor)!5e0!3m2!1sid!2sid!4v1786337962117!5m2!1sid!2sid"
                title="Lokasi Universitas Pamulang Kampus 2 Viktor"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
          <div className="maps-right">
             <h2 className="maps-title">Lokasi Universitas Pamulang Kampus 2 Viktor</h2>
            <p className="maps-address">
              Jl. Surya Kencana No.1, RT.001/RW.002, Cireundeu,
              Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15419
            </p>
            <a
              className="maps-btn"
              href="https://www.google.com/maps/search/?api=1&query=Universitas+Pamulang+Kampus+2+Viktor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>

    </div>
  );
}