import React, { useEffect, useState, useCallback, useRef } from "react";
import ichwaniPhoto from "../../assets/Bu_ichwani_with_text.webp";
import "../css/SambutanKaprodi.css";

export default function SambutanKaprodi() {
  const containerRef = useRef(null);
  const [data, setData] = useState(null);

  const linked = () => {
    window.open(
      "https://pddikti.kemdiktisaintek.go.id/detail-dosen/J4SIYB5CSWZfyLLCNbiHaom8wtBpm2ielGPhaiIU5HFesHiKNUQVpIqucj8SswoLxdUBTQ==",
      "_blank"
    );
  };

  const kirimTinggi = useCallback(() => {
    const tinggi = document.documentElement.scrollHeight;
    if (window.parent !== window) {
      window.parent.postMessage({ tinggi }, "*");
    }
  }, []);

  useEffect(() => {
    setData({
      id: {
        nama: "Dr. Ichwani Siti Utami, S.Pd., M.H",
        jabatan: "Ketua Program Studi",
        fotoId: 1,
        paragraf: [
          "Assalamu’alaikum Warahmatullahi Wabarakatuh,",
          "Salam Sejahtera,",
          "Selamat datang di Website Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKN). Fakultas Keguruan dan Ilmu Pendidikan Universitas Pamulang.",
          "Berdasarkan keputusan Lembaga Akreditasi Mandiri Kependidikan (LAMDIK) Nomor: 562/SK/LAMDIK/Ak/S/XI/2022, Prodi Pendidikan Pancasila dan Kewarganegaraan (PPKn) Pada Program Sarjana Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Universitas Pamulang, terakreditasi dengan peringkat Baik Sekali.",
          "Di era globalisasi saat ini, perkembangan ilmu pengetahuan dan teknologi sangat begitu cepat. dimana kita semakin mudah dalam mengakses segala informasi yang dibutuhkan dan menjadikan pendidikan Indonesia mampu bersaing dengan negara-negara lain. Kami merupakan program studi Pendidikan Pancasila dan Kewarganegaraan (PPKn) yang mengembangkan karakter keilmuan berbasis filsafat Pancasila, sehingga menghasilkan lulusan yang cerdas dan dapat bersaing di dunia insdustri dan dunia usaha (DIDU).",
          "Website ini menyajikan informasi yang berkaitan dengan seluruh kegiatan sivitas akademika Program Studi PPKn. Semoga website Program Studi PPKn Fakultas Keguruan dan Ilmu Pendidikan Universitas Pamulang ini dapat memberikan informasi yang dibutuhkan oleh para pengunjung. Akhirul kalam, Saya ucapkan terima kasih.",
          "Wassalamu’alaikum Wr. Wb.",
        ],
      },
      en: {
        nama: "Dr. Ichwani Siti Utami, S.Pd., M.H",
        jabatan: "Head of Study Program",
        fotoId: 1,
        paragraf: [
          "Assalamu’alaikum Warahmatullahi Wabarakatuh,",
          "May peace be upon you,",
          "Welcome to the website of the Pancasila and Civic Education Study Program (PPKN), Faculty of Teacher Training and Education, Universitas Pamulang.",
          "Based on the decree of the Independent Accreditation Agency for Education (LAMDIK) Number: 562/SK/LAMDIK/Ak/S/XI/2022, the Pancasila and Civic Education Study Program (PPKn) at the Undergraduate Program of the Faculty of Teacher Training and Education (FKIP), Universitas Pamulang, is accredited with an “Excellent” rating.",
          "In the current era of globalization, the development of science and technology is moving very rapidly. It enables us to access all the information we need more easily and allows Indonesian education to compete with other countries. We are the Pancasila and Civic Education (PPKn) study program that develops academic character based on the philosophy of Pancasila, producing graduates who are intelligent and able to compete in the industrial and business world.",
          "This website provides information related to all activities of the PPKn Study Program’s academic community. We hope this website of the PPKn Study Program, Faculty of Teacher Training and Education, Universitas Pamulang, can deliver the information needed by all visitors. Finally, I would like to express my gratitude.",
          "Wassalamu’alaikum Wr. Wb.",
        ],
      },
    });
  }, []);

  useEffect(() => {
    if (data) {
      requestAnimationFrame(() => requestAnimationFrame(kirimTinggi));
    }
  }, [data, kirimTinggi]);

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(kirimTinggi);
    resizeObserver.observe(containerRef.current);

    const mutationObserver = new MutationObserver(kirimTinggi);
    mutationObserver.observe(containerRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    window.addEventListener("load", kirimTinggi);
    window.addEventListener("resize", kirimTinggi);

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("load", kirimTinggi);
      window.removeEventListener("resize", kirimTinggi);
    };
  }, [kirimTinggi]);

  const bahasa = window.location.pathname.includes("/en") ? "en" : "id";
  const content = data?.[bahasa];

  if (!content) return <p className="sambutan-loading">Memuat...</p>;

  return (
    <section className="sambutan" ref={containerRef}>
      <span className="sambutan-bg-word" aria-hidden="true">
        {bahasa === "en" ? "Welcome" : "Sambutan"}
      </span>

      <header className="sambutan-header">
        <p className="sambutan-eyebrow" data-animate style={{ animationDelay: "0ms" }}>
          <span className="sambutan-eyebrow-line" aria-hidden="true" />
          {bahasa === "en" ? "Foreword" : "Sambutan"}
          <span className="sambutan-eyebrow-line" aria-hidden="true" />
        </p>

        <h1 className="sambutan-title" data-animate style={{ animationDelay: "80ms" }}>
          {bahasa === "en" ? (
            <>Head of Program’s <em>Welcome</em></>
          ) : (
            <><em>Sambutan</em> Ketua Program Studi</>
          )}
        </h1>

        <p className="sambutan-subtitle" data-animate style={{ animationDelay: "160ms" }}>
          {bahasa === "en"
            ? "Pancasila and Civic Education Study Program · Faculty of Teacher Training and Education, Universitas Pamulang"
            : "Pendidikan Pancasila dan Kewarganegaraan · Fakultas Keguruan dan Ilmu Pendidikan, Universitas Pamulang"}
        </p>

        <div className="sambutan-divider" data-animate style={{ animationDelay: "220ms" }} aria-hidden="true">
          <span /><i /><span />
        </div>
      </header>

      <div className="sambutan-grid">
        <aside className="sambutan-card-col" data-animate style={{ animationDelay: "280ms" }}>
          <figure className="sambutan-card">
            <div className="sambutan-photo-wrap">
              <img
                src={ichwaniPhoto}
                alt={content.nama}
                className="sambutan-photo"
                onLoad={kirimTinggi}
              />

              <span className="sambutan-quote-badge" aria-hidden="true">“</span>
            </div>

            <figcaption className="sambutan-card-body">
              <h2 className="sambutan-name">{content.nama}</h2>
              <button type="button" className="sambutan-role" onClick={linked}>
                {content.jabatan}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </button>
            </figcaption>
          </figure>

          <p className="sambutan-chip">
            <span className="sambutan-chip-dot" aria-hidden="true" />
            {bahasa === "en"
              ? <>Accredited “Excellent” — LAMDIK 2022</>
              : <>Akreditasi “Baik Sekali” — LAMDIK 2022</>}
          </p>
        </aside>

        <article className="sambutan-content">
          {content.paragraf.map((p, i) => {
            const isLast = i === content.paragraf.length - 1;
            let cls = "sambutan-paragraph";
            if (i <= 1) cls += " sambutan-paragraph--greeting";
            else if (i === 2) cls += " sambutan-paragraph--dropcap";
            else if (i === 3) cls += " sambutan-paragraph--highlight";
            if (isLast) cls += " sambutan-paragraph--closing";
            return (
              <p
                key={i}
                className={cls}
                data-animate
                style={{ animationDelay: `${340 + i * 70}ms` }}
              >
                {p}
              </p>
            );
          })}

          <div
            className="sambutan-signature"
            data-animate
            style={{ animationDelay: `${340 + content.paragraf.length * 70}ms` }}
          >
            <span className="sambutan-sign-rule" aria-hidden="true" />
            <p className="sambutan-sign-name">{content.nama}</p>
            <p className="sambutan-sign-role">{content.jabatan}</p>
          </div>
        </article>
      </div>
    </section>
  );
}