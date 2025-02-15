const Features = () => {
  const cards1 = [
    {
      id: 1,
      title: "Artisan Directory",
      description:
        "Browse a comprehensive directory of artisans with profiles that include reviews, ratings, and portfolio examples.",
      icon: "/images/foldericon.svg",
    },
    {
      id: 2,
      title: "Instant Matching",
      description:
        "Use our smart matching tool to find artisans based on your location, project requirements, and budget.",
      icon: "/images/matching.svg",
    },
    {
      id: 3,
      title: "Customer Reviews",
      description:
        "Read and leave reviews to ensure quality services for everyone.",
      icon: "/images/reviews.svg",
    },
  ];

  const cards2 = [
    {
      id: 1,
      title: "Secure Payments",
      description:
        "Pay securely through the app once your project is completed to your satisfaction.",
      icon: "/images/payments.svg",
    },
    {
      id: 2,
      title: "Real-Time Updates",
      description:
        "Track your artisan’s progress with real-time updates and notifications.",
      icon: "/images/updates.svg",
    },
  ];

  return (
    <div id="features" className="flex flex-col items-center pt-[100px]">
      <div className="w-[246px] h-[35px] rounded-[100px] bg-[#E5E5FF] flex items-center justify-center mb-4">
        <span className="text-[#0000FF] text-[16px] gmedium">
          What Makes Highire Different?
        </span>
      </div>
      <h2 className="gbold text-[32px] mt-5 lg:text-[67.88px] lg:mb-[48px] font-bold">
        Features of Highire
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-4">
        {cards1.map((card) => (
          <div
            key={card?.id}
            data-aos="zoom-in"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1300"
            className="bg-[#FFFFFF] flex flex-col items-center justify-center rounded-[32px] h-[250px] lg:h-[336px] max-w-[456px] p-[24px]"
          >
            <div className="w-[96px] h-[96px] rounded-full bg-[#E5E5FF] flex items-center justify-center mb-2 lg:mb-[16px]">
              <img src={card?.icon} className="w-[48px] h-[48px]" alt="" />
            </div>
            <h2 className="text-[24px] lg:text-[32px] gbold mb-[16px]">
              {card?.title}
            </h2>
            <p className="text-[16px] lg:text-[20px] gregular lg:w-[424px] text-center">
              {card?.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
        {cards2.map((card) => (
          <div
            key={card?.id}
            data-aos="zoom-out"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1400"
            className="bg-[#FFFFFF] flex flex-col items-center justify-center rounded-[32px] h-[250px] lg:h-[336px] min-w-[100%] lg:w-[664px] max-w-[696px] p-[24px]"
          >
            <div className="w-[96px] h-[96px] rounded-full bg-[#E5E5FF] flex items-center justify-center mb-2 lg:mb-[16px]">
              <img src={card?.icon} className="w-[48px] h-[48px]" alt="" />
            </div>
            <h2 className="text-[24px] lg:text-[32px] gbold mb-[16px]">
              {card?.title}
            </h2>
            <p className="text-[16px] lg:text-[20px] gregular lg:w-[424px] text-center">
              {card?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
