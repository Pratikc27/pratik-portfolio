"use client"

import Link from "next/link";
import Images from "../public/assets/svg/men.svg";
import Images1 from "../public/assets/svg/men1.svg";

export default function NavBar() {
  return (
    <div className="bg-slate-700 text-white">
      <nav className="p-8">
        <div className="container mx-auto flex justify-between">
          <div className="text-orange-300 text-4xl">
            <h1>{`<Pratik Choudhari />`}</h1>
          </div>
          <div className="text-white flex">
            <Link href="#home">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">Home</p>
            </Link>
            <Link href="#about">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">About</p>
            </Link>
            <Link href="#experience">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">Experience</p>
            </Link>
            <Link href="#project">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">Projects</p>
            </Link>
            <Link href="#contact">
              <p className="px-4 py-2 hover:bg-gray-700 rounded">Contact</p>
            </Link>
          </div>
        </div>
      </nav>
      <div id="home" className="grid grid-cols-1 md:grid-cols-2 gap-4 px-24 mt-8">
        <div className="flex flex-col text-lg">
          <div className="py-4">{`<h2>`}</div>
          <div className="text-3xl">
            Hi, I'm <span className="text-orange-300">Pratik Choudhari</span>
          </div>
          <div className="text-3xl">{`I Tell Stories Through <code/>`}</div>
          <div className="py-4">{`</h2>`}</div>
          <div className="">
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
        <div className="flex items-center justify-center h-[450px] w-[650px]">
          <img src="/assets/svg/men.svg" className="h-full w-full"/>
        </div>
      </div>
      <div id="about" className="text-3xl font-bold text-orange-300 grid grid-cols-1 md:grid-cols-2 gap-4 px-24 mt-16">
        <span>My Journey</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-24 py-10">
        <div className="flex items-center justify-center">
          <Images1 />
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

      <div id="experience" className="grid grid-cols-1 md:grid-cols-1 gap-4 px-24 py-10">
        <div>
          <p className="text-3xl">Where I've Worked</p>
        </div>

        <div className="mt-4">
          <p className="text-xl">
            <span>MERN-Stack Developer</span>
            <a href="https://www.truscholar.io/" alt="" target="_blank">
              <span className="text-green-300">{"    "}@TruScholar</span>
            </a>
          </p>
          <p className="text-xs">June, 2023 - Present</p>

          <ul className="list-disc list-inside">
            <li className="mt-2">
              I have acquired industry experience by actively engaging in React
              and Node.js coding, effectively enhancing the platform's
              functionality. I've successfully rectified multiple bugs,
              contributing to a smoother operation of the platform.
            </li>
            <li>
              Developed and maintained both front-end and back-end components of
              web applications.
            </li>
            <li>
              Collaborated with cross-functional teams to design and implement
              new features.
            </li>
            <li>
              Troubleshot and fixed bugs to ensure smooth platform operation.
            </li>
            <li>
              Optimized application performance for better efficiency and user
              experience.
            </li>
            <li>Ensured scalability and security of web applications.</li>
            <li>
              Worked closely with UX/UI designers to deliver an exceptional user
              experience.
            </li>
            <li>
              To enhance performance, I'm implementing pagination on tables to
              minimize loading times and optimize user experience.
            </li>
            <li>
              Setting up Redux Toolkit in a real-time project is a smart move
              for managing state efficiently.
            </li>
            <li>
              Conducted white box testing and used Postman for API testing.
            </li>
          </ul>
        </div>

      </div>
      
      <div id="project" className="grid grid-cols-1 md:grid-cols-1 gap-4 px-24 py-10">
        <div>
          <p className="text-3xl">Some of My Personal Projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-12 py-10">
        <div className="items-center justify-center h-[200px] w-[450px]">
          <img src="assets/png/portfolio.png"  className="h-full w-full " alt="frame" />
        </div>
        <div className="flex flex-col text-lg">
          <p className="text-2xl text-green-300">Portfolio Website</p>
          <p className="text-xs py-1">Nextjs + Tailwindcss</p>
          <p className="text-sm py-1">A simple portfolio website built using Angular and hosted on the internet using Firebase. The font, colours and overall design took me 3 design iterations and almost a month to finalize which was more than the actual time I took to fully develop and deploy it.</p>
        </div>
      </div>

        </div>

        <div id="contact" className="grid grid-cols-1 md:grid-cols-1 gap-4 px-24 py-10">
        <div>
          <p className="text-3xl">Contact Me</p>
        </div>
        <div>
          <p>Primary</p>
          <a href="mailto:pratikchoudharij@gmail.com"><img src="/assets/png/mailicon.png" /></a>
        </div>
        <div>
          <p>Social</p>
          <a href="https://www.linkedin.com/in/pratik-choudhari-073412295/" target="_blank"><img src="/assets/svg/linkedin.svg" /></a>
        </div>

        <div className="mt-4">
         <p></p>
        </div>

      </div>
    </div>
  );
}
