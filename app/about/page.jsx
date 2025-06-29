"use client";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 py-20 px-6 md:px-12 lg:px-32">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">We're building the future of personal finance</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          FinTrack helps you understand your spending habits, grow your savings, and achieve smarter financial control — powered by AI, built for everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At FinTrack, our mission is to democratize financial management. We believe everyone should have access to intelligent tools that make managing money effortless — whether you're saving for your dreams, eliminating debt, or building wealth.
        </p>
      </section>

      {/* Timeline or Journey */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">How We Got Here</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">🚀 Founded in 2024</h3>
            <p className="text-gray-600">We started with a simple idea: help individuals make sense of their spending and gain financial confidence.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">💡 AI Integration</h3>
            <p className="text-gray-600">We integrated cutting-edge AI (Gemini) to provide smart, real-time insights for users.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🌐 2025 & Beyond</h3>
            <p className="text-gray-600">Today, FinTrack is growing  with hundreds of users, helping them gain control of their finances every day.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
  <h2 className="text-3xl font-semibold mb-4">Who I Am</h2>
  <p className="text-gray-600 text-lg">
    I'm a solo developer passionate about building meaningful tools that simplify personal finance. FinTrack is a product of my vision, design, and code — crafted with care to help individuals take smarter control of their money using the power of AI.
  </p>
</section>


      {/* Final CTA */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">Ready to take control of your finances?</h2>
        <a href="/dashboard">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
            Go to Dashboard
          </button>
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
