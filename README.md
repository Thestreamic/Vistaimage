# Vista Image Studio — marketing site

Public site for Vista Image Studio. The editor itself stays at
[vistaimagestudio.thestreamic.in](https://vistaimagestudio.thestreamic.in).

Until `vistaimage.thestreamic.in` is pointed at GitHub in Cloudflare, this
repo publishes to GitHub Pages:

https://thestreamic.github.io/Vistaimage/

`CNAME` is intentionally not in this repo. Adding it before the DNS record
exists makes GitHub redirect the Pages URL to a domain that does not resolve.
When Cloudflare is ready, copy `CNAME.example` to `CNAME`, set the canonical
and `og:url` in `index.html` to `https://vistaimage.thestreamic.in`, and add a
CNAME record for `vistaimage` pointing at `thestreamic.github.io`.

## What is wired

- Every "Open the app" / "Try it free" / "Launch" control goes to the live editor.
- Footer EULA, Privacy, and third-party notices open the app's legal pages.
- Windows download stays on the GitHub releases page and reads "coming soon"
  until [Thestreamic/VistaImageStudio](https://github.com/Thestreamic/VistaImageStudio/releases)
  has a release asset whose name ends in `.exe`. After that, the same buttons
  download that installer.

## Files

- `index.html` — the whole page. CSS, script, screenshots, and clips are inlined.
- `media/` — the original images and clips, kept here so a later edit can swap
  a file without hunting through the Pictures folder. The live page does not
  request them.
- `.nojekyll` — serve the files as-is.
- `.github/workflows/pages.yml` — publish the repository root on every push to `main`.

## Deploy

1. Push `main`.
2. In the repo, open Settings → Pages and set Source to GitHub Actions if it is not already.
3. The first run publishes https://thestreamic.github.io/Vistaimage/
