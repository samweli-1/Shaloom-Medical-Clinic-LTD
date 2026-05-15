# Shaloom Medical Clinic Ltd — Website

A modern, bilingual (English & Kinyarwanda), dark/light mode clinic website built with **Next.js 14**, **Tailwind CSS**, and **Lucide React** icons.

---

## Project Structure

```
shaloom-clinic/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout + providers
│   │   ├── page.tsx         # Main page (assembles all sections)
│   │   └── globals.css      # Global styles + Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   # Sticky nav, mobile menu, lang + theme toggle
│   │   │   └── Footer.tsx   # Full footer with CTA band
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero with stats
│   │   │   ├── About.tsx        # Mission, vision, values
│   │   │   ├── Services.tsx     # 8 services grid
│   │   │   ├── Doctors.tsx      # Doctor cards
│   │   │   ├── Appointment.tsx  # Booking form + WhatsApp
│   │   │   ├── Blog.tsx         # Health blog posts
│   │   │   ├── FAQ.tsx          # Accordion FAQ
│   │   │   ├── Gallery.tsx      # Photo gallery + lightbox
│   │   │   └── Contact.tsx      # Contact form + map
│   │   └── ui/
│   │       └── ThemeProvider.tsx
│   ├── hooks/
│   │   └── useLang.tsx      # Language context (EN / RW)
│   └── lib/
│       ├── translations.ts  # Full EN + Kinyarwanda translations
│       └── utils.ts         # cn() utility
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Features

- **Bilingual**: Full English & Kinyarwanda translations across all 9 sections
- **Dark / Light mode**: System-aware with manual toggle
- **9 Sections**: Home, About, Services, Doctors, Appointment, Blog, FAQ, Gallery, Contact
- **8 Services**: Consultation, Dentistry, Minor Surgery, Ultrasound, Antenatal Care, Laboratory, Circumcision, Family Planning
- **Mobile-first**: Fully responsive for all screen sizes
- **WhatsApp booking**: Pre-filled wa.me link for direct booking
- **Gallery lightbox**: Click-to-zoom image viewer
- **FAQ accordion**: Animated expand/collapse
- **Google Maps embed**: Bigogwe, Nyabihu District location
- **Lucide React icons**: No emojis, modern icon set throughout
- **Smooth scroll**: All nav links scroll smoothly to sections

---

## Tech Stack

| Tool            | Purpose                        |
|-----------------|--------------------------------|
| Next.js 14      | Framework (App Router)         |
| Tailwind CSS    | Styling                        |
| TypeScript      | Type safety                    |
| Lucide React    | Icons                          |
| next-themes     | Dark/light mode                |
| clsx + tw-merge | Class name utilities           |

---

## Customisation

### Update phone number
Search for `+250 780 000 000` across the project and replace with the real number.

### Update email
Search for `info@shaloomclinic.rw` and replace with the real email.

### Update WhatsApp link
Search for `wa.me/250780000000` and replace with the real WhatsApp number.

### Update Google Maps embed
In `Contact.tsx`, replace the iframe `src` URL with the real Google Maps embed for the clinic's precise location.

### Add real doctor photos
In `Doctors.tsx`, replace the `DOCTOR_IMAGES` array with real photo URLs or local images in `/public`.

### Add real gallery photos
In `Gallery.tsx`, replace the `GALLERY_ITEMS` array with real clinic photos.

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts — site will be live in ~60 seconds
```

---

## Phase 2 (Backend)

When ready to add a backend:
- **Supabase** — appointment form submissions, patient records
- **Sanity CMS** — manage blog posts, doctors, services from a dashboard
- **Resend** — email confirmations on appointment booking
- **NextAuth** — staff login for clinic admin panel
