# Design System & UI/UX Specification (`design.md`) — v2.0
## Gurveender Jeet Kaur — Portfolio Design Architecture

---

### 1. Aesthetic Direction: "High-Caliber Engineering & Product Craft"
Terinspirasi dari pendekatan `aminhamzah.com` (terstruktur rapi, zero-fluff, fokus pada breakdown teknis dan kredibilitas industri), namun dielevasi dengan sentuhan **Product Craft Modern (ala Linear / Vercel)**:
- **Clean Whitespace & Strict Grid**: Memudahkan recruiter melakukan scanning informasi dalam hitungan detik.
- **Role Lens Interaction**: Memungkinkan transisi mulus antara persona **Product Manager**, **Quality Assurance**, dan **Full-Stack Developer**.
- **External Asset Badges**: Integrasi visual yang membedakan dokumen strategis (**Google Drive / Notion**) dan artefak teknis (**GitHub / Playwright / Postman**).

---

### 2. Design Tokens & Color System

#### A. Surface & Background (Theme: Deep Obsidian)
- **Canvas Base**: `#090A0E` (Obsidian Charcoal)
- **Container / Card Surface**: `#11141B` (Rich dark slate)
- **Elevated Hover Surface**: `#181D26`
- **Subtle Borders**: `rgba(255, 255, 255, 0.08)` (Halus, berkelas)
- **Active Card Border**: `rgba(255, 255, 255, 0.2)`

#### B. Semantic Accents by Role
- **PM Accent (Strategy & Vision)**:
  - Color: `#6366F1` (Indigo 500)
  - Glow: `rgba(99, 102, 241, 0.15)`
  - Badge: `bg-indigo-500/10 text-indigo-400 border-indigo-500/20`
- **QA Accent (Reliability, Pass, Green Check)**:
  - Color: `#10B981` (Emerald 500)
  - Glow: `rgba(16, 185, 129, 0.15)`
  - Badge: `bg-emerald-500/10 text-emerald-400 border-emerald-500/20`
- **Tech / Full-Stack Accent**:
  - Color: `#06B6D4` (Cyan 500) / `#38BDF8` (Sky 400)
  - Badge: `bg-cyan-500/10 text-cyan-400 border-cyan-500/20`

#### C. Typography
- **Primary Sans**: `Inter` / `Geist` (Modern, readable, sleek tracking)
- **Monospace Code/Data**: `Geist Mono` / `JetBrains Mono` (Untuk test case metrics, API response, status tags, dan timeline dates).

---

### 3. Component Architecture & Interactive Elements

#### 3.1. Floating Navbar with Dynamic Perspective Switcher
- **Left**: Gurveender J. Kaur (`GJK.` minimalist monogram).
- **Center**: Interactive Role Lens (Segmented Pill Switcher):
  ```
  [ ✨ All / Synergy ]  [ 🎯 PM View ]  [ 🛡️ QA View ]  [ 💻 Full-Stack ]
  ```
  *Ketika berpindah lens, card yang paling relevan diberi spotlight visual dan tag prioritas menyesuaikan.*
- **Right**: Quick Contact button (`Email`, `LinkedIn`, `Resume`).

#### 3.2. Hero Section: "The Quality-Obsessed Product Builder"
- **Status Indicator**:
  `● Open to PM & QA Opportunities | Based in Yogyakarta, ID`
- **Display Title**:
  **Gurveender Jeet Kaur**
  *Software Engineering @ UGM (GPA 3.81/4.00)*
- **Impact Statement**:
  Membawa rigor Quality Assurance dan fondasi Full-Stack ke dalam siklus Product Management—memastikan produk yang dibangun tepat sasaran, berorientasi pengguna, dan tahan uji teknis.
- **Proof Strip (Quick Metrics)**:
  ```
  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
  │      3.81        │ │     101          │ │      92/100      │ │      5+          │
  │ UGM Engineering  │ │ Test Cases       │ │ PM Monitoring    │ │ Software Prod.   │
  │ GPA              │ │ Designed (SIT)   │ │ Score (Mahreen)  │ │ Shipped          │
  └──────────────────┘ └──────────────────┘ └──────────────────┘ └──────────────────┘
  ```

#### 3.3. Dual-Lens Project Bento Cards (Anti-Basic Showcase)
Tiap card proyek menyajikan tab interaktif di dalam kartu:

1. **Tentang Dental (Clinic Mobile App — PM & QA Automation)**
   - *Tab PM*: Stakeholder interview dengan manajemen klinik, SRS, UAT planning, sprint delegation.
   - *Tab QA*: Skenario upload X-ray (file format validation, upload failure retry), kolaborasi test automation dengan tim.
   - *Action Badges*: `[ 📄 View SRS & UAT on Drive ]`, `[ ⌥ View GitHub Repo ]`.

2. **SIMATKUL (Course Scheduling System — QA Lead)**
   - *Tab QA Rigor*: 43 manual test cases, 58 API Swagger test cases di Postman, conflict detection logic validation.
   - *Tab Automation & Tooling*: Playwright Page Object Model (POM), dynamic QA dashboard di Google Sheets (Google Apps Script).
   - *Action Badges*: `[ ⚡ Playwright & Postman Repo ]`, `[ 📊 QA Dashboard on Drive ]`.

3. **Panenin UGM (Agritech Marketplace — PM)**
   - *Tab Discovery & Strategy*: Problem validation petani & pembeli, PRD, backlog grooming di Notion/Jira.
   - *Action Badges*: `[ 📄 PRD on Google Drive / Notion ]`.

4. **AIS UGM (Academic Information System — PM)**
   - *Tab Modeling & Specs*: BRD, MVP scoping, C4 architectural model, UML sequence & use-case diagrams.
   - *Action Badges*: `[ 📐 C4 & SRS on Google Drive ]`.

5. **Full-Stack & Teaching Practicum (Software Dev & TA)**
   - *Tab Tech Craft*: Python & Kotlin practicum modules, Laravel RESTful APIs, React Native prototypes.
   - *Action Badges*: `[ 💻 GitHub Repositories ]`.

#### 3.4. 4-Layer Workflow Breakdown (The Amin Hamzah Inspired Section)
Mengadopsi pembedahan alur terstruktur yang sangat disukai recruiter teknis:
- **Layer 1 — Discovery & PRD (PM)**: Business requirements (BRD), user stories, Gherkin acceptance criteria (Given-When-Then).
- **Layer 2 — Edge Case & Architecture Review (QA + PM)**: Validasi desain sebelum koding; C4 architectural modeling, boundary value analysis.
- **Layer 3 — Execution & Deep Validation (QA + Tech)**: Postman API integration testing, Playwright UI automation, SQL data integrity checks.
- **Layer 4 — Delivery, Telemetry & UAT (PM + QA)**: UAT sign-off bersama stakeholder, QA sprint reporting, and product release confidence.

#### 3.5. Professional Timeline
- **Sep 2026 – Dec 2026**: Quality Assurance Intern — *PT Kreasi Bali Sasmita Nusantara*
- **Jun 2026 – Aug 2026**: Project Management Intern — *PT Mahreen Indonesia Group*
- **Aug 2026 – Dec 2026**: Teaching Assistant, Mobile & Geospatial Programming (Kotlin) — *UGM*
- **Feb 2026 – Jun 2026**: Teaching Assistant, Data Structures (Python) — *UGM*
- **Dec 2025 – Jun 2026**: Hustler, Google Developer Groups on Campus (GDGoC) UGM
- **Certifications**: Siemens Mobility PM (Forage), IBM PM Fundamentals, Mahreen Intern Batch 1.

---

### 4. Interactive Details & Polish
- **Direct Drive & Notion Links**: Modal preview atau direct external pill dengan icon Google Drive dan Notion untuk dokumen PM.
- **GitHub Direct Links**: Pill GitHub dengan branch / test script previews.
- **Interactive Checklist / Test Runner Simulation**: Widget kecil yang menampilkan real-time test runner `PASS: Simatkul Schedule Conflict Test - 0ms` untuk memberi rasa portofolio yang hidup dan berkarakter.
- **Copy Email with Toast Notification**: Klik 1x langsung menyalin `gurveenderjeetkaur@gmail.com` ke clipboard.
