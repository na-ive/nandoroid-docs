---
title: Site Development
description: Informasi tentang cara melakukan development dan berkontribusi pada situs dokumentasi NAnDoroid.
sidebar:
  order: 3
---

Selamat datang di dokumentasi-meta! Halaman ini menjelaskan bagaimana situs web dokumentasi NAnDoroid dibangun dan bagaimana kamu bisa ikut berkontribusi di dalamnya.

*Source code* untuk web ini berada di [repositori terpisah](https://github.com/na-ive/nandoroid-docs). Kami sangat menyambut *pull requests* dan kontribusi dari komunitas.

## Arsitektur & Hosting

Proyek ini menggunakan [Starlight](https://starlight.astro.build/), *theme* dokumentasi andalan yang berjalan di atas *framework* [Astro](https://astro.build/).

Situs web resminya akan di-*deploy* secara otomatis ke GitHub Pages via GitHub Actions. *Deployment workflow* ini akan tereksekusi (*trigger*) setiap kali ada perubahan (*push*) pada *file* di direktori berikut:
- `src/`
- `public/`

*(Kamu juga bisa memicu workflow secara manual melalui tab Actions).*

## Lingkungan Development Lokal

Jika kamu ingin mencoba dan menguji perubahan di mesin lokal sebelum melakukan *commit*, gunakan deretan perintah berikut:

| Perintah | Deskripsi |
| :--- | :--- |
| `npm install` | Menginstal seluruh *dependencies* yang dibutuhkan. |
| `npm run dev` | Menjalankan *local development server* (biasanya di `localhost:4321`). |
| `npm run build` | Mengompilasi *project* ke dalam direktori `./dist/` untuk *production*. |
| `npm run preview` | Melakukan *preview* dari hasil kompilasi *production build* di mesin lokal. |
| `npm run astro ...` | Mengeksekusi instruksi Astro CLI (misal: `astro add`, `astro check`). |
| `npm run astro -- --help` | Menampilkan menu bantuan (*help*) Astro CLI. |

:::tip[Dependensi Hilang?]
Jika kamu mendapat *error* yang menyebutkan `vips/vips8: no such file or directory`, kamu mungkin perlu menginstal `libvips` di sistemmu. Contohnya, di Arch Linux, kamu bisa mengatasinya dengan menjalankan: `sudo pacman -S libvips`
:::

:::caution[Perilaku Link di Lokal]
Saat menjalankan *web* ini secara lokal, Astro kadang menghilangkan atau gagal menangani *base URL*. **Jangan mencoba "memperbaiki" *relative links*** hanya karena muncul *error* 404 di mesin lokalmu; mengubahnya malah bisa merusak *link* aslinya saat di-*deploy* di GitHub Pages. Selalu akses halaman melalui `http://localhost:4321/` ketimbang menghilangkan garis miring (*slash*) di ujungnya.
:::

## Pedoman Edit Konten

Semua halaman dokumentasi ditulis menggunakan format Markdown (`.md` atau `.mdx`) dan berada di dalam folder `src/content/docs/`.

- **`lastUpdated` Otomatis**: Kamu tidak perlu menambahkan atau memperbarui *field* `lastUpdated` secara manual di *frontmatter*. Situs dokumentasi ini secara otomatis mengambil tanggal pembaruan terakhir dari riwayat *commit* Git.
- **Varian Markdown**: Starlight menyediakan beberapa ekstensi kustom (seperti komponen *asides* dan *tab*) yang berbeda dari standar GitHub Flavored Markdown. Untuk daftar lengkap fitur Markdown yang didukung, silakan baca [Starlight Authoring Guide](https://starlight.astro.build/guides/authoring-content/).

## Direktori Penting

- **Halaman HTML**: Tambahkan halaman statis baru ke `src/pages`.
- **Menu Navigasi**: Modifikasi struktur *sidebar* navigasi di `astro.config.mjs`.
- **Styling Web**: Atur warna dan elemen UI tambahan di `src/styles/custom.css`.
- **Landing Page**: Modifikasi desain hero dan daftar fitur di `src/content/docs/index.mdx`.

:::caution[Huruf Kapital pada URL]
Astro secara otomatis mengubah huruf kapital pada nama *file markdown* menjadi huruf kecil (*lowercase*) dan membuang tanda titik (`.`) saat menyusun alur *routing* (*URL path*). Jika kamu menautkan (link) suatu halaman menggunakan nama *file* kapitalnya secara mentah ketimbang menggunakan *URL path* versi bersihnya, *link* tersebut akan terputus (404).
:::

## Referensi Eksternal

- [Astro Documentation](https://docs.astro.build)
- [Starlight Documentation](https://starlight.astro.build/)
- [Expressive Code](https://expressive-code.com/)
