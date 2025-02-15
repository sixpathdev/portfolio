const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      title: "Verified Artisans",
      description:
        "We ensure that all artisans on our platform are thoroughly vetted and qualified.",
      icon: "/images/verified.svg",
    },
    {
      id: 2,
      title: "Quick & Easy Hiring",
      description:
        "With Highire, you can find artisans with just a few clicks and get started on your project right away.",
      icon: "/images/user.svg",
    },
    {
      id: 3,
      title: "Secure Transactions",
      description:
        "We offer secure payment options, ensuring peace of mind when hiring.",
      icon: "/images/transaction.svg",
    },
    {
      id: 4,
      title: "Comprehensive Support",
      description:
        "Our dedicated support team is here to assist you every step of the way.",
      icon: "/images/support.svg",
    },
  ];

  return (
    <div id="whyus">
      <h2 className="gbold text-[32px] py-[48px] lg:text-[67.88px] text-center font-bold">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
        {cards.map((card) => (
          <div
            key={card?.id}
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500"
            className="bg-[#FFFFFF] flex flex-col items-center justify-center rounded-[32px] h-[250px] lg:h-[336px] max-w-[660px] p-[24px]"
          >
            <div className="w-[96px] h-[96px] rounded-full bg-[#E5E5FF] flex items-center justify-center mb-2 lg:mb-[16px]">
              <img src={card?.icon} className="w-[48px] h-[48px]" alt="" />
            </div>
            <h2 className="text-[24px] lg:text-[32px] gbold mb-[16px]">
              {card?.title}
            </h2>
            <p className="text-[16px] lg:text-[20px] gregular lg:w-[478px] text-center">
              {card?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
