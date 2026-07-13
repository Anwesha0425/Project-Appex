# Project Appex

A comprehensive and responsive NGO management platform built with Next.js and Tailwind CSS. Project Appex is meticulously designed to streamline organizational workflows, public outreach, and internal task management for nonprofit teams. By centralizing core functions like fundraising, volunteer engagement, and project awareness, it allows the organization to focus more on their mission rather than administrative overhead.

**Live:** https://project-appex.vercel.app

## Features
- **Modular Component Architecture:** Utilizes 7+ reusable and customizable UI components (profile cards, dynamic task panels, interactive carousels, and data visualizers) to drastically reduce code duplication, speed up development cycles, and maintain a consistent design language across the entire application.
- **Real-Time Task Management:** Employs advanced React state management coupled with Firebase real-time sync to handle task assignments, project status updates, and dynamic rendering without requiring manual page reloads.
- **Campaign & Content Management:** Provides a robust set of tools enabling the NGO to independently drive new fundraising campaigns, publish timely news updates and blogs to raise awareness, and prominently showcase rural development projects (such as Women Empowerment, Child Support, and Agricultural Promotion).
- **Secure User Authentication:** Implements Firebase Auth to create a secure, seamless sign-up and login experience. This ensures that donors, volunteers, and administrative staff have tailored access to the platform and can safely manage their profiles and contributions.
- **Responsive & Accessible UI:** Designed with a mobile-first approach using Tailwind CSS to guarantee that the platform functions flawlessly across all device types, maximizing accessibility for both urban donors and mobile-first rural communities.

## Tech Stack
- **Frontend Framework:** Next.js, React (Hooks, Context, State Management)
- **Styling & UI:** Tailwind CSS, `@material-tailwind/react`, `lucide-react`, `react-icons` for scalable, maintainable aesthetics.
- **Animations:** `tailwindcss-animated`, `react-fast-marquee`, and `react-countup` to create an engaging and highly dynamic user experience.
- **Backend & Database:** Firebase Authentication (for user sessions and secure routes) and Firebase Firestore (NoSQL database for storing campaigns, blogs, user data, and real-time data syncing).

## Getting Started

To get a local copy up and running, follow these simple steps.

```bash
# Clone the repository
git clone https://github.com/Anwesha0425/Project-Appex.git

# Navigate into the project directory
cd Project-Appex

# Install all required dependencies
npm install

# Start the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## What I Built
I built a fully centralized, end-to-end web platform tailored specifically for the Appex Guide Line NGO. The primary problem it solves is the fragmentation of nonprofit workflows—previously, public outreach, donor engagement, and internal project tracking were disconnected processes scattered across multiple platforms. By bringing these into a single cohesive, highly responsive interface, the NGO can now effortlessly manage content and showcase their impact to the world.

The hardest part of this build was engineering the seamless integration between Next.js framework capabilities and Firebase's real-time client-side authentication and database streams. Balancing SEO-friendly architecture with dynamic, user-specific data to ensure donors and volunteers receive instant updates required careful state orchestration and component lifecycle management.
