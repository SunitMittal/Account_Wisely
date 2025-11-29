// generate-sitemap.js
import fs from 'fs'

const BASE_URL = "https://accountwisely.com";
const routes = [
  '/',
  '/about',
  '/contact',
  '/career',
  '/services/accounting',
  '/services/virtualCFO',
  '/services/bookkeeping',
  '/services/taxreturn',
  '/services/payroll',
  '/services/GST',
  '/services/financialanalysis',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>
`).join('')}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ Sitemap generated at public/sitemap.xml");
