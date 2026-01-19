# FNE International
# Website Sitemap & Content Plan

**Version 1.0 | January 2026**
**Status:** Draft - Pending Team Review

---

# Part 1: Visual Overview

## Site Structure

```
                            ┌─────────────────┐
                            │    HOMEPAGE     │
                            │        /        │
                            └────────┬────────┘
                                     │
        ┌────────────┬───────────┬───┴───┬───────────┬────────────┬─────────┐
        │            │           │       │           │            │         │
        ▼            ▼           ▼       ▼           ▼            ▼         ▼
   ┌─────────┐ ┌──────────┐ ┌────────┐ ┌────┐ ┌───────────┐ ┌────────┐ ┌───────┐
   │  ABOUT  │ │ PROGRAMS │ │  GET   │ │HOPE│ │   BLOG    │ │ DONATE │ │CONTACT│
   │         │ │          │ │INVOLVED│ │COLL│ │           │ │        │ │       │
   └────┬────┘ └────┬─────┘ └───┬────┘ └────┘ └─────┬─────┘ └────────┘ └───────┘
        │           │           │                   │
        ▼           ▼           ▼                   ▼
   ┌─────────┐ ┌─────────┐ ┌──────────┐      ┌───────────┐
   │Our Story│ │Nicaragua│ │  Trips   │      │ All Posts │
   ├─────────┤ ├─────────┤ ├──────────┤      ├───────────┤
   │Our Team │ │  Peru   │ │  Remote  │      │ By Category│
   ├─────────┤ ├─────────┤ ├──────────┤      ├───────────┤
   │Approach │ │   D.R.  │ │Internship│      │ Post Page │
   ├─────────┤ └─────────┘ ├──────────┤      └───────────┘
   │Financial│             │ Partners │
   └─────────┘             └──────────┘
```

---

## Pages at a Glance

### Main Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Welcome, mission, drive action |
| About | `/about` | Organization story & team |
| Programs | `/programs` | Our work by country |
| Get Involved | `/get-involved` | Volunteer & partner |
| Hope Collective | `/hope-collective` | Monthly giving program |
| Blog | `/blog` | News & stories |
| Donate | `/donate` | Accept donations |
| Contact | `/contact` | Get in touch |

### About Section (4 pages)

| Page | What's On It |
|------|--------------|
| Our Story | Founding story, mission, vision, values |
| Our Team | Staff, board, leadership photos & bios |
| Our Approach | Facilitate, Network, Empower philosophy |
| Financials | 990s, annual reports, charity ratings |

### Programs Section (4+ pages)

| Page | What's On It |
|------|--------------|
| Overview | All programs summary, impact stats |
| Nicaragua | Education, health, housing programs |
| Peru | Peru-specific programs |
| Dominican Republic | DR-specific programs |

### Get Involved Section (5 pages)

| Page | What's On It |
|------|--------------|
| Overview | All ways to participate |
| Volunteer Trips | Upcoming trips, costs, signup |
| Remote Volunteering | Virtual opportunities |
| Internships | Internship program info |
| Partner With Us | Corporate & org partnerships |

---

## Navigation

### Header Menu

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  [LOGO]     About ▼   Programs ▼   Get Involved ▼   Blog  [DONATE] │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Footer

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  ABOUT          PROGRAMS       GET INVOLVED      CONNECT           │
│  • Our Story    • Nicaragua    • Trips           • Newsletter      │
│  • Team         • Peru         • Remote          • Facebook        │
│  • Approach     • D.R.         • Internships     • Instagram       │
│  • Financials                  • Partners        • LinkedIn        │
│                                                                    │
│  ─────────────────────────────────────────────────────────────     │
│  501(c)(3) | EIN: 27-1792140 | East Weymouth, MA                  │
│  info@fneinternational.org | (617) 383-1956                       │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## Content Inventory

| Content Type | Quantity (Est.) | Example |
|--------------|-----------------|---------|
| Team Members | 10-15 | Photo, name, role, bio |
| Programs | 5-10 | Name, description, photos, stats |
| Blog Posts | 20-50 | Migrate from current site |
| Volunteer Trips | 3-6 active | Dates, location, cost, signup |
| Testimonials | 5-10 | Quote, name, photo |
| Impact Stats | 6-10 | "15,000+ volunteer hours" |

---

## Timeline

| Phase | What Happens | When |
|-------|--------------|------|
| 1. Plan | Finalize this sitemap | Week 1 |
| 2. Build | Develop pages & CMS | Weeks 2-3 |
| 3. Content | Migrate text & images | Week 4 |
| 4. Review | Test on staging site | Week 5 |
| 5. Launch | Go live | Week 6 |

---

## Questions for Team Review

1. Does this page structure make sense? ☐ Yes ☐ Needs changes

2. Any pages to ADD? ________________________________

3. Any pages to REMOVE? ________________________________

4. Sponsor a Child - keep separate or merge into Hope Collective?
   ☐ Keep separate ☐ Merge

5. Languages needed? ☐ English only ☐ English + Spanish

6. Other notes: ________________________________

---

\newpage

# Part 2: Detailed Sitemap

## Full URL Structure

```
fneinternational.org
│
├── HOME
│   └── /
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
    └── /sponsor-a-child ───────── Child Sponsorship
```

---

\newpage

# Part 3: Page Descriptions

## Homepage (/)

**Purpose:** First impression, communicate mission, drive action

### Sections

| Section | Content |
|---------|---------|
| Hero | Mission statement, compelling image, primary CTA |
| Impact Stats | Key numbers (lives impacted, volunteers, projects) |
| Programs Overview | Cards for each country/focus area |
| Featured Story | Recent blog post or testimonial |
| Hope Collective CTA | Monthly giving promotion |
| Upcoming Trips | Next 2-3 volunteer opportunities |
| Partners/Supporters | Logo grid (optional) |

### Primary CTAs
- Donate
- Join Hope Collective
- View Volunteer Trips

---

## About Section

### Our Story (/about)

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

### Our Team (/about/team)

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

### Our Approach (/about/approach)

**Purpose:** Explain the FNE methodology

| Content |
|---------|
| **Facilitate** - What this means |
| **Network** - Partnership philosophy |
| **Empower** - Community-led development |
| "Hand-in-hand, not hand-over-hand" explanation |
| Diagram or infographic |

---

### Financials & Transparency (/about/financials)

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

## Programs Section

### Programs Overview (/programs)

**Purpose:** Show breadth of work, direct to specific areas

| Content |
|---------|
| Introduction to program areas |
| Country cards (Nicaragua, Peru, DR) |
| Focus area cards (Education, Health, Housing, Agriculture) |
| Overall impact statistics |

---

### Country Pages (/programs/[country])

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

### Known Programs

| Program | Country | Category |
|---------|---------|----------|
| Niño Feliz School | Nicaragua | Education |
| SPTLN / Health for All Children | Nicaragua | Health |
| Fundación Juanita Scholarships | Nicaragua | Education |
| Housing & Latrine Construction | Nicaragua | Infrastructure |
| Medical Brigades | Multi-country | Health |

---

## Get Involved Section

### Overview (/get-involved)

**Purpose:** Show all ways to participate

| Content |
|---------|
| Volunteer trips |
| Remote volunteering |
| Internships |
| Corporate partnerships |
| In-kind donations |

---

### Volunteer Trips (/get-involved/trips)

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

### Remote Volunteering (/get-involved/remote)

**Purpose:** Engage people who can't travel

| Content |
|---------|
| Available remote roles |
| Skills needed |
| Time commitment |
| Application process |

---

### Internships (/get-involved/internships)

**Purpose:** Recruit interns

| Content |
|---------|
| Available positions |
| Requirements |
| What interns gain |
| How to apply |

---

### Partner With Us (/get-involved/partners)

**Purpose:** Attract corporate and organizational partners

| Content |
|---------|
| Partnership opportunities |
| Current partners |
| Benefits of partnership |
| Contact for partnership inquiries |

---

## The Hope Collective (/hope-collective)

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

### Suggested Giving Levels

| Level | Amount | Impact |
|-------|--------|--------|
| Supporter | $10/month | School supplies for 2 children |
| Advocate | $25/month | Nutrition program for a family |
| Champion | $50/month | Sponsor a child's education |
| Ambassador | $100/month | Medical care for 10 children |
| Visionary | $250+/month | Transform a community |

*Note: Verify these amounts and impacts with FNE team*

---

## Donate (/donate)

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

## Blog (/blog)

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

## Contact (/contact)

**Purpose:** Enable communication

| Content |
|---------|
| Contact form |
| Email: info@fneinternational.org |
| Phone: (617) 383-1956 |
| Mailing address: PO Box 890286, East Weymouth, MA 02189 |
| Social media links |
| For specific inquiries: |
| - Trips: travel@fneinternational.org |
| - Donations: (857) 205-0236 |

---

\newpage

# Part 4: Content Types

These are the content models that will be created in the CMS (Storyblok).

## 1. Page (Generic)

For: Homepage, About, Contact, etc.

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

## 2. Blog Post

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

## 3. Program

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

## 4. Team Member

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

## 5. Volunteer Trip

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

## 6. Testimonial

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

## 7. Partner

| Field | Type | Required |
|-------|------|----------|
| name | Text | Yes |
| logo | Asset | Yes |
| website | URL | No |
| description | Textarea | No |
| partner_type | Select | Yes |

**Partner type options:** Corporate, Foundation, Nonprofit, Government, Individual

---

## 8. Impact Stat (Reusable Component)

| Field | Type | Required |
|-------|------|----------|
| number | Text | Yes |
| label | Text | Yes |
| icon | Select | No |

**Example:** "15,000+" / "Volunteer Hours"

---

\newpage

# Part 5: User Journeys

## Journey 1: First-Time Donor

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

## Journey 2: Prospective Volunteer

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

## Journey 3: Monthly Donor Conversion

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
- Email welcome sequence

---

## Journey 4: Foundation/Grant Researcher

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

\newpage

# Part 6: Content Audit Questions

Please answer these questions to finalize the sitemap.

## General

1. **Mission statement** - What is the official current wording?

   ________________________________________________________________

2. **Tagline** - Do you have one? (e.g., "Facilitating, Networking, Empowering")

   ________________________________________________________________

3. **Brand colors** - What are the official hex codes?

   ________________________________________________________________

4. **Logo files** - Do you have SVG/PNG versions available? ☐ Yes ☐ No

---

## About

5. **Team size** - How many people should appear on the team page?
   - Leadership: _____
   - Staff: _____
   - Board: _____
   - Country Directors: _____

---

## Programs

6. **Active programs** - Which programs are currently active?
   - Nicaragua: ________________________________________________
   - Peru: ________________________________________________
   - Dominican Republic: ________________________________________________

7. **Retired programs** - Any that should NOT appear on the new site?

   ________________________________________________________________

8. **Impact statistics** - What are the current verified numbers?
   - Lives impacted: _____
   - Volunteer hours: _____
   - Houses built: _____
   - Latrines built: _____
   - Students supported: _____
   - Medical brigades: _____

---

## Get Involved

9. **Trip frequency** - How often do trips run?
   ☐ Monthly ☐ Quarterly ☐ Other: _____

10. **Trip pricing** - What's the typical cost range? $_____  to $_____

11. **Age requirements** - Confirmed?
    ☐ 14+ for groups ☐ 18+ for individuals

12. **Remote volunteering** - What roles are currently available?

    ________________________________________________________________

13. **Internships** - Is this program active? ☐ Yes ☐ No

---

## Hope Collective

14. **Giving levels** - What are the actual tiers and amounts?

    ________________________________________________________________

15. **Current members** - Approximately how many monthly donors? _____

---

## Donate

16. **Designation options** - What can donors choose to support?
    ☐ General fund
    ☐ Specific country
    ☐ Specific program
    ☐ Other: _____

17. **Other giving methods** - Do you accept?
    ☐ Stock ☐ Crypto ☐ DAF ☐ Other: _____

---

## Blog

18. **Existing posts** - Approximately how many blog posts exist? _____

19. **Migration** - Should all be migrated or just recent?
    ☐ All ☐ Last 2 years ☐ Last year only

20. **Categories** - What categories make sense?
    ☐ Stories ☐ Updates ☐ Events ☐ Impact Reports ☐ Other: _____

---

## Technical

21. **Newsletter** - What service do you use?
    ☐ Mailchimp ☐ Constant Contact ☐ Other: _____ ☐ None

22. **Forms** - Besides contact, what other forms exist?
    ☐ Volunteer application
    ☐ Trip registration
    ☐ Other: _____

23. **Languages** - ☐ English only ☐ English + Spanish

---

## Content

24. **Sponsor a Child** - Is this separate from Hope Collective?
    ☐ Keep as separate page
    ☐ Merge into Hope Collective
    ☐ Redirect to Hope Collective

25. **Social media** - Confirm active accounts:
    - Facebook: ________________________________________________
    - Instagram: @fne.international ☐ Confirmed
    - Twitter/X: @FNEIORG ☐ Confirmed
    - LinkedIn: /company/fne-international-inc ☐ Confirmed
    - YouTube: ________________________________________________

26. **Photos/Videos** - Do you have a media library? Where is it stored?

    ________________________________________________________________

---

\newpage

# Part 7: Technical Notes

## Platform Stack

| Component | Service | Purpose |
|-----------|---------|---------|
| Framework | Astro | Static site generator |
| CMS | Storyblok | Content management |
| Hosting | Vercel | Deployment & CDN |
| Donations | GiveLively | Payment processing |
| Analytics | Google Analytics | Traffic tracking |
| Forms | TBD | Contact/applications |

---

## URL Redirects Needed

Old Wix URLs that need redirects to new structure:

| Old URL | New URL | Type |
|---------|---------|------|
| /holiday-campaign-2017 | /blog | 301 Redirect |
| /en/overview | /about | 301 Redirect |
| /tag/nicaragua | /programs/nicaragua | 301 Redirect |
| /sponsor-a-child | TBD | TBD |

---

## SEO Requirements

- All pages need unique meta titles and descriptions
- Blog posts need Open Graph tags for social sharing
- Programs pages should target location + cause keywords
- Implement structured data (Organization, NonprofitOrganization schema)

---

## Performance Targets

| Metric | Target |
|--------|--------|
| PageSpeed Mobile | 90+ |
| PageSpeed Desktop | 95+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |

---

## Project Timeline

| Phase | Tasks | Duration |
|-------|-------|----------|
| 1. Planning | Finalize sitemap, gather assets | Week 1 |
| 2. Setup | Create accounts, project structure | Week 1 |
| 3. Development | Build pages, components, CMS | Weeks 2-3 |
| 4. Content | Migrate content from Wix | Week 4 |
| 5. Testing | Review on staging, fix issues | Week 5 |
| 6. Launch | DNS switch, go live, monitor | Week 6 |

---

## Next Steps

1. ☐ Review this document
2. ☐ Answer content audit questions (Part 6)
3. ☐ Gather brand assets (logo, colors, fonts)
4. ☐ Confirm page structure
5. ☐ Begin technical setup

---

**Document prepared for FNE International website redesign**

**Version 1.0 | January 2026**
