# Website Program Studi PPKn UNPAM

Portal informasi resmi Program Studi Pendidikan Pancasila dan Kewarganegaraan
(PPKn), Universitas Pamulang (UNPAM). Aplikasi ini menyajikan informasi
program studi, dosen, akademik, penerimaan mahasiswa baru, prestasi mahasiswa,
serta informasi pendukung lainnya dalam bahasa Indonesia dan Inggris.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=20232A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![License](https://img.shields.io/badge/license-private-lightgrey)](#)

> **Website institusi:** [ppkn.unpam.ac.id](https://ppkn.unpam.ac.id)

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Daftar Halaman dan Route](#daftar-halaman-dan-route)
- [Struktur Proyek](#struktur-proyek)
- [Menjalankan Proyek](#menjalankan-proyek)
- [Build dan Deployment](#build-dan-deployment)

## Tentang Proyek

Website ini dibangun sebagai portal informasi digital untuk membantu mahasiswa,
calon mahasiswa, dosen, dan masyarakat memperoleh informasi tentang Program
Studi PPKn UNPAM. Aplikasi menggunakan pendekatan single-page application
(SPA), sehingga perpindahan halaman dapat dilakukan tanpa memuat ulang
seluruh dokumen.

## Fitur Utama

- **Informasi profil program studi** dan sejarah PPKn.
- **Visi, misi, dan tujuan** program studi.
- **Daftar dosen bilingual** dengan informasi pendidikan, bidang keahlian,
  identitas akademik, tautan PDDikti, dan foto.
- **Struktur organisasi** program studi dalam bahasa Indonesia dan Inggris.
- **Sambutan ketua program studi**.
- **Informasi prestasi mahasiswa**.
- **Informasi Penerimaan Mahasiswa Baru (PMB)**.
- **FAQ bilingual** untuk pertanyaan umum.
- **Fallback foto dosen** menggunakan ikon default jika foto belum tersedia.
- **Halaman error 404** untuk route yang tidak ditemukan.

## Teknologi

| Teknologi | Kegunaan |
| --- | --- |
| [React 19](https://react.dev/) | Library antarmuka pengguna |
| [React Router DOM 7](https://reactrouter.com/) | Client-side routing |
| [Vite 8](https://vite.dev/) | Development server dan build tool |
| CSS | Styling halaman dan komponen |
| ESLint | Pemeriksaan kualitas kode |

## Daftar Halaman dan Route

Route berikut didefinisikan di [`src/App.jsx`](./src/App.jsx).

| Route | Halaman | Bahasa / Keterangan |
| --- | --- | --- |
| `/` | Home | Halaman utama |
| `/dosen` | Redirect | Mengarah ke `/dosen/id` |
| `/dosen/:lang` | Daftar Dosen | `id` atau `en` |
| `/visi-misi/id` | Visi dan Misi | Bahasa Indonesia |
| `/visi-misi/en` | Vision and Mission | Bahasa Inggris |
| `/tentang-prodi/new/id` | Tentang Prodi | Bahasa Indonesia |
| `/tentang-prodi/new/en` | About the Program | Bahasa Inggris |
| `/sambutan-kaprodi` | Sambutan Kaprodi | Route default |
| `/sambutan-kaprodi/:lang` | Sambutan Kaprodi | Mendukung parameter bahasa |
| `/prestasi-mahasiswa/id` | Prestasi Mahasiswa | Bahasa Indonesia |
| `/prestasi-mahasiswa/en` | Student Achievements | Bahasa Inggris |
| `/faq/id` | FAQ | Bahasa Indonesia |
| `/faq/en` | FAQ | Bahasa Inggris |
| `/pmb` | Redirect | Mengarah ke `/pmb/id` |
| `/pmb/id` | PMB | Bahasa Indonesia |
| `/pmb/en` | Admission | Bahasa Inggris |
| `/so/id` | Struktur Organisasi | Bahasa Indonesia |
| `/so/en` | Organizational Structure | Bahasa Inggris |
| `*` | Error Page | Route tidak ditemukan |

## Struktur Proyek

```text
PPKN-UNPAM/
├── public/
│   ├── 404.html
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   │   ├── FAQ/
│   │   ├── GedungdanFasilitasUNPAM/
│   │   ├── Image dosen (Background hijau)/
│   │   ├── imageDosen/
│   │   ├── Prestasi Mahasiswa/
│   │   ├── Prodi PPKn/
│   │   └── aset gambar dan ikon lainnya
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
│   │   ├── fotoMap.js
│   │   └── strukturOrganisasiFotoMap.js
│   └── pages/
│       ├── css/
│       │   ├── Home.css
│       │   ├── PMB.css
│       │   ├── PrestasiMahasiswa.css
│       │   ├── SambutanKaprodi.css
│       │   ├── TentangProdiNew.css
│       │   └── VisiMisi.css
│       ├── Home/
│       │   └── Home.jsx
│       ├── daftarDosen/
│       │   └── DaftarDosen.jsx
│       ├── ErrorPage/
│       │   ├── ErrorPage.jsx
│       │   └── ErrorPage.css
│       ├── faq/
│       │   ├── FaqID.jsx
│       │   ├── FaqEN.jsx
│       │   └── Faq.css
│       ├── PMB/
│       │   ├── PMB.jsx
│       │   └── PMB-EN.jsx
│       ├── PrestasiMahasiswa/
│       │   ├── PrestasiMahasiwa-ID.jsx
│       │   └── PrestasiMahasiswa-EN.jsx
│       ├── sambutanKaprodi/
│       │   └── SambutanKaprodi.jsx
│       ├── strukturOrganisasi/
│       │   ├── StrukturOrganisasi-ID.jsx
│       │   ├── StrukturOrganisasi-EN.jsx
│       │   └── strukturOrganisasi.css
│       ├── tentangProdi/
│       │   ├── TentangProdiNew-ID.jsx
│       │   └── TentangProdiNew-EN.jsx
│       └── visiMisi/
│           ├── VisiMisi-ID.jsx
│           └── VisiMisi-EN.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Menjalankan Proyek

### Prasyarat

- Node.js versi 18 atau lebih baru.
- npm atau pnpm.

### Instalasi

```bash
git clone https://github.com/unpamppkndev1-arch/PPKN-UNPAM.git
cd PPKN-UNPAM
npm install
```

### Development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Pemeriksaan kode

```bash
npm run lint
```

## Build dan Deployment

Buat build produksi dengan perintah berikut:

```bash
npm run build
```

Perintah tersebut menjalankan build Vite dan menyalin `dist/index.html` menjadi
`dist/404.html` untuk mendukung fallback SPA pada deployment statis.

Untuk melihat hasil build secara lokal:

```bash
npm run preview
```

Konfigurasi [`vercel.json`](./vercel.json) dan fallback `404.html` disiapkan
untuk membantu client-side routing ketika aplikasi dideploy ke Vercel atau
GitHub Pages.

## Script yang Tersedia

| Script | Deskripsi |
| --- | --- |
| `npm run dev` | Menjalankan server development di port 3000 |
| `npm run build` | Membuat build produksi |
| `npm run lint` | Menjalankan ESLint |
| `npm run preview` | Menjalankan preview build produksi |
| `npm run deploy` | Deploy folder `dist` menggunakan `gh-pages` |

---

Dikembangkan untuk mendukung penyebaran informasi Program Studi Pendidikan
Pancasila dan Kewarganegaraan Universitas Pamulang.
