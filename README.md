# Sungwon Yoon, Ph.D. · Personal Website

**Live site:** https://syoon14.github.io/syoon_portfolio/

I'm a Ph.D. experimental chemist in organometallic, inorganic, and materials chemistry, currently a Postdoctoral Appointee at Argonne National Laboratory. I take compounds from multistep synthesis and purification through full characterization, and I design compound series and run kinetic and spectroscopic studies to explain, predict, and optimize molecular properties.

This repository holds the source for my personal website.

## Highlights

- **13 peer-reviewed papers (6 first-author)**, including a first-author paper in the *Journal of the American Chemical Society* (2024) and a first-author *Chem. Commun.* Feature Article
- **Deep-red phosphors** with quantum yields up to 0.5, from cyclometalated Ir(III) and Pt(II) complexes designed during my Ph.D.
- **Current work:** Cu(I) HETPHEN complexes on ZnO quantum dots, studying how molecular structure controls the direction of interfacial charge transfer
- **Research across** a university, two U.S. national laboratories (Argonne and Sandia), and industry R&D (Li-ion electrode formulation at Nanotech Energy)
- **Ph.D. in Chemistry**, University of Houston (2024) · **B.S. in Chemistry** (with Honors), California State University, Chico (2018)

## What's on the site

| Section | Contents |
|---|---|
| Skills | Synthesis & purification, kinetics & spectroscopy, characterization, data & tools |
| Experience | Argonne, University of Houston, Nanotech Energy, CSU Chico, Sandia, plus education |
| Research projects | Cu(I) chromophores on ZnO quantum dots, deep-red to near-infrared phosphors, earlier materials work |
| Publications | All 14 publications with DOI links and a first-author filter |
| Presentations & awards | Selected talks and posters, fellowships and awards |
| Contact | Email, Google Scholar, and a downloadable resume (PDF) |

## Built with

Plain HTML, CSS, and JavaScript: no frameworks and no build step. The site has a light theme and a neon dark theme, works on phones, tablets, and desktops, and is hosted with GitHub Pages.

## Repository contents

| File | Purpose |
|---|---|
| `index.html` | All page content |
| `styles.css` | Layout, colors, light and dark themes |
| `main.js` | Theme toggle, mobile menu, section highlighting, publication numbering and filter |
| `Sungwon_Yoon_Resume.pdf` | Public resume (contact details limited to email) |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |
| `.gitignore` | Keeps private files (other resumes, drafts, system files) out of the repository |

## Contact

- Email: swyoon6@gmail.com
- Google Scholar: https://scholar.google.com/citations?user=PnmH8BoAAAAJ&hl=en

---

## Maintaining the site

**Preview locally:** from this folder run `python -m http.server 8080` and open http://localhost:8080 (or just open `index.html`).

**Add a publication:** in `index.html`, copy one `<li>` inside `<ol class="pubs">`, paste it at the top (newest first), then set `data-year`, set `data-first="true"` if first author, and replace the title, authors, journal line, and DOI link. Update the filter counts (`All 14`, `First-author 6`) and the spec-sheet numbers if needed. Paper numbers are assigned automatically.

**Add a photo:** put `photo.jpg` in this folder and add `<img src="photo.jpg" alt="Sungwon Yoon" width="96" height="96" style="border-radius:50%;margin-bottom:20px">` just above `<p class="eyebrow mono">` in `index.html`.

**Add ORCID / LinkedIn:** fill in the commented-out rows in the Contact section of `index.html` and remove the `<!--` and `-->` around them.

**Update the resume:** save a public version (email only, no phone or home address) over `Sungwon_Yoon_Resume.pdf` with the same file name. Other PDFs in this folder are ignored by git on purpose.

**After editing `styles.css`:** bump the version in `<link rel="stylesheet" href="styles.css?v=4">` (v=5, v=6, …) so browsers load the new styles. Also update "Last updated …" in the sidebar when you make changes.

**Publish changes:** `git add .`, `git commit -m "Describe the change"`, `git push`. GitHub Pages updates within a minute or two.
