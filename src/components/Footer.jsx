

const Footer = () => {
  return (
    <footer className="bg-white w-[100%] min-h-[135px] py-[29px] px-[24px] lg:px-[48px]">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex mb-8 lg:mb-0">
          <img
            src="/images/logo.svg"
            className="w-[40px] lg:w-[77px] h-[40px] lg:h-[77px] rounded-full"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className="text-[#464646] gmedium text-[14px] lg:text-[20px]">
              © 2025 Highire. All Rights Reserved.
            </p>
            <div className="flex flex-row">
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#464646] underline text-[16px]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[#464646] gmedium text-[20px]">Follow Us:</p>
          <div className="flex flex-row">
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#464646] mr-2 underline text-[16px]"
            >
              Facebook
            </a>
            | */}
            <a
              href="https://x.com/highireglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#464646] mx-2 underline text-[16px]"
            >
              Twitter
            </a>
            |
            <a
              href="https://instagram.com/highire_global"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#464646] underline ml-2 text-[16px]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
