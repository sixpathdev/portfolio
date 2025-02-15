import { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode] = useState("light");

  const navMenu = [
    {
      id: 1,
      label: "Home",
      url: "/",
    },
    {
      id: 2,
      label: "About Us",
      url: "/#about",
    },
    {
      id: 3,
      label: "Features",
      url: "/#features",
    },
    {
      id: 4,
      label: "Contact Us",
      url: "/#contact",
    },
    {
      id: 4,
      label: "White Paper",
      url: "/white-paper.pdf",
    },
  ];

  return (
    <nav className="w-full fixed top-0 z-[50] h-[70px] lg:min-h-[92px] bg-[#ffffff] px-[4%] shadow-sm shadow-[#0000001A]">
      <div className={`md:flex h-full items-center darkbg justify-between`}>
        <a href="/">
          <img
            src="/images/logo.svg"
            className="w-[50px] h-[50px] relative top-2 lg:top-0"
            alt="logo"
          />
        </a>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute cursor-pointer transition-all lg:hidden duration-500 top-5 right-4"
        >
          {isOpen ? (
            <CloseOutlined
              className={`${mode === "light" ? "" : "heading"} text-[26px]`}
            />
          ) : (
            <MenuOutlined
              className={`${mode === "light" ? "" : "heading"} text-[26px]`}
            />
          )}
        </div>
        <ul
          className={`lg:flex lg:px-12 bg-[#fff] lg:h-[60px] lg:justify-between lg:rounded-[100px] lg:items-center absolute lg:static darkbg lg:z-auto z-[-1] left-0 w-full lg:w-[680px] pl-8 lg:pl-0 space-y-[15px] lg:space-y-0 py-5 lg:py-0 lg:space-x-[29px] transition-all duration-500 ease-in ${
            isOpen ? "top-16" : "top-[-350px]"
          }`}
        >
          {navMenu?.map((navm) => (
            <li
              key={navm?.id}
              className={`text-[#040404] p-1 gregular text-[16px]`}
            >
              <a href={navm?.url} target={navm?.url == '/white-paper.pdf' ? '_blank':''}>{navm?.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
