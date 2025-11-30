// generate-sitemap.js
import fs from "fs";

const BASE_URL = "https://accountwisely.com";
const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/career", priority: "0.8", changefreq: "weekly" },
  { path: "/services/accounting", priority: "0.9", changefreq: "monthly" },
  { path: "/services/virtualCFO", priority: "0.9", changefreq: "monthly" },
  { path: "/services/taxreturn", priority: "0.9", changefreq: "monthly" },
  { path: "/services/payroll", priority: "0.9", changefreq: "monthly" },
  { path: "/services/gst", priority: "0.9", changefreq: "monthly" },
  {
    path: "/services/financialanalysis",
    priority: "0.9",
    changefreq: "monthly",
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ Sitemap generated at public/sitemap.xml");
