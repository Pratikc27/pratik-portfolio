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
    <div >
      <div className=' grid-cols-4'>
<p>is an XML namespace, first defined in the Scalable
   Vector Graphics (SVG) 1.0 Specification and subsequently 
   added to by SVG 1.1, SVG 1.2 and SVG 2. The SVG namespace 
   is mutable; names may be added over time by the W3C SVG 
   Working Group by publication in W3C Technical Reports. 
   is an XML namespace, first defined in the Scalable Vector 
   Graphics (SVG) 1.0 Specification and subsequently added to 
   by SVG 1.1, SVG 1.2 and SVG 2. The SVG namespace is mutable; 
   names may be added over time by the W3C SVG Working Group by 
   publication in W3C Technical Reports. is an XML namespace, 
   first defined in the Scalable Vector Graphics (SVG) 1.0 
   Specification and subsequently added to by SVG 1.1, SVG 1.2 
   and SVG 2. The SVG namespace is mutable; names may be added 
   over time by the W3C SVG Working Group by publication in W3C 
   Technical Reports. is an XML namespace, first defined in the 
   Scalable Vector Graphics (SVG) 1.0 Specification and 
   subsequently added to by SVG 1.1, 
  SVG 1.2 and SVG 2. The SVG namespace is mutable; names 
  may be added over time by the W3C SVG Working Group by 
  publication in W3C Technical Reports. v</p>
      </div>
      <div className=' grid-cols-4 '>
        <Images />
      </div>
    </div>
    </div>
  );
}