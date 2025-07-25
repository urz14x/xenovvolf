"use client";
import Image from "next/image";
import { IBM_Plex_Sans_KR, IBM_Plex_Sans } from "next/font/google";
import SectionContainer from "@/components/Section/SectionContainer";

import Experience from "@/components/Experience/Experience";
import Project from "@/components/Project/Project";
import Footer from "@/components/Footer/Footer";

const IBM_plex_sans_kr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: "700",
});

const IBM_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const skills = [
  { name: "Adobe Premiere Pro", icon: "/img/premiere.png" },
  { name: "Adobe Photoshop", icon: "/img/photoshop.png" },
  { name: "Adobe Audition", icon: "/img/audition.png" },
  { name: "Adobe Media Encoder", icon: "/img/media_encoder.png" },
  { name: "Adobe Illustrator", icon: "/img/illustrator.png" },
  { name: "DaVinci Resolve", icon: "/img/davinci.png" },
  { name: "Blender 3d", icon: "/img/blender.png" },
];

export default function Home() {
  return (
    <>
      <div className={IBM_plex_sans.className}>
        <div className="min-h-screen mx-auto max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:flex-row flex-col lg:gap-4 text-clrs-primary-50">
            <header className="lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:flex lg:flex-col">
              <div className=" lg:px-20 flex flex-col justify-between h-full py-8">
                <div className="flex flex-col mt-0 sm:mt-16 space-y-5">
                  <Image
                    src="/img/profile.png"
                    width={300}
                    height={300}
                    alt="Xenovvolf Profile"
                  />
                  <div>
                    <h1
                      className={
                        (IBM_plex_sans_kr.style,
                        "capitalize text-4xl font-bold ca")
                      }
                    >
                      XENOVVOLF
                    </h1>
                    <h3
                      className={
                        (IBM_plex_sans_kr.className, "text-xl capitalize")
                      }
                    >
                      Editor Video & graphic designer
                    </h3>
                  </div>
                  <p className="antialiased hyphens-manual text-sm">
                    Make a web portfolio, I&apos;m is editor video, graphic
                    designer based in bandung, I like simple and cool idea for
                    that&apos;s challenging me to make a goat concept. I have
                    experience 5 years
                  </p>
                  <nav className="hidden lg:block">
                    <ul className="flex flex-col space-y-5 w-max">
                      <li>
                        <a href="#about" className="group flex items-center">
                          <span
                            className={`nav-indicator w-8 transition-all h-px mr-4 bg-clrs-primary-50 `}
                          ></span>
                          <span className="tracking-wide font-semibold uppercase antialiased text-sm">
                            about
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#skill" className="group flex items-center">
                          <span
                            className={`nav-indicator w-8 transition-all h-px mr-4 bg-clrs-primary-50 `}
                          ></span>
                          <span className="tracking-wide font-semibold uppercase antialiased text-sm">
                            skill
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#experiences"
                          className="group flex items-center"
                        >
                          <span
                            className={`nav-indicator w-8 transition-all h-px mr-4 bg-clrs-primary-50`}
                          ></span>
                          <span className="tracking-wide font-semibold uppercase antialiased text-sm">
                            experience
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#projects" className="group flex items-center">
                          <span
                            className={`nav-indicator w-8 transition-all h-px mr-4 bg-clrs-primary-50`}
                          ></span>
                          <span className="tracking-wide font-semibold uppercase antialiased text-sm">
                            projects
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* AKHIR NAV */}
                </div>
                <ul
                  className="flex items-center space-x-5 mt-5 transition-transform"
                  aria-label="Social Media"
                >
                  <li className=" hover:scale-125 transition-transform">
                    <a
                      href="https://www.instagram.com/xenovvolf/"
                      target="_blank"
                      className=""
                    >
                      <Image
                        src="/instagram.png"
                        alt="Fiverr"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className=" hover:scale-125 transition-transform">
                    <a
                      href="https://www.youtube.com/xenovvolf"
                      target="_blank"
                    >
                      <Image
                        src="/youtube.png"
                        alt="Fiverr"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className=" hover:scale-125 transition-transform">
                    <a href="https://x.com/xenovvolf" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 25"
                        className="h-6 w-6"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill="currentColor"
                          d="M17.403 4.25h2.882l-6.296 7.201 7.407 9.799h-5.8l-4.542-5.943-5.198 5.943H2.973l6.734-7.702L2.602 4.25h5.946l4.106 5.432 4.75-5.432Zm-1.011 15.274h1.597L7.68 5.885H5.967z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className=" hover:scale-125 transition-transform">
                    <a href="https://www.fiverr.com/xenovvolf" target="_blank">
                      <Image
                        src="/fiverr.svg"
                        alt="Fiverr"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className=" hover:scale-125 transition-transform">
                    <a href="https://xenovvolf.artstation.com/" target="_blank">
                      <Image
                        src="/artstation.png"
                        alt="Art station"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className=" hover:scale-125 transition-transform">
                    <a href="https://www.lynk.id/xenovvolf" target="_blank">
                    <Image
                        src="/lynk.png"
                        alt="Lynx.id"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                  <li className=" hover:scale-125 transition-transform">
                    <a href="https://www.linkedin.com/in/xenovvolf" target="_blank">
                      <Image
                        src="/linkedin.svg"
                        className="text-white"
                        alt="Linkedin"
                        width={25}
                        height={25}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </header>
            <main className="lg:w-1/2 w-full pt-24 lg:py-24 py-5">
              <SectionContainer
                id="about"
                className="mb-16 scroll-mt-16 md:mb-24"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#131112]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h1 className="text-sm font-bold uppercase tracking-widest not-sr-only lg:sr-only">
                    About
                  </h1>
                </div>
                <p className="mb-16">
                  Hello! I&apos;m Vicky a.k.a Xenovvolf, I thrive on bringing
                  ideas to life through dynamic visuals and compelling
                  soundscapes. My passion lies in transforming concepts into
                  captivating stories, whether it&apos;s for a high-energy
                  commercial, an engaging podcast, or an immersive game
                  experience. I Like a good creative challenge, and that&apos;s
                  precisely why I&apos;ve embraced the &apos;goat&apos; concept
                  – always striving for excellence in every project.
                </p>

                <section className="flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <h3 className="relative inline-block text-lg font-semibold text-gray-300 mb-4">
                      🎬 Video Editing
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500"></span>
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 px-3">
                      <li>Commercials</li>
                      <li>Podcasts</li>
                      <li>Game Footage</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="relative inline-block text-lg font-semibold text-gray-300 mb-4">
                      🎧 Sound Design
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500"></span>
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 px-3">
                      <li>Sound FX for various projects</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="relative inline-block text-lg font-semibold text-gray-300 mb-4">
                      🎨 Graphic Design
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500"></span>
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 px-3">
                      <li>Logo Design</li>
                      <li>Commercial Assets</li>
                    </ul>
                  </div>
                </section>
              </SectionContainer>
              <SectionContainer
                id="skill"
                className="mb-16 scroll-mt-16 md:mb-24"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#131112]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h1 className="text-sm font-bold uppercase tracking-widest not-sr-only lg:sr-only">
                    Skill
                  </h1>
                </div>
                <article className="mb-6">
                  <article className="mb-6">
                    <ul className="space-y-3">
                      {skills.map((skill, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-4 px-4 py-2 shadow-sm rounded-lg hover:bg-gray-900 cursor-pointer transition"
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={28}
                            height={28}
                            className="rounded"
                          />
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </article>
              </SectionContainer>
              <SectionContainer
                id="experiences"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 "
              >
                <div className="sticky top-0 max-w-full bg-[#131112]/75 lg:mx-auto py-5 lg:w-full lg:px-0 lg:relative backdrop-blur ">
                  <h1 className="text-sm font-bold uppercase tracking-widest not-sr-only lg:sr-only">
                    Experience
                  </h1>
                </div>
                <Experience
                  titleExp="Royal Enfield Nusantara Group"
                  year="2020 - Now"
                  tag="Freelancer"
                ></Experience>

                <Experience
                  titleExp="Ratu Reyhan Textile"
                  year="2019 - 2020"
                  tag="Work"
                ></Experience>
                <Experience
                  titleExp="Hinode 国際言葉学院 Bandung"
                  year="2015 - 2017"
                  tag="Student"
                ></Experience>
                <Experience
                  titleExp="SMAN 1 Cicalengka "
                  year="2013 - 2016"
                  tag="Student"
                ></Experience>
                <div>
                  <a
                    className="flex items-center gap-1"
                    href="/resume-ustami-rajib.pdf"
                    download
                  >
                    <span> View My Resume</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-up-right"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </a>
                </div>
              </SectionContainer>
              <SectionContainer
                id="projects"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 "
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#131112]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h1 className="text-sm font-bold uppercase tracking-widest not-sr-only lg:sr-only">
                    projects
                  </h1>
                </div>
                <Project id="#projects" />
              </SectionContainer>
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
