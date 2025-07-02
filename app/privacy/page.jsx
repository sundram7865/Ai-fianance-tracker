import Image from "next/image";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with logo */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/fintrack.png"
            alt="FinTrack Logo"
            width={48}
            height={48}
            className="object-contain rounded-xl"
          />
          <h1 className="text-2xl font-semibold text-blue-600">FinTrack</h1>
        </div>
        <span className="text-sm text-gray-500 hidden sm:block">
          Your financial companion
        </span>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-2">Privacy Policy</h2>
        <p className="text-sm text-gray-500 mb-8">Last Updated: June 29, 2025</p>

        <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
          <div className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl">🔒</span>
            <p className="text-gray-700">
              We do not sell your personal information to anyone.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-green-600 text-xl">🧾</span>
            <p className="text-gray-700">
              Your financial data is encrypted and securely stored.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-red-600 text-xl">🗑️</span>
            <p className="text-gray-700">
              You have full control to delete your data and account anytime.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-500 text-sm">
          For any privacy-related questions, reach out to{" "}
          <a
            href="mailto:privacy@fintrack.com"
            className="text-blue-600 font-medium hover:underline"
          >
            privacy@fintrack.com
          </a>
        </p>
      </main>
    </div>
  );
};

export default PrivacyPage;
