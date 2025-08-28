import React from "react";

const Services = () => {
  const ai = Array(10).fill("AI Solutions");
  const automation = Array(10).fill("Process Automation");
  const ml = Array(10).fill("Machine Learning");
  const chatbots = Array(10).fill("AI Chatbots");
  const analytics = Array(10).fill("Data Analytics");

  return (
    <>
      <div className="relative w-full h-[70vh] md:h-[65vh] lg:h-fit  text-center py-14 overflow-hidden" id="#services">
        <div className="heading max-w-screen-xl mx-auto flex items-center justify-between pb-12 px-4">
          <h1 className="text-3xl md:text-6xl lg:text-6xl uppercase font-semibold tracking-tight">
            Services
          </h1>
          <div className="w-1/3 h-1 bg-white"></div>
        </div>
        <div className="service-wrapper max-w-screen-xl mx-auto  py-9 px-4 flex items-center flex-col justify-center ">
          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">AI Solutions</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {ai.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] capitilize w-[35vw] md:w-[40vw] lg:w-[30vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>

          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">Process Automation</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {automation.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] capitilize w-[35vw] md:w-[30vw] lg:w-[25vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>

          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">Machine Learning</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {ml.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] capitilize w-[38vw] md:w-[40vw] lg:w-[30vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>
  
          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">AI Chatbots</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {chatbots.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] capitilize w-[35vw] md:w-[40vw] lg:w-[30vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>    

          <div className="service-cont">
            <div className="service-links">
              <h1 className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] text-white uppercase font-semibold mix-blend-difference">Data Analytics</h1>
              <i className="ri-arrow-right-up-line"></i>
            </div>
            <div className="service-linksbefore flex items-center gap-[2vw] absolute h-full w-full opacity-0 -ml-[10px]">
              {analytics.map((item, index) => (
                <div key={index} className="marquee-item">
                  <h1 className="text-[4vw] md:text-[4vw] lg:text-[3vw] uppercase w-[35vw] md:w-[20vw] lg:w-[10vw]">{item}</h1>
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
