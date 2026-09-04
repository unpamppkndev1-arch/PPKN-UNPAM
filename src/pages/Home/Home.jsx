import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const routes = [
  {
    group: "Core Pages",
    description: "Halaman utama tersedia dalam dua bahasa.",
    items: [
      { label: "Dosen", path: "/dosen/id", lang: "id" },
      { label: "Lecturers", path: "/dosen/en", lang: "en" },
      { label: "Visi & Misi", path: "/visi-misi/id", lang: "id" },
      { label: "Vision & Mission", path: "/visi-misi/en", lang: "en" },
      { label: "Tentang Program Studi", path: "/tentang-prodi/id", lang: "id" },
      { label: "About Study Program", path: "/tentang-prodi/en", lang: "en" },
      {
        label: "Tentang Program Studi (Baru)",
        path: "/tentang-prodi/new/id",
        lang: "id",
      },
      {
        label: "About Study Program (New)",
        path: "/tentang-prodi/new/en",
        lang: "en",
      },
      { label: "Sambutan Kaprodi", path: "/sambutan-kaprodi/id", lang: "id" },
      {
        label: "Head of Program Welcome",
        path: "/sambutan-kaprodi/en",
        lang: "en",
      },
      { label: "Prestasi Mahasiswa", path: "/prestasi-mahasiswa/id", lang: "id" },
      {
        label: "Student Accomplishment",
        path: "/prestasi-mahasiswa/en",
        lang: "en",
      },
      { label: "FAQ", path: "/faq/id", lang: "id" },
      { label: "FAQ", path: "/faq/en", lang: "en" },
      { label: "PMB", path: "/pmb/id", lang: "id" },
      { label: "PMB", path: "/pmb/en", lang: "en" },
    ],
  },
];

function Home() {
  const [filter, setFilter] = useState("all"); // "all" | "id" | "en"

  const filteredGroups = routes
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (filter === "all") return true;
        return item.lang === filter;
      }),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <main className="home">
      <section className="home-hero">
        <p className="home-kicker">PPKn UNPAM</p>
        <h1 className="home-title">All Available Pages</h1>
        <p className="home-lead">
          Indeks rute publik. Gunakan filter di bawah untuk menampilkan halaman
          berdasarkan bahasa.
        </p>

        <div
          className="filter-bar"
          role="group"
          aria-label="Filter halaman berdasarkan bahasa"
        >
          {["all", "id", "en"].map((lang) => (
            <button
              key={lang}
              className={`filter-btn ${filter === lang ? "active" : ""}`}
              onClick={() => setFilter(lang)}
              aria-pressed={filter === lang}
            >
              {lang === "all" ? "All" : lang.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section className="home-grid">
        {filteredGroups.map((group, idx) => (
          <article key={group.group} className="home-card">
            <header className="home-card-header">
              <h2>{group.group}</h2>
              <span className="count-badge">{group.items.length}</span>
            </header>
            <p className="home-card-desc">{group.description}</p>
            <div className="home-links">
              {group.items.map((item) => (
                <Link key={item.path} to={item.path} className="home-link">
                  <div className="link-main">
                    <span className="link-label">{item.label}</span>
                    {item.lang && (
                      <span className="lang-tag">
                        {item.lang.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <code className="link-path">{item.path}</code>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Home;
