import Link from 'next/link';
import Images from '../assets/svg/test.svg';

export default function NavBar() {
  return (
    <div className="bg-slate-700">
      <nav className="p-4">
        <div className="container mx-auto flex justify-between">
          <div className='text-orange-500 text-4xl'>
            <h1>{`<Pratik Choudhari />`}</h1>
          </div>
          <div className="text-white flex">
            <Link href="/">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">Home</p>
            </Link>
            <Link href="/about">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">About</p>
            </Link>
            <Link href="/experience">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">Experience</p>
            </Link>
            <Link href="/project">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">Projects</p>
            </Link>
            <Link href="/contact">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">Contact</p>
            </Link>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="flex flex-col justify-center ">
          <div>{`<h1>`}</div>
          <div>
            <p>Hi,</p>
            <p>I'm Pratik Choudhari</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Images />
        </div>
      </div>
    </div>
  );
}