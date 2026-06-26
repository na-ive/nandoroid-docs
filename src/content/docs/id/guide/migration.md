---
title: Panduan Migrasi
description: Panduan migrasi ke Nandoroid Shell dari KDE atau GNOME.
sidebar:
  order: 4
---

Melompat dari Desktop Environment lengkap seperti KDE Plasma atau GNOME ke standalone window manager seperti Hyprland mungkin terasa menakutkan. Panduan ini akan membantu kamu memahami dengan pasti apa saja yang berubah saat kamu beralih ke Nandoroid Shell dan bagaimana men-setup environment barumu dengan mulus.

## Memahami Perubahan

Saat beralih ke Nandoroid Shell, kamu hanya mengganti bagian "shell" dari desktop kamu. Ini berarti panel, notifikasi, dan kontrol sistem kamu akan diganti, tetapi sebagian besar infrastruktur dasar yang biasa kamu andalkan akan tetap sama.

### Yang Akan Diganti oleh Nandoroid

| Fitur Lama Kamu | Ekivalen Baru di Nandoroid |
| :--- | :--- |
| Panel atas atau bawah (taskbar) | Dynamic Island dan Status Bar |
| System tray | Terintegrasi secara mulus ke dalam Status Bar |
| Notification center | Panel Notification Center |
| Quick settings atau control center | Panel Quick Settings |
| App launcher atau menu | App Launcher yang dipadukan dengan Spotlight Search |
| Popup volume dan kecerahan | Tampilan on-screen display (OSD) custom |
| Lock screen | Hyprlock yang dipadukan dengan kustomisasi Nandoroid |
| Pengaturan layar (Display) | Display Settings bawaan untuk resolusi, skala, dan posisi monitor |
| Pengaturan Bluetooth dan Wi-Fi | Kontrol bawaan di dalam Quick Settings dan panel Settings utama |
| System monitor | System Monitor bawaan yang ditenagai oleh `dgop` |

### Yang Tidak Diganti oleh Nandoroid

Nandoroid mengandalkan standar portal Linux dan pilihan aplikasi kamu sendiri untuk fitur-fitur ini:

| Fitur | Yang Perlu Kamu Gunakan |
| :--- | :--- |
| **Dialog file picker** | `xdg-desktop-portal-gtk` atau portal pilihanmu |
| **Dialog screen sharing** | `xdg-desktop-portal-hyprland` |
| **File manager** | Dolphin, Nautilus, Thunar, atau file manager favoritmu |
| **Text editor atau IDE** | Editor favoritmu saat ini |
| **Tema GTK dan Qt** | Matugen akan men-generate CSS GTK, tetapi kamu mungkin membutuhkan `nwg-look` atau `qt6ct` untuk penyesuaian yang lebih detail |
| **Prompt autentikasi** | Nandoroid sudah menyertakan agen Polkit miliknya sendiri |
| **Clipboard manager** | Terintegrasi di dalam Spotlight, menggunakan `wl-clipboard` |
| **Tool screenshot** | Fungsionalitas bawaan yang memanfaatkan `grim` dan `slurp` |

## Setup Environment Barumu

### 1. Instal Hyprland
Jika belum, instal dan konfigurasi Hyprland sebagai compositor sistem kamu:

```bash
sudo pacman -S hyprland
```

File `~/.config/hypr/hyprland.lua` kamu setidaknya harus mencakup konfigurasi monitor, pengaturan input, window rules pilihanmu, dan keybinds (shortcut). Kamu dapat menyimpan konfigurasi Hyprland lama kamu dengan aman. Installer Nandoroid akan membuat file `nandoroid.lua` secara terpisah dan otomatis men-source file tersebut, sehingga shortcut pribadi kamu tidak akan pernah tertimpa.

### 2. Konfigurasi Desktop Portals
Langkah ini sangat krusial. Tanpa portal yang tepat, fitur fundamental seperti screen sharing dan pemilihan file (file picker) akan gagal. Instal portal tersebut menggunakan:

```bash
sudo pacman -S xdg-desktop-portal-hyprland xdg-desktop-portal-gtk
```

Pastikan konfigurasi Hyprland kamu memulai environment dbus dengan benar:

```lua
hl.exec_cmd("sleep 1 && dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP")
```

Setelah login kembali, verifikasi bahwa layanan tersebut sudah aktif:

```bash
systemctl --user status xdg-desktop-portal-hyprland
systemctl --user status xdg-desktop-portal-gtk
```

### 3. Instal Nandoroid Shell
Jalankan skrip instalasi untuk menyiapkan semuanya:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/na-ive/nandoroid-shell/main/install.sh)"
```

Selama proses, sangat disarankan untuk menginstal dependensi inti, font yang direkomendasikan, dan tool CLI Nandoroid. Jika kamu ingin shell ini otomatis berjalan bersama Hyprland, pilih 'yes' pada tahap injeksi konfigurasi.

### 4. Mengenal CLI Nandoroid
Metode lama untuk mengontrol shell ini mengharuskan pengetikan perintah IPC yang panjang. Kami sangat menyarankan pengguna untuk beralih menggunakan tool CLI `nandoroid` baru yang terpadu. Metode baru ini jauh lebih bersih dan cepat.

| Yang Ingin Kamu Lakukan | Cara Lama | Cara Baru |
| :--- | :--- | :--- |
| **Toggle Launcher** | `qs -c nandoroid ipc call launcher toggle` | `nandoroid launcher` |
| **Toggle Dashboard** | `qs -c nandoroid ipc call dashboard toggle` | `nandoroid dashboard` |
| **Toggle Settings** | `qs -c nandoroid ipc call settings toggle` | `nandoroid settings` |
| **Reload Shell** | `quickshell -c nandoroid --reload` | `nandoroid reload` |
| **Mengatur Wallpaper** | Dilakukan manual lewat panel | `nandoroid wallpaper <file_path>` |

Catatan untuk pengguna Fish: File autocompletion manual `nandoroid.fish` yang lama telah dihapus. Cukup menginstal alat `nandoroid-cli` baru untuk mendapatkan fitur autocompletion bawaan di Fish, Zsh, dan Bash.

### 5. Memperbarui Keybind Kamu
Karena Nandoroid menggunakan tool CLI untuk mengelola panelnya, kamu harus menghubungkan perintah-perintah ini di dalam `hyprland.lua` milikmu. Berikut adalah titik awal yang bagus berdasarkan konfigurasi default:

```lua
-- Menekan Super akan membuka Spotlight
hl.bind("SUPER + Super_L", hl.dsp.exec_cmd("nandoroid spotlight toggle"), { release = true })

-- Toggle Panel (via CLI)
hl.bind("SUPER + Space", hl.dsp.exec_cmd("nandoroid launcher toggle"))
hl.bind("SUPER + A", hl.dsp.exec_cmd("nandoroid notifications toggle"))
hl.bind("SUPER + N", hl.dsp.exec_cmd("nandoroid quicksettings toggle"))
hl.bind("SUPER + G", hl.dsp.exec_cmd("nandoroid quickactions toggle"))
hl.bind("SUPER + D", hl.dsp.exec_cmd("nandoroid dashboard toggle"))
hl.bind("SUPER + I", hl.dsp.exec_cmd("nandoroid settings toggle"))
hl.bind("SUPER + Tab", hl.dsp.exec_cmd("nandoroid overview toggle"))
hl.bind("SUPER + L", hl.dsp.exec_cmd("nandoroid lock activate"))
hl.bind("CTRL + ALT + Delete", hl.dsp.exec_cmd("nandoroid systemmonitor toggle"))

-- Kontrol Kecerahan yang Halus
hl.bind("XF86MonBrightnessUp", hl.dsp.exec_cmd("nandoroid brightness increment"), { locked = true, repeating = true })
hl.bind("XF86MonBrightnessDown", hl.dsp.exec_cmd("nandoroid brightness decrement"), { locked = true, repeating = true })
```

### 6. Shortcut Global Quickshell
Beberapa fitur tetap terhubung secara langsung melalui shortcut global native Quickshell. Kode berikut ini harus ditempatkan di `hyprland.lua` persis seperti ini:

```lua
-- Tool Seleksi Area (Screenshots & Perekaman Layar)
hl.bind("SUPER + SHIFT + S", hl.dsp.global("quickshell:regionScreenshot"))
hl.bind("SUPER + SHIFT + R", hl.dsp.global("quickshell:regionRecord"), { locked = true })
hl.bind("SUPER + SHIFT + X", hl.dsp.global("quickshell:regionOcr"))

-- Fitur Khusus Spotlight
hl.bind("SUPER + Period", hl.dsp.global("quickshell:spotlightEmoji"), { description = "Emoji >> clipboard" })
hl.bind("SUPER + V", hl.dsp.global("quickshell:spotlightClipboard"), { description = "Clipboard history >> clipboard" })
```

Jika sewaktu-waktu kamu membutuhkan perintah IPC mentahnya, semuanya telah didokumentasikan secara lengkap di README utama.

## Saran untuk Pengguna KDE Plasma

Jika kamu bermigrasi dari KDE Plasma dan berencana mempertahankannya di sistemmu (dual-session):
1. **Jangan menjalankan komponen Plasma di dalam Hyprland:** Pastikan kamu tidak memasukkan `exec-once = plasmashell` atau `kwin` di konfigurasi Hyprland kamu. Nandoroid sudah memiliki shell-nya sendiri.
2. **Pertahankan `qt6ct` atau `Kvantum`:** Tool ini tetap sangat berguna untuk tema aplikasi Qt. Matugen akan men-generate skema warna yang berjalan selaras bersamanya.
3. **Dolphin:** File manager ini akan tetap berfungsi dengan sempurna.
4. **KDE Connect:** Beroperasi secara independen. Kamu bisa menjalankannya di Hyprland dengan menambahkan `exec-once = /usr/lib/kdeconnectd` (lokasi path bisa bervariasi) di konfigurasi Hyprland.

## Saran untuk Pengguna GNOME

Jika kamu bermigrasi dari GNOME dan belum ingin menghapusnya dari sistem:
1. **JANGAN menghapus `xdg-desktop-portal-gnome`!** Di Arch Linux, menghapus paket ini bisa ikut menghapus (uninstall) seluruh desktop GNOME kamu karena masalah dependensi. Cukup instal `xdg-desktop-portal-gtk` berdampingan dengannya. Hyprland sudah cukup pintar untuk menggunakan portalnya sendiri (untuk screen sharing) dan menggunakan GTK (untuk file picker) secara otomatis.
2. **Nautilus (Files):** Akan tetap berfungsi normal sebagai file manager utamamu.
3. **Ekstensi GNOME:** Perlu diingat bahwa ekstensi GNOME tidak akan berlaku di sini. Nandoroid Shell menyediakan fitur-fitur tersebut secara native.

## Pembaruan yang Aman

Saat update untuk Nandoroid dirilis, konfigurasi pribadimu selalu dipastikan aman. Kamu bahkan tidak perlu menyentuh terminal untuk melakukan update. Cukup buka **Nandoroid Settings**, arahkan ke menu **About**, dan gunakan fitur **Shell Update** bawaan. Dari sana, kamu bisa memilih untuk mengupdate bagian shell-nya saja atau memperbarui semuanya secara keseluruhan.

Jika kamu lebih menyukai terminal, menjalankan `update.sh all` atau `update.sh shell` akan memberikan hasil yang persis sama. Metode mana pun yang kamu pilih, pengaturan keybind Hyprland, fungsi terminal, dan script custom milikmu akan sepenuhnya diabaikan oleh sistem update sehingga tidak akan pernah tertimpa.

## Solusi Masalah Migrasi (Troubleshooting)

**Tips: Jalankan Pengecekan Dependensi (Dependency Check)**
Sebelum masuk ke troubleshooting manual, periksa panel **Onboarding** (yang otomatis terbuka saat peluncuran pertama) atau buka menu **Nandoroid Settings > About > Dependency Check**. Tool otomatis ini akan langsung menyoroti jika sistem kamu kekurangan paket krusial yang dibutuhkan agar shell dapat berfungsi normal.

Jika semua dependensimu sudah terpenuhi namun masih terjadi masalah, berikut adalah beberapa solusi migrasi umum:

| Gejala | Kemungkinan Penyebab | Cara Mengatasinya |
| :--- | :--- | :--- |
| Dialog file picker tidak muncul saat menyimpan | Portal GTK tidak terinstal | Instal dan aktifkan `xdg-desktop-portal-gtk` |
| Screen sharing hanya menampilkan layar hitam | Portal Hyprland tidak terinstal | Instal dan aktifkan `xdg-desktop-portal-hyprland` |
| Panel KDE lamamu masih muncul | Plasma masih berjalan di background | Hapus `plasmashell` dari entri autostart kamu |
| Aplikasi GTK sama sekali tidak memiliki tema | Tidak ada tema GTK yang diterapkan | Matugen seharusnya men-generate CSS GTK kamu secara otomatis, tetapi kamu juga bisa menggunakan `nwg-look` untuk memaksa penerapan tema |
| Context menu di terminal tidak bisa dibuka | Terminal yang dibutuhkan tidak ada | Pastikan `kitty` terinstal, karena itu adalah terminal defaultnya |
| Ikon hilang di seluruh bagian shell | Font yang tepat tidak terinstal | Instal `ttf-material-symbols-variable-git` dari AUR |
| Riwayat clipboard kamu kosong | `cliphist` tidak berjalan | Pastikan `cliphist` terinstal dan berjalan sebagai background daemon |
| Avatar picker menolak untuk terbuka | `zenity` tidak terinstal | Instal paket `zenity` |
