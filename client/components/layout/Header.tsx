import React, { useState } from 'react';
import Link from 'next/link';
import { Iprops } from './../../utility/interfaces';

const Header: React.FC<Iprops> = (props) => {
  const [auth, setAuth] = useState(false);
  return (
    <header>
      <nav className="flex justify-between items-center py-3 px-8 md:px-24 border-b">
        <div className="font-bold text-2xl">TSCAPP</div>
        {auth && (
          <ul className="flex space-x-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        )}
        <div className="flex space-x-4">
          <Link href="/login">
            <button className="btn border-gray-300 hover:border-gray-700 border">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white">
              Register
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
