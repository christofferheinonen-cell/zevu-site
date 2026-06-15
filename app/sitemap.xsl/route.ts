export const dynamic = 'force-static'

const STYLESHEET = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="fi">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Zevu — Sivustokartta</title>
        <style>
          :root{--bg:#F3F4F6;--white:#fff;--text:#09090F;--sub:#5C6578;--border:#DDE1E9;--blue:#2563EB;--dark:#0C1121;}
          *{box-sizing:border-box;}
          body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;line-height:1.5;}
          .wrap{max-width:980px;margin:0 auto;padding:48px 20px 80px;}
          header{margin-bottom:28px;}
          .brand{display:inline-flex;align-items:center;gap:10px;font-size:22px;font-weight:800;letter-spacing:-.5px;color:var(--dark);text-decoration:none;}
          .dot{width:14px;height:14px;border-radius:5px;background:var(--blue);}
          h1{font-size:30px;font-weight:800;letter-spacing:-1px;margin:22px 0 6px;}
          .lead{color:var(--sub);margin:0;font-size:15px;}
          .count{display:inline-block;margin-top:18px;background:var(--white);border:1px solid var(--border);border-radius:100px;padding:6px 16px;font-size:13px;font-weight:600;color:var(--sub);}
          .card{margin-top:22px;background:var(--white);border:1px solid var(--border);border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.05),0 4px 16px rgba(0,0,0,.05);}
          table{width:100%;border-collapse:collapse;font-size:14px;}
          th{text-align:left;background:#fafbfc;color:var(--sub);font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.4px;padding:14px 18px;border-bottom:1px solid var(--border);}
          td{padding:13px 18px;border-bottom:1px solid var(--border);vertical-align:top;}
          tr:last-child td{border-bottom:none;}
          tr:hover td{background:#fafbfc;}
          a.url{color:var(--blue);text-decoration:none;font-weight:500;word-break:break-all;}
          a.url:hover{text-decoration:underline;}
          .muted{color:var(--sub);white-space:nowrap;}
          .num{text-align:right;white-space:nowrap;color:var(--text);font-variant-numeric:tabular-nums;}
          footer{margin-top:26px;color:var(--sub);font-size:13px;}
          footer a{color:var(--sub);}
          @media(max-width:640px){.hide-sm{display:none;}h1{font-size:24px;}}
        </style>
      </head>
      <body>
        <div class="wrap">
          <header>
            <a class="brand" href="/"><span class="dot"></span>Zevu</a>
            <h1>XML-sivustokartta</h1>
            <p class="lead">Tämä sivu on tarkoitettu hakukoneille (Google, Bing). Alla kaikki sivuston indeksoitavat osoitteet.</p>
            <span class="count"><xsl:value-of select="count(s:urlset/s:url)"/> osoitetta</span>
          </header>
          <div class="card">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th class="num">Prioriteetti</th>
                  <th class="hide-sm">Päivitystiheys</th>
                  <th class="hide-sm">Muokattu</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td><a class="url" href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                    <td class="num"><xsl:value-of select="s:priority"/></td>
                    <td class="hide-sm muted"><xsl:value-of select="s:changefreq"/></td>
                    <td class="hide-sm muted"><xsl:value-of select="substring(s:lastmod,1,10)"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          <footer>Luotu automaattisesti · <a href="https://www.zevu.cc">www.zevu.cc</a></footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`

export function GET() {
  return new Response(STYLESHEET, {
    headers: {
      'Content-Type': 'text/xsl; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  })
}
