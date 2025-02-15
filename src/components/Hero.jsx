const Hero = () => {
  return (
    <div
      id="hero"
      className="px-[4%] bg-white w-[100%] overflow-clip relative  rounded-[20px] lg:rounded-[48px] pt-[56px] max-h-[963px] flex flex-col items-center"
    >
      <div data-aos="fade-up" data-aos-duration="2500" className="lg:w-[890px] text-[28px] lg:text-[67.88px] mb-[16px] text-center gbold leading-[40px] lg:leading-[81.04px]">
        All-in-one <span className="text-[#0000FF]">Digital solution </span>
        to make Hiring Artisans Easier.
      </div>
      <p data-aos="fade-down" data-aos-duration="2600" className="lg:w-[960px] text-center text-[16px] lg:text-[20px] text-[#464646] gregular">
        Are you looking for skilled artisans to get the job done right? Highire
        makes it easy to connect with top professionals in various fields, from
        carpenters and plumbers to electricians and painters. Whether {`it's`} a
        small home project or a large-scale renovation, Highire ensures you find
        the perfect artisan to meet your needs with just a few clicks.
      </p>
      <div className="flex items-center gap-4 my-[24px]">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/playstore.png"
            className="lg:w-[180px] lg:h-[60px]"
            alt="playstore"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/appstore.png"
            className="lg:w-[180px] lg:h-[60px]"
            alt="appstore"
          />
        </a>
      </div>
      <img
      data-aos="fade-up" data-aos-duration="1700"
        src="/images/mockup1.png"
        className="lg:w-[420.75px] lg:h-[806.63px] relative z-10"
        alt="mockup"
      />
      <img
        src="/images/heroshadow.png"
        className="w-[100%] h-[250px] lg:h-[330px] absolute bottom-0 z-20"
        alt="heroshadow"
      />
    </div>
  );
};

export default Hero;
