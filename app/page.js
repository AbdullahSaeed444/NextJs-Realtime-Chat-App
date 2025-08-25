import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
    {/* Hero Section */}
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Welcome to YouChat
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
        Connect instantly with your friends and teams. Fast, secure, and built for everyone.
      </p>
      <div>
        <a
          href="#pricing"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>

    {/* Features Section */}
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose YouChat?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="bg-gray-50 shadow-lg p-6 rounded-xl hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Messaging</h3>
          <p className="text-gray-600">
            Your conversations are protected with end-to-end encryption.
          </p>
        </div>
        <div className="bg-gray-50 shadow-lg p-6 rounded-xl hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Reliable</h3>
          <p className="text-gray-600">
            Experience real-time chat with zero delays and high uptime.
          </p>
        </div>
        <div className="bg-gray-50 shadow-lg p-6 rounded-xl hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful UI</h3>
          <p className="text-gray-600">
            Enjoy a sleek, modern interface designed for productivity.
          </p>
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section id="pricing" className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Free Plan */}
        <div className="bg-white shadow-lg p-8 rounded-xl hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Free</h3>
          <p className="text-gray-600 mb-6">Perfect for personal use</p>
          <p className="text-4xl font-extrabold text-indigo-600 mb-6">$0</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ Unlimited messaging</li>
            <li>✔ 1-on-1 chats</li>
            <li>✖ Group chats</li>
          </ul>
          <a
            href="#"
            className="block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Pro Plan */}
        <div className="bg-white shadow-lg p-8 rounded-xl hover:shadow-xl transition border-2 border-indigo-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Pro</h3>
          <p className="text-gray-600 mb-6">For teams and professionals</p>
          <p className="text-4xl font-extrabold text-indigo-600 mb-6">$9/mo</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ Everything in Free</li>
            <li>✔ Group chats</li>
            <li>✔ Voice & Video calls</li>
          </ul>
          <a
            href="#"
            className="block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Choose Pro
          </a>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white shadow-lg p-8 rounded-xl hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise</h3>
          <p className="text-gray-600 mb-6">Best for organizations</p>
          <p className="text-4xl font-extrabold text-indigo-600 mb-6">Custom</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ Everything in Pro</li>
            <li>✔ Advanced security</li>
            <li>✔ 24/7 support</li>
          </ul>
          <a
            href="#"
            className="block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  </main>
  );
}

export const metadata = {
  title: "Home - YouChat",
  description: "YouChat helps you connect with people",
};
