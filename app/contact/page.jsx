const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-2">📧 Email: support@fintrack.com</p>
      <p className="text-gray-700 mb-2">📞 Phone: +91-9876543210</p>
      <p className="text-gray-700 mb-6">🏢 Address: FinTrack HQ, Mumbai, India</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
        <a href="https://twitter.com/fintrack" className="text-blue-500 hover:underline block" target="_blank">
          Twitter
        </a>
        <a href="https://github.com/sundram7865/ai-finance-tracker" className="text-blue-500 hover:underline block" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
