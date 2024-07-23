import Link from "next/link";
import Images from "../assets/svg/test.svg";

export default function NavBar() {
  return (
    <div className="bg-slate-700 text-white">
      <nav className="p-8">
        <div className="container mx-auto flex justify-between">
          <div className="text-orange-300 text-4xl">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-24 py-10">
        <div className="flex flex-col text-lg">
          <div className="py-4">{`<h2>`}</div>
          <div className="text-3xl">
            Hi, I'm <span className="text-orange-300">Pratik Choudhari</span>
          </div>
          <div className="text-3xl">{`I Tell Stories Through <code/>`}</div>
          <div className="py-4">{`</h2>`}</div>
          <div className="py-2">
            <br></br>
            {`<p>`}
          </div>
          <div>
            <p>
              As a Software Developer with over 3.4 years of industry
              experience, I specialize in creating innovative solutions on
              various platforms.
            </p>
            <p>
              My passion for technology and engineering drives me to constantly
              explore and implement cutting-edge developments in the field.
            </p>
          </div>
          <div className="py-2">{`</p>`}</div>
          <div className="py-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1lpPDp5gw6vWzIwi8kmEhczjQ-z5JxWH0"
              className="bg-slate-700 text-green-500 font-medium py-2 px-4 rounded inline-flex items-center border-2 border-green-400"
            >
              <span>Resume</span>
              <svg
                className="fill-current w-8 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Images />
        </div>
      </div>
      <div className="text-3xl font-bold text-orange-300 grid grid-cols-1 md:grid-cols-2 gap-4 px-24">
        <span>My Journey</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-24 py-10">
        <div className="flex items-center justify-center">
          <Images />
        </div>
        <div className="flex flex-col text-lg">
          <span>
            <p className="py-2">
              Hello! My name is Pratik Choudhari, and I am currently working at
              TruScholar as a MERN-Stack Developer since June 2023.
            </p>
            <p className="py-2">
              My journey to becoming a software developer began in May 2022,
              with the support of the SunBeam Institute of Information
              Technology in Pune. At that time, I only had a basic knowledge of
              programming, but I seized the opportunity to dive deeper during
              the PG-DAC course. This decision marked the start of an incredible
              learning experience.
            </p>
            <p className="py-2">
              I extensively utilized the resources provided by C-DAC, which
              helped me build a solid foundation in software development. Over
              time, I have honed my skills and now specialize in React, Next.js,
              Node.js, and MongoDB. I am proud to say that I can independently
              create software applications.
            </p>
            <p>
              Post-Graduation: Deploma in Advance Computing(PD-DAC),
              SunBeam-Pune
            </p>
            <p>Email: pratikchoudharij@gmail.com</p>
            <p>Location: Maharashtra,</p>
            <p>India </p>
            <p className="py-2">Technical Skills:</p>
            <ul className="list-disc pl-5 text-green-400">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
