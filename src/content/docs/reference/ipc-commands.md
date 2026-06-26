---
title: IPC Commands & Keybinds
description: Reference for Nandoroid Shell IPC commands and global shortcuts.
---

The basic syntax for calling a command via terminal is:

```bash
qs -c nandoroid ipc call <target> <method>
```

*(Note: `qs` is an alias for `quickshell`. Replace it if you use the full command.)*

### Sidebar & Panels

Manage the visibility of all UI panels.

| Feature                 | Target          | Method   | Terminal Command                                |
| :---------------------- | :-------------- | :------- | :---------------------------------------------- |
| **App Launcher**        | `launcher`      | `toggle` | `qs -c nandoroid ipc call launcher toggle`      |
| **Spotlight Search**    | `spotlight`     | `toggle` | `qs -c nandoroid ipc call spotlight toggle`     |
| **Notification Center** | `notifications` | `toggle` | `qs -c nandoroid ipc call notifications toggle` |
| **Quick Settings**      | `quicksettings` | `toggle` | `qs -c nandoroid ipc call quicksettings toggle` |
| **System Monitor**      | `systemmonitor` | `toggle` | `qs -c nandoroid ipc call systemmonitor toggle` |
| **Sys. Monitor (Direct)**| `systemmonitor` | `open_direct`| `qs -c nandoroid ipc call systemmonitor open_direct`|
| **Overview Panel**      | `overview`      | `toggle` | `qs -c nandoroid ipc call overview toggle`      |
| **Session (Power)**     | `session`       | `toggle` | `qs -c nandoroid ipc call session toggle`       |
| **Dashboard**           | `dashboard`     | `toggle` | `qs -c nandoroid ipc call dashboard toggle`     |
| **Quick Actions**       | `quickactions`  | `toggle` | `qs -c nandoroid ipc call quickactions toggle`  |
| **Nandoroid Settings**  | `settings`      | `toggle` | `qs -c nandoroid ipc call settings toggle`      |
| **Settings (Direct)**   | `settings`      | `open_direct`| `qs -c nandoroid ipc call settings open_direct` |

### Region Tools (Screenshots & Recording)

Trigger selection-based actions.

| Action                | Target   | Method            | Terminal Command                                  |
| :-------------------- | :------- | :---------------- | :------------------------------------------------ |
| **Region Screenshot** | `region` | `screenshot`      | `qs -c nandoroid ipc call region screenshot`      |
| **Visual Search**     | `region` | `search`          | `qs -c nandoroid ipc call region search`          |
| **Text OCR**          | `region` | `ocr`             | `qs -c nandoroid ipc call region ocr`             |
| **QR Code Scan**      | `region` | `qrcode`          | `qs -c nandoroid ipc call region qrcode`          |
| **Record Region**     | `region` | `record`          | `qs -c nandoroid ipc call region record`          |
| **Record w/ Audio**   | `region` | `recordWithSound` | `qs -c nandoroid ipc call region recordWithSound` |

### Media & System

Control specific system services.

| Feature              | Target       | Method        | Terminal Command                                 |
| :------------------- | :----------- | :------------ | :----------------------------------------------- |
| **Brightness +**     | `brightness` | `increment`   | `qs -c nandoroid ipc call brightness increment`  |
| **Brightness -**     | `brightness` | `decrement`   | `qs -c nandoroid ipc call brightness decrement`  |
| **Pomodoro Start**   | `pomodoro`   | `start`       | `qs -c nandoroid ipc call pomodoro start`        |
| **Pomodoro Pause**   | `pomodoro`   | `pause`       | `qs -c nandoroid ipc call pomodoro pause`        |
| **Pomodoro Stop**    | `pomodoro`   | `stop`        | `qs -c nandoroid ipc call pomodoro stop`         |
| **Pomodoro Reset**   | `pomodoro`   | `reset`       | `qs -c nandoroid ipc call pomodoro reset`        |
| **Wallpaper (Home)** | `wallpaper`  | `openDesktop` | `qs -c nandoroid ipc call wallpaper openDesktop` |
| **Wallpaper (Lock)** | `wallpaper`  | `openLock`    | `qs -c nandoroid ipc call wallpaper openLock`    |
| **Change Avatar**    | `spotlight`  | `browse_avatar`| `qs -c nandoroid ipc call spotlight browse_avatar`|

### Global Shortcuts (Native Quickshell)

Nandoroid uses native Quickshell Global Shortcuts for specialized tool operations. These are triggered using the `global` dispatcher in Hyprland with the format `quickshell:<name>`.

| Shortcut Name           | Description                      | Hyprland Lua Bind Example                                                                  |
| :---------------------- | :------------------------------- | :----------------------------------------------------------------------------------------- |
| `spotlightFiles`        | Open Spotlight in File search    | `hl.bind("SUPER + F", hl.dsp.global("quickshell:spotlightFiles"))`                         |
| `spotlightCommand`      | Open Spotlight in Quick Commands | `hl.bind("SUPER + G", hl.dsp.global("quickshell:spotlightCommand"))`                       |
| `spotlightTools`        | Open Spotlight in Tools mode     | `hl.bind("SUPER + T", hl.dsp.global("quickshell:spotlightTools"))`                         |
| `spotlightClipboard`    | Open Spotlight in Clipboard mode | `hl.bind("SUPER + V", hl.dsp.global("quickshell:spotlightClipboard"))`                     |
| `spotlightEmoji`        | Open Spotlight in Emoji mode     | `hl.bind("SUPER + E", hl.dsp.global("quickshell:spotlightEmoji"))`                         |
| `quickActions`          | Toggle Quick Actions HUD         | `hl.bind("SUPER + X", hl.dsp.global("quickshell:quickActions"))`                           |
| `regionScreenshot`      | Capture selected region          | `hl.bind("SUPER + S", hl.dsp.global("quickshell:regionScreenshot"))`                       |
| `regionOcr`             | Extract text from region         | `hl.bind("SUPER + SHIFT + S", hl.dsp.global("quickshell:regionOcr"))`                      |
| `regionSearch`          | Visual search from region        | `hl.bind("SUPER + Z", hl.dsp.global("quickshell:regionSearch"))`                           |
| `regionQRCode`          | Scan QR code from region         | `hl.bind("SUPER + SHIFT + Z", hl.dsp.global("quickshell:regionQRCode"))`                   |
| `regionRecord`          | Record selected region           | `hl.bind("SUPER + R", hl.dsp.global("quickshell:regionRecord"))`                           |
| `regionRecordWithSound` | Record region with audio         | `hl.bind("SUPER + SHIFT + R", hl.dsp.global("quickshell:regionRecordWithSound"))`          |
