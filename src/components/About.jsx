

const About = () => {
  return (
    <div
      id="about"
      className="pt-[80px] flex flex-col items-center justify-center"
    >
      <div className="w-[117px] h-[35px] rounded-[100px] bg-[#E5E5FF] flex items-center justify-center mb-4">
        <span className="text-[#0000FF] text-[16px] gmedium">Who We Are</span>
      </div>
      <h2 className="gbold text-[32px] my-5 lg:my-0 lg:text-[67.88px] font-bold">
        About Highire
      </h2>
      <p data-aos="fade-left" data-aos-duration="1500" className="lg:w-[965px] text-[#464646] text-[16px] lg:text-[20px] text-center gregular lg:leading-[36px]">
        At Highire, we understand the challenges of finding reliable artisans.
        That’s why we’ve built a platform that simplifies the hiring process,
        ensuring you get connected with trusted and skilled professionals in no
        time. Our mission is to bridge the gap between homeowners and artisans,
        providing a seamless, secure, and efficient solution for all your
        project needs.
      </p>
    </div>
  );
};

export default About;
