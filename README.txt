Image slots:

  FILLED
  banner.jpg      — homepage hero background (108KB)
  about.jpg       — About section's Our Approach / Our Values media block (89KB)
  mission.jpg     — Mission & Vision page intro band (148KB)
  products.jpg    — Products page intro band (106KB)
  logo.png        — header logo, 128px (brand mark, not a photo slot)

  OPEN — placeholder gradients until you add real headshots
  board-1.jpg     — Meenal Kulkarni (Chairperson & MD)
  board-2.jpg     — Arvind Deshmukh (Whole-time Director, Manufacturing)
  board-3.jpg     — Sanjana Rao (Independent Director)
  board-4.jpg     — Rajiv Nair (Independent Director)
  board-5.jpg     — Thomas Verghese (Independent Director)
  board-6.jpg     — Priyanka Bhatt (Company Secretary)

  investors.jpg   — Investors page intro band (140KB, bright empty boardroom)

All referenced from styles.css (section 1, Variables) as --banner-img,
--about-img, --mission-img, --products-img, --investors-img, and
--board-1-img through --board-6-img. All paths are plain
url("images/....jpg"), since styles.css sits at the project root alongside
index.html, not in a subfolder.

All six photo slots are now filled (board member headshots are the only
remaining open ones, still gradient placeholders).

To fill the six board photo slots: drop board-1.jpg through board-6.jpg in
here (numbered in page order — see the mapping above), then update each
--board-N-img variable in styles.css from its gradient placeholder to
url("images/board-N.jpg").

These display as 72px circles, so square, centered headshots crop best —
a tight head-and-shoulders crop works better than a wide environmental
portrait. Keep each under 150KB, and keep the six as visually consistent
with each other as you can (similar lighting, similar framing, ideally
from the same photo set) — six headshots in six different styles will
look more like a stock-photo grab-bag than a real leadership team.
