"use client";

import Link from "next/link";
import Image from "next/image";
import Images from "../public/assets/svg/men.svg";
import Images1 from "../public/assets/svg/men1.svg";

export default function NavBar() {
  return (
    <div className="bg-slate-700 text-white">
      <nav className="p-6 mx-auto rounded-xl shadow-md">
        <div className="md:hidden">
          <div className="text-orange-300 text-4xl">
            <h1>{`<Pratik />`}</h1>
          </div>
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                className="block px-4 py-2 rounded-md hover:bg-green-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-4 py-2 rounded-md hover:bg-green-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block px-4 py-2 rounded-md hover:bg-green-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="block px-4 py-2 rounded-md hover:bg-green-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 rounded-md hover:bg-green-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="container mx-auto hidden md:block">
          <div className="flex justify-between ">
            <div className="text-orange-300 text-4xl">
              <h1>{`<Pratik Choudhari />`}</h1>
            </div>
            <div className="text-white flex">
              <Link href="#home">
                <p className="px-4 py-2 rounded block hover:bg-green-500">
                  Home
                </p>
              </Link>
              <Link href="#about">
                <p className="px-4 py-2 rounded block hover:bg-green-500">
                  About
                </p>
              </Link>
              <Link href="#experience">
                <p className="px-4 py-2 rounded block hover:bg-green-500">
                  Experience
                </p>
              </Link>
              <Link href="#project">
                <p className="px-4 py-2 rounded block hover:bg-green-500">
                  Projects
                </p>
              </Link>
              <Link href="#contact">
                <p className="px-4 py-2 rounded block hover:bg-green-500">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 px-12 mt-8"
      >
        <div className="flex flex-col text-lg">
          <div className="py-4">{`<h2>`}</div>
          <div className="text-3xl">
            Hi, I&apos;m{" "}
            <span className="text-orange-300">Pratik Choudhari</span>
          </div>
          <div className="text-3xl">{`I Tell Stories Through <code/>`}</div>
          <div className="py-4">{`</h2>`}</div>
          <div className="">
            <br></br>
            {`<p>`}
          </div>
          <div>
            <p>
              As a MERN Stack Developer with over 1 year of experience, I
              specialize in developing dynamic and responsive applications.
            </p>
            <p>
              My enthusiasm for technology and engineering motivates me to
              continuously learn and apply the latest advancements in the field.
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
        <div className="hidden md:block items-center justify-center h-[450px] w-[650px]">
          <Images />
        </div>
      </div>
      <div
        id="about"
        className="text-3xl font-bold text-orange-300 grid grid-cols-1 md:grid-cols-2 gap-4 px-12 mt-8"
      >
        <span>My Journey</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-12">
        <div className="hidden md:block items-center justify-center">
          <Images1 />
        </div>

        <div className="flex flex-col">
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
        </div>
      </div>

      <div
        id="experience"
        className="grid grid-cols-1 md:grid-cols-1 gap-4 px-12"
      >
        <div>
          <p className="text-3xl text-orange-300">Where I&apos;ve Worked</p>
        </div>

        <div className="mt-4">
          <p className="text-xl">
            <span>MERN-Stack Developer</span>
            <a href="https://www.truscholar.io/" target="_blank">
              <span className="text-green-300">{"    "}@TruScholar</span>
            </a>
          </p>
          <p className="text-xs">June, 2023 - Present</p>

          <ul className="list-disc list-inside">
            <li className="mt-2">
              I have acquired industry experience by actively engaging in React
              and Node.js coding, effectively enhancing the platform&apos;s
              functionality. I&apos;ve successfully rectified multiple bugs,
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
              To enhance performance, I&apos;m implementing pagination on tables
              to minimize loading times and optimize user experience.
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

      <div
        id="project"
        className="grid grid-cols-1 md:grid-cols-1 gap-4 px-12 py-10"
      >
        <div>
          <p className="text-3xl text-orange-300">Some of My Personal Projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
          <div className="hidden md:block items-center justify-center h-[15rem] w-[30rem]">
            <Image width={650} height={450} src="./png/cicd.png" alt="" />
          </div>
          <div className="md:hidden justify-center h-[10rem] w-[15rem] ">
            <Image width={650} height={450} src="./png/cicd.png" alt="" />
          </div>
          <div className="flex flex-col text-lg">
            <p className="text-2xl text-green-300">CI/CD Pipeline</p>
            <p className="text-xs py-1">Github Actions </p>
            <p className="text-sm py-1">
              By implementing this CI/CD pipeline, I have demonstrated my
              ability to automate the deployment process, ensuring that code
              changes are continuously integrated and deployed to production
              with minimal manual intervention. This project highlights my
              skills in modern development practices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
          <div className="hidden md:block items-center justify-center h-[15rem] w-[30rem]">
            <Image
              width={650}
              height={450}
              src="./png/portfolio.png"
              alt=""
            />
          </div>
          <div className="md:hidden justify-center h-[10rem] w-[15rem] ">
            <Image
              width={650}
              height={450}
              src="./png/portfolio.png"
              alt=""
            />
          </div>
          <div className="flex flex-col text-lg">
            <p className="text-2xl text-green-300">Portfolio Website</p>
            <p className="text-xs py-1">Nextjs + Tailwindcss</p>
            <p className="text-sm py-1">
              A simple portfolio website built using Angular and hosted on the
              internet using Firebase. The font, colours and overall design took
              me 3 design iterations and almost a month to finalize which was
              more than the actual time I took to fully develop and deploy it.
            </p>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="grid grid-cols-1 md:grid-cols-1 gap-4 px-12 py-10"
      >
        <div>
          <p className="text-3xl text-orange-300">Contact Me</p>
        </div>
        <div>
          <p>Primary</p>
          <a href="mailto:pratikchoudharij@gmail.com">
            <Image
              width={50}
              height={50}
              alt="mail"
              src="./png/mailicon.png"
            />
          </a>
        </div>
        <div>
          <p>Social</p>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/pratik-choudhari-073412295/"
              target="_blank"
            >
              <Image
                width={50}
                height={50}
                alt="linkedin"
                src="./assets/svg/linkedin.svg"
              />
            </a>
            <a
              href="https://github.com/Pratikc27"
              target="_blank"
              className="mt-2.5 px-4"
            >
              <Image
                width={50}
                height={50}
                alt="github"
                src=".next/png/github.png"
              />
            </a>
          </div>
        </div>

        <div className="mt-4">
          <p></p>
        </div>
      </div>
      <div className="text-xs text-center p-12">
        <p>Created and Developed by Pratik Choudhari @ 2024</p>
      </div>
    </div>
  );
}
