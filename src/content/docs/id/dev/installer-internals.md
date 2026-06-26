---
title: Internal Installer
description: Bagaimana script instalasi dan update bekerja di balik layar.
sidebar:
  order: 2
---

Proses instalasi NAnDoroid dirancang agar aman tidak merusak sistem (*non-destructive*) dan ramah pengguna (*user-friendly*). Proses ini bergantung pada dua *script* utama yang ada di *root source repository*: `install.sh` dan `update.sh`.

## `install.sh`

*Script* instalasi ini adalah *bash script* interaktif yang memandu pengguna dalam melakukan proses *setup shell*.

### 1. Dependency Resolution
*Script* ini memverifikasi ketersediaan AUR *helper* (*default*-nya `paru`) dan menginstal *core dependencies* yang belum ada (seperti `quickshell`, `matugen`, `pipewire`) berdasarkan pilihan pengguna.

### 2. File Deployment
*Script* ini menyalin *file* konfigurasi *shell* dari direktori `dotfiles/` milik repositori ke dalam direktori `~/.config/` milik pengguna. Logika utama dari *shell* ditempatkan di `~/.config/quickshell/nandoroid/`.

### 3. Configuration Injection
Daripada menimpa (*overwrite*) konfigurasi milik pengguna yang sudah ada (yang bisa memicu hilangnya pengaturan lama), *installer* menggunakan metode injeksi yang aman. *Script* ini menambahkan parameter `source` atau `include` di baris paling bawah pada *file* konfigurasi pengguna:
- **Hyprland**: Membuat *file* `nandoroid.lua` dan menginjeksi `source = ~/.config/hypr/nandoroid.lua` ke dalam `hyprland.conf`.
- **Kitty**: Menginjeksi `include current-theme.conf` ke dalam `kitty.conf` untuk mengaktifkan pewarnaan tema dinamis.
- **Fish**: Menginjeksi perintah inisialisasi `starship`.

### 4. CLI Installation
*Script* ini juga memberikan opsi untuk mengunduh dan menginstal *binary* CLI `nandoroid` ke `~/.local/bin/`, memberikan *command-line interface* terpadu untuk mengontrol *shell* via terminal.

## `update.sh`

*Script update* bertugas menarik (*pull*) perubahan terbaru dari repositori dan mengaplikasikannya tanpa merusak *custom settings* milik pengguna.

### Update Modes
- **`all`**: Memperbarui logika *shell*, *template* Matugen, dan konfigurasi umum (*generic configurations*).
- **`shell`**: *Hanya* memperbarui *file-file* QML di dalam `~/.config/quickshell/nandoroid/`, membiarkan sisa sistem tetap utuh tak tersentuh.

### Non-Destructive Design
*Updater* menggunakan perintah `rsync` atau `cp` yang aman untuk menimpa *file* baru (*overlay*). Karena pengaturan personalmu (seperti *keybinds* Hyprland dan kustomisasi terminal) disimpan di dalam *file* konfigurasi utama (yang hanya memuat sebaris injeksi `source`), proses pembaruan *shell* dijamin tidak akan merusak atau menimpa *setup desktop* aslimu.
