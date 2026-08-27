# 🎓 UNPAM Website Prodi PPKn

Website portal informasi dan daftar dosen untuk **Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKn) Universitas Pamulang (UNPAM)**. Aplikasi ini dibangun menggunakan **React 19**, **Vite**, dan **React Router DOM v7** dengan dukungan tampilan bilingual (Bahasa Indonesia & Bahasa Inggris).

Website resmi institusi: [https://ppkn.unpam.ac.id](https://ppkn.unpam.ac.id)

---

## 📌 Daftar Rute / Halaman (URL Matrix)

Aplikasi menggunakan *Client-Side Routing* untuk bernavigasi antar halaman secara instan tanpa *reload* halaman:

| Rute URL | Komponen Page | Deskripsi |
| :--- | :--- | :--- |
| `/` | `Navigate` | Redirect otomatis ke `/dosen/id` |
| `/dosen` | `Navigate` | Redirect otomatis ke `/dosen/id` |
| `/dosen/id` | `DaftarDosen` | Daftar Dosen (Versi Bahasa Indonesia) |
| `/dosen/en` | `DaftarDosen` | Daftar Dosen (Versi Bahasa Inggris) |
| `/visi-misi` | `VisiMisi` | Halaman Visi, Misi, dan Tujuan Prodi PPKn |
| `/tentang-prodi/new/id` | `TentangProdiNewID` | Profil & Sejarah Prodi versi baru (Bahasa Indonesia) |
| `/tentang-prodi/new/en` | `TentangProdiNewEN` | Profil & Sejarah Prodi versi baru (Bahasa Inggris) |

---

## 🛠️ Teknologi & Fitur Utama

- **Framework & Tooling**: [React 19](https://react.dev/), [Vite 8](https://vite.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: Vanilla CSS kustom (`CardDosen.css`, `TentangProdi.css`, `VisiMisi.css`, `index.css`)
- **Fitur Utama**:
  - 🌐 **Dukungan Dual Bahasa (ID / EN)** pada halaman Daftar Dosen dan Profil Prodi.
  - 👨‍🏫 **Kartu Profil Dosen Dynamic**: Menampilkan nama lengkap, NIDN, NUPTK, riwayat pendidikan magister (S2) & doktor (S3), keahlian, serta tautan langsung ke PDDikti.
  - 🖼️ **Fallback Foto Dosen Otomatis**: Jika foto dosen belum tersedia di aset, sistem secara otomatis memakai default icon (`icon.png`).
  - 🚀 **Routing & Deployment Ready**: Siap didaftarkan ke Vercel (disertai `vercel.json` SPA rewrite) maupun GitHub Pages (`gh-pages`).

---

## 📁 Struktur Direktori & Penjelasan Kode

```text
PPKN-UNPAM/
├── public/                 # Aset publik statis
├── src/
│   ├── assets/             # Gambar & foto dosen
│   │   ├── icon.png        # Gambar ikon fallback
│   │   ├── imageDosen/     # Foto-foto dosen prodi
│   │   └── Prodi PPKn/     # Gambar pendukung prodi
│   ├── components/         # Komponen UI reusable
│   │   ├── CardDosen.jsx   # Kartu profil dosen
│   │   └── CardDosen.css   # Styling kartu dosen
│   ├── data/               # File sumber data statis
│   │   ├── dosen-id.js     # Data dosen versi ID
│   │   ├── dosen-en.js     # Data dosen versi EN
│   │   └── fotoMap.js      # Utility mapping foto dosen
│   ├── pages/              # Komponen halaman utama
│   │   ├── daftarDosen/
│   │   │   └── DaftarDosen.jsx
│   │   ├── tentangProdi/
│   │   │   ├── TentangProdi-ID.jsx
│   │   │   └── tentangProdi-EN.jsx
│   │   ├── visiMisi/
│   │   │   └── VisiMisi.jsx
│   │   └── css/            # Style CSS untuk halaman
│   │       ├── TentangProdi.css
│   │       └── VisiMisi.css
│   ├── App.jsx             # Konfigurasi Routing Utama
│   ├── main.jsx            # Entry point utama React
│   └── index.css           # Global CSS baseline
├── eslint.config.js        # Konfigurasi ESLint
├── index.html              # Template HTML utama Vite
├── package.json            # Script & dependensi proyek
├── vercel.json             # Rules rewrite Vercel SPA
└── vite.config.js          # Konfigurasi Vite bundler
```

---

## 💻 Penjelasan Komponen & Modul Utama

### 1. `src/App.jsx`
Merupakan komponen akar (*root component*) yang mengatur alur navigasi aplikasi menggunakan `react-router-dom`:
- Menggunakan `BrowserRouter` dan `Routes` untuk mendefinisikan seluruh rute URL.
- Menangani pengalihan otomatis (`Navigate`) dari rute `/` dan `/dosen` ke `/dosen/id`.
- Menyediakan rute dinamis `/dosen/:lang` untuk mendukung halaman dosen serbaguna (Bahasa Indonesia & Inggris).
- Menghubungkan rute `/visi-misi` serta rute bahasa tentang prodi versi baru (`/tentang-prodi/new/id` dan `/tentang-prodi/new/en`).

### 2. `src/main.jsx`
Merupakan titik masuk (*entry point*) React DOM:
- Mengaitkan elemen `#root` pada `index.html` dengan React root (`createRoot`).
- Membungkus komponen `<App />` di dalam `<React.StrictMode>` untuk membantu mendeteksi masalah selama pengembangan.
- Mengimpor file styling global `index.css`.

### 3. `src/components/CardDosen.jsx` & `CardDosen.css`
Komponen UI untuk menampilkan informasi dosen secara individual:
- **Props**: Menerima objek `dosen` dan string `lang` ('id' | 'en').
- **Integrasi Foto**: Memanggil fungsi `getFotoDosen(dosen.id)` dari `fotoMap.js`.
- **Render Berbasis Kondisi**: 
  - Mengubah label keahlian dan jenjang pendidikan (*Expertise*, *Master's Degree*, *Doctoral Degree*) sesuai dengan parameter `lang`.
  - Hanya menampilkan bagian S3 jika data `dosen.pendidikan.doktor` tidak bernilai `"-"`.
  - Menampilkan tombol/link ke profil **PDDikti** jika URL PDDikti tersedia.

### 4. `src/pages/daftarDosen/DaftarDosen.jsx`
Halaman kontainer daftar dosen:
- Membaca parameter URL `:lang` melalui `useParams()`.
- Melakukan validasi parameter `:lang`. Jika nilainya bukan `"id"` atau `"en"`, pengguna akan otomatis di-redirect kembali ke `/dosen/id`.
- Secara dinamis memilih dataset yang sesuai (`dataDosenID` dari `dosen-id.js` atau `dataDosenEN` dari `dosen-en.js`).
- Melakukan perulangan (`map`) pada dataset untuk me-render daftar `CardDosen`.

### 5. `src/data/fotoMap.js`
Utility pengelola gambar dosen:
- Mengimpor gambar-gambar dosen dari `src/assets/imageDosen/` sehingga bundler Vite dapat mengoptimalkan dan meng-hash nama file gambar.
- Menyimpan pemetaan `id` dosen ke objek gambar.
- Menyediakan fungsi `getFotoDosen(id)` yang akan mengembalikan gambar dosen terkait atau fallback ke `icon.png` jika gambar belum ada/tidak ditemukan.

### 6. `src/pages/visiMisi/VisiMisi.jsx` & `VisiMisi.css`
Halaman yang menampilkan profil Visi, Misi (5 poin utama), dan Tujuan (5 poin utama) dari Program Studi PPKn Universitas Pamulang dengan tampilan card berbasis grid yang rapi.

### 7. `src/pages/tentangProdi/`
- **`TentangProdi-ID.jsx`**: Profil lengkap prodi dalam Bahasa Indonesia mencakup Profil Singkat, Sejarah & Perjalanan, Akreditasi LAMDIK *"Baik Sekali"* (SK No. 562/SK/LAMDIK/Ak/S/XI/2022), serta Komitmen Ke Depan.
- **`tentangProdi-EN.jsx`**: Terjemahan bahasa Inggris dari halaman profil prodi.
- **`css/TentangProdi.css`**: Styling tata letak dan tipografi halaman profil prodi.

---

## 🚀 Cara Menjalankan Proyek di Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (Versi 18 ke atas disarankan)
- npm atau pnpm

### Langkah-Langkah

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/octavium2000/ppkn-dosen.git
   cd PPKN-UNPAM
   ```

2. **Install dependensi proyek**:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Dev Server)**:
   ```bash
   npm run dev
   ```
   Buka URL lokal yang ditunjukkan di terminal (biasanya `http://localhost:5173`).

4. **Build untuk Produksi**:
   ```bash
   npm run build
   ```
   Hasil build siap deploy akan dibuat pada folder `dist/`.

5. **Deploy ke GitHub Pages**:
   ```bash
   npm run deploy
   ```

---

## 🌐 Konfigurasi Deployment (Vercel & SPA Routing)

Proyek ini dikonfigurasi agar mendukung *Client-Side Routing* saat di-deploy:
- **`vercel.json`**: Menyediakan aturan *rewrite* semua rute URL ke `/index.html` agar rute seperti `/visi-misi` atau `/dosen/en` tidak menghasilkan error 404 pada Vercel.
- **`package.json` (Script Build)**: Menjalankan `cp dist/index.html dist/404.html` saat `npm run build` untuk menangani rute GitHub Pages SPA.
