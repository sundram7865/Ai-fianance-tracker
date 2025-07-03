import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// 📊 Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Trusted Users Worldwide",
  },
  {
    value: "$2B+",
    label: "Transactions Managed Securely",
  },
  {
    value: "99.9%",
    label: "System Uptime Guarantee",
  },
  {
    value: "4.9/5",
    label: "Average User Satisfaction",
  },
];

// 🚀 Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Real-Time Analytics",
    description:
      "Visualize your financial health instantly with dynamic charts and trends.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "AI Receipt Scanner",
    description:
      "Snap, scan, and store receipts with zero manual effort.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Smart Budget Planning",
    description:
      "Set financial goals with intelligent, personalized recommendations.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Unified Wallet",
    description:
      "Connect and control all your cards and accounts from one dashboard.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency Support",
    description:
      "Track and convert across currencies — perfect for global users.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "AI Insights",
    description:
      "Get personalized financial tips and proactive alerts — automatically.",
  },
];

// 🛠️ How It Works
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Sign Up",
    description:
      "Create your secure FinTrack account in under a minute.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Connect & Track",
    description:
      "Link your accounts and let us auto-track your transactions.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Optimize",
    description:
      "Receive AI-driven advice to reduce spending and grow savings.",
  },
];

// ❤️ Testimonials
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Founder, Blossom Boutique",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "FinTrack helped me cut monthly expenses by 30%. I can now focus more on growing my business.",
  },
  {
    name: "Michael Chen",
    role: "Freelance Developer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "Tracking finances used to be painful. Now it's seamless — FinTrack is my silent business partner.",
  },
  {
    name: "Emily Rodriguez",
    role: "Global Wealth Manager",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "My international clients love the multi-currency support. It's become an essential tool in my advisory kit.",
  },
];

// ✅ Optional: CTA Section
export const callToAction = {
  headline: "Ready to take control of your finances?",
  subtext: "Join 50,000+ users who trust FinTrack for smarter money management.",
  buttonText: "Get Started for Free",
};
