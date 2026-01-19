# FNE International Website Sitemap & Content Plan

**Version:** 1.0
**Date:** January 18, 2026
**Status:** Draft - Pending Review

---

## Table of Contents

1. [Site Structure](#site-structure)
2. [Page Descriptions](#page-descriptions)
3. [Content Types](#content-types)
4. [Navigation](#navigation)
5. [User Journeys](#user-journeys)
6. [Content Audit Questions](#content-audit-questions)
7. [Technical Notes](#technical-notes)

---

## Site Structure

### Visual Sitemap

```
fneinternational.org
│
├── HOME
│
├── ABOUT
│   ├── /about ─────────────────── Our Story
│   ├── /about/team ────────────── Our Team
│   ├── /about/approach ────────── Our Approach (FNE Philosophy)
│   └── /about/financials ──────── Financials & Transparency
│
├── PROGRAMS
│   ├── /programs ──────────────── Programs Overview
│   ├── /programs/nicaragua ────── Nicaragua Hub
│   │   ├── /programs/nicaragua/education
│   │   ├── /programs/nicaragua/health
│   │   └── /programs/nicaragua/housing
│   ├── /programs/peru ─────────── Peru Hub
│   └── /programs/dominican-republic ── Dominican Republic Hub
│
├── GET INVOLVED
│   ├── /get-involved ──────────── Overview
│   ├── /get-involved/trips ────── Volunteer Trips
│   ├── /get-involved/remote ───── Remote Volunteering
│   ├── /get-involved/internships ─ Internship Program
│   └── /get-involved/partners ─── Partner With Us
│
├── THE HOPE COLLECTIVE
│   └── /hope-collective ───────── Monthly Giving Program
│
├── DONATE
│   └── /donate ────────────────── Donation Page (GiveLively)
│
├── BLOG
│   ├── /blog ──────────────────── All Posts
│   ├── /blog/category/[slug] ──── Category Archive
│   └── /blog/[slug] ───────────── Individual Post
│
├── CONTACT
│   └── /contact ───────────────── Contact Page
│
└── UTILITY PAGES
    ├── /privacy ───────────────── Privacy Policy
    ├── /terms ─────────────────── Terms of Service
    └── /sponsor-a-child ───────── Child Sponsorship (redirect or page?)
```

---

## Page Descriptions

### Homepage (`/`)

**Purpose:** First impression, communicate mission, drive action

| Section | Content |
|---------|---------|
| Hero | Mission statement, compelling image, primary CTA |
| Impact Stats | Key numbers (lives impacted, volunteers, projects) |
| Programs Overview | Cards for each country/focus area |
| Featured Story | Recent blog post or testimonial |
| Hope Collective CTA | Monthly giving promotion |
| Upcoming Trips | Next 2-3 volunteer opportunities |
| Partners/Supporters | Logo grid (optional) |

**Primary CTAs:**
- Donate
- Join Hope Collective
- View Volunteer Trips

---

### About Section

#### Our Story (`/about`)

**Purpose:** Build trust, explain history and mission

| Content |
|---------|
| Founding story (Michael Cipoletti, 2011) |
| Mission statement |
| Vision statement |
| Core values |
| Timeline of key milestones |
| Photo gallery |

---

#### Our Team (`/about/team`)

**Purpose:** Humanize the organization, build credibility

| Content |
|---------|
| Executive Director |
| Staff members |
| Board of Directors |
| Country Directors |
| Key advisors (optional) |

**Display:** Photo, name, title, short bio, optional contact

---

#### Our Approach (`/about/approach`)

**Purpose:** Explain the FNE methodology

| Content |
|---------|
| **Facilitate** - What this means |
| **Network** - Partnership philosophy |
| **Empower** - Community-led development |
| "Hand-in-hand, not hand-over-hand" explanation |
| Diagram or infographic |

---

#### Financials & Transparency (`/about/financials`)

**Purpose:** Satisfy donors, foundations, researchers

| Content |
|---------|
| Annual reports (downloadable PDFs) |
| Form 990s |
| Charity Navigator rating/badge |
| GuideStar Seal |
| Breakdown of fund usage (pie chart) |
| EIN: 27-1792140 |

---

### Programs Section

#### Programs Overview (`/programs`)

**Purpose:** Show breadth of work, direct to specific areas

| Content |
|---------|
| Introduction to program areas |
| Country cards (Nicaragua, Peru, DR) |
| Focus area cards (Education, Health, Housing, Agriculture) |
| Overall impact statistics |

---

#### Country Pages (`/programs/[country]`)

**Purpose:** Deep dive into work in each country

| Content |
|---------|
| Country overview |
| Active programs list |
| Local partners |
| Impact stats specific to country |
| Photo gallery |
| Related blog posts |
| CTA: Support this country's programs |

**Countries:**
- Nicaragua (primary, most content)
- Peru
- Dominican Republic

---

#### Program Detail Pages (`/programs/[country]/[program]`)

**Purpose:** Specific program information

| Content |
|---------|
| Program name and description |
| Problem being addressed |
| FNE's approach |
| Impact metrics |
| Beneficiary stories |
| Photo/video gallery |
| How to support |

**Known Programs:**
- Niño Feliz School (Nicaragua - Education)
- SPTLN / Health for All Children (Nicaragua - Health)
- Fundación Juanita Scholarships (Nicaragua - Education)
- Housing & Latrine Construction (Nicaragua - Infrastructure)
- Medical Brigades (Multi-country - Health)

---

### Get Involved Section

#### Overview (`/get-involved`)

**Purpose:** Show all ways to participate

| Content |
|---------|
| Volunteer trips |
| Remote volunteering |
| Internships |
| Corporate partnerships |
| In-kind donations |

---

#### Volunteer Trips (`/get-involved/trips`)

**Purpose:** Promote and fill service trips

| Content |
|---------|
| Upcoming trips calendar/list |
| What to expect |
| Trip costs and what's included |
| Age requirements (14+ groups, 18+ individuals) |
| Testimonials from past volunteers |
| FAQ |
| Application/signup link |

---

#### Individual Trip Page (`/get-involved/trips/[trip-slug]`)

**Purpose:** Details for specific trip

| Content |
|---------|
| Trip title and dates |
| Location |
| Focus (construction, medical, education) |
| Detailed itinerary |
| Cost breakdown |
| What's included/not included |
| Signup button |
| Contact for questions |

---

#### Remote Volunteering (`/get-involved/remote`)

**Purpose:** Engage people who can't travel

| Content |
|---------|
| Available remote roles |
| Skills needed |
| Time commitment |
| Application process |

---

#### Internships (`/get-involved/internships`)

**Purpose:** Recruit interns

| Content |
|---------|
| Available positions |
| Requirements |
| What interns gain |
| How to apply |

---

#### Partner With Us (`/get-involved/partners`)

**Purpose:** Attract corporate and organizational partners

| Content |
|---------|
| Partnership opportunities |
| Current partners |
| Benefits of partnership |
| Contact for partnership inquiries |

---

### The Hope Collective (`/hope-collective`)

**Purpose:** Drive monthly recurring donations

| Content |
|---------|
| What is The Hope Collective |
| Why monthly giving matters |
| Giving levels and impact |
| Member benefits |
| Testimonials from current members |
| FAQ |
| Join CTA (links to GiveLively recurring) |

**Suggested Giving Levels:**

| Level | Amount | Impact |
|-------|--------|--------|
| Supporter | $10/month | School supplies for 2 children |
| Advocate | $25/month | Nutrition program for a family |
| Champion | $50/month | Sponsor a child's education |
| Ambassador | $100/month | Medical care for 10 children |
| Visionary | $250+/month | Transform a community |

*Note: Verify these amounts and impacts with FNE team*

---

### Donate (`/donate`)

**Purpose:** Accept donations

| Content |
|---------|
| GiveLively donation widget (embedded) |
| One-time and recurring options |
| Designation options (general, specific program, country) |
| Other ways to give (stock, crypto, DAF) |
| Tax deductibility statement |
| Contact for large gifts |

---

### Blog (`/blog`)

**Purpose:** Share stories, updates, build SEO

| Content |
|---------|
| Recent posts (paginated, 10 per page) |
| Category filters |
| Search (optional) |
| Featured/pinned post (optional) |

**Categories:**
- Stories (beneficiary and volunteer stories)
- Updates (organizational news)
- Events (trip recaps, fundraisers)
- Impact Reports

---

### Contact (`/contact`)

**Purpose:** Enable communication

| Content |
|---------|
| Contact form |
| Email: info@fneinternational.org |
| Phone: (617) 383-1956 |
| Mailing address: PO Box 890286, East Weymouth, MA 02189 |
| Social media links |
| For specific inquiries: |
|   - Trips: travel@fneinternational.org |
|   - Donations: (857) 205-0236 |

---

### Utility Pages

#### Privacy Policy (`/privacy`)
Standard privacy policy

#### Terms of Service (`/terms`)
Standard terms (if needed)

#### Sponsor a Child (`/sponsor-a-child`)
**Decision needed:** Is this separate from Hope Collective or redirect to it?

Current info: $50/month or $600/year

---

## Content Types

### 1. Page

Generic flexible page for static content.

| Field | Type | Required |
|-------|------|----------|
| title | Text | Yes |
| slug | Text | Yes |
| seo_title | Text | No |
| seo_description | Textarea | No |
| hero_image | Asset | No |
| hero_title | Text | No |
| hero_subtitle | Text | No |
| body | Blocks | Yes |

---

### 2. Blog Post

| Field | Type | Required |
|-------|------|----------|
| title | Text | Yes |
| slug | Text | Yes (auto-generate) |
| featured_image | Asset | Yes |
| excerpt | Textarea (150 chars) | Yes |
| author | Relation → Team Member | Yes |
| publish_date | Date | Yes |
| categories | Multi-select | Yes |
| content | Rich Text | Yes |
| related_programs | Relation → Program | No |
| featured | Boolean | No |

**Categories:** Stories, Updates, Events, Impact Reports

---

### 3. Program

| Field | Type | Required |
|-------|------|----------|
| name | Text | Yes |
| slug | Text | Yes |
| country | Select | Yes |
| category | Select | Yes |
| short_description | Textarea | Yes |
| full_description | Rich Text | Yes |
| featured_image | Asset | Yes |
| gallery | Multi-Asset | No |
| impact_stats | Repeatable Group | No |
| partners | Repeatable Group | No |
| is_active | Boolean | Yes |
| order | Number | No |

**Country options:** Nicaragua, Peru, Dominican Republic
**Category options:** Education, Health, Housing, Agriculture, Economic Development

---

### 4. Team Member

| Field | Type | Required |
|-------|------|----------|
| name | Text | Yes |
| slug | Text | Yes |
| role | Text | Yes |
| team_type | Select | Yes |
| photo | Asset | Yes |
| bio | Rich Text | Yes |
| email | Email | No |
| linkedin | URL | No |
| order | Number | No |

**Team type options:** Leadership, Staff, Board, Advisor, Country Director

---

### 5. Volunteer Trip

| Field | Type | Required |
|-------|------|----------|
| title | Text | Yes |
| slug | Text | Yes |
| country | Select | Yes |
| start_date | Date | Yes |
| end_date | Date | Yes |
| status | Select | Yes |
| focus_areas | Multi-select | Yes |
| short_description | Textarea | Yes |
| full_description | Rich Text | Yes |
| cost | Text | No |
| whats_included | Rich Text | No |
| featured_image | Asset | Yes |
| gallery | Multi-Asset | No |
| signup_url | URL | No |
| contact_email | Email | No |

**Status options:** Open, Full, Completed, Cancelled
**Focus areas:** Construction, Medical, Education, Agriculture, Mixed

---

### 6. Testimonial

| Field | Type | Required |
|-------|------|----------|
| quote | Textarea | Yes |
| person_name | Text | Yes |
| person_role | Text | Yes |
| photo | Asset | No |
| related_program | Relation → Program | No |
| related_trip | Relation → Trip | No |
| featured | Boolean | No |

---

### 7. Partner

| Field | Type | Required |
|-------|------|----------|
| name | Text | Yes |
| logo | Asset | Yes |
| website | URL | No |
| description | Textarea | No |
| partner_type | Select | Yes |

**Partner type options:** Corporate, Foundation, Nonprofit, Government, Individual

---

### 8. Impact Stat (Reusable Component)

| Field | Type | Required |
|-------|------|----------|
| number | Text | Yes |
| label | Text | Yes |
| icon | Select | No |

**Example:** "15,000+" / "Volunteer Hours"

---

## Navigation

### Primary Navigation (Header)

```
[LOGO]    About ▼    Programs ▼    Get Involved ▼    Blog    [DONATE BUTTON]

About dropdown:
├── Our Story
├── Our Team
├── Our Approach
└── Financials

Programs dropdown:
├── Overview
├── Nicaragua
├── Peru
└── Dominican Republic

Get Involved dropdown:
├── Volunteer Trips
├── Volunteer Remotely
├── Internships
└── Partner With Us
```

### Secondary Navigation (Utility)

```
Hope Collective    Contact    [Search Icon]
```

### Mobile Navigation

```
[LOGO]                    [DONATE]  [MENU ☰]

Menu opens full-screen:
├── About
│   ├── Our Story
│   ├── Our Team
│   ├── Our Approach
│   └── Financials
├── Programs
│   ├── Overview
│   ├── Nicaragua
│   ├── Peru
│   └── Dominican Republic
├── Get Involved
│   ├── Volunteer Trips
│   ├── Volunteer Remotely
│   ├── Internships
│   └── Partner With Us
├── Hope Collective
├── Blog
├── Contact
└── DONATE
```

### Footer

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [LOGO]                                                             │
│                                                                     │
│  FNE International partners with communities in developing          │
│  nations to advance housing, health, and education.                 │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ABOUT           PROGRAMS        GET INVOLVED      CONNECT          │
│  Our Story       Nicaragua       Volunteer Trips   Newsletter _____ │
│  Our Team        Peru            Remote            [Subscribe]      │
│  Our Approach    Dominican Rep   Internships                        │
│  Financials                      Partners          Follow Us        │
│                                                    [f] [in] [ig] [x]│
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  501(c)(3) Nonprofit | EIN: 27-1792140                             │
│  PO Box 890286, East Weymouth, MA 02189                            │
│  info@fneinternational.org | (617) 383-1956                        │
│                                                                     │
│  Privacy Policy  |  Terms  |  © 2026 FNE International             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## User Journeys

### Journey 1: First-Time Donor

```
Entry: Google search "donate to Nicaragua education nonprofit"
  │
  ▼
Landing: Programs > Nicaragua > Education page
  │
  ├── Reads about Niño Feliz School
  ├── Sees impact stats (100+ students served)
  ├── Views photo gallery
  │
  ▼
Action: Clicks "Support This Program" button
  │
  ▼
Donate: GiveLively form (program pre-selected)
  │
  ▼
Confirmation: Thank you page + email receipt
```

**Key elements needed:**
- Strong SEO on program pages
- Compelling impact statistics
- Clear CTAs on every program page
- GiveLively designation options

---

### Journey 2: Prospective Volunteer

```
Entry: Instagram post about upcoming trip
  │
  ▼
Landing: Get Involved > Trips > Specific Trip page
  │
  ├── Reviews dates, cost, itinerary
  ├── Reads FAQ
  ├── Views testimonials from past volunteers
  │
  ▼
Action: Clicks "Apply Now" / "Sign Up"
  │
  ▼
Application: Form or external link
  │
  ▼
Confirmation: Email with next steps
```

**Key elements needed:**
- Trip detail pages with complete information
- Testimonials/social proof
- Clear cost breakdown
- Easy application process

---

### Journey 3: Monthly Donor Conversion

```
Entry: Email campaign about Hope Collective
  │
  ▼
Landing: Hope Collective page
  │
  ├── Learns about monthly giving impact
  ├── Views giving levels
  ├── Reads member testimonials
  │
  ▼
Action: Clicks "Become a Member" at $25/month level
  │
  ▼
Donate: GiveLively recurring donation form
  │
  ▼
Confirmation: Welcome email + onboarding sequence
```

**Key elements needed:**
- Compelling Hope Collective page
- Clear giving level benefits
- GiveLively recurring setup
- Email welcome sequence (external)

---

### Journey 4: Foundation/Grant Researcher

```
Entry: Direct navigation or Google search
  │
  ▼
Landing: About > Financials & Transparency
  │
  ├── Reviews 990 tax documents
  ├── Downloads annual report
  ├── Checks Charity Navigator rating
  ├── Reviews program outcomes
  │
  ▼
Action: Clicks "Contact for Partnerships"
  │
  ▼
Contact: Form or direct email to partnerships
```

**Key elements needed:**
- Easy-to-find financials page
- Downloadable documents
- Third-party validation badges
- Partnership contact info

---

### Journey 5: Returning Visitor / Engaged Supporter

```
Entry: Direct navigation (bookmark) or email link
  │
  ▼
Landing: Homepage
  │
  ├── Checks latest blog post
  ├── Views upcoming trips
  ├── Reads recent impact update
  │
  ▼
Action: Various (donate, share, sign up)
```

**Key elements needed:**
- Dynamic homepage with fresh content
- Clear "What's New" section
- Easy navigation to frequent destinations

---

## Content Audit Questions

Please answer these to finalize the sitemap:

### General

1. **Mission statement** - What is the official current wording?

2. **Tagline** - Do you have one? (e.g., "Facilitating, Networking, Empowering")

3. **Brand colors** - What are the official hex codes?

4. **Logo files** - Do you have SVG/PNG versions available?

### About

5. **Founding story** - Is there an official narrative we should use?

6. **Team size** - How many people should appear on the team page?
   - Leadership: ___
   - Staff: ___
   - Board: ___
   - Country Directors: ___

### Programs

7. **Active programs** - Which programs are currently active?
   - Nicaragua: ___
   - Peru: ___
   - Dominican Republic: ___

8. **Retired programs** - Any that should NOT appear on the new site?

9. **Impact statistics** - What are the current verified numbers?
   - Lives impacted: ___
   - Volunteer hours: ___
   - Houses built: ___
   - Latrines built: ___
   - Students supported: ___
   - Medical brigades: ___

### Get Involved

10. **Trip frequency** - How often do trips run? Monthly? Quarterly?

11. **Trip pricing** - What's the typical cost range?

12. **Age requirements** - Confirmed 14+ groups, 18+ individuals?

13. **Remote volunteering** - What roles are currently available?

14. **Internships** - Is this program active? What positions?

### Hope Collective

15. **Giving levels** - What are the actual tiers and amounts?

16. **Current members** - Approximately how many monthly donors?

### Donate

17. **Designation options** - What can donors choose to support?
    - General fund
    - Specific country
    - Specific program
    - Other: ___

18. **Other giving methods** - Do you accept stock, crypto, DAF?

### Blog

19. **Existing posts** - Approximately how many blog posts exist?

20. **Migration** - Should all be migrated or just recent (last 2 years)?

21. **Categories** - What categories make sense for your content?

### Contact

22. **Contact form** - What fields are needed? Where should submissions go?

23. **Response time** - What should visitors expect?

### Technical

24. **Newsletter** - What service do you use? (Mailchimp, etc.)

25. **Forms** - Besides contact, what other forms exist?
    - Volunteer application?
    - Trip registration?
    - Other: ___

26. **Analytics** - Keep Google Analytics? Current tracking ID: G-DLT0G05YMX

27. **Languages** - English only? Or need Spanish?

### Content

28. **Sponsor a Child** - Is this separate from Hope Collective?
    - Current: $50/month or $600/year
    - Keep as separate page or merge?

29. **Social media** - Confirm active accounts:
    - Facebook: ___ (URL)
    - Instagram: @fne.international ✓
    - Twitter/X: @FNEIORG ✓
    - LinkedIn: /company/fne-international-inc ✓
    - YouTube: ___

30. **Photos/Videos** - Do you have a media library? Where is it stored?

---

## Technical Notes

### Platform Stack

| Component | Service | Purpose |
|-----------|---------|---------|
| Framework | Astro | Static site generator |
| CMS | Storyblok | Content management |
| Hosting | Vercel | Deployment & CDN |
| Donations | GiveLively | Payment processing |
| Analytics | Google Analytics | Traffic tracking |
| Forms | TBD | Contact/applications |

### URL Redirects Needed

Old Wix URLs that need redirects to new structure:

| Old URL | New URL | Status |
|---------|---------|--------|
| /holiday-campaign-2017 | /blog | 301 |
| /en/overview | /about | 301 |
| /tag/nicaragua | /programs/nicaragua | 301 |
| /sponsor-a-child | /hope-collective (or keep?) | TBD |

### SEO Considerations

- All pages need unique meta titles and descriptions
- Blog posts need proper Open Graph tags for social sharing
- Programs pages should target location + cause keywords
- Implement structured data (Organization, NonprofitOrganization schema)

### Performance Targets

| Metric | Target |
|--------|--------|
| PageSpeed Mobile | 90+ |
| PageSpeed Desktop | 95+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |

---

## Next Steps

1. [ ] Review this sitemap document
2. [ ] Answer content audit questions
3. [ ] Confirm or modify page structure
4. [ ] Gather brand assets (logo, colors, fonts)
5. [ ] Begin technical setup
6. [ ] Build pages and content models
7. [ ] Migrate content
8. [ ] Test on staging
9. [ ] Launch

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 18, 2026 | Initial draft |

---

*This document was prepared for FNE International website redesign project.*
