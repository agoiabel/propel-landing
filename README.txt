Propel website – static build

Upload the CONTENTS of this folder to your web root (index.html must sit at the root).
No build step or server code required.

Clean URLs (no .html in the address bar)
  Links in the site point to /about, /how-it-works, /case-studies, /story?id=..., etc.
  - Apache: .htaccess (mod_rewrite) redirects /about.html -> /about and serves /about from about.html.
  - Netlify: _redirects does the same. Vercel: vercel.json (cleanUrls). Cloudflare Pages: strips .html automatically.
  - Nginx: paste nginx-snippet.conf into your server block.
  Delete the config files for hosts you are not using (they are harmless if left in place).

Pages
  index.html, how-it-works, solutions, solution-* (6), ecosystem, case-studies, story?id=<slug> (17 case studies),
  about, for-communities, contact, insights, article?id=<slug> (3), 404.html

Shared files (keep alongside the pages): site-header.dc.html, site-footer.dc.html, stat-tile.dc.html,
  support.js, site-data.js, communities-data.js, site-motion.js, image-slot.js, _ds/, assets/

Notes
  - Serve over http(s) from the web root; opening files from disk (file://) will not work.
  - Contact form posts to formsubmit.co -> businessteam@propel.io. The first submission triggers a one-time confirmation email to that address.
  - Community logos on the Ecosystem page load from the Cloudinary URLs in communities-data.js.
