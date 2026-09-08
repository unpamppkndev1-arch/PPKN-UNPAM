import { useState } from "react";
import "./Faq.css";

function FaqID() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Apa itu Program Studi PPKn di Universitas Pamulang?",
      answer:
        "Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKn) Universitas Pamulang adalah salah satu program studi unggulan di bawah naungan Fakultas Keguruan dan Ilmu Pendidikan (FKIP). Didirikan pada tahun 2008 dengan SK Pendirian Nomor 2359/D/T/2008 tertanggal 25 Juli 2008, prodi ini menjadi tonggak awal lahirnya pendidikan keguruan di Universitas Pamulang.",
    },
    {
      question: "Apa visi dan misi dari Prodi PPKn UNPAM?",
      answer:
        "Prodi PPKn UNPAM memiliki visi untuk mencetak pendidik yang kompeten, religius, dan berwawasan kebangsaan. Program ini berkomitmen kuat dalam membangun karakter mahasiswa yang menjunjung tinggi nilai-nilai Pancasila serta semangat kebhinekaan. Melalui kurikulum yang adaptif, penguatan karakter, serta pendekatan pembelajaran berbasis teknologi dan nilai, prodi ini mendorong lahirnya generasi pendidik dan warga negara yang cerdas, kritis, serta bertanggung jawab secara sosial dan moral.",
    },
    {
      question:
        "Apa saja perkembangan dan pencapaian terbaru Prodi PPKn UNPAM?",
      answer:
        "Prodi PPKn UNPAM terus menunjukkan perkembangan dan pencapaian yang signifikan. Beberapa di antaranya adalah:\n(1) Transisi kurikulum menuju Outcome-Based Education (OBE) untuk menghasilkan lulusan yang lebih terukur dan adaptif. \n(2) Menjalin berbagai kerja sama akademik, baik nasional dengan universitas ternama seperti Universitas Sebelas Maret (UNS), Universitas Negeri Padang (UNP), dan Universitas Negeri Surabaya (UNESA), maupun internasional dengan ELMU University Malaysia, Universiti Malaysia Terengganu, dan Kolej Antarbangsa Mighty Skills. \n(3) Menggelar berbagai kegiatan seperti kuliah umum, seminar internasional, dan workshop untuk memperkuat nilai kebangsaan dan inovasi pembelajaran.",
    },
    {
      question:
        "Bagaimana prospek lulusan dan penilaian terhadap alumni PPKn UNPAM?",
      answer:
        "Lulusan Prodi PPKn UNPAM dinilai positif oleh pengguna. Berdasarkan survei Tingkat Kepuasan Pengguna Alumni Tahun 2025, mayoritas pengguna memberikan penilaian pada kategori baik hingga sangat baik terhadap berbagai aspek kompetensi alumni. Aspek kemampuan berkomunikasi memperoleh penilaian sangat baik tertinggi (55%), diikuti aspek etika dan penguasaan teknologi informasi (masing-masing 54%), serta kemampuan kerja sama tim dan pengembangan diri (52%). Hasil ini menunjukkan bahwa lulusan PPKn Universitas Pamulang dinilai memiliki penguasaan keilmuan yang relevan dengan kebutuhan dunia kerja dan masyarakat.",
    },
    {
      question:
        "Apa saja komitmen dan kontribusi Prodi PPKn UNPAM bagi masyarakat?",
      answer:
        "Prodi PPKn UNPAM berkomitmen untuk memberikan kontribusi nyata bagi masyarakat. Beberapa contohnya adalah:\n(1) Menjalin kerja sama dengan Desa Tegal dalam maintenance aplikasi persuratan desa untuk mendukung peningkatan kualitas pelayanan publik berbasis digital. \n(2) Melaksanakan kegiatan pengabdian kepada masyarakat, termasuk program internasional bersama PUP Filipina. \n(3) Menggelar kuliah umum dengan tema penguatan kebhinnekaan untuk membangun kesadaran generasi muda terhadap pentingnya menjaga keberagaman.",
    },
    {
      question: "Apa keunggulan Program Studi PPKn di Universitas Pamulang?",
      answer:
        "Keunggulan Prodi PPKn UNPAM terletak pada kurikulum yang berbasis Outcome-Based Education (OBE), dosen yang berpengalaman, serta suasana akademik yang mendukung pengembangan karakter dan wawasan kebangsaan. Selain itu, prodi ini aktif menjalin kerja sama nasional dan internasional, serta menyediakan berbagai kegiatan pengabdian dan penelitian yang memperkaya pengalaman mahasiswa.",
    },
    {
      question: "Bagaimana sistem perkuliahan di Prodi PPKn UNPAM?",
      answer:
        "Perkuliahan di Prodi PPKn UNPAM menggunakan pendekatan blended learning, menggabungkan pembelajaran tatap muka dan daring. Mahasiswa juga dilibatkan dalam diskusi, simulasi, serta praktik lapangan untuk mengasah kemampuan mengajar dan analisis sosial-politik. Dosen menggunakan metode interaktif dan berbasis proyek agar mahasiswa siap menghadapi tantangan di dunia pendidikan dan masyarakat.",
    },
    {
      question: "Apa saja peluang karir lulusan PPKn UNPAM?",
      answer:
        "Lulusan PPKn UNPAM memiliki peluang karir yang luas, antara lain sebagai guru PPKn di sekolah menengah, dosen, peneliti di bidang pendidikan kewarganegaraan, konsultan kebijakan publik, pegawai negeri sipil, serta pengelola lembaga swadaya masyarakat yang bergerak di bidang demokrasi dan hak asasi manusia. Dengan bekal keterampilan komunikasi dan kepemimpinan yang kuat, lulusan juga dapat berkarier di sektor swasta dan organisasi internasional.",
    },
    {
      question:
        "Apa saja keuntungan memilih Program Studi PPKn di Universitas Pamulang?",
      answer:
        "Ada beberapa keuntungan utama yang bisa didapatkan:\n(1) Kurikulum berbasis Outcome-Based Education (OBE) yang mengacu pada kebutuhan dunia kerja dan perkembangan zaman.\n(2) Dosen berkualitas dan berpengalaman di bidang pendidikan kewarganegaraan, serta aktif dalam penelitian dan pengabdian.\n(3) Jaringan kerja sama luas dengan berbagai universitas dalam dan luar negeri, membuka peluang pertukaran mahasiswa dan kolaborasi akademik.\n(4) Lingkungan kampus yang mendukung pengembangan soft skill, seperti organisasi kemahasiswaan, seminar, dan pelatihan kepemimpinan.\n(5) Lulusan yang kompeten dan siap bersaing di berbagai sektor, baik pendidikan, pemerintahan, maupun masyarakat sipil.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleItemClick = (index) => {
    toggleFaq(index);
  };

  const handleHeaderClick = (e, index) => {
    e.stopPropagation();
    toggleFaq(index);
  };

  return (
    <div className="faq-container">
      <main className="content-layout">
        <section className="faq-text-section">
          <h1>Pertanyaan umum</h1>
          <div className="accordion">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${openIndex === index ? "open" : ""}`}
                onClick={() => handleItemClick(index)}
              >
                <button
                  className="accordion-header"
                  onClick={(e) => handleHeaderClick(e, index)}
                >
                  <h2>{item.question}</h2>
                  <span className="toggle-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`accordion-content ${openIndex === index ? "open" : ""}`}
                >
                  {item.answer.split('\n').map((line, i) => {
                    // Deteksi pattern (1), (2), dst. di awal baris
                    const isNumberedPoint = /^\(\d+\)/.test(line.trim());
                    
                    return (
                      <p 
                        key={i} 
                        className={isNumberedPoint ? "hanging-indent" : ""}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default FaqID;