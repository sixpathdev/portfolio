import { PhoneOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import { myProjects, social_links, whatIDo } from "../constants";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Hi, I am Miracle Gabriel'],
      autoStart: true,
      delay: 200
    });
    new Typewriter('#typewriter2', {
      strings: [' Fullstack Software Developer'],
      autoStart: true,
      delay: 400
    });
  }, [])
  
  
  return (
    <>
      <Navbar />
      <div className="pt-[203px]">
        <div className="mx-auto flex flex-col items-center">
          <h1 id="typewriter" className="text-[#E5F2FF] text-[64px] mb-[16px] abold">
          </h1>
          <p id="typewriter2" className="text-[#E5F2FF] text-[32px] aregular">
           
          </p>
        </div>
        <div className=" w-[100%] h-[820px]">
          <div className="bg_image_1 h-[100%] flex flex-col justify-start">
            <p className="lg:w-[50%] mx-auto text-center amedium mb-[64px] mt-72">
              {`I'm`} always open to new opportunities and collaborations.
              Whether you have a project in mind or just want to chat about
              tech, feel free to reach out.
            </p>

            <div className="w-[408px] mb-5 mx-auto justify-center flex items-center">
              <PhoneOutlined className="text-[24px] text-[#1E90FF]" />{" "}
              <p className="text-[#CCE6FF] amedium ml-3">+2348141894420</p>
            </div>
            <div className="w-[408px] h-[56px] mb-12 justify-around  mx-auto rounded-[100px] inset-shadow-sm inset-shadow-[#1E90FF] flex items-center px-4">
              {social_links.map((social) => (
                <a
                  key={social?.id}
                  className="p-2"
                  href={social?.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={social?.icon} alt="" />
                </a>
              ))}
            </div>
            <div className="w-[100%] h-[700px] mt-16 mx-auto p-4 bg-[#00050B]">
              <h2 className="text-[#E5F2FF] abold text-[52px] text-center mb-[40px]">
                About Me
              </h2>
              <p className="text-[#CCE6FF] w-[90%] mx-auto text-[18px] leading-[40px] aregular text-center">
                Miracle is an experienced software developer renowned for his
                unparalleled expertise in creating cutting-edge web and mobile
                applications. With 6+ years of experience and a strong
                background in JavaScript, PHP. He works with a wide variety of
                technologies and frameworks including but not limited to FLAT
                Stack (FilamentPHP, Laravel LiveWire, Alpine.js, TailwindCSS),
                React Native, React.js, Electron js, Adonis.js, Vue.js, Node.js,
                Express.js, Nest.js, MongoDB, MySQL, and many more.
              </p>
            </div>
          </div>
        </div>
        <div className="p-1 px-[4%] mt-42 mb-24">
          <h2 className="text-[#E5F2FF] abold text-[52px] text-center mb-[64px]">
            What I Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whatIDo.map((item) => (
              <div
                key={item?.id}
                className="bg-[#000C1A] shadow-md px-[40px] flex flex-col justify-center h-[326px] w-[100%] rounded-[16px]"
              >
                <img
                  src={item?.icon}
                  className="w-[56px] h-[56px] mb-5"
                  alt=""
                />
                <div className="text-[#E5F2FF] mb-3 text-[24px] abold">
                  {item?.title}
                </div>
                <p className="text-[16px] text-[#CCE6FF] leading-[30px] aregular">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-1 px-[4%] mb-24">
          <h2 className="text-[#E5F2FF] abold text-[52px] text-center mb-[24px]">
            Projects
          </h2>
          <p className="w-[40%] mx-auto text-center amedium mb-[64px]">
            Explore some of my most recent projects that showcase my versatility
            and technical expertise
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {myProjects.map((item) => (
              <div
                key={item?.id}
                className="bg-[#000C1A] shadow-md p-[32px] flex flex-col h-[440px] w-[400px] rounded-[16px]"
              >
                <img
                  src={item?.icon}
                  className="w-[378px] h-[250px] mx-auto mb-[10px]"
                  alt=""
                />
                <p className="text-[#E5F2FF] text-left text-[24px] abold mb-[10px]">
                  {item?.title}
                </p>
                <p className="text-[16px] text-[#CCE6FF] aregular">
                  {item?.description.substring(0, 120)}....
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
