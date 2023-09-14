import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-evenly items-center py-2 shadow-md mb-2">
        <a href="/">
          <img className="w-40 " src="/assets/logo.png" alt="Elektronix Logo" />
        </a>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-black hover:text-secondary">
            Home
          </Link>
          <Link href="/products" className="text-black hover:text-secondary">
            Products
          </Link>
          <Link href="/about" className="text-black hover:text-secondary">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-secondary">
            Contact
          </Link>
          <Link href="/contact" className="text-black hover:text-secondary">
            Sign Up
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <input
            placeholder="What are you looking for? "
            className="flex border px-2 py-2 rounded-md bg-gray-50 "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <Link href="/wishlist" className="text-black hover:text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </Link>
          <Link href="/cart" className="text-black hover:text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
        </div>
      </div>

    </>
  );
}
