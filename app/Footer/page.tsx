import React from "react";

export default function page() {
  return (
    <footer className="bg-[#052f2f] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
            🦎 AI RISK Solution
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            Automated testing platform to continuously secure LLM agents,
            preventing hallucinations & security issues.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" className="hover:text-green-400">
              in
            </a>
            <a href="#" className="hover:text-green-400">
              ai
            </a>
            <a href="#" className="hover:text-green-400">
              ◎
            </a>
            <a href="#" className="hover:text-green-400">
              ▶
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            © Ai Trade AI SAS - Built in India
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Product</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              Continuous Red Teaming
            </li>
            <li className="hover:text-white cursor-pointer">LLM Evaluation</li>
            <li className="hover:text-white cursor-pointer">Open Source</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Tutorials</li>
            <li className="hover:text-white cursor-pointer">White Papers</li>
            <li className="hover:text-white cursor-pointer">Glossary</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Story</li>
            <li className="hover:text-white cursor-pointer">Team</li>
            <li className="hover:text-white cursor-pointer">Partners</li>
            <li className="hover:text-white cursor-pointer">Investors</li>
            <li className="hover:text-white cursor-pointer">Jobs</li>
            <li className="hover:text-white cursor-pointer">Brand</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
          </ul>
        </div>

        {/* Research */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Research</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              Phare LLM Benchmark
            </li>
            <li className="hover:text-white cursor-pointer">
              Real Performance DB
            </li>
            <li className="hover:text-white cursor-pointer">Real Harm DB</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>Cookies settings</p>
        <p>Legal</p>
      </div>
    </footer>
  );
}
