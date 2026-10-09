# Action Item: Founder Profile Alignment (syukur.dev)

## Context
A third-party reviewer (such as Anthropic) verifying A76LABS will cross-reference the founder profile.
Currently, `https://syukur.dev` functions as a personal developer portfolio without mentioning A76LABS, and its LinkedIn link points to the generic homepage `https://www.linkedin.com/`.

## Required Modifications for syukur.dev

### 1. Headline & Hero Positioning
- **Current**: "Lulusan Teknologi Informasi yang berfokus pada backend, keamanan aplikasi, dan web" / "Backend Developer"
- **Updated Recommended Copy**:
  > **Muhammad Syukur**  
  > **Founder & Lead Engineer, A76LABS** · Backend & Systems Engineer (S.Kom.)  
  > Building practical software products and operational web platforms from Banda Aceh, Indonesia.

### 2. Bidirectional Company Backlink
Add a prominent badge or header link to A76LABS:
```html
<div class="company-affiliation">
  <span>Founder & Operator of </span>
  <a href="https://www.a76labs.online" target="_blank" rel="noopener noreferrer">
    <strong>A76LABS</strong> ↗
  </a>
</div>
```

### 3. Canonical Product Demarcation
Under your featured projects, position **Dompet Pintar** as an A76LABS product:
- **Title**: Dompet Pintar (by A76LABS)
- **Role**: Founder & Full-stack Engineer
- **Status**: Live (https://dompetpintar.a76labs.online)
- **Description**: Personal cashflow management system with web dashboard and Telegram bot logging.
- **Repository / Note**: Formerly codenamed MoneyBot during early API development.

### 4. Separate Institutional Client Work
Keep Pascasarjana UIN Ar-Raniry and UPT Perpustakaan, but label clearly:
- **Category**: Institutional Client Systems (UIN Ar-Raniry)
- **Role**: Primary Backend Developer / Integration Engineer

### 5. Fix Social Links
- Replace `href="https://www.linkedin.com/"` with your actual LinkedIn vanity URL (e.g. `https://www.linkedin.com/in/muhammad-syukur-...`).
- Ensure GitHub links to `https://github.com/SyukurGit`.
- Add official company email: `founder@a76labs.online`.
