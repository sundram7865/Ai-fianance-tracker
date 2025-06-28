import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinTrack",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-10 border-t">
  <div className="container mx-auto px-4 md:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 space-y-4 md:space-y-0">
      
      {/* Left: Brand / Tagline */}
      <div className="text-center md:text-left">
        <h4 className="text-xl font-semibold text-gray-800">FinTrack</h4>
       
      </div>

      {/* Middle: Links */}
      <div className="flex space-x-6 text-sm">
        <a href="/dashboard" className="hover:underline">Dashboard</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
      </div>

      {/* Right: Credit */}
      <div className="text-sm text-center md:text-right">
        <p>Made with 💗 by Sundram Mishra</p>
        <p className="text-xs mt-1">&copy; {new Date().getFullYear()} FinTrack. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

        </body>
      </html>
    </ClerkProvider>
  );
}
