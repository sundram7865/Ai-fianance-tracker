// app/about/page.jsx

import React from "react";

export const metadata = {
  title: "About | FinTrack",
  description: "Learn about the vision and mission behind FinTrack",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">About FinTrack</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">My Mission</h2>
        <p className="text-gray-600 text-lg">
          FinTrack is built to empower individuals to take control of their financial lives using the power of AI. I&apos;m committed to making financial tools intelligent, user-friendly, and accessible — helping users make informed decisions every step of the way.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Who I Am</h2>
        <p className="text-gray-600 text-lg">
          I&apos;m a solo developer passionate about technology, design, and personal finance. FinTrack is the result of countless hours of effort — from designing user interfaces to integrating powerful AI-driven insights and secure backend systems.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">What Makes FinTrack Different</h2>
        <ul className="list-disc pl-6 text-gray-600 text-lg space-y-2">
          <li>AI-powered budgeting and expense tracking</li>
          <li>Real-time visual dashboards</li>
          <li>Clean, intuitive design for ease of use</li>
          <li>Built with privacy, speed, and scalability in mind</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Built with Love</h2>
        <p className="text-gray-600 text-lg">
          From the backend logic to the UI polish, every part of FinTrack is handcrafted with care and love. I hope this tool helps you save more, spend smarter, and live better.
        </p>
      </section>
    </div>
  );
}
