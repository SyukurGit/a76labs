# Claude Startups Program — Application Package & Ground-Truth Copy

**Audit Date**: October 12, 2026  
**Applicant Entity**: A76LABS  
**Applicant Name**: Muhammad Syukur  
**Official Portal**: `https://platform.claude.com/offers/startups-application`  

> [!IMPORTANT]
> The copy below is tailored directly for the Claude Startups application form. It strictly reflects verified engineering facts, distinguishes between Claude Code (development tool) and Claude API (planned product integration), and avoids inflated claims of legal incorporation or venture funding.

---

## 1. Structured Field Mapping for Application Form

| Form Field Name | Exact Recommended Input | Notes & Guidance |
|---|---|---|
| **First Name** | `Muhammad` | Verified legal name |
| **Last Name** | `Syukur` | Verified legal name |
| **Work / Company Email** | `contact@a76labs.online` | **Mandatory**: Must match website domain |
| **Job Title** | `Founder & Lead Engineer` | Truthful dual role reflecting engineering leadership |
| **Company Name** | `A76LABS` | Canonical venture brand |
| **Company Website** | `https://www.a76labs.online` | Canonical production domain |
| **Country** | `Indonesia` | Operating jurisdiction |
| **City** | `Banda Aceh` | Operating base |
| **Industry / Category** | `Software` or `Internet & Web Services` or `Developer Tools` | Select closest available form dropdown option |
| **Month & Year You Incorporated** | `December 2025` *(with narrative clarification)* | **See Section 2 below for critical guidance** |
| **Latest Funding Round** | `Bootstrapped` or `Not yet raised` | Unfunded founder venture |
| **Outside funding in last 2 years?** | `No` | Accurately bootstrapped |
| **Investors** | *(leave blank)* | No outside capital |
| **LinkedIn Profile (Founder)** | `https://www.linkedin.com/in/[your-vanity-slug]` | Founder vanity profile URL |
| **Company LinkedIn URL** | *(optional / blank if not yet created)* | Optional company page |
| **Current Monthly AI Spend % on Anthropic** | *(Calculate using Section 3 formula)* | Founder to enter actual calculation |

---

## 2. Critical Guidance: "Month and Year You Incorporated" Field

### The Dilemma
The form historically uses the prompt label *"Month and year you incorporated"*. A76LABS is an early-stage, founder-led software venture operating independently without a formal legal incorporation certificate (e.g., PT or CV under Indonesian AHU registry).

### The Rule
**DO NOT fabricate a legal filing date or invent a corporate entity.**

### How to Answer:
1. **If the form enforces a date input (YYYY-MM)**:
   - Enter: **December 2025** (the verifiable public operating establishment date: domain registration `2025-12-16` and GitHub repository creation `2025-12-17`).
   - In the startup description / open-ended pitch text, explicitly include this disclaimer:
     > *"Note on Incorporation: A76LABS is an early-stage founder-led software venture established and operating publicly since December 2025. It currently operates independently as an unincorporated venture."*
2. **If the form allows a text explanation or is optional**:
   - Write: `December 2025 (Unincorporated founder-led venture)`
3. **If in doubt before submission**:
   - Contact Anthropic support via the Claude Console help widget with the following short question:
     > *"Hello Anthropic Team, I am applying for Claude for Startups as a bootstrapped founder. Our software venture has been actively operating and developing products since late 2025, but is currently unincorporated. Should I enter our project launch month (December 2025) in the 'Month and year you incorporated' field? Thank you!"*

---

## 3. Formula: Percentage of Monthly AI Spend with Anthropic

Anthropic asks: *"What percentage of your company's monthly AI spend is currently with Anthropic?"*

Do not guess this percentage. Use this exact formula based on your last 30 days of actual credit card or platform charges:

$$\text{Anthropic Spend \%} = \frac{\text{Monthly Anthropic Charges (Console API + Claude subscriptions)}}{\text{Total Monthly AI Tooling Charges (Anthropic + OpenAI + Cursor + other LLMs)}} \times 100$$

- **Example A**: If you spend $20/month on Claude Pro/Team and $0 on other AI platforms, enter **100%**.
- **Example B**: If you spend $20/month on Claude and $20/month on another assistant, enter **50%**.
- **Example C**: If you only use free tiers currently, enter **0%** and note in the support field: *"Currently operating on free/bootstrapped tiers; looking to transition primary API workflows to Anthropic."*

---

## 4. Narrative Form Answers (Ready to Copy-Paste)

### A. Short Pitch / One-Sentence Summary (< 250 characters)
**Character count**: ~235
```text
A76LABS is a founder-led software venture in Indonesia building practical digital products. Our flagship is Dompet Pintar, a live cashflow manager with web dashboard & Telegram bot. Led by founder & lead engineer Muhammad Syukur.
```

---

### B. Medium Description (< 500 characters)
**Character count**: ~465
```text
A76LABS is a founder-led software venture based in Banda Aceh, Indonesia, operating since late 2025. We build and operate our own digital products while developing practical web systems and software integrations. Our flagship product is Dompet Pintar (https://dompetpintar.a76labs.online), an active personal cashflow manager featuring a responsive web dashboard and conversational Telegram bot. All engineering is driven directly by founder Muhammad Syukur.
```

---

### C. Comprehensive Startup Description (< 1500 characters)
```text
Company Overview & Business Model:
A76LABS is a founder-led software venture based in Banda Aceh, Indonesia, operating since December 2025. We build and operate practical digital utilities while undertaking web-system development, software integrations, and application security research.

Flagship Product (Live & Verifiable):
Dompet Pintar (https://dompetpintar.a76labs.online) is our active personal cashflow management utility. It eliminates manual bookkeeping friction through a dual-channel architecture: rapid on-the-go expense capture via a conversational Telegram bot (@DompetPintar_A76Labs_Bot), paired with a Next.js web dashboard for multi-account ledgering, category management, and date-filtered Excel financial statement exports. Built with Next.js, Go/Gin, and SQLite/Turso.

Engineering Leadership & Track Record:
All technical architecture and product engineering are led directly by founder Muhammad Syukur, S.Kom. The founder brings hands-on production engineering experience building and maintaining operational institutional portals for Universitas Islam Negeri Ar-Raniry (independently verifiable via the active developer watermark "Developed by syukur.dev" on the production footer of https://en.pps.ar-raniry.ac.id) and completed thesis research in Least Privilege / JIT access control.

Operating Status:
Bootstrapped, founder-led, operating since late 2025 as an unincorporated venture.
```

---

### D. Specific Field: "What are you building on Claude?" / "How do you plan to use the Claude API?"
```text
Current Workflow:
We currently use Claude Code CLI daily as our primary AI-assisted engineering companion for codebase navigation, refactoring Go backend APIs, synthesizing unit tests, and designing Next.js frontend components with strict developer review.

Planned Product Integration:
We are developing an intelligent transaction parsing module for Dompet Pintar powered by the Claude API (Claude 3.5 Haiku and Sonnet). The integration will:
1. Parse unstructured conversational chat entries and mixed language expense descriptions sent via Telegram into normalized ledger transactions (amount, category, merchant, timestamp).
2. Extract line items from uploaded receipt photos directly into structured expense summaries with deterministic schema validation.

Why Anthropic:
Claude's superior reasoning, precise structured JSON output adherence, and tool use make it the optimal foundation for reliable, hallucination-resistant personal bookkeeping intelligence.
```

---

### E. Specific Field: "Where do you want support from Anthropic?" (< 500 characters)
```text
We seek API credit support and higher rate limits to build and stress-test our Claude 3.5 Haiku/Sonnet transaction parsing engine for Dompet Pintar without burning through early bootstrapped runway. We also value participation in Applied AI office hours and architecture guidance to ensure our agentic schema extraction workflows follow production-grade latency and validation best practices.
```

---

## 5. Reviewer Verification Guide to Include in Your Submission
Provide this short verification summary if an open text box is available:
- **Primary Website**: https://www.a76labs.online
- **Flagship Application**: https://dompetpintar.a76labs.online
- **Founder Profile**: https://syukur.dev (references A76LABS and Dompet Pintar)
- **Founder GitHub**: https://github.com/SyukurGit
- **Institutional Proof**: Root footer of state university portal https://en.pps.ar-raniry.ac.id (active developer watermark "Developed by syukur.dev")
- **Official Contact**: contact@a76labs.online
