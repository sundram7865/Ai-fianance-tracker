# 💸 FinTrack — AI-Powered Personal Finance Tracker

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/sundram7865/Ai-fianance-tracker)
[![GitHub stars](https://img.shields.io/github/stars/sundram7865/Ai-fianance-tracker)](https://github.com/sundram7865/Ai-fianance-tracker/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**FinTrack** is a modern, full-stack AI-powered finance tracker that lets users manage expenses, track recurring transactions, and generate monthly insights through Gemini AI. It includes real-time dashboards, receipt scanning, background jobs, and robust security measures.

## 🌐 Live Demo

🔗 [Live on Vercel](https://ai-fianance-tracker.vercel.app)

## 📸 Preview

![FinTrack Dashboard](./preview/dashboard.png)
![Receipt Upload](./preview/receipt-upload.png)

## 🚀 Tech Stack

**Frontend**

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* ShadCN UI
* Framer Motion
* React Hook Form + Zod

**Backend**

* Node.js
* Prisma ORM
* PostgreSQL
* REST API

**AI & Automation**

* Gemini AI (expense summarization & receipt scanning)
* Inngest (background jobs)
* Arcjet (bot protection, rate limiting)

**Auth**

* Clerk (authentication & session management)

**Deployment**

* Vercel (frontend + backend)

## 🔒 Features

* AI-powered expense insights & receipt scanner
* Real-time dashboard with categorized data
* Recurring transaction support & monthly email reports
* Secure Clerk authentication & protected routes
* Automated jobs (reminders, report generation) using Inngest
* Global error handling & bot protection with Arcjet
* SEO-optimized & mobile-responsive design

## 📁 Project Structure

Ai-fianance-tracker/
├── app/ # Next.js pages and routing
├── components/ # Reusable UI components
├── lib/ # Utils (Prisma, Arcjet, Inngest, etc.)
├── public/ # Assets and preview images
├── styles/ # Global styles
├── prisma/ # Prisma schema and migrations
└── README.md


## ⚙️ Deployment

### Frontend + Backend on Vercel

1. Push your repo to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Import your GitHub project
4. Set environment variables (see below)
5. Click **Deploy**

## 🔐 Environment Variables

Set these in your Vercel dashboard:

.env
DATABASE_URL=postgresql://user:pass@host:port/dbname
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
GEMINI_API_KEY=...
ARCJET_API_KEY=...
INNGEST_EVENT_KEY=...

SCRIPTS-
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run locally
npm run dev
