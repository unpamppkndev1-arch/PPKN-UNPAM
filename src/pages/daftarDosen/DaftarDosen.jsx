import { useParams, Navigate } from "react-router-dom";
import { dataDosenID } from "../../data/dosen-id";
import { dataDosenEN } from "../../data/dosen-en";
import CardDosen from "../../components/CardDosen/CardDosen";

function DaftarDosen() {
  const { lang } = useParams();

  if (lang !== "id" && lang !== "en") {
    return <Navigate to="/dosen/id" replace />;
  }

  const currentData = lang === "id" ? dataDosenID : dataDosenEN;
  // const title =
  //   lang === "id"
  //     ? "Daftar Dosen Prodi PPKn"
  //     : "Civics Education Lecturers List";

  return (
    <div className="app-container">
      {/* <h1 className="title" style={{ textAlign: "center", margin: "2rem 0" }}>
        {title}
      </h1> */}

      <div className="grid-dosen">
        {currentData.map((dosen) => (
          <CardDosen key={dosen.id} dosen={dosen} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default DaftarDosen;