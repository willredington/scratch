import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-2 w-full dark:bg-gray-800">
      <div className="flex items-center justify-between px-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            Auto Task
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="#" className="me-4 hover:underline md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="me-4 hover:underline md:me-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
