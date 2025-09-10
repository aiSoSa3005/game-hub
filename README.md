#  Game Hub

Free-to-play games marketplace with search, filters, and dark mode.  
Powered by the **[FreeToGame API](https://www.freetogame.com/api/)**.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=000)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)](#)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=fff)](#)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=fff)](#)

👉 **Live demo**: (https://game-hub-woad-xi.vercel.app/)

---

##  Features

-  **Debounced search** for smooth queries  
-  **Filters** by platform and genre  
-  **Dark/Light mode** with persistence  
-  **Genre sidebar** with custom icons/images  
-  **Responsive cards** with game thumbnail and details  
-  **AbortController** to cancel ongoing fetch requests  
-  Built-in **loading** and **error handling**  
-  **Custom hooks** (`useGames`, `useGenre`)  

---

## 📸 Screenshots

| Dark Mode | Light Mode |
|-----------|------------|
| ![Dark](public/screenshots/dark.png) | ![Light](public/screenshots/light.png) |

_(replace `dark.png` and `light.png` with your screenshots inside `public/screenshots/`)_  

---

## Tech Stack

- **React + TypeScript** (Vite)
- **Tailwind CSS**
- **shadcn/ui** (for select, dropdown, etc.)
- **lucide-react** for icons
- **Axios** for data fetching
- **FreeToGame API** as backend data source

---

##  Local Setup

```bash
# 1) Clone the repository
git clone https://github.com/aiSoSa3005/game-hub
cd game-hub

# 2) Install dependencies
npm install

# 3) Start development server
npm run dev
