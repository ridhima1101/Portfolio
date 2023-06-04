import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold ">
              <p>
                Hi. I'm Ridhima, Nice To Meet You! Please take a look around.
              </p>
            </div>
            <div>
                <p>
                I am a passionate software student with a deep interest in developing innovative solutions and pushing the boundaries of technology. Throughout my academic journey and practical experiences, I have acquired a diverse set of skills and knowledge in various areas of software development. I work towards creating user-centric applications that solve real-world problems.I invite you to browse through my projects and experience the outcomes of my dedication, creativity, and problem-solving abilities. If you have any inquiries or potential collaboration opportunities, please feel free to reach out. I look forward to connecting with you!"
                </p>
            </div>
          </div>
       </div>
    </div>
  );
};

export default About;
