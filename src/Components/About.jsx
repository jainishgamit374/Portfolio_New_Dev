import React, { useState, useEffect } from "react";
import {profile} from "../utils";
import gsap, { Elastic } from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const aiAutomationSkills = [
    "Python",
    "OpenAI API",
    "Claude API",
    "LangChain",
    "Zapier",
    "Make.com",
    "n8n",
    "Bubble",
    "Airtable",
  ];
  const saasWorkflowSkills = [
    "Workflow Design",
    "Process Automation",
    "API Integration",
    "No-Code Solutions",
    "Business Logic",
    "Data Analysis",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    const profcont = document.querySelector(".profile-cont");
    const prof = document.querySelector(".profile");

    // Mouse move stuff //
    const activateMagneto = (event) => {
      if (isMobile) return; // Disable for mobile devices

      let boundBox = profcont.getBoundingClientRect();
      const magnetoStrength = 40;
      const magnetoTextStrength = 80;

      const shiftX =
        (event.clientX - boundBox.left) / profcont.offsetWidth - 0.5;
      const shiftY =
        (event.clientY - boundBox.top) / profcont.offsetHeight - 0.5;

      //  Move the button to it's new position //
      gsap.to(profcont, {
        duration: 0.5,
        x: shiftX * magnetoStrength,
        y: shiftY * magnetoStrength,
        ease: "power4.easeOut",
      });

      //  Move the text to it's new position //
      gsap.to(prof, {
        duration: 0.5,
        x: shiftX * magnetoTextStrength,
        y: shiftY * magnetoTextStrength,
        ease: "power4.easeOut",
      });
    };

    // Mouse leave stuff //
    const resetMagneto = () => {
      if (isMobile) return; // Disable for mobile devices

      gsap.to(profcont, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });

      gsap.to(prof, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    };

    // Add event listeners for mousemove and mouseleave
    profcont.addEventListener("mousemove", activateMagneto);
    profcont.addEventListener("mouseleave", resetMagneto);

    return () => {
      profcont.removeEventListener("mousemove", activateMagneto);
      profcont.removeEventListener("mouseleave", resetMagneto);
    };
  }, [isMobile]);

  return (
    <div
      className="relative w-full text-center justify-center py-10 overflow-hidden"
      id="about"
    >
      <div className="heading max-w-screen-xl mx-auto flex items-center justify-between pb-12 px-4">
        <h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-semibold tracking-tight">
          About me
        </h1>
        <div className="w-1/3 h-1 bg-white"></div>
      </div> 
      <div className="inf-cont w-full min-h-screen bg-white flex items-center justify-center py-10">
        <div className="heading w-full max-w-screen-xl mx-auto flex items-center flex-col gap-4 md:gap-6 lg:gap-8 py-10 px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {/* Profile Section - Left Column */}
            <div className="order-2 lg:order-1 bg-[#232323] rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[500px] lg:min-h-[600px] relative overflow-hidden">
              <svg
                className="absolute scale-[250%] lg:top-14 lg:scale-150 lg:w-[50vw] lg:h-[50vh] lg:-rotate-6  "
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 400"
              >
                <path
                  d="M391.27557373046875,-0.4199475049972534C423.74256103515626,27.531758475303647,529.5648681640625,62.292215223312375,526.5546875,116.04549407958984C523.5445068359375,169.7987729358673,365.187333984375,157.32800537109375,378.733154296875,223.5520477294922C392.278974609375,289.7760900878906,533.9726171875,351.5565344238281,582.99560546875,391.97900390625"
                  fill="none"
                  stroke-width="22"
                  stroke='url("#SvgjsLinearGradient1004")'
                  stroke-linecap="round"
                ></path>
                <defs>
                  <linearGradient id="SvgjsLinearGradient1004">
                    <stop stop-color="#FFFFFF" offset="0"></stop>
                    <stop stop-color="#FFFFFF" offset="1"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-end">
                <div className="col-span-1 md:col-span-2 lg:col-span-2  rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-10 lg:p-10 flex items-center justify-center">
                  <div className="profile-cont w-40 h-40 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full bg-zinc-700 overflow-hidden drop-shadow-2xl shadow-gray-50 flex items-center justify-center">
                    <img
                      className="profile w-[90%] h-[90%] bg-zinc-200 object-cover rounded-full"
                      src={profile}
                      alt="Profil-Image"
                    />
                  </div>
                </div>
              </div>
              <div className="text-white mt-2 lg:mt-6">
                <h1 className=" text-[14vw] lg:text-[8vw] text-start leading-none">
                  I'm <br /> Jainish!
                </h1>
              </div>
            </div>

            {/* Skills Section - Right Column */}
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              {/* Development Container */}
              <div className="rounded-3xl p-8 lg:p-10 bg-[#232323] flex flex-col items-start gap-4 relative overflow-hidden min-h-[280px]">
                <svg
                  className="absolute scale-[280%] -top-24 left-44 lg:-top-20 lg:scale-90 w-[50vw] h-[50vh] -rotate-3"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 800 400"
                >
                  <path
                    d="M222.8486328125,-0.4199475049972534C245.24583435058594,32.27996470530828,305.2703348795573,164.27413258949915,357.2318420410156,195.77952575683594C409.19334920247394,227.28491892417273,460.8562367757161,208.62057749430338,534.61767578125,188.61241149902344C608.3791147867838,168.6042455037435,755.6033426920573,94.54417673746745,799.8004760742188,75.73052978515625"
                    fill="none"
                    stroke-width="30"
                    stroke="#ffffff"
                    stroke-linecap="round"
                  ></path>
                  <defs>
                    <linearGradient id="SvgjsLinearGradient1001">
                      <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                      <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className="text-2xl lg:text-3xl text-white">AI & AUTOMATION</h1>
                <h2 className="text-gray-400">Description</h2>
                <div className="paragraph">
                  <p className="text-base text-start lg:text-md text-gray-300">
                    I create intelligent automation solutions using AI and modern tools
                    to streamline business processes and enhance productivity with
                    cutting-edge GenAI integration!
                  </p>
                  <h2 className="py-4 text-gray-400">Skills & Tools</h2>
                  <div className="Skills flex flex-wrap gap-2">
                    {aiAutomationSkills.map((item, i) => (
                      <h1
                        key={i}
                        className="ai-skill bg-zinc-300 w-fit px-2 py-[.1vw] rounded-xl text-zinc-800 text-sm cursor-pointer transition-all duration-300 hover:bg-blue-400 hover:text-white hover:scale-105 hover:shadow-lg transform"
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.1) rotateY(10deg)';
                          e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1) rotateY(0deg)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        {item}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>

              {/* Design Container */}
              <div className="rounded-3xl p-8 lg:p-10 bg-[#232323] flex flex-col items-start gap-4 relative overflow-hidden min-h-[280px]">
                <svg
                className="absolute hidden md:block lg:-top-24 lg:left-2 lg:scale-105 lg:w-[50vw] lg:h-[70vh] lg:-rotate-3"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 800 400"
                >
                  <path
                    d="M510.4286804199219,6.761154651641846C512.3876833089192,43.492560873031614,473.76295878092446,118.12599968274435,517.5957641601562,141.14434814453125C561.428569539388,164.16269660631815,630.1431778971354,24.613215128580734,670.7926025390625,90.97462463378906C711.4420271809896,157.33603413899738,667.5375492350261,303.8555254109701,666.3131713867188,383.92999267578125"
                    fill="none"
                    stroke-width="28"
                    stroke="#ffff"
                    stroke-linecap="round"
                  ></path>
                  <defs>
                    <linearGradient id="SvgjsLinearGradient1000">
                      <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                      <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
                    </linearGradient>
                  </defs>
                </svg>

                <h1 className="text-2xl lg:text-3xl text-white">SAAS WORKFLOWS</h1>
                <h2 className="text-gray-400">Description</h2>
                <div className="paragraph">
                  <p className="text-base text-start lg:text-md text-gray-300">
                    I design and build SaaS workflows that help businesses leverage
                    GenAI and automation to transform their operations and boost
                    efficiency!
                  </p>
                  <h2 className="py-4 text-gray-400">Skills & Tools</h2>
                  <div className="Skills flex flex-wrap gap-2">
                    {saasWorkflowSkills.map((item, i) => (
                      <h1
                        key={i}
                        className="saas-skill bg-zinc-300 w-fit px-2 py-[.1vw] rounded-xl text-zinc-800 text-sm cursor-pointer transition-all duration-300 hover:bg-purple-400 hover:text-white hover:scale-105 hover:shadow-lg transform"
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.1) rotateX(10deg)';
                          e.target.style.boxShadow = '0 10px 25px rgba(147, 51, 234, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1) rotateX(0deg)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        {item}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            <div className="rounded-3xl bg-[#232323] faq-bga p-8 lg:p-10 min-h-[200px]">
              <div className="project-container w-full h-full flex flex-col items-center justify-center">
                <span className="text-effect">
                  <p className="text-base md:text-lg lg:text-xl text-center text-white leading-relaxed">
                    An AI & Automation Creator With A Passion For Building
                    SaaS Workflows That Help Businesses With GenAI And Automation.
                    From Concept To Launch, I Transform Ideas Into Smart Solutions
                  </p>
                </span>
              </div>
            </div>
            <div className="rounded-3xl bg-[#232323] faq-bga p-8 lg:p-10 min-h-[200px]">
              <div className="project-container w-full h-full flex gap-4 lg:gap-6 items-center justify-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-bold">20+</h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl leading-none text-center text-white">
                  Projects
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
