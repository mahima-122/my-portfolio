# Mahima Bastola — Portfolio

A modern, minimal dark-theme portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Tech Stack

- **React 18** — component-based UI
- **Vite** — lightning-fast dev server & build tool
- **Tailwind CSS v3** — utility-first styling
- **Framer Motion** — smooth animations
- **Lucide React** — clean icon set
- **Syne + DM Sans + JetBrains Mono** — typography trio

---

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component
    ├── index.css         # Global styles + Tailwind layers
    ├── data/
    │   └── index.js      # All portfolio data (edit this!)
    ├── hooks/
    │   └── useInView.js  # Intersection observer hook
    └── components/
        ├── Nav.jsx        # Sticky nav with mobile menu
        ├── Hero.jsx       # Landing section
        ├── About.jsx      # About + stats
        ├── Skills.jsx     # Skill groups + marquee
        ├── Projects.jsx   # Projects + Design cards with filter
        ├── DesignSection.jsx # Gallery with lightbox
        ├── Experience.jsx # Timeline-style experience
        ├── Contact.jsx    # Contact form + links
        └── Footer.jsx     # Minimal footer
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Open `http://localhost:5173`

### 3. Build for production

```bash
npm run build
npm run preview  # Preview production build locally
```

---

## Customization

### Update personal data
All content lives in **`src/data/index.js`**. Edit:
- `projects` — add/remove web projects
- `designWork` — add/remove design pieces
- `skills` — modify skill categories
- `experience` — update work history

### Add a new project
In `src/data/index.js`, add to the `projects` array:

```js
{
  id: 4,               // unique id
  title: 'Project Name',
  subtitle: 'Short tagline',
  description: 'What it does...',
  tech: ['React', 'Node.js'],
  features: ['Feature 1', 'Feature 2'],
  category: 'web',     // 'web' or 'design'
  links: { github: 'https://...', live: 'https://...' },
  year: '2025',
  status: 'Live',
}
```

### Add a new design piece
In `src/data/index.js`, add to `designWork`:

```js
{
  id: 'd7',
  title: 'Project Title',
  type: 'Logo Design',
  description: 'Brief description.',
  category: 'design',
  color: '#yourColor',  // accent color for the shape
  bg: '#darkBg',        // card background
  shape: 'hexagon',     // circle | hexagon | triangle | diamond | square
}
```

---

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the `dist/` folder to Netlify Drop
# or use: netlify deploy --dir=dist --prod
```

### GitHub Pages
Add to `vite.config.js`:
```js
base: '/your-repo-name/'
```
Then push the `dist/` folder to the `gh-pages` branch.

---

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | — | Name, title, intro, CTAs |
| About | `#about` | Background, stats, current stack |
| Skills | `#skills` | Grouped skill cards + marquee |
| Projects | `#projects` | Filtered: All / Web / Design |
| Design | `#design` | Gallery with lightbox |
| Experience | `#experience` | Timeline-style work history |
| Contact | `#contact` | Links + contact form |

---

Built with intention — minimal, modern, and yours.
