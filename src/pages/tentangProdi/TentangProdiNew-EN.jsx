import '../css/TentangProdiNew.css';

import unnpam from "../../assets/GedungdanFasilitasUNPAM/Pendidikan_Pancasila_dan_Kewarganegaraan.jpg"
import Gambar_kaprodi from "../../assets/Bu_ichwani_with_text.webp";
export default function TentangProdiNewEN() {
  return (
    <div className="tentang-prodi-new">
      <div className="con">
        <img src={unnpam}  className="gambar" alt="Gedung Universitas Pamulang" />

      </div>

        <div className="content">
            <p>The Pancasila and Civic Education Study Program (PPKn) is one of the leading study programs under the Faculty of Teacher Training and Education (FKIP) at Pamulang University. The study program was officially established on July 25, 2008, based on the Decree of the Directorate General of Higher Education Number 2359/D/T/2008.</p>
            <button className="btn">Read More</button>
        </div>

        <div className="titlevideo">
          <h2>Profile</h2>
        </div>

        <div className="videocontainer">
          <div className="video">
            <iframe
              width="1200"
              height="515"
              src="https://www.youtube.com/embed/t0TRfkNVWJk?t=0"
              title="PPKn Study Program Profile at Pamulang University"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="titlevideo title-pimpinan-prodi">
          <h2>Program Head</h2>
        </div>
        <div className="pimpinan">
          <div className="left">
          <p className="title-pimpinan">Head of Study Program</p>
          <p className="title-pimpinan">Dr. Ichwani Siti Utami, S.Pd. M.H</p>
          <p>Dr. Ichwani Siti Utami, S.Pd. M.H is the head of the Pancasila and Civic Education study program at Pamulang University.</p>
          <button className="btn">Head of Program's Welcome</button>
          </div>
          <div className="right">
            <img src={Gambar_kaprodi} alt="Head of Study Program" />
          </div>
        </div>

        <div className="maps">
          <div className="maps-left">
            <div className="maps-iframe-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.531125393861!2d106.69161309884123!3d-6.345802704278216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5a6e26dc3cd%3A0xccd6344b8021119d!2sUniversitas%20Pamulang%20Kampus%202%20(UNPAM%20Viktor)!5e0!3m2!1sen!2sen!4v1786337962117!5m2!1sen!2sen"
                title="Location of Pamulang University Campus 2 Viktor"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
          <div className="maps-right">
            <h2 className="maps-title">Location of Pamulang University Campus 2 Viktor</h2>
            <p className="maps-address">
               Jl. Puspitek, Buaran, Kecamatan Pamulang, Kota Tangerang Selatan, Banten 15310 
            </p>
            <a
              className="maps-btn"
              href="https://www.google.com/maps/search/?api=1&query=Universitas+Pamulang+Kampus+2+Viktor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

    </div>
  );
}