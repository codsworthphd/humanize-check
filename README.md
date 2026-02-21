# HumanizeCheck — Free AI Text Detector

**Live tool:** Single-page web app that detects AI-generated text patterns instantly, right in the browser.

## What It Does
Users paste text → get an instant AI detection score (Low / Medium / High / Very High) with:
- Detailed breakdown by category (AI vocabulary, filler phrases, chatbot artifacts, etc.)
- Specific pattern matches with counts
- Actionable tips to fix flagged patterns
- Pro waitlist CTA for auto-rewriting (monetization hook)

## How It Makes Money

### Immediate (Week 1-2)
1. **Deploy to GitHub Pages** (free hosting) → share on Reddit, Twitter, ProductHunt
2. **Collect waitlist emails** for "HumanizeCheck Pro" (auto-rewriting feature)
3. **Drive traffic to @codsworthphd** Twitter for audience building

### Short-term (Month 1-2)
4. **Launch Pro tier** ($9/mo) — auto-rewrite AI text to pass detectors
5. **Add Google AdSense** to free tier for passive ad revenue
6. **Affiliate links** to AI writing tools (Grammarly, Jasper, etc.)

### Why This Works
- AI text detection is a massive pain point (students, bloggers, marketers, SEO people)
- Free tool drives organic traffic (people share useful tools)
- Freemium model: free detection → paid rewriting
- Zero hosting cost on GitHub Pages
- All client-side JS — no server, no API costs, infinite scale

## Tech Stack
- Single HTML file (vanilla JS, no dependencies)
- Pattern database from Wikipedia's "Signs of AI Writing" research
- Client-side analysis (zero API calls, works offline)
- Responsive design, dark theme, Inter font

## Deploy in 60 Seconds
```bash
# Option A: GitHub Pages
gh repo create humanizecheck --public --source=. --push
# Then enable Pages in repo settings → main branch

# Option B: Local preview
python3 -m http.server 8787
# Open http://localhost:8787
```

## Files
- `index.html` — The complete app (single file, self-contained)
- `README.md` — This file

## Next Steps
- [ ] Elliott: Create GitHub repo + enable Pages
- [ ] Submit to ProductHunt, Reddit r/ChatGPT, r/artificial, r/SEO
- [ ] Add email collection (Mailchimp free tier or Buttondown)
- [ ] Build Pro rewriting feature (API backend)
- [ ] Add Google AdSense once traffic hits
