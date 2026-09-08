import './CardPrestasiMahasiswa.css';

const CardPrestasiMahawasiwa = ({ gambarLomba, juara, katagoriSubjek, tingkatLomba }) => {
  return (
    <div className="card-prestasi-mahasiswa">
        <img src={gambarLomba} alt="gambar lomba" />
        <div className="prestasiInfo">
            <div className="kotakInfoPer1">
                <h2>{juara}</h2>
            </div>
            <div className="kotakInfoPer1">
                <h2>{katagoriSubjek}</h2>
            </div>
            <div className="kotakInfoPer1">
                <h2>{tingkatLomba}</h2>
            </div>
        </div>
        <button type="button" className="next-info">Info Selengkapnya</button>
    </div>
  );
}

export default CardPrestasiMahawasiwa;