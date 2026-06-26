---
title: Arsitektur Shell
description: Gambaran umum (overview) mengenai struktur direktori dan arsitektur QML di NAnDoroid shell.
sidebar:
  order: 1
---

Saat melakukan *development* atau modifikasi pada *shell* NAnDoroid, kamu akan banyak bekerja di dalam direktori `~/.config/quickshell/nandoroid/` (atau `dotfiles/.config/quickshell/nandoroid/` pada *source repository*).

Panduan ini memberikan gambaran umum tingkat tinggi (*high-level overview*) dari struktur internal *shell* ini.

## Struktur Inti

- `shell.qml`: *Entry point* utama dari *shell*. File ini menginisialisasi *core services* dan memuat *root panels*.
- `Settings.qml` & `SettingsSidebar.qml`: UI konfigurasi utama untuk *shell*.

## Direktori

### `panels/`
Berisi komponen-komponen UI utama (*top-level*) dari *shell*. Contohnya termasuk:
- Status Bar dan Dynamic Island
- Notification Center
- Panel Quick Settings
- Lockscreen
- App Launcher / Dashboard

### `widgets/`
Berisi komponen UI *reusable* dan elemen interaktif yang lebih kecil, yang sering digunakan secara lintas panel. Contohnya termasuk:
- Tombol dan *slider* kustom
- *Media player cards*
- *Widget* cuaca (Weather)
- Tampilan jam (*Clock faces*)

### `services/`
Berisi *background logic* dan *state management* untuk *shell*. *Service* ini menjembatani jarak antara UI dan sistem yang berjalan di bawahnya. Contohnya termasuk:
- Manajemen jaringan (Wi-Fi/Bluetooth)
- Kontrol audio dan *brightness*
- *Notification handling*
- Integrasi wallpaper dan tema

### `core/`
Berisi utilitas mesin (*engine*) fundamental, *singletons*, dan berbagai *helper* generik yang memberikan fondasi bagi komponen *shell* lainnya.

### `scripts/`
Berisi *shell scripts* tambahan (seperti Bash atau Python) untuk melakukan tugas-tugas yang sulit atau tidak mungkin dilakukan murni menggunakan QML. Contohnya termasuk:
- *Hooks* untuk sistem monitoring
- *Script* Python untuk ekstraksi warna atau pemformatan terminal
- Berinteraksi dengan *command-line utilities* yang spesifik (seperti `grim`, `slurp`, `playerctl`)

### `data/`
Berisi *file* data statis, seperti *file* JSON yang menyimpan *default settings*, *string* untuk terjemahan, atau teks *placeholder*.

### `translations/`
Berisi *file* lokalisasi untuk mendukung multi-bahasa di dalam UI *shell*.

### `assets/`
Berisi *assets* statis seperti ikon SVG kustom, *wallpaper* bawaan (*default*), serta jenis *font* yang tidak disediakan oleh sistem.
