# AGENTS.md — Conduit (RealWorld) o'quv loyihasi

Bu fayl AI agentlar va o'qituvchi uchun loyiha yo'riqnomasi. Til: **o'zbekcha** (kod, komment va commit xabarlari bundan mustasno — ular inglizcha).

## Loyiha maqsadi

**Conduit** — Medium.com'ning kichraytirilgan klonini **RealWorld spec** asosida qurish. Loyiha boshlovchi dasturchilarga (talabalarga) **10 ta darsda** React + TypeScript frontend arxitekturasini o'rgatish uchun mo'ljallangan.

- Faqat **frontend** yoziladi. Backend tayyor: `https://api.realworld.show/api/`
- API spec: https://github.com/gothinkster/realworld/tree/main/api
- Boshqa implementatsiyalar bilan solishtirish: https://codebase-show.vercel.app/

### Conduit imkoniyatlari (loyiha oxirida bo'lishi kerak)

- Ro'yxatdan o'tish / login (JWT)
- Maqola yozish, tahrirlash, o'chirish (sarlavha, tavsif, markdown matn, tag'lar)
- Feed: Global Feed va Your Feed (kuzatilgan mualliflar)
- Follow / unfollow
- Favorite (like)
- Kommentlar
- Profil sahifa
- Tag bo'yicha filtrlash
- Pagination

### Sahifalar

Home, Login, Register, Article, Profile, Settings, Editor.

### API endpoint namunalari

| Metod va yo'l | Vazifasi |
| --- | --- |
| `GET /api/articles` | maqolalar ro'yxati |
| `GET /api/articles/:slug` | bitta maqola |
| `POST /api/articles` | yangi maqola (token kerak) |
| `POST /api/users/login` | login |
| `GET /api/profiles/:username` | foydalanuvchi profili |

## Texnologiyalar va nega aynan ular

| Texnologiya | Sababi |
| --- | --- |
| Vite | juda tez dev-server (webpack emas) |
| React 19 + TypeScript | tiplarni xatosiz yozish |
| Tailwind CSS v4 | CSS fayl yozmasdan class orqali stil berish |
| React Router | sahifalar orasida navigatsiya (SPA) |
| React Query | serverdan kelgan datani keshlash/yangilash |
| Axios | HTTP so'rovlar |
| React Hook Form + Zod | formalar va validatsiya |
| pnpm | npm/yarn'dan tezroq, disk joyini tejaydi |

> Package manager: **faqat pnpm** (npm/yarn ishlatilmaydi).

## Papka arxitekturasi (10 dars davomida rioya qilinadi)

```
src/
  pages/       → har bir route uchun 1 komponent (Home, Login, Article...)
  layouts/     → umumiy qatlam (Header, Footer, AppLayout)
  features/    → domenlarga bo'lingan mantiq (articles, auth, comments...)
    articles/
      useArticles.ts   → React Query hook
      ArticleItem.tsx  → shu domenga tegishli komponent
  services/    → axios so'rovlari (backend bilan gaplashuvchi YAGONA joy)
  types/       → TypeScript type'lar
  providers/   → Context/QueryClient kabi global contextlar
  hooks/       → umumiy hook'lar (useAuth va h.k.)
  routes/      → router.tsx — barcha marshrutlar shu yerda
  ui/          → domensiz umumiy komponentlar (Spinner, ErrorMessage)
```

### Asosiy qoida

> **Komponent faqat UI bilan shug'ullanadi. Backend bilan gaplashish faqat `services/`da. Ular orasidagi ko'prik — `features/`dagi hook'lar.**

Agent kod yozganda bu qoidani buzmasligi shart:

- Komponent ichida `axios` yoki `fetch` chaqirilmaydi.
- `services/` ichida React (hook, JSX) bo'lmaydi.
- Server state — React Query orqali, `features/<domen>/use*.ts` hook'larida.
- Formalar — React Hook Form + Zod.
- Stil — Tailwind class'lari orqali; `tailwind.config.js` va `postcss.config.js` **yaratilmaydi** (v4'da shart emas).

## Dars rejasi (10 ta dars)

| # | Dars | Holat |
| --- | --- | --- |
| 0 | Start project: Vite + React + TS + Tailwind, arxitektura, git | **bu faylda to'liq yozilgan** |
| 1 | React Router: sahifalar orasida navigatsiya (Home, Login, Article...) | rejalashtirilgan |
| 2–9 | Keyingi darslar mavzusi keyin belgilanadi (services/Axios, React Query, auth, formalar, CRUD, ijtimoiy funksiyalar va h.k.) | belgilanmagan |

> 2–9-darslar mavzularini o'qituvchi aytmaguncha o'ylab topmang.

## Git tartibi

- Har dars uchun alohida branch: `lesson-0`, `lesson-1`, ...
- Har dars oxirida commit qilinadi. Commit xabari formati: `chore:`, `feat:`, `fix:` prefikslari (masalan `chore: project setup with vite, react, ts, tailwind`).
- Asosiy branch: `main`.

## Buyruqlar

```bash
pnpm install     # dependency'larni o'rnatish
pnpm dev         # dev-server (vite), Hot Reload bilan
pnpm build       # tsc -b && vite build
pnpm lint        # eslint .
pnpm preview     # build natijasini ko'rish
```

---

# Lesson 0: START PROJECT

## 1. Nima yasaymiz?

Conduit (Medium.com clone), RealWorld spec asosida. RealWorld — turli frontend/backend texnologiyalarda bir xil ilovani qurish uchun ochiq spec. Backend tayyor (`https://api.realworld.show/api/`), biz faqat frontend yozamiz.

## 2. Nega bu foydali?

Real hayotdagi ilova arxitekturasi: routing, auth, CRUD, server state, formalar bilan ishlash va hokazo.

## 3. Texnologiyalar ro'yxati va NEGA aynan ular

- **Vite** — juda tez dev-server (webpack emas)
- **React 19 + TypeScript** — tiplarni xato qilmasdan yozish
- **Tailwind CSS v4** — CSS fayl yozmasdan class orqali stil berish
- **React Router** — sahifalar orasida navigatsiya (SPA)
- **React Query** — serverdan kelgan datani keshlash/yangilash
- **Axios** — HTTP so'rovlar
- **React Hook Form + Zod** — formalar va validatsiya
- **pnpm** — npm/yarn o'rniga tezroq, disk joyini tejaydigan package manager

## 1-qadam: Kerakli dasturlarni tekshirish

```bash
node -v      # v20+ bo'lishi kerak
pnpm -v      # yo'q bo'lsa: npm install -g pnpm
git --version
```

## 2-qadam: Loyihani yaratish

```bash
pnpm create vite@latest conduit -- --template react-ts
cd conduit
pnpm install
```

## 3-qadam: Birinchi marta ishga tushirish

```bash
pnpm dev
```

## 4-qadam: Yaratilgan fayllarni birma-bir tushuntirish

Yaratilgan fayllar:

| Fayl / papka | Vazifasi |
| --- | --- |
| `package.json` | loyiha nomi, dependency'lar va `scripts` |
| `pnpm-lock.yaml` | dependency versiyalarini qotirib qo'yadi |
| `index.html` | yagona HTML; ichida `<div id="root">` va `/src/main.tsx` ulanadi |
| `vite.config.ts` | Vite sozlamalari (pluginlar shu yerda) |
| `tsconfig*.json` | TypeScript sozlamalari (`app` — brauzer kodi, `node` — config fayllar) |
| `eslint.config.js` | kod sifati qoidalari |
| `src/main.tsx` | kirish nuqtasi: `<App />` ni `#root` ga render qiladi |
| `src/App.tsx` | asosiy komponent |
| `src/index.css`, `src/App.css` | global va komponent stillari |
| `src/assets/`, `public/` | rasm va statik fayllar |

**Muhim tushuntirish:** `pnpm dev` ichida yozilgan buyruq aslida shunchaki `vite`. Bu `package.json`dagi `scripts` bo'limidagi qisqartma nomlar:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 5-qadam: Boshlang'ich fayllarni tozalash

Shablondagi keraksiz narsalarni olib tashlaymiz:

- `src/App.css` — o'chiriladi
- `src/assets/hero.png`, `react.svg`, `vite.svg` — o'chiriladi
- `public/icons.svg` — o'chiriladi (agar ishlatilmasa)
- `src/App.tsx` — minimal holatga keltiriladi:

```tsx
function App() {
  return <h1>Conduit</h1>
}

export default App
```

- `src/index.css` — ichidagi hamma narsa o'chiriladi (keyingi qadamda Tailwind import qilinadi)
- `src/main.tsx` dagi `import './App.css'` bo'lsa, olib tashlanadi
- `index.html` dagi `<title>` — `Conduit` ga o'zgartiriladi

## 6-qadam: Tailwind CSS v4 ni o'rnatish

```bash
pnpm add tailwindcss @tailwindcss/vite
```

`vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

`src/index.css`:

```css
@import "tailwindcss";
```

**Muhim izoh:** Tailwind v4'da eski `tailwind.config.js` va `postcss.config.js` **shart emas**. Bu eski (v3) davrda shunday edi. Nima uchun shu joyga urg'u beryapmiz? Chunki YouTube'dagi ko'p darslar hali ham eski usulni ko'rsatadi.

**Tekshirish uchun** `App.tsx`ga:

```tsx
<h1 className="text-3xl font-bold text-green-600">Conduit ishlayapti!</h1>
```

Brauzerda yashil, qalin, katta yozuv ko'rinsa — Tailwind ishlayapti.

## 7-qadam: Loyiha papka arxitekturasini chizish (doskada)

Bu eng muhim joyi, chunki 10 ta dars davomida shu strukturaga rioya qilamiz:

```
src/
  pages/       → har bir route uchun 1 komponent (Home, Login, Article...)
  layouts/     → umumiy qatlam (Header, Footer, AppLayout)
  features/    → domenlarga bo'lingan mantiq (articles, auth, comments...)
    articles/
      useArticles.ts   → React Query hook
      ArticleItem.tsx  → shu domenga tegishli komponent
  services/    → axios so'rovlari (backend bilan gaplashuvchi yagona joy shu yer)
  types/       → TypeScript type'lar
  providers/   → Context/QueryClient kabi "global contextlar"
  hooks/       → umumiy hook'lar (useAuth va h.k.)
  routes/      → router.tsx — barcha marshrutlar shu yerda
  ui/          → domensiz umumiy komponentlar (Spinner, ErrorMessage)
```

**Qoida:** "Komponent faqat UI bilan shug'ullanadi. Backend bilan gaplashish faqat `services/`da. Ular orasidagi ko'prik esa `features`'dagi hook'lar bo'ladi." Bu qoidani 10 dars davomida qayta-qayta eslatib turamiz.

Papkalarni hozir bo'sh yaratib qo'yish mumkin:

```bash
mkdir -p src/{pages,layouts,features,services,types,providers,hooks,routes,ui}
```

Ichi keyingi darslarda to'ldiriladi.

> Bo'sh papkalarni git kuzatmaydi. Agar ularni commitga kiritish kerak bo'lsa, har biriga `.gitkeep` qo'yiladi.

## 8-qadam: Git bilan ishlash

```bash
git init
git add .
git commit -m "chore: project setup with vite, react, ts, tailwind"
```

GitHub'da bo'sh repo yaratib, push qilish:

```bash
git remote add origin <repo-url>
git push -u origin main
```

**Izoh:** Har dars oxirida commit qilish odatini shu yerdan boshlaymiz. Har dars tugagach talabalar o'z commitlarini qilishlari kerak (masalan branch: `lesson-0`, `lesson-1` va hokazo).

## 9-qadam: Darsni yakuni — uyga vazifa

1. Shu setup'ni mustaqil qaytarib qilib kelish (majburiy).
2. Nega Tailwind uchun alohida config fayl kerak emas ekan?
3. Hot Reload (HMR) nima? Shu tushunchani o'rganib kelish.

## Keyingi (1-dars)ga o'tish ko'prigi

"Bugun biz faqat bitta statik sahifa qildik. Keyingi darsda React Router bilan bir nechta sahifa (Home, Login, Article...) orasida qanday sayohat qilishni o'rganamiz."

---

## Lesson 0 tekshiruv ro'yxati (agent va o'qituvchi uchun)

- [ ] `node -v` ≥ 20, `pnpm` va `git` o'rnatilgan
- [ ] Loyiha `react-ts` shablonida yaratilgan, `pnpm install` bajarilgan
- [ ] `pnpm dev` xatosiz ishlaydi
- [ ] Shablon fayllari tozalangan (App.css, hero.png, react.svg, vite.svg)
- [ ] `tailwindcss` va `@tailwindcss/vite` o'rnatilgan, `vite.config.ts`da `tailwindcss()` plugini bor
- [ ] `src/index.css` da faqat `@import "tailwindcss";`
- [ ] `tailwind.config.js` / `postcss.config.js` **yo'q**
- [ ] `App.tsx` da "Conduit ishlayapti!" yashil rangda ko'rinadi
- [ ] `src/` ichida 9 ta papka yaratilgan: pages, layouts, features, services, types, providers, hooks, routes, ui
- [ ] `git init` va birinchi commit qilingan
- [ ] `pnpm build` va `pnpm lint` xatosiz o'tadi
