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
        <div className="flex flex-col ">
          <div>{`<h2>`}</div>
            <div>Hi,</div>
            <div>I'm Pratik Choudhari</div>
            <div>{`I Tell Stories Through <code/>`}</div>
            <div>{`</h2>`}</div>
            <div>{`<p>`}</div>
            <div><p>As a Software Developer with over 3.4 years of industry experience, I specialize in creating innovative solutions on various platforms.</p> 
              <p>My passion for technology and engineering drives me to constantly explore and implement cutting-edge developments in the field.</p></div>
            <div>{`</p>`}</div>
            <div>
              <a href="https://drive.google.com/uc?export=download&id=1lpPDp5gw6vWzIwi8kmEhczjQ-z5JxWH0" >Resume</a>
            </div>
        </div>
        <div className="flex items-center justify-center">
          <Images />
        </div>
      </div>
    </div>
  );
}