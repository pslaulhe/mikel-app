'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-20">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <Link href="/">
                    <a className="text-2xl font-bold text-white">Mountain Guide</a>
                </Link>
                <button
                    className="text-white md:hidden"
                    onClick={() => setNavOpen(!navOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {navOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                <ul
                    className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-900 md:bg-transparent transition-all duration-300 ${
                        navOpen ? 'block' : 'hidden'
                    }`}
                >
                    <li className="text-center md:text-left">
                        <Link href="/">
                            <a className="block text-white py-2 md:py-0 px-4 hover:underline">About</a>
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/">
                            <a className="block text-white py-2 md:py-0 px-4 hover:underline">Services</a>
                        </Link>
                    </li>
                    <li className="text-center md:text-left">
                        <Link href="/">
                            <a className="block text-white py-2 md:py-0 px-4 hover:underline">Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
