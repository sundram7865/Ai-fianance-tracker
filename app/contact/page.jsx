import React from "react";
import { Mail, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-600 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Contact us</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Let&apos;s talk about your financial goals. Send us a message and we&apos;ll get back to you within one business day.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded font-semibold hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 w-full md:max-w-sm space-y-4 text-sm text-gray-600">
            <p className="font-semibold">contact@fintrack.com</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Twitter className="w-4 h-4 text-blue-500" />
                <a href="https://twitter.com" className="hover:underline">Twitter</a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-600" />
                <a href="https://facebook.com" className="hover:underline">Facebook</a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-blue-700" />
                <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-500" />
                <a href="https://instagram.com" className="hover:underline">Instagram</a>
              </div>
            </div>

            <p className="text-xs mt-4">
              Already using FinTrack?{" "}
              <a href="/dashboard" className="text-indigo-600 underline">
                Go to your dashboard
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
