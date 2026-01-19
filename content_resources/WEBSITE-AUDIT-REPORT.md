# FNE International Website Content Audit Report
## Comparison: New Website vs Verified Sources
**Date**: January 2026

---

## EXECUTIVE SUMMARY

This audit compares content on the new FNE International website against:
1. `/content_resources/CURRENT-WEBSITE-TEXT.md` (scraped from fneinternational.org)
2. PDFs in `/content_resources/` folder
3. Official documents and verified sources

### Key Findings:
- **Several statistics are unverified or potentially incorrect**
- **Timeline/history dates need correction** ("Since 1990" is misleading)
- **Dominican Republic location error** (Villa Hermosa vs Villa Caoba)
- **Some team member names may be outdated**
- **"500+ monthly supporters" is not verified**

---

## VERIFIED FACTS (USE THESE)

### Organization Info
| Fact | Status | Source |
|------|--------|--------|
| FNE = Facilitate, Network, Empower | VERIFIED | Multiple sources |
| 501(c)(3) nonprofit | VERIFIED | PDF, GuideStar |
| EIN: 27-1792140 | VERIFIED | GuideStar |
| Based in East Weymouth, MA | VERIFIED | Contact info |
| Countries: Nicaragua, Peru, Dominican Republic | VERIFIED | All sources |

### Impact Statistics (VERIFIED)
| Statistic | Status | Notes |
|-----------|--------|-------|
| ~15,000 volunteer hours | VERIFIED | Use on homepage |
| 12,000+ lives impacted | VERIFIED | Use on homepage |
| 100+ eco-latrines built | VERIFIED | Use on homepage |
| 12 medical brigades | VERIFIED | Use on homepage |
| 400+ patients/year | VERIFIED | Medical programs |
| 35 homes/year average | VERIFIED | Housing program |
| 600+ community members benefited (latrines) | VERIFIED | |
| 100+ children with complex medical needs | VERIFIED | SPTLN program |
| 50 cataract surgeries (one mission) | VERIFIED | Sights on Health |

### Core Values (FROM PDF)
| Value | Definition |
|-------|------------|
| Integrity | Holding themselves to the highest ethical standards |
| Respect | Relationships with partners are balanced and illustrate mutual respect |
| Solidarity | Standing together with partner communities |

### Leadership (VERIFIED)
| Name | Role | Verified |
|------|------|----------|
| Michael Cipoletti | Executive Director & Founder | YES |
| Alyssa Hopun | Country Director Nicaragua | YES |

### Programs (VERIFIED)
| Program | Country | Status |
|---------|---------|--------|
| SPTLN (Salud Para Todos Los Niños) | Nicaragua | VERIFIED |
| Niño Feliz School | Nicaragua (Chichigalpa) | VERIFIED |
| Fundación Juanita Scholarship | Nicaragua (Malpaisillo) | VERIFIED |
| Richard Streb Memorial Library | Nicaragua (Chacraseca) | VERIFIED |
| Dreamers Program | Nicaragua | VERIFIED |
| Medical Brigades | All countries | VERIFIED |
| Housing Program | Nicaragua | VERIFIED |
| Eco-latrine Program | Peru (Lima) | VERIFIED |

### Partner Organizations (VERIFIED)
| Partner | Focus | Location |
|---------|-------|----------|
| Sights on Health | Cataract surgery | Peru (Cusco) |
| Mending Faces | Cleft palate surgery | Dominican Republic |
| Asociación Wiñaypaq | Healthcare | Peru (Cusco) |
| Asociación Latidos | Healthcare | Peru (Lambayeque) |
| FUCPE School | Education | Dominican Republic |

---

## ISSUES TO FIX

### 1. CRITICAL: "Since 1990" Badge (Multiple Pages)

**Current**: "Since 1990" appears on `about.astro` and `our-story.astro`

**Problem**: This is misleading. The verified timeline is:
- 2007: Michael Cipoletti's first trip to Nicaragua
- 2009: Became a chapter of Friends of New England
- 2011: FNE International founded
- 2012: Transitioned to independent 501(c)(3)

**Fix**: Change to "Since 2011" or "Founded 2011" or remove the badge entirely.

**Files to update**:
- `/src/pages/about.astro` (line 25)
- `/src/pages/about/our-story.astro`

---

### 2. CRITICAL: Dominican Republic Location Error

**Current**: `dominican-republic.astro` says "Villa Hermosa, La Romana"

**Verified**: PDF says "Villa Caoba, La Romana"

**Fix**: Change all references from "Villa Hermosa" to "Villa Caoba"

**Files to update**:
- `/src/pages/programs/dominican-republic.astro`

---

### 3. UNVERIFIED: "500+ Monthly Supporters"

**Current**: Appears on:
- Homepage Hope Collective section
- Hope Collective page
- Donate page CTA

**Status**: NOT FOUND in any verified source

**Recommendation**: Either verify this number or remove/change to generic text like "Join our community of monthly supporters"

**Files to update**:
- `/src/pages/index.astro` (line 485)
- `/src/pages/hope-collective.astro` (line 86)
- `/src/pages/donate.astro` (line 204)

---

### 4. UNVERIFIED: "92% Goes to Programs"

**Current**: Appears on donate.astro and hope-collective.astro

**Status**: NOT VERIFIED - Charity Navigator shows 73% overall rating but doesn't confirm this specific percentage

**Recommendation**: Either verify with official financials or remove

**Files to update**:
- `/src/pages/donate.astro` (line 46, 85)
- `/src/pages/hope-collective.astro` (line 83)

---

### 5. UNVERIFIED: "35+ Years of Impact"

**Current**: `hope-collective.astro` line 84

**Problem**: If founded in 2011, that's ~14-15 years, not 35+

**Fix**: Change to "14+ Years of Impact" or similar

---

### 6. Nicaragua Page Statistics (QUESTIONABLE)

**Current values on nicaragua.astro**:
- "300+ Houses Built" - NOT VERIFIED (scraped says 35/year average)
- "$5,500 per home" - NOT VERIFIED
- "30% family / 70% FNE contribution" - NOT VERIFIED
- "150+ Scholarship Students" - NOT VERIFIED
- "120 Pediatric Patients" - NOT VERIFIED (SPTLN has 100+ enrolled)
- "5.7 acre farm" - NOT VERIFIED

**Verified alternatives**:
- Houses: Could say "35 homes/year" or calculate total if known
- Students: Fundación Juanita funds 20 girls/year
- Medical: "100+ children with complex medical needs enrolled"

---

### 7. Peru Page Statistics (MOSTLY OK)

**Current values on peru.astro**:
- "500+ Patients Served" - CLOSE (verified 400+/year)
- "100+ Eco-Toilets Built" - VERIFIED
- "3 Regional Partners" - VERIFIED
- "3 Medical brigades/year" - Needs verification

---

### 8. Team Member Name Discrepancy

**Current** (team.astro): Melissa Costa - Director of Operations

**Scraped website**: Melissa Faulkner - Director of Operations

**Action**: Verify which name is correct. Could be married name change or error.

---

### 9. Values Discrepancy

**Current** (team.astro): Compassion, Collaboration, Integrity

**Verified** (PDF & scraped): Integrity, Respect, Solidarity

**Recommendation**: Use the official values from PDF: Integrity, Respect, Solidarity

---

### 10. Partner "Grupo Fenix" - Unverified

**Current**: Listed on `about.astro` partners section

**Status**: Not found in any scraped content or PDFs

**Action**: Verify this partnership exists or remove

---

### 11. Partner "NGO Arrebol" - Unverified

**Current**: Listed on `peru.astro`

**Status**: Not found in scraped content

**Action**: Verify or remove

---

## PAGE-BY-PAGE ACTION ITEMS

### `/src/pages/index.astro`
- [ ] Verify or remove "500+ monthly supporters" badge (line 485)
- [x] Stats are correct: 15k hours, 12k lives, 100+ latrines, 12 brigades

### `/src/pages/about.astro`
- [ ] Change "Since 1990" to "Since 2011" or remove (line 25)
- [ ] Verify partner "Grupo Fenix"

### `/src/pages/about/our-story.astro`
- [ ] Fix timeline dates to match verified history
- [ ] Change founding narrative to accurate dates

### `/src/pages/about/approach.astro`
- [ ] Verify focus area statistics
- [ ] Ensure values match official: Integrity, Respect, Solidarity

### `/src/pages/about/team.astro`
- [ ] Verify Melissa Costa vs Melissa Faulkner name
- [ ] Change values section to: Integrity, Respect, Solidarity

### `/src/pages/programs/nicaragua.astro`
- [ ] Verify or fix "300+ Houses Built"
- [ ] Verify or fix "$5,500 per home"
- [ ] Verify or fix "150+ Scholarship Students"
- [ ] Verify or fix "120 Pediatric Patients"

### `/src/pages/programs/peru.astro`
- [ ] Change "500+ Patients" to "400+ Patients" for accuracy
- [ ] Verify NGO Arrebol partnership

### `/src/pages/programs/dominican-republic.astro`
- [ ] Change "Villa Hermosa" to "Villa Caoba" throughout

### `/src/pages/donate.astro`
- [ ] Verify or remove "92% goes to programs"
- [ ] Verify or remove "500+ monthly supporters"

### `/src/pages/hope-collective.astro`
- [ ] Fix "35+ Years of Impact" to "14+ Years"
- [ ] Verify or remove "92% Goes to Programs"
- [ ] Verify or remove "500+ Monthly Donors"

---

## CONTENT THAT IS MISSING

Based on the scraped website, the new site should include:

1. **José Antonio Hernández success story** (Niño Feliz student) - Powerful testimonial
2. **Arianna Rossetti volunteer testimonial** - Detailed Peru medical experience
3. **Hazel's Nicaragua story** - Great volunteer testimonial
4. **COVID-19 Response** - Raised $100k+ for PPE and food baskets
5. **More specific program details**:
   - Fundación Juanita started with 5 girls, now 20/year
   - Richard Streb Library opened February 2014
   - Library is "San Juan del Sur Library in a Box" recipient
6. **Contact information on dedicated contact page**:
   - Phone: (617) 383-1956
   - Emails: info@fneinternational.org, travel@fneinternational.org
   - Address: PO Box 890286, East Weymouth, MA 02189

---

## RECOMMENDED PRIORITY

### High Priority (Fix Immediately)
1. "Since 1990" → "Since 2011"
2. "Villa Hermosa" → "Villa Caoba"
3. "35+ Years" → "14+ Years"

### Medium Priority (Verify or Remove)
4. "500+ monthly supporters" - verify or remove
5. "92% goes to programs" - verify or remove
6. Nicaragua statistics (300+ houses, etc.)

### Low Priority (Enhance Content)
7. Add volunteer testimonials
8. Add COVID response accomplishment
9. Verify all partner organizations

---

## VERIFIED CONTENT TO KEEP

The following content is accurate and should remain:
- Mission and Vision statements
- FNE Philosophy (F-N-E breakdown)
- Hand-in-hand vs hand-over-hand philosophy
- Homepage impact stats (15k, 12k, 100+, 12)
- Medical brigade information
- SPTLN program description
- Most team member information
- Partner descriptions (Sights on Health, Mending Faces, Wiñaypaq, Latidos)

---

## CONCLUSION

The new website has strong design and structure but contains several unverified statistics and some factual errors. The most critical issues are:

1. **Incorrect founding date** ("Since 1990" should be 2011)
2. **Wrong location name** for DR school (Villa Caoba, not Villa Hermosa)
3. **Unverified claims** (500+ monthly supporters, 92% to programs)
4. **Inflated statistics** on Nicaragua page

Recommend reviewing and updating these items before launch to maintain credibility and accuracy.
