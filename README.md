# Venkata Raj Gopal — Portfolio Website

A static site (plain HTML/CSS/JS — no build tools needed) built from your
`Portfolio` folder: profile photos, MBA journey photos, project reports,
internship & certification PDFs, and contact details.

## 1. Preview it locally
Just double-click `index.html` to open it in your browser, or for a more
accurate preview (recommended, since some browsers block local file
requests to `assets/`), run from this folder:

```
python3 -m http.server 8000
```
then open `http://localhost:8000` in your browser.

## 2. Make your contact form actually deliver messages ⚠️ required step
Right now, if someone submits the "Get in Touch" form, it goes nowhere —
you need to connect it to a real inbox. This is a **static** site (no
server of its own), so the simplest, free, no-code way to receive real
submissions is **Formspree**:

1. Go to https://formspree.io and sign up free with `vrgacharya@gmail.com`.
2. Create a new form — Formspree gives you an endpoint like
   `https://formspree.io/f/abcdwxyz`.
3. Open `index.html`, find this line (in the Contact section):
   ```html
   <form class="contact__form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   and replace `YOUR_FORM_ID` with your real form ID.
4. Confirm the verification email Formspree sends you.

That's it — form submissions will land straight in your email
(free tier: 50 submissions/month). Until you do this, the site still shows
a working "Prefer email? Write to me directly" mailto link as a fallback,
so people can always reach you.

## 3. Put it online (pick one, all free)
- **Netlify Drop** — go to https://app.netlify.com/drop and drag this whole
  folder in. Live in seconds, gives you a URL like `yourname.netlify.app`.
- **GitHub Pages** — create a GitHub repo, upload these files, then turn on
  Pages in the repo Settings. Free URL like `yourusername.github.io/portfolio`.
- **Vercel** — similar drag-and-drop / GitHub import flow at vercel.com.

You can later connect a custom domain (e.g. `venkatarajgopal.com`) on any
of these for a small yearly fee if you want one.

## 4. Folder structure
```
site/
├── index.html
├── css/style.css
├── js/script.js          ← project & experience content lives here as data
└── assets/
    ├── images/            ← profile & MBA journey photos (optimized for web)
    └── pdfs/
        ├── projects/       ← the 4 project reports (linked from Projects section)
        ├── internships/    ← GramTarang, ONLEI, Trainity certificates
        └── certifications/ ← Career Edge, Tata Forage certificates
```

Two of your original photos — `Profile.jpeg` and `Suit.JPG` — are included
in `assets/images/` (as `profile.jpg` and `suit.jpg`) but not placed on the
page yet, in case you'd like to swap one in for the About or Hero photo.

## 5. Editing content later
- **Text** (About, MBA Journey, Contact copy): edit directly inside
  `index.html` — it's plain readable HTML.
- **Projects & Experience cards**: edit the `PROJECTS` and `EXPERIENCE`
  arrays at the top of `js/script.js` — each entry is one card, no HTML
  editing needed.
- **Photos**: drop a new file into `assets/images/` and update the
  matching `src="assets/images/..."` in `index.html`.
- **PDFs**: replace the file in `assets/pdfs/...` with the same filename,
  or add a new one and point a card's `pdf:` field at it.

## 6. What's already working
- Fully responsive (phone/tablet/desktop), with a mobile menu.
- Every project card links to its real PDF report — opens in a new tab.
- Every internship/certification links to its real certificate PDF.
- Contact section has your real email and LinkedIn, plus the form above.
- Keyboard-focus states and reduced-motion support for accessibility.
