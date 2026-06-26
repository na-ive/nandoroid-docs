---
title: Dependensi
description: Daftar dependensi wajib dan opsional untuk NAnDoroid-shell.
sidebar:
  order: 2
---

Halaman ini mencantumkan semua paket dan layanan yang dibutuhkan agar NAnDoroid-shell bisa berjalan dengan normal. Sebagian besar dependensi ini akan diinstal otomatis oleh skrip instalasi, tapi daftar ini bisa dijadikan referensi untuk instalasi manual atau saat proses *troubleshooting*.

## Komponen Inti

| Komponen | Paket | Deskripsi |
| :--- | :--- | :--- |
| **Compositor** | `hyprland` | Wayland tiling compositor tempat shell ini berjalan. |
| **Framework** | `quickshell` | *Engine* yang dipakai buat membangun dan menjalankan shell ini. |
| **Monitor** | `dgop` | Statistik *system monitoring* (CPU, RAM, Suhu). |
| **Theme** | `matugen` | Generator tema Material 3 dari warna wallpaper. |
| **GTK Theme** | `adw-gtk-theme` | Tema bergaya Libadwaita untuk aplikasi GTK3. |
| **Scripting** | `python3` | Dipakai oleh skrip pewarnaan terminal dan utilitas lainnya. |
| **JSON** | `jq` | Pemroses JSON berbasis CLI untuk manipulasi config dan state. |

## Layanan Sistem & Protokol

| Layanan | Perintah | Deskripsi |
| :--- | :--- | :--- |
| **Audio** | `pipewire` | Manajemen audio via `wpctl`. |
| **Network** | `networkmanager` | Kontrol Wi-Fi dan Ethernet via `nmcli`. |
| **Bluetooth** | `bluez` | Manajemen Bluetooth via `bluetoothctl`. |
| **Notify** | `libnotify` | Notifikasi sistem via `notify-send`. |
| **Auth** | `polkit` | Eksekusi perintah dengan hak akses *(privileged)* via `pkexec`. |
| **Session** | `systemd` | Manajemen daya dan sistem penguncian sesi. |
| **Portal (H)** | `xdg-desktop-portal-hyprland` | Integrasi desktop dan *screen sharing*. |
| **Portal (G)** | `xdg-desktop-portal-gtk` | *File picker* dan integrasi desktop standar. |

## Utilitas CLI (Fungsional)

| Utilitas | Perintah | Deskripsi |
| :--- | :--- | :--- |
| **Backlight** | `brightnessctl` | Kontrol kecerahan layar internal. |
| **External Br.** | `ddcutil` | Kontrol kecerahan layar monitor eksternal. |
| **Media** | `playerctl` | Kontrol pemutaran media MPRIS. |
| **Screenshot** | `grim` | Utilitas screenshot untuk Wayland. |
| **Region** | `slurp` | Seleksi area untuk screenshot/rekaman layar. |
| **Recorder** | `wf-recorder` | Fungsionalitas perekaman layar (*screen recording*). |
| **Image** | `imagemagick` | Deteksi warna dan pemrosesan gambar (`magick`). |
| **Sound** | `ffmpeg` | Pemutaran suara sistem via `ffplay`. |
| **Clipboard** | `wl-clipboard` | Operasi *clipboard* di Wayland. |
| **Clip. Hist.** | `cliphist` | Manajemen riwayat *clipboard* di dalam Spotlight. |
| **Recognition** | `songrec` | Fitur pengenalan musik ala Shazam. |
| **Visualizer** | `cava` | Visualisasi audio di dalam shell. |
| **Wallpaper Eng.** | `linux-wallpaperengine-git` | Dukungan Steam Wallpaper Engine (Opsional). |
| **Effects** | `easyeffects` | Manajemen efek audio dan *equalizer*. |
| **Picker** | `hyprpicker` | Tool *color picker* bawaan sistem. |
| **Lock** | `hyprlock` | Penyedia tampilan *lockscreen*. |
| **Night Light** | `hyprsunset` | Fitur filter cahaya biru (*Night light*). |
| **Search** | `fd` | Fungsionalitas pencarian file super cepat di Spotlight. |
| **Calculator** | `libqalculate` | Fungsionalitas kalkulator matematika di Spotlight (`qalc`). |
| **Dialogs** | `zenity` | Dialog pemilihan file dan direktori. |
| **QR Scan** | `zbar` | Fungsionalitas scan kode QR (`zbarimg`). |
| **OCR (Opt.)** | `tesseract` | Fungsionalitas OCR pada tool seleksi area. |
| **Biometric (Opt.)**| `fprintd` | Dukungan sensor sidik jari di *lockscreen*. |
| **VPN (Opt.)** | `warp-cli` | Integrasi *client* Cloudflare WARP. |

## Font

| Font | Paket | Sumber / Tujuan |
| :--- | :--- | :--- |
| **UI Font** | `Google Sans Flex` | Font utama sistem (variabel, dari GitHub). |
| **Icons** | `ttf-material-symbols-variable-git` | Font ikon Material Symbols. |
| **Monospace** | `ttf-jetbrains-mono-nerd` | Font *monospace* standar dan *nerd font*. |

## Shell & Terminal (Opsional)

| Tool | Paket | Tujuan |
| :--- | :--- | :--- |
| **Terminal** | `kitty` | Terminal emulator yang mendukung injeksi tema. |
| **Shell** | `fish` | *Interactive shell*. |
| **Prompt** | `starship` | Prompt lintas-shell. |
| **Utils** | `bash`, `awk`, `grep` | Utilitas Unix standar yang dipakai oleh script inti. |
