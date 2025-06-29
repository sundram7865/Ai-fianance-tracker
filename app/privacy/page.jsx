const PrivacyPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-4">Last Updated: June 29, 2025</p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>We do not sell your personal information to anyone.</li>
        <li>Your financial data is encrypted and securely stored.</li>
        <li>You have full control to delete your data and account anytime.</li>
      </ul>

      <p className="text-gray-500">
        For privacy concerns or questions, contact: <strong>privacy@fintrack.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPage;
