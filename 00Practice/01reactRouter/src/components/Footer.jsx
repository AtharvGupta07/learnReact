import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-yellow-200 border-t border-gray-300 text-gray-900 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <p className="text-2xl font-bold">Logo</p>
            <p className="mt-2 text-gray-700">
              A simple React Router demo. Use the links to navigate between pages.
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold">Quick Links</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="text-gray-800 hover:text-blue-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800 hover:text-blue-700 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-800 hover:text-blue-700 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold">Account</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/login" className="text-gray-800 hover:text-blue-700 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-800 hover:text-blue-700 transition-colors">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-6">
          <p className="text-sm text-gray-700 text-center">
            © {new Date().getFullYear()} Your App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer