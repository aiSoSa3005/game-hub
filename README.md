# 🎮 Game Hub

Marketplace di giochi **free-to-play** con ricerca, filtri e dark mode.  
Dati forniti dall’API **[FreeToGame](https://www.freetogame.com/api/)**.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=000)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)](#)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=fff)](#)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=fff)](#)

👉 **Live demo**: [https://game-hub.vercel.app](https://game-hub.vercel.app)  

---

## ✨ Features

- 🔎 **Search con debounce** per query fluide  
- 🎮 **Filtri** per piattaforma e genere  
- 🌓 **Dark/Light mode** toggle persistente  
- 🧭 **Sidebar generi** con icone/immagini personalizzate  
- 🖼️ **Card responsive** con thumbnail e info di gioco  
- ⚡ **AbortController** per cancellare fetch in corso  
- ✅ Gestione **loading** ed **errori**  
- ♻️ **Custom hooks** (`useGames`, `useGenre`)  

---

## 📸 Screenshot

| Dark Mode | Light Mode |
|-----------|------------|
| ![Dark](public/screenshots/dark.png) | ![Light](public/screenshots/light.png) |

_(sostituisci i file `dark.png` e `light.png` con le tue immagini nella cartella `public/screenshots/`)_  

---

## 🧱 Tech Stack

- **React + TypeScript** (Vite)
- **Tailwind CSS**
- **shadcn/ui** (per select, dropdown, ecc.)
- **lucide-react** per icone
- **Axios** per fetch
- **FreeToGame API** come backend pubblico

---

## 📦 Setup Locale

```bash
# 1) Clona il repo
git clone https://github.com/aiSoSa3005/game-hub
cd game-hub

# 2) Installa dipendenze
npm install

# 3) Avvia in dev
npm run dev
