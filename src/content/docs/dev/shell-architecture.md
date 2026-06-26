---
title: Shell Architecture
description: Overview of the NAnDoroid shell directory structure and QML architecture.
sidebar:
  order: 1
---

When developing or modifying the NAnDoroid shell itself, you will primarily work within the `~/.config/quickshell/nandoroid/` directory (or `dotfiles/.config/quickshell/nandoroid/` in the source repository).

This guide provides a high-level overview of the shell's internal structure.

## Core Structure

- `shell.qml`: The main entry point of the shell. It initializes the core services and loads the root panels.
- `Settings.qml` & `SettingsSidebar.qml`: The main configuration UI for the shell.

## Directories

### `panels/`
Contains the major, top-level UI components of the shell. Examples include:
- The Status Bar and Dynamic Island
- The Notification Center
- The Quick Settings panel
- The Lockscreen
- The App Launcher / Dashboard

### `widgets/`
Contains reusable UI components and smaller interactive elements used across multiple panels. Examples include:
- Custom buttons and sliders
- Media player cards
- Weather widgets
- Clock faces

### `services/`
Contains the background logic and state management for the shell. These services bridge the gap between the UI and the underlying system. Examples include:
- Network management (Wi-Fi/Bluetooth)
- Audio and brightness controls
- Notification handling
- Wallpaper and theming integration

### `core/`
Contains fundamental engine utilities, singletons, and generic helpers that provide foundation for the rest of the shell.

### `scripts/`
Contains auxiliary shell scripts (Bash, Python) that perform tasks difficult or impossible to do purely in QML. Examples include:
- System monitoring hooks
- Python scripts for color extraction or terminal formatting
- Interfacing with specific command-line utilities (e.g., `grim`, `slurp`, `playerctl`)

### `data/`
Contains static data files, such as JSON lists for default settings, translation strings, or placeholder text.

### `translations/`
Contains localization files to support multiple languages within the shell's UI.

### `assets/`
Contains static assets like custom SVG icons, default wallpapers, and fonts not provided by the system.
