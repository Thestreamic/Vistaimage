# Vista Image Studio — marketing site

Public site for Vista Image Studio. The editor itself stays at
[vistaimagestudio.thestreamic.in](https://vistaimagestudio.thestreamic.in).

The public site is [vistaimage.thestreamic.in](https://vistaimage.thestreamic.in).
`CNAME` is in the repo root so GitHub Pages keeps that custom domain on every
deploy. DNS for `vistaimage` should be a CNAME to `thestreamic.github.io`.

## What is wired

- Every "Open the app" / "Try it free" / "Launch" control goes to the live editor.
- Footer EULA, Privacy, and third-party notices open the app's legal pages.
- Windows download stays on the GitHub releases page and reads "coming soon"
  until [Thestreamic/VistaImageStudio](https://github.com/Thestreamic/VistaImageStudio/releases)
  has a release asset whose name ends in `.exe`. After that, the same buttons
  download that installer.

## Files

- `index.html` — the whole page. CSS, script, screenshots, and clips are inlined.
- `media/` — hero clip, Optimize before/after stills, and the original shots.
- `.nojekyll` — serve the files as-is.
- `.github/workflows/pages.yml` — publish the repository root on every push to `main`.

## Deploy

1. Push `main`.
2. In the repo, open Settings → Pages and set Source to GitHub Actions if it is not already.
3. The site is published at https://vistaimage.thestreamic.in/
