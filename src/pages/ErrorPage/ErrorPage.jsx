import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page" role="alert" aria-live="polite">
      {/* Pola latar belakang */}
      <div className="error-page__background-pattern" aria-hidden="true"></div>

      {/* Elemen dekoratif */}
      <div
        className="error-page__decor error-page__decor--left"
        aria-hidden="true"
      ></div>
      <div
        className="error-page__decor error-page__decor--right"
        aria-hidden="true"
      ></div>
      <div
        className="error-page__decor error-page__decor--center"
        aria-hidden="true"
      ></div>

      {/* Konten utama */}
      <div className="error-page__content">
        {/* Badge universitas */}
        {/* <div className="error-page__badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Universitas Pamulang
        </div> */}

        {/* Ikon topi wisuda */}
        <div className="error-page__icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10L12 5 2 10l10 5 10-5z" />
            <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
            <path d="M22 10v6" />
          </svg>
        </div>

        {/* Kode error */}
        <h1 className="error-page__code">404</h1>

        {/* Judul */}
        <h2 className="error-page__title">Halaman Tidak Ditemukan</h2>
                     
        {/* Deskripsi */}
        <p className="error-page__description">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Silakan periksa kembali URL atau kembali ke beranda untuk melanjutkan.
        </p>

        {/* Tombol aksi */}
        <div className="error-page__actions">
          <a href="/" className="error-page__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
