# Nithya Sri Fashion Culture

A premium, modern, luxury fashion boutique website for ladies tailoring, designer blouse stitching, bridal wear, Aari work, Maggam work, and custom embroidery.

## Features

- **Luxury Design**: Black and gold color scheme with premium aesthetics
- **Responsive**: Mobile-first design that works on all devices
- **Animated**: Smooth animations and elegant transitions using Framer Motion
- **SEO Optimized**: Meta tags, schema markup, and local SEO optimization
- **Booking System**: Online appointment booking with calendar and time slots
- **Portfolio Gallery**: Masonry layout with category filters and zoom effects
- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **Customer Reviews**: Google-style review cards with carousel
- **Contact Forms**: Booking, quote request, and contact forms
- **Dark/Light Mode**: Theme toggle for user preference
- **Admin Dashboard**: Manage appointments, customers, portfolio, and reviews

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Image Storage**: Cloudinary
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for database)
- Cloudinary account (for image storage, optional)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nsf
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

4. Set up Supabase database:
- Create a new project in Supabase
- Run the SQL schema from `supabase/schema.sql` in the Supabase SQL editor
- Copy your project URL and anon key to `.env.local`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
nsf/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx      # Root layout with fonts and metadata
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, About, Services, etc.)
│   │   ├── ui/             # Reusable UI components
│   │   ├── navigation.tsx  # Navigation bar
│   │   ├── footer.tsx      # Footer component
│   │   └── whatsapp-button.tsx
│   └── lib/
│       ├── supabase.ts     # Supabase client and types
│       └── utils.ts        # Utility functions
├── supabase/
│   └── schema.sql          # Database schema
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Services Offered

1. **Designer Blouse Stitching**
   - Custom Blouse Stitching
   - Designer Blouse Stitching
   - Bridal Blouse Stitching
   - Padded Blouse
   - Princess Cut Blouse
   - Aari Work Blouse
   - Maggam Work Blouse

2. **Dress Stitching**
   - Salwar Suit Stitching
   - Churidar Stitching
   - Anarkali Stitching
   - Palazzo Suit Stitching
   - Kurti Stitching
   - Designer Kurti Stitching
   - Gown Stitching
   - Lehenga Stitching
   - Bridal Lehenga Stitching

3. **Hand Work & Embroidery**
   - Aari Work
   - Maggam Work
   - Hand Embroidery
   - Zardosi Work
   - Mirror Work
   - Stone Work
   - Bead Work
   - Pearl Work
   - Sequence Work
   - Thread Work
   - Patch Work
   - Fabric Painting

4. **Saree Services**
   - Saree Fall & Pico
   - Saree Tassel Work
   - Saree Embroidery Work
   - Saree Stone Work
   - Bridal Saree Customization

5. **Alterations**
   - Blouse Alteration
   - Dress Alteration
   - Kurti Alteration
   - Lehenga Alteration
   - Sleeve Modification
   - Neck Design Modification
   - Perfect Fitting Adjustments

## SEO Optimization

The website is optimized for the following keywords:
- Ladies Tailor Near Me
- Designer Blouse Stitching
- Bridal Blouse Designer
- Aari Work
- Maggam Work
- Boutique Tailoring
- Custom Stitching
- Bridal Wear Designer

## Contact Information

- **Phone**: +91 8892300449
- **Email**: nithyasrifashion@gmail.com
- **Location**: Bangalore, Karnataka, India
- **Business Hours**: Mon - Sat: 10:00 AM - 8:00 PM

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## License

This project is proprietary and owned by Nithya Sri Fashion Culture.

## Support

For support, contact Nagesh at +91 8892300449 or nithyasrifashion@gmail.com
