---
title: Introduction
description: Overview and requirements for NAnDoroid-shell.
---

# 【 NAnDoroid-shell 】

A Quickshell-based desktop shell for Hyprland adopting Android 16 design elements.

> **Note**: This shell and its dependencies are designed strictly for **Arch Linux based distributions** (Arch, CachyOS, EndeavourOS, etc.).

**Version:** v1.4.0  
**License:** AGPL-3.0

## Key Features

- **Universal Dynamic Island:** Displays media playback indicators, workspace switching, pomodoro timers, and popup notifications inside a single central notch.
- **Deep Customizability:** Extensive personalization options (clocks, lockscreen visuals, UI sizing) accessible directly via the built-in Settings panel.
- **Auto-generated Colors:** Entire shell theme dynamically generated from your wallpaper's colors using Material 3 design tokens (via Matugen).
- **Online Wallpaper Collections:** Browse and apply wallpapers from Wallhaven and personal GitHub collections directly from the shell.
- **...and So Much More:** Dive into a seamless ecosystem packed with built-in OCR tools, smart screen recording, intuitive system monitors, and countless micro-interactions crafted to elevate your desktop experience.

## Requirements & Dependencies

### Core Components

| Component | Package | Description |
| :--- | :--- | :--- |
| **Compositor** | `hyprland` | The tiling Wayland compositor hosting the shell. |
| **Framework** | `quickshell` | The engine (0.5.0+) used to build and run the shell. |
| **Monitor** | `dgop` | System monitoring (CPU, RAM, Temp) stats. |
| **Theme** | `matugen` | Material 3 theme generation from wallpapers. |
| **GTK Theme** | `adw-gtk-theme` | Libadwaita-like theme for GTK3 applications. |
| **Scripting** | `python3` | Used by terminal color scripts and utilities. |
| **JSON** | `jq` | Command-line JSON processor for configs and state. |

### System Services & Protocols

| Service | Command | Description |
| :--- | :--- | :--- |
| **Audio** | `pipewire` | Audio management via `wpctl`. |
| **Network** | `networkmanager` | Wi-Fi and Ethernet controls via `nmcli`. |
| **Bluetooth** | `bluez` | Bluetooth management via `bluetoothctl`. |
| **Notify** | `libnotify` | System notifications via `notify-send`. |
| **Auth** | `polkit` | Privileged actions via `pkexec`. |
| **Session** | `systemd` | Power management and session locking. |
| **Portal (H)** | `xdg-desktop-portal-hyprland` | Screen sharing and desktop integration. |
| **Portal (G)** | `xdg-desktop-portal-gtk` | File picker and standard desktop integration. |

### CLI Utilities (Functional)

| Utility | Command | Description |
| :--- | :--- | :--- |
| **Backlight** | `brightnessctl` | Internal screen brightness control. |
| **External Br.** | `ddcutil` | External monitor brightness control. |
| **Media** | `playerctl` | MPRIS media playback controls. |
| **Screenshot** | `grim` | Wayland screenshot utility. |
| **Region** | `slurp` | Region selection for screenshots/recording. |
| **Recorder** | `wf-recorder` | Screen recording functionality. |
| **Image** | `imagemagick` | Color detection and image processing (`magick`). |
| **Sound** | `ffmpeg` | System sounds playback via `ffplay`. |
| **Clipboard** | `wl-clipboard` | Wayland clipboard operations. |
| **Clip. Hist.** | `cliphist` | Clipboard history management in Spotlight. |
| **Recognition** | `songrec` | Shazam-like music recognition feature. |
| **Visualizer** | `cava` | Audio visualization in the shell. |
| **Wallpaper Eng.** | `linux-wallpaperengine-git` | Steam Wallpaper Engine support (Optional). |
| **Effects** | `easyeffects` | Audio effects and equalization management. |
| **Picker** | `hyprpicker` | System-wide color picker tool. |
| **Lock** | `hyprlock` | The lock screen provider. |
| **Night Light** | `hyprsunset` | Blue light filter functionality. |
| **Search** | `fd` | Fast file search functionality in Spotlight. |
| **Calculator** | `libqalculate` | Math calculator functionality in Spotlight (`qalc`). |
| **Dialogs** | `zenity` | File and directory selection dialogs. |
| **QR Scan** | `zbar` | QR code scanning functionality (`zbarimg`). |
| **OCR (Opt.)** | `tesseract` | OCR functionality in region tools. |
| **Biometric (Opt.)** | `fprintd` | Fingerprint sensor support on lockscreen. |
| **VPN (Opt.)** | `warp-cli` | Cloudflare WARP client integration. |

### Fonts

| Font | Package | Source / Purpose |
| :--- | :--- | :--- |
| **UI Font** | `Google Sans Flex` | Primary variable font (from GitHub). |
| **Icons** | `ttf-material-symbols-variable-git` | Material Symbols icon font. |
| **Monospace** | `ttf-jetbrains-mono-nerd` | Default monospace and nerd font. |

### Shell & Terminal (Optional)

| Tool | Package | Purpose |
| :--- | :--- | :--- |
| **Terminal** | `kitty` | Terminal emulator with theme injection support. |
| **Shell** | `fish` | Interactive shell. |
| **Prompt** | `starship` | Cross-shell prompt. |
| **Utils** | `bash`, `awk`, `grep` | Standard Unix utilities used by core scripts. |
