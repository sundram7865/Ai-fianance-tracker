# 💸 FinTrack – Personal Finance AI Dashboard

![FinTrack Banner](https://your-image-url.com/banner.png)

A full-stack, AI-powered personal finance dashboard to track expenses, manage transactions, visualize trends, and gain financial insights with the power of **Gemini AI**.

---

## 🔧 Tech Stack

### ✨ Frontend – [Vercel](https://vercel.com)

| Tech                                                                                                       | Description                     |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------- |
| ![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs\&logoColor=white)                       | Full-stack React framework      |
| ![React](https://img.shields.io/badge/React-20232a?logo=react\&logoColor=61DAFB)                           | Component-based UI              |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss\&logoColor=white)        | Utility-first styling           |
| ![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-1f2937?logo=tailwindcss\&labelColor=black\&color=gray) | Beautiful accessible components |
| ![Lucide](https://img.shields.io/badge/Lucide-000?logo=data\:image/svg+xml;base64,...\&logoColor=white)    | Icon system                     |
| ![Recharts](https://img.shields.io/badge/Recharts-FF7300?logo=recharts\&logoColor=white)                   | Data visualization              |

### 🔒 Authentication

| Tech                                                                            | Description                      |
| ------------------------------------------------------------------------------- | -------------------------------- |
| ![Clerk](https://img.shields.io/badge/Clerk-3b49df?logo=clerk\&logoColor=white) | Authentication & user management |

### 📡 Backend & API

| Tech                                                                                           | Description                         |
| ---------------------------------------------------------------------------------------------- | ----------------------------------- |
| ![Prisma](https://img.shields.io/badge/Prisma-3982CE?logo=prisma\&logoColor=white)             | ORM for PostgreSQL                  |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql\&logoColor=white) | Relational database                 |
| ![Gemini](https://img.shields.io/badge/Gemini_AI-4285F4?logo=google\&logoColor=white)          | AI insights & transaction summaries |
| ![Inngest](https://img.shields.io/badge/Inngest-000000?logo=inngest\&logoColor=white)          | Event-driven backend workflows      |
| ![Resend](https://img.shields.io/badge/Resend-000000?logo=resend\&logoColor=white)             | Email delivery API                  |
| ![Arcjet](https://img.shields.io/badge/Arcjet-E83890?logo=arcjet\&logoColor=white)             | Rate limiting & bot protection      |

---

## 🌐 Live Demo

* **Frontend**: [https://fintrack.vercel.app](https://fintrack.vercel.app)
* **GitHub**: [https://github.com/sundram7865/fintrack](https://github.com/sundram7865/fintrack)

---

## 🧠 Features

* 📊 AI-powered expense insights via Gemini
* 📈 Real-time charts with Recharts
* 🔐 Secure Clerk auth with JWT
* 📤 Email notifications using Inngest & Resend
* 🛡️ Rate-limiting & bot protection with Arcjet
* 🧩 Role-based dashboard UI
* 📂 Categorized transactions and monthly breakdowns

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sundram7865/fintrack.git
cd fintrack
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Environment Setup

Create a `.env.local` file:

```env
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/fintrack
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key
RESEND_API_KEY=your_resend_key
```

---

### 4. Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

### 5. Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

This project is deployed using **Vercel** with automatic CI/CD on push to the `main` branch.

---

## 🖼️ Preview

> *(Add a screenshot or gif here)*

---

## 📄 License

MIT License.

---

> Made with 🧠 and ☕ by [@sundram7865](https://github.com/sundram7865)
