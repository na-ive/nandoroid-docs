---
title: Installer Internals
description: How the installation and update scripts function under the hood.
sidebar:
  order: 2
---

The NAnDoroid installation process is designed to be non-destructive and user-friendly. It relies on two main scripts located in the root of the source repository: `install.sh` and `update.sh`.

## `install.sh`

The installation script is an interactive bash script that guides the user through setting up the shell.

### 1. Dependency Resolution
It verifies the presence of an AUR helper (defaulting to `paru`) and installs missing core dependencies (like `quickshell`, `matugen`, `pipewire`) based on the user's choices. 

### 2. File Deployment
It copies the shell's configuration files from the repository's `dotfiles/` directory into the user's `~/.config/` directory. The main shell logic is placed in `~/.config/quickshell/nandoroid/`.

### 3. Configuration Injection
Instead of overwriting the user's existing configurations (which can cause data loss), the installer uses a safe injection method. It appends `source` or `include` directives to the ends of the user's existing files:
- **Hyprland**: Creates a `nandoroid.lua` file and injects `source = ~/.config/hypr/nandoroid.lua` into `hyprland.conf`.
- **Kitty**: Injects `include current-theme.conf` into `kitty.conf` to enable dynamic theming.
- **Fish**: Injects the `starship` initialization command.

### 4. CLI Installation
It optionally downloads and installs the `nandoroid` CLI binary to `~/.local/bin/`, providing a unified command-line interface for controlling the shell.

## `update.sh`

The update script handles pulling new changes from the repository and applying them without breaking the user's custom settings.

### Update Modes
- **`all`**: Updates the shell logic, Matugen templates, and generic configurations.
- **`shell`**: Updates *only* the QML files inside `~/.config/quickshell/nandoroid/`, leaving everything else untouched.

### Non-Destructive Design
The updater uses `rsync` or safe `cp` commands to overlay new files. Since your personal Hyprland keybinds and terminal settings are stored in your primary config files (which only contain the injected `source` lines), updating the shell does not overwrite your personal desktop setup.
