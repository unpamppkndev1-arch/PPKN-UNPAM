import { getFotoDosen } from "../../data/fotoMap";
import "./CardDosen.css";

export default function CardDosen({ dosen, lang }) {
  const isEn = lang === "en";
  const foto = getFotoDosen(dosen.id);

  return (
    <div className="card-dosen">
      <img src={foto} alt={dosen.nama} className="foto-dosen" />

      <div className="card-header">
        <h3>{dosen.nama}</h3>
        <div className="id-wrap">
          <p>NIDN: {dosen.nidn}</p>
          <p>NUPTK: {dosen.nuptk}</p>
        </div>
      </div>

      <div className="card-body">
        <p>
          <strong>{isEn ? "Expertise: " : "Keahlian: "}</strong>
          {dosen.keahlian}
        </p>

        <div className="pendidikan">
          <small>
            <strong>{isEn ? "Master's Degree: " : "S2: "}</strong>
            {dosen.pendidikan.magister}
          </small>

          {dosen.pendidikan.doktor !== "-" && (
            <small>
              <strong>{isEn ? "Doctoral Degree: " : "S3: "}</strong>
              {dosen.pendidikan.doktor}
            </small>
          )}
        </div>

        {dosen.pddikti && (
          <div className="pddikti-wrapper">
            <a
              href={dosen.pddikti}
              target="_blank"
              rel="noopener noreferrer"
              className="link-pddikti"
            >
              PDDikti
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
