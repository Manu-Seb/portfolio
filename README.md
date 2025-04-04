

## A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This project showcases my skills, projects, and contact information in a clean and visually appealing design.

**[Live Demo](https://manu-seb.github.io/portfolio)**

---

## Features
- Responsive design optimized for all devices
- Fast build and development with Vite
- Styled with Tailwind CSS for a sleek, modern look
- Easy deployment to GitHub Pages
- Includes a profile picture, project showcase, and contact form (via EmailJS)

---

## Tech Stack
- **Frontend**: React.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Dependencies**: 
  - `emailjs-com` for contact form functionality
  - `react-icons` for icons
  - `gh-pages` for deployment

---

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Git](https://git-scm.com/)

---

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Manu-Seb/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run locally**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/portfolio/` in your browser to see the app.

---

## Building the Project
To create a production-ready build:
```bash
npm run build
```
This generates the `dist` folder with optimized files.

---

## Previewing the Build
To preview the production build locally:
```bash
npm run preview
```

---

## Deployment to GitHub Pages
Deploy the project to GitHub Pages with the following steps:

1. **Ensure configuration**:
   - `package.json` has `"homepage": "https://manu-seb.github.io/portfolio"`
   - `vite.config.js` has `base: "/portfolio/"`

2. **Deploy**:
   ```bash
   npm run deploy
   ```
   This runs `npm run build` and pushes the `dist` folder to the `gh-pages` branch.

3. **Verify**:
   Visit [https://manu-seb.github.io/portfolio](https://manu-seb.github.io/portfolio) to see the live site.

---

## Troubleshooting
- **Deployment Error**: If you see `fatal: a branch named 'gh-pages' already exists`:
  - Clear the `gh-pages` cache:
    ```powershell
    Remove-Item -Path "node_modules/gh-pages/.cache" -Recurse -Force -ErrorAction SilentlyContinue
    ```
  - Retry: `npm run deploy`
- **Assets Not Loading**: Ensure file paths match the `base` setting (`/portfolio/`).

---

## Contributing
Feel free to fork this repository, submit issues, or create pull requests. Contributions are welcome!

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Contact
Reach out to me via the contact form on the live site or through [GitHub](https://github.com/Manu-Seb).

---

