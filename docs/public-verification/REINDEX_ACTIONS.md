# Search Engine Reindexing & Crawler Verification

## 1. Google Search Console
1. Log in to [Google Search Console](https://search.google.com/search-console).
2. Select property `https://www.a76labs.online`.
3. Submit updated sitemap: `https://www.a76labs.online/sitemap.xml`.
4. Use **URL Inspection** on:
   - `https://www.a76labs.online/`
   - `https://www.a76labs.online/about`
   - `https://www.a76labs.online/products/dompet-pintar`
   - `https://www.a76labs.online/updates`
5. Click **Request Indexing** to refresh cached snippets that previously indexed "Independent Product Lab".

## 2. Bing Webmaster Tools
1. Log in to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Submit sitemap `https://www.a76labs.online/sitemap.xml`.
3. Use URL submission tool for immediate recrawl.

## 3. Crawler Verification Checklist
- [x] `robots.txt` allows `ClaudeBot` and `anthropic-ai`.
- [x] `sitemap.xml` includes all 14 canonical public pages with valid `lastmod`.
- [x] Canonical tags specify `https://www.a76labs.online`.
- [x] OpenGraph cards generated dynamically via Edge runtime with no errors.
