import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white flex space-x-4">
          <Link href="/">
            <p className="px-4 py-2 hover:bg-gray-700 rounded">Home</p>
          </Link>
          <Link href="/about">
            <p className="px-4 py-2 hover:bg-gray-700 rounded">About</p>
          </Link>
          <Link href="/contact">
            <p className="px-4 py-2 hover:bg-gray-700 rounded">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}