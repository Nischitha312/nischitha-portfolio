# 🚀 Nischitha B M – Portfolio Setup Guide

## Prerequisites
Make sure you have these installed:
- **Node.js** (v18 or above) → https://nodejs.org
- **VS Code** → https://code.visualstudio.com

---

## 📁 Step 1: Set Up the Project Folder

1. Create a new folder on your computer, e.g., `nischitha-portfolio`
2. Copy all the files from this zip into that folder.
   Your folder structure should look like this:

```
nischitha-portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── vite-env.d.ts
    └── assets/
        └── profile.jpeg   ← ADD YOUR PHOTO HERE
```

---

## 🖼️ Step 2: Add Your Profile Photo

1. Inside the `src/` folder, **create a new folder** called `assets`
2. Copy your profile photo (`PROFILE.jpeg`) into `src/assets/`
3. **Rename** it to exactly: `profile.jpeg` (all lowercase)

---

## 💻 Step 3: Open in VS Code

1. Open VS Code
2. Click **File → Open Folder**
3. Select your `nischitha-portfolio` folder
4. Click **Open**

---

## 📦 Step 4: Install Dependencies

1. In VS Code, open the **Terminal**:
   - Press `` Ctrl + ` `` (backtick) OR
   - Click **Terminal → New Terminal** from the top menu

2. Run this command:
```bash
npm install
```
Wait for it to finish (it will create a `node_modules` folder).

---

## ▶️ Step 5: Start the Development Server

In the same terminal, run:
```bash
npm run dev
```

You will see output like:
```
  VITE v5.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## 🌐 Step 6: View Your Portfolio

Open your browser and go to:
```
http://localhost:5173
```

Your portfolio is live! 🎉

---

## 🏗️ Step 7: Build for Production (Optional)

When you're ready to deploy, run:
```bash
npm run build
```

This creates a `dist/` folder with optimized files ready to host on:
- **Vercel** → https://vercel.com (free, drag & drop `dist` folder)
- **Netlify** → https://netlify.com (free, drag & drop `dist` folder)
- **GitHub Pages** → Follow GitHub Pages documentation

---

## 🔧 Recommended VS Code Extensions

Install these for a better experience:
1. **ESLint** – Code quality
2. **Prettier** – Code formatting
3. **Tailwind CSS IntelliSense** – Autocomplete for Tailwind classes
4. **TypeScript Vue Plugin** – Better TS support

To install: Press `Ctrl+Shift+X` in VS Code → Search and install each extension.

---

## 📝 How to Edit Content

All your personal info is in **`src/App.tsx`**. You can edit:

| Section | What to change |
|---|---|
| Name / About | `h1` tag and paragraph in Hero section |
| Education | `EDUCATION` section constants |
| Tech Skills | `TECH_SKILLS` array at the top |
| Projects | `PROJECTS` array at the top |
| Achievements | `ACHIEVEMENTS` array at the top |
| Contact | `ContactCard` components in Contact section |

---

## ❓ Troubleshooting

**Error: `Cannot find module './assets/profile.jpeg'`**
→ Make sure you created `src/assets/` folder and put `profile.jpeg` inside it.

**Error: `npm: command not found`**
→ Install Node.js from https://nodejs.org and restart VS Code.

**Port 5173 already in use**
→ Run `npm run dev -- --port 3000` to use a different port.

**Styles not loading**
→ Make sure `tailwind.config.js` and `postcss.config.js` are in the root folder (same level as `package.json`).
