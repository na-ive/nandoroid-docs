---
title: Changelog (Catatan Rilis)
description: Riwayat rilis dan pembaruan untuk NAnDoroid-shell.
---

## v1.4.0

### Ikhtisar
Rilis mayor ini memigrasikan konfigurasi *core* Hyprland ke format Lua, memperkenalkan halaman System Settings yang sudah dirombak dan disatukan, serta mengimplementasikan integrasi mendalam dengan Wallpaper Engine dari Steam. Rilis ini juga membenahi sistem notifikasi dengan *swipe-to-dismiss feedback*, *smart routing*, dan *horizontal scrolling* untuk opsi *actions*, bersamaan dengan optimasi performa yang meminimalkan *overhead* CPU/GPU di *background*.

### Changelog

**Hyprland Lua Migration**
- Migrate core Hyprland configurations to Lua format (compatible with Hyprland 0.55+)
- Implement a robust compatibility layer to handle newer Hyprland updates
- Align Settings controls (Display, Layout, GameMode) with the Lua backend

**System Settings & UI**
- Introduce a dedicated System Settings module to centralize system-related panels
- Integrate the System page into the global settings search registry and navigation
- Clean up Services and WallpaperStyle layouts and fix double margins on connection cards

**Wallpaper Engine & Selector**
- Implement Wallpaper Engine workshop discovery, custom property editor, and search/sort
- Add high-performance webp thumbnail caching using grabToImage
- Refactor WallpaperSelector to an elegant "Island" layout and make sidebar scrollable
- Add error detection, forced-resume logic, and automatic favorite wallpaper fallback
- Implement custom accent color picker using hyprpicker

**Notification System**
- Implement swipe-to-dismiss feedback and dynamic input masks for popup notifications
- Add smart 'View' actions and internal routing for About page sub-sections
- Add horizontal scrolling for actions and enforce maximum expansion heights on popups
- Resolve hover-based timer pause issues and restore precise click-through masks

**Performance & Game Mode**
- Implement Game Mode persistence and smart performance adjustments for live wallpapers
- Optimize Matugen color application to run asynchronously, removing synchronous wait lag
- Isolate wallpaper color cache between lockscreen and desktop previews
- Refine background tracking services to reduce CPU and GPU overhead

**Stability & Core Fixes**
- Prevent CAVA visualizer freezing during theme changes and shell restarts via direct process management
- Synchronize system tray context menus and improve desktop right-click menu behavior
- Resolve Wallhaven 403 Forbidden errors by adding a standard User-Agent header
- Add global Escape key handling to close the Overview workspace panel
- Implement adaptive smart rounding for global scaling across all widgets

---

## v1.3.1

### Ikhtisar
*Maintenance update* ini mengatasi isu krusial pada *path resolution* untuk penyimpanan *screenshot* dan *shell versioning*. Update ini juga menghadirkan perbaikan tipografi yang signifikan untuk keseimbangan visual yang lebih baik dan meningkatkan interaktivitas di halaman About. Stabilitas juga ditingkatkan lewat perbaikan *search indexing* dan logika *temporal auto-hide* yang lebih andal untuk *scroll hints* di status bar.

### Changelog

**System & Path Resolution**
- Resolve shell metadata and versioning path issues by centralizing files in `~/.config/nandoroid/`
- Fix default screenshot and recording save paths by ensuring they are protocol-free (removing `file:///` conflicts)
- Implement automatic protocol trimming when manually entering storage paths in settings
- Update installer and updater scripts to handle new metadata locations correctly

**UI/UX & Typography**
- Globally refine typography by transitioning from `Font.Bold` to `Font.DemiBold` for a cleaner look across all scales
- Standardize header sizes and weights across Settings, About, and Service panels
- Unify "Off" state colors for system interface toggles to match Material 3 container standards
- Improve About page link cards with full clickability and precise hover rounding that respects segmented boundaries

**Functional Fixes**
- Implement 3-second temporal auto-hide for Status Bar ScrollHints to prevent visual "freezing"
- Enhance search indexing for Screenshot and Recording settings in the global search bar
- Implement substring matching in SearchHandler for more intuitive settings discovery

---

## v1.3.0

### Ikhtisar
Update mayor ini memperkenalkan sistem *global scaling* secara komprehensif, meningkatkan kenyamanan penggunaan di monitor beresolusi tinggi. Rilis ini juga menghadirkan Quick Actions HUD baru untuk akses cepat ke fitur sistem, Wallpaper Selector yang dirombak ulang dengan dukungan koleksi online dan kustomisasi folder, serta *service* Weather yang disempurnakan dengan opsi pemilihan provider utama.

### Changelog

**Global Scaling & UI**
- Implement comprehensive global scaling across all panels, widgets, and sub-components
- Refine visualizers and layout constraints to maintain fill behavior when scaled
- Ensure precise interaction zones for autohide panels through dynamic input masking

**Quick Actions & HUD**
- Implement floating Quick Actions HUD with keyboard navigation and animated stretch-highlights
- Add Super+G shortcut for rapid access to common system tools and screen utilities

**Wallpaper Selector**
- Integrate NA-ive Walls online collection with lightweight webp thumbnails
- Implement persistent custom folder management with automated system-dialog workflow
- Add stable A-Z/Z-A sorting and separate search states for different categories
- Refine UI with a unique Sunny-shaped sorting button and improved vertical alignment

**Weather Service**
- Implement weather provider selection (Open-Meteo or wttr.in) in system settings
- Set Open-Meteo as the new high-accuracy primary option with automatic location detection
- Implement robust fallback cycles for maximum data reliability

**Clock & Kustomization**
- Add Pill and Text clock styles for further desktop personalization
- Implement date font size customization for digital clocks
- Refine analog clock face shapes and UI markers for sliders

**System & Stability**
- Implement smart dependency management and categorization in About page
- General maintenance including memory optimization and QML warning cleanup
- Improve contrast for notification counters and system tray icons

---

## v1.2.2

### Ikhtisar
Update ini menghadirkan *service* Wallhaven yang terintegrasi penuh dengan fitur-fitur pintar, meningkatkan manajemen perangkat audio dengan memfilter *virtual nodes*, dan memberikan beberapa penyempurnaan UI/UX di *lockscreen* dan panel sistem. Stabilitas tetap menjadi fokus utama dengan peningkatan logika CAVA *visualizer*, penanganan metadata OTA, dan eksekusi perintah (*command execution*) yang lebih aman.

### Changelog

**Media Player & UI**
- Refactor MediaCard for better alignment and consistent gaps
- Implement monospace font for timers and remove hover highlights on skip buttons
- Improve vertical alignment for track info and playback controls
- Optimize art downloader to clear pending tasks on playback stop

**Wallhaven & Wallpapers**
- Implement Wallhaven service with infinite scroll, random initial search, and smart download (duplicate prevention)
- Add wallpaper favorites and improved panel synchronization
- Optimize memory usage by clearing online results on panel close and using adaptive cache buffer
- Implement randomized and optimized wallpaper transitions

**Audio & System**
- Filter out dummy nodes (Dummy Output/Input) from device lists for a cleaner UI
- Implement persistent monitor settings, layout, and game mode via config injection
- Improve OTA stability by resolving broken version metadata during updates
- Secure various shell commands (weather, SongRec, mpris, clipboard) and prevent redundant refreshes
- Fix CAVA process stability and frozen visualizers with robust ref-counting and error handling

**Region Selector & Screenshots**
- Fix TypeError in ScreenshotAction by adding default imageSearch configuration
- Resolve image search engine URL property access and improve command construction

**UI/UX & Minor Fixes**
- Fix ActiveWindowTitle layout to prevent text overflow in the status bar
- Implement WrapAnywhere for notification content to handle long text
- Resolve various QML warnings related to undefined properties and type assignments
- Redesign lockscreen unlock button with a pill-shaped aesthetic
- Implement adaptive colors for lockscreen status bar and weather
- Improve contrast for selected items in style selectors and settings
- Fix battery indicator behavior to hide when no battery is available
- Resolve stuck scroll hints by adding panel-state-based auto-hiding logic

**Refactoring & Architecture**
- Move MediaCard, WeatherCard, and WeatherAnimation to the unified widgets directory for better project organization
- Consolidate widget management through the global qmldir for consistent component loading

---

## v1.2.1

### Ikhtisar
*Maintenance update* ini memperkenalkan *system tray* yang bisa diperluas (*expandable*) dengan berbagai *style*, mengembalikan fungsi inti dari panel Overview, dan berfokus membersihkan *QML warnings* internal untuk meningkatkan performa dan keandalan *shell*.

### Changelog

**Status Bar & System Tray**
- Implement expandable system tray with pop-up overflow
- Add three tray display modes: 'All', 'Adaptive' (show max 3 icons), and 'Hide'
- Integrate tray style selection into Status Bar settings

**Overview & Workspace**
- Restore standard grid window layout and fix drag-and-drop logic
- Refine centering math for workspace previews
- Prevent accidental panel closure when interacting with workspace cards

**System Stability & Fixes**
- Resolve numerous QML warnings related to missing icons and shader effects
- Improve Brave Browser icon resolution with additional fallback logic
- Fix appearance property references and refine the shell restart script
- Fix Image Search (Google Lens) reliability by improving URL handling and preventing browser download prompts

**Dashboard & Productivity**
- Clean up HTML tags in Notepad summaries to prevent empty list items in the sidebar
- Improve reliability of image uploads for search functions

---

## v1.2.0

### Ikhtisar
Update ini berfokus pada peningkatan performa yang masif, perbaikan stabilitas besar-besaran, fitur Dock *auto-hide* yang terintegrasi, serta berbagai penyempurnaan visual di seluruh elemen *shell*. Isu *memory leaks* sudah ditambal, *system dependencies* dirampingkan, dan UI dipoles agar lebih sejalan dengan pedoman Material Design 3.

### Changelog

**Dock Implementation**
- Add fully integrated dock with auto-hide functionality
- Implement hover reveals, single-window previews, and tactile click effects
- Add premium context menus featuring Jump Lists for quick actions
- Replace fixed height constraints with proportional scaling for different screens

**Status Bar & Dynamic Island**
- Implement Centered Layout (HUD) mode optimized for ultrawide monitors
- Add true adaptive coloring for all sub-widgets based on background wallpaper
- Implement lightweight Waterdrop style and balanced media 'ear' widths for the Dynamic Island
- Add support for auto-hide status bar with precise hover detection

**System Monitor**
- Redesign the System Monitor panel with a clean Android-style aesthetic
- Integrate real-time CPU, RAM, GPU, and Storage tracking with smooth animations
- Add per-core frequency and temperature monitoring

**Notifications & Settings**
- Refine Notification system UI/UX with smooth dismissal and reliable memory management
- Implement "Pull or Close" logic for Settings and System Monitor panels
- Restructure On-Screen Displays (OSD) and fix rendering artifacts

**Theming & Visuals**
- Add automatic KDE/Qt theming integration alongside standard GTK theming
- Integrate subtle ambient shadows, MD3 outlines, and tonal scrim backdrops
- Add Roman numeral clock style and pulse charging animations
- Consolidate color logic to synchronize panels (e.g., MediaNotchPopup slider colors match MediaCard)

**Other Additions**
- Add modular Hyprland and Fish configurations to `extras/`
- Introduce optional `nandoroid-cli` for streamlined terminal control
- Transition away from legacy fish completions
- Implement per-app volume control and translation tooltips within the Dashboard

### Dependency Updates
- **Added:** `adw-gtk-theme` (replaces adw-gtk3), `qt5ct`, `qt6ct`, `nwg-look`, `plasma-integration`, `breeze`, `breeze-icons`
- **Optional:** `nandoroid-cli` (GitHub installer added to `install.sh`)
