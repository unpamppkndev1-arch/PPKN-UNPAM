# 🎓 Website Prodi PPKn UNPAM

Website portal informasi Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKn) Universitas Pamulang (UNPAM). Aplikasi ini dibangun menggunakan React 19, Vite, dan React Router DOM v7 dengan dukungan multi bahasa Indonesia dan Inggris.

Website resmi institusi: [https://ppkn.unpam.ac.id](https://ppkn.unpam.ac.id)

---

## 📌 Ringkasan Proyek

Proyek ini berfungsi sebagai landing page dan portal informasi resmi prodi PPKn. Fungsinya tidak hanya menampilkan daftar dosen, tetapi juga menyediakan informasi mengenai:

- profil prodi dan sejarah
- visi, misi, dan tujuan
- sambutan kaprodi
- prestasi mahasiswa
- FAQ dan informasi PMB
- halaman daftar dosen bilingual

---

## 📍 Daftar Rute / Halaman (URL Matrix)

Aplikasi menggunakan client-side routing untuk navigasi antar halaman tanpa reload.

| Rute URL | Komponen Page | Deskripsi |
| :--- | :--- | :--- |
| `/` | `Home` | Halaman utama / landing page prodi |
| `/dosen` | `Navigate` | Redirect ke `/dosen/id` |
| `/dosen/:lang` | `DaftarDosen` | Daftar dosen, mendukung `id` dan `en` |
| `/visi-misi/id` | `VisiMisiID` | Visi, misi, dan tujuan (Bahasa Indonesia) |
| `/visi-misi/en` | `VisiMisiEN` | Visi, misi, dan tujuan (Bahasa Inggris) |
| `/tentang-prodi/id` | `TentangProdiID` | Profil prodi (Bahasa Indonesia) |
| `/tentang-prodi/en` | `TentangProdiEN` | Profil prodi (Bahasa Inggris) |
| `/tentang-prodi/new/id` | `TentangProdiNewID` | Profil & sejarah prodi versi baru (ID) |
| `/tentang-prodi/new/en` | `TentangProdiNewEN` | Profil & sejarah prodi versi baru (EN) |
| `/sambutan-kaprodi` | `SambutanKaprodi` | Sambutan kaprodi |
| `/sambutan-kaprodi/:lang` | `SambutanKaprodi` | Sambutan kaprodi dengan varian bahasa |
| `/prestasi-mahasiswa/id` | `PrestasiMahasiswaID` | Prestasi mahasiswa (ID) |
| `/prestasi-mahasiswa/en` | `PrestasiMahasiswaEN` | Prestasi mahasiswa (EN) |
| `/faq/id` | `FaqID` | FAQ (ID) |
| `/faq/en` | `FaqEN` | FAQ (EN) |
| `/pmb` | `Navigate` | Redirect ke `/pmb/id` |
| `/pmb/id` | `PMB` | Informasi PMB (ID) |
| `/pmb/en` | `PMBEN` | Informasi PMB (EN) |
| `*` | `ErrorPage` | Halaman not found / fallback error |

---

## 🛠️ Teknologi & Fitur Utama

- **Framework & Tooling**: [React 19](https://react.dev/), [Vite 8](https://vite.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: CSS kustom vanilla untuk setiap halaman dan komponen
- **Build & Deployment**: Vite + support SPA routing untuk Vercel/GitHub Pages

### Fitur utama

- 🌐 **Dukungan bilingual (ID / EN)** di halaman dosen, profil prodi, PMB, FAQ, dan halaman lain yang relevan.
- 👨‍🏫 **Daftar dosen dinamis** dengan data lengkap seperti NIDN, NUPTK, pendidikan S2/S3, bidang keahlian, dan tautan PDDikti.
- 🖼️ **Fallback foto otomatis** ke `icon.png` jika foto dosen belum tersedia.
- 🏠 **Landing page prodi** yang menyediakan navigasi cepat ke informasi penting.
- 🧑‍🎓 **Halaman prestasi mahasiswa** untuk menampilkan capaian akademik dan non-akademik.
- ❓ **FAQ interaktif** untuk menjawab pertanyaan umum calon mahasiswa atau publik.
- 📚 **Halaman PMB** untuk informasi pendaftaran dan program studi.
- 🚀 **Routing SPA siap deploy** dengan `vercel.json` dan `cp dist/index.html dist/404.html` untuk GitHub Pages.

---

## 📁 Struktur Direktori Proyek

```text
ppkn-dosen/
├── public/                     # Aset publik statis
│   └── 404.html
├── src/
│   ├── App.jsx                 # Konfigurasi routing utama
│   ├── main.jsx                # Entry point React
│   ├── index.css               # Global styling
│   ├── assets/                 # Gambar, foto, dan aset visual
│   │   ├── FAQ/
│   │   ├── GedungdanFasilitasUNPAM/
│   │   ├── Image dosen (Background hijau)/
│   │   ├── imageDosen/
│   │   ├── Prestasi Mahasiswa/
│   │   ├── Prodi PPKn/
│   │   └── icon.png
│   ├── components/
│   │   ├── CardDosen/
│   │   │   ├── CardDosen.jsx
│   │   │   └── CardDosen.css
│   │   └── CardPrestasiMahasiswa/
│   │       ├── CardPrestasiMahasiswa.jsx
│   │       └── CardPrestasiMahasiswa.css
│   ├── data/
│   │   ├── dosen-id.js
│   │   ├── dosen-en.js
│   │   └── fotoMap.js
│   ├── pages/
│   │   ├── css/
│   │   │   ├── Home.css
│   │   │   ├── PMB.css
│   │   │   ├── PrestasiMahasiswa.css
│   │   │   ├── SambutanKaprodi.css
│   │   │   ├── TentangProdi.css
│   │   │   ├── TentangProdiNew.css
│   │   │   └── VisiMisi.css
│   │   ├── ErrorPage/
│   │   │   ├── ErrorPage.jsx
│   │   │   └── ErrorPage.css
│   │   ├── faq/
│   │   │   ├── FaqID.jsx
│   │   │   └── FaqEN.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── PMB/
│   │   │   ├── PMB.jsx
│   │   │   └── PMB-EN.jsx
│   │   ├── PrestasiMahasiswa/
│   │   │   ├── PrestasiMahasiwa-ID.jsx
│   │   │   └── PrestasiMahasiswa-EN.jsx
│   │   ├── sambutanKaprodi/
│   │   │   └── SambutanKaprodi.jsx
│   │   ├── tentangProdi/
│   │   │   ├── TentangProdi-ID.jsx
│   │   │   ├── TentangProdiNew-ID.jsx
│   │   │   ├── tentangProdi-EN.jsx
│   │   │   └── TentangProdiNew-EN.jsx
│   │   ├── visiMisi/
│   │   │   ├── VisiMisi-ID.jsx
│   │   │   └── VisiMisi-EN.jsx
│   │   └── daftarDosen/
│   │       └── DaftarDosen.jsx
│   └── data/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tailwind.config.js
├── vercel.json
├── vite.config.js
└── public/404.html
```

---

## 💻 Penjelasan Komponen & Modul Utama

### 1. `src/App.jsx`
Komponen root yang mengatur seluruh routing aplikasi. Beberapa fungsi utamanya:

- menyediakan `BrowserRouter`
- mendefinisikan semua route halaman
- mengarahkan `/` dan `/dosen` ke route default yang benar
- mendukung pengaturan bahasa pada halaman dosen, visi misi, profil, PMB, FAQ, dan prestasi

### 2. `src/pages/Home/Home.jsx`
Halaman utama yang berperan sebagai landing page prodi. Biasanya menampilkan informasi umum dan navigasi cepat ke topik utama seperti profil, dosen, PMB, dan prestasi.

### 3. `src/pages/daftarDosen/DaftarDosen.jsx`
Halaman daftar dosen yang:

- membaca parameter `:lang` dari URL
- validasi bahasa (`id` atau `en`)
- memilih dataset yang sesuai dari `dosen-id.js` atau `dosen-en.js`
- menampilkan daftar dosen menggunakan komponen `CardDosen`

### 4. `src/components/CardDosen/CardDosen.jsx`
Komponen kartu profil dosen. Menampilkan:

- nama dosen
- NIDN dan NUPTK
- pendidikan S2/S3
- bidang keahlian
- link ke PDDikti
- foto dosen dengan fallback ke default icon

### 5. `src/data/fotoMap.js`
Utility mapping foto dosen ke ID dosen tertentu. Fungsinya untuk:

- menghubungkan data dosen dengan asset foto
- menghindari error saat foto belum ada
- menggunakan fallback `icon.png`

### 6. `src/pages/tentangProdi/`
Folder yang berisi halaman profil prodi, meliputi:

- `TentangProdi-ID.jsx`
- `TentangProdi-EN.jsx`
- `TentangProdiNew-ID.jsx`
- `TentangProdiNew-EN.jsx`

Halaman ini mendeskripsikan sejarah, profil, akreditasi, dan komitmen prodi.

### 7. `src/pages/visiMisi/`
Folder yang berisi halaman visi, misi, dan tujuan prodi dalam dua versi bahasa.

### 8. `src/pages/PMB/`
Halaman pendaftaran mahasiswa baru. Menyajikan informasi program PMB dalam format ID dan EN.

### 9. `src/pages/faq/`
Halaman FAQ bilingual yang berisi informasi umum seputar prodi dan pendaftaran.

### 10. `src/pages/PrestasiMahasiswa/`
Halaman prestasi mahasiswa yang menampilkan pencapaian dan highlight mahasiswa PPKn.

### 11. `src/pages/sambutanKaprodi/`
Halaman sambutan kaprodi, berfungsi sebagai penyampaian profil dan visi dari pimpinan program studi.

### 12. `src/pages/ErrorPage/ErrorPage.jsx`
Halaman fallback untuk route yang tidak ditemukan.

---

## 🚀 Cara Menjalankan Proyek di Lokal

### Prasyarat

- [Node.js](https://nodejs.org/) (versi 18+ disarankan)
- npm atau pnpm

### Langkah-langkah

1. Clone repository:

   ```bash
   git clone https://github.com/octavium2000/ppkn-dosen.git
   cd ppkn-dosen
   ```

2. Install dependency:

   ```bash
   npm install
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

   Vite default menggunakan port `3000` pada proyek ini, jadi URL yang biasanya dibuka adalah:

   ```text
   http://localhost:3000
   ```

4. Build untuk produksi:

   ```bash
   npm run build
   ```

   Hasil build akan dibuat di folder `dist/`.

5. Preview build hasil produksi:

   ```bash
   npm run preview
   ```

6. Deploy ke GitHub Pages (opsional):

   ```bash
   npm run deploy
   ```

---

## 🌐 Konfigurasi Deployment

Proyek ini dikonfigurasi agar support client-side routing saat dideploy:

- `vercel.json` mengarahkan semua route ke `index.html` agar tidak menghasilkan 404 pada saat SPA routing.
- script build menjalankan `cp dist/index.html dist/404.html` untuk kebutuhan fallback saat deploy ke GitHub Pages.

**Catatan**: route seperti `/dosen/en`, `/visi-misi/id`, dan `/pmb/id` akan tetap berfungsi di deployment karena konfigurasi rewrite dan fallback diatur dengan benar.

---

## ✅ Status Proyek

Proyek ini siap digunakan sebagai portal web informasi Program Studi PPKn UNPAM dengan struktur modular, bilingual support, dan routing yang cukup lengkap untuk kebutuhan landing page serta publikasi informasi akademik.
