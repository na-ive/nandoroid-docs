---
title: Panduan Instalasi
description: Panduan langkah demi langkah untuk menginstal NAnDoroid-shell.
sidebar:
  order: 3
---

Selamat datang! Panduan ini akan memandu kamu dari awal sampai Nandoroid Shell berjalan mulus di sistemmu. Panduan ini dirancang khusus untuk instalasi bersih (clean install) Arch Linux maupun distro berbasis Arch lainnya yang menjalankan Hyprland.

## Memahami Cakupan

Sebelum kita mulai, mari perjelas apa sebenarnya Nandoroid Shell itu. Ini adalah desktop shell yang dirancang untuk Hyprland untuk menggantikan panel standar, notifikasi, dan kontrol sistem kamu. Namun ingat, ini bukanlah paket dotfiles lengkap yang menimpa keseluruhan sistem kamu.

**Yang akan kamu dapatkan:**
* Universal dynamic island, status bar, dan notification center.
* Panel quick settings untuk Wi-Fi, Bluetooth, dan kecerahan layar.
* App launcher, spotlight search, dan visual dashboard.
* Tampilan lockscreen dan on-screen displays (OSD) bertema cantik.
* Tema Material 3 yang di-generate otomatis dari wallpaper kamu menggunakan Matugen.

**Yang harus kamu konfigurasi sendiri:**
* Dialog file picker dan screen sharing. Dependensi memang akan menginstal portal yang dibutuhkan (`xdg-desktop-portal-hyprland` dan `xdg-desktop-portal-gtk`), namun pengaturannya tetap menjadi tanggung jawab sistem kamu.
* Keybind window management. Kamu tetap mengatur rute shortcut ini langsung di dalam `hyprland.lua` kamu.
* Pilihan terminal emulator dan shell. Kami menyediakan opsi estetika tambahan untuk kitty, fish, dan starship, tetapi sifatnya tidak wajib.
* Aplikasi bawaan Desktop Environment (DE) seperti file manager atau app store.

## Prasyarat

Sebelum menjalankan installer, pastikan sistem kamu memenuhi syarat dasar berikut:
* Kamu memakai Arch Linux, CachyOS, atau distro berbasis Arch lainnya.
* Hyprland sudah terinstal dan sedang berjalan sebagai compositor saat ini.
* Kamu memiliki AUR helper. Jika belum ada, installer akan otomatis mencoba menginstal `paru` untuk kamu.
* Build tools standar seperti `git`, `curl`, dan `base-devel` sudah terpasang di sistem.

## Instalasi Cepat

Cara paling mudah untuk menginstal Nandoroid Shell adalah menggunakan skrip instalasi interaktif. Cukup jalankan perintah ini di terminal:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/na-ive/nandoroid-shell/main/install.sh)"
```

Skrip ini akan membimbing prosesnya selangkah demi selangkah. Berikut adalah gambaran proses instalasinya:

### 1. Memilih Lokasi Instalasi
Secara default, shell ini akan diinstal di `~/.local/src/nandoroid`. Kamu bebas memilih lokasi lain jika diinginkan.

### 2. Menginstal Dependensi
Installer membagi dependensi ke beberapa kategori agar kamu bisa memilih apa saja yang ingin diinstal:
* **Dependensi Inti (Wajib):** Termasuk Hyprland, Quickshell, Pipewire, NetworkManager, Matugen, dan tool CLI penting seperti Python3. Python3 sangat diwajibkan agar fitur warna dinamis di terminal dapat bekerja.
* **Font (Rekomendasi):** Menginstal Google Sans Flex, Material Symbols Rounded, dan JetBrains Mono Nerd Font untuk mendapatkan pengalaman visual yang maksimal.
* **Setup Terminal (Opsional):** Menginstal Kitty, Fish, dan Starship jika kamu ingin estetika terminal selaras dengan tema shell.
* **Tool CLI (Opsional):** Menginstal Nandoroid CLI untuk memudahkan kontrol shell lewat baris perintah.

### 3. Menyalin File Konfigurasi
Skrip ini secara aman akan menyalin file-file konfigurasi yang dibutuhkan ke direktori `~/.config/` kamu:
* `quickshell/nandoroid/` berisi sistem shell utamanya.
* `matugen/` berisi konfigurasi template untuk meracik warna.
* `starship.toml` menyediakan layout prompt custom jika kamu menggunakan Starship.

### 4. Setup Nandoroid CLI (Opsional)
Jika kamu melewati tool CLI saat instalasi utama, tenang saja, kamu bisa menginstalnya kapan saja nanti. Alat ini memudahkan pengaturan shell lewat terminal.

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/na-ive/nandoroid-cli/main/install.sh)"
```

Perintah ini akan menginstal binary `nandoroid` ke `~/.local/bin/`. Pastikan saja direktori tersebut sudah masuk ke dalam `$PATH` sistem kamu.

### 5. Injeksi Konfigurasi (Opsional)
Installer dapat menambahkan instruksi (source lines) ke konfigurasi lama kamu tanpa menghapus settingan pribadi kamu:
* **Kitty:** Menginjeksi `include current-theme.conf` untuk dukungan warna dinamis.
* **Fish:** Menginjeksi perintah inisialisasi Starship.
* **Hyprland:** Membuat file khusus `nandoroid.lua` dan otomatis men-*source* file tersebut di konfigurasi utama kamu.

### 6. Memilih Jalur Update
Kamu bisa memilih jalur pembaruan yang diinginkan:
* **Stable:** Mengikuti tag rilis resmi yang sudah diuji stabil.
* **Canary:** Mengikuti commit paling akhir di branch main untuk mencoba fitur-fitur terbaru yang belum dirilis secara resmi.

## Langkah Pasca-Instalasi

### Memulai Shell
Jika kamu mengizinkan installer untuk menginjeksi konfigurasi, kamu cukup me-restart Hyprland. Jika tidak, jalankan secara manual menggunakan perintah ini:

```bash
quickshell -c nandoroid
```

### Memverifikasi Portal Environment
Agar fitur krusial seperti screen sharing dan file picker dapat berjalan, desktop portal harus dipastikan aktif. Biasanya layanan ini berjalan otomatis bersama Hyprland, tetapi kamu bisa mengecek statusnya:

```bash
systemctl --user status xdg-desktop-portal-hyprland
systemctl --user status xdg-desktop-portal-gtk
```

Jika statusnya belum berjalan, aktifkan (enable) dan jalankan secara manual:

```bash
systemctl --user enable --now xdg-desktop-portal-hyprland
systemctl --user enable --now xdg-desktop-portal-gtk
```

### Men-generate Tema Pertamamu
Saat pertama kali shell dijalankan, sistem akan menggunakan palet warna default. Cara mengganti warnanya sangat mudah:
1. Buka Quick Settings atau panel Settings utama.
2. Pilih dan terapkan wallpaper baru.
3. Matugen akan secara otomatis mengekstrak warna dari wallpaper tersebut dan meracik tema Material 3 yang baru ke seluruh sistem kamu.

## Memperbarui Semuanya

Saat versi baru dirilis, kamu memiliki dua cara mudah untuk melakukan update:

### Update Shell via Grafis (Rekomendasi)
Buka panel **Nandoroid Settings**, pergi ke menu **About**, lalu klik tombol **Shell Update**. Dari situ, kamu tinggal memilih untuk melakukan update secara total, atau hanya memperbarui bagian shell-nya saja lewat satu klik mudah.

### Update Manual via Terminal
Jika kamu lebih suka menggunakan command line, langsung saja jalankan skrip update-nya:

```bash
# Update semuanya (termasuk shell, template matugen, dan config starship)
~/.local/src/nandoroid/update.sh all

# Update bagian logic shell-nya saja, konfigurasi lamamu dijamin tidak tersentuh
~/.local/src/nandoroid/update.sh shell
```

Metode mana pun yang dipilih dijamin sangat aman (non-destructive). Sistem hanya akan menimpa file inti tanpa menghapus konfigurasi eksisting kamu. Jadi, keybind Hyprland, fungsi Fish, atau pengaturan Kitty kamu dipastikan akan tetap aman.

## Solusi Masalah Umum (Troubleshooting)

**Langkah Pertama: Jalankan Pengecekan Dependensi (Dependency Check)!** 
Jika ada fitur yang terasa rusak atau hilang, besar kemungkinan ada paket wajib yang belum terinstal. Saat pertama kali menginstal shell, panel **Onboarding** akan otomatis terbuka untuk membantu mengecek kelengkapan dependensi ini. Jika ingin mengecek ulang nanti, cukup buka menu **Nandoroid Settings > About > Dependency Check**. Tool bawaan ini akan memberi tahu paket apa saja yang belum terinstal di komputermu.

Jika semua dependensi sudah lengkap tetapi masih bermasalah, cek solusi umum ini:

| Masalah | Solusi |
| :--- | :--- |
| Ikon berubah jadi kotak atau hilang | Instal paket `ttf-material-symbols-variable-git` dari AUR. |
| Font kelihatan aneh atau memakai font cadangan | Instal Google Sans Flex lewat skrip instalasi. |
| Dialog file picker tidak muncul | Pastikan layanan `xdg-desktop-portal-gtk` sedang berjalan. |
| Dialog screen share tidak muncul | Pastikan layanan `xdg-desktop-portal-hyprland` sedang berjalan. |
| Warna di terminal tidak ikut berubah dinamis | Verifikasi bahwa paket `python3` sudah terinstal di sistem kamu. |
| Context menu di terminal tidak bisa dibuka | Pastikan `kitty` sudah terinstal, karena terminal bawaannya adalah kitty. |
| Efek audio tidak jalan | Pastikan perintah `easyeffects --daemon` berjalan di background sistem. |
| Mode Jangan Ganggu (DND) tidak nge-sync ke kalender event | Cek apakah opsi toggle "Focus" diaktifkan untuk event tersebut di widget Dashboard. |
| Shell menolak buat nyala sama sekali | Jalankan `quickshell -c nandoroid` dari terminal lalu periksa outputnya jika ada error. |
