import { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode] = useState("light");

  const navMenu = [
    {
      id: 1,
      label: "About",
      url: "#about",
    },
    {
      id: 2,
      label: "What I Do",
      url: "/#whatido",
    },
    {
      id: 3,
      label: "Projects",
      url: "/#projects",
    }
  ];

  return (
    <nav className="w-full fixed top-0 z-[50] py-10 h-[62px] bg-[#00050B] lg:min-h-[62px] px-[4%]">
      <div className={`flex h-full items-center justify-between`}>
        <a href="/">
          <img
            src="/images/logo.png"
            className="w-[189] h-[39px] relative top-2 lg:top-0"
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
          className={`lg:flex lg:h-[60px] justify-end absolute lg:static lg:z-auto z-[-1] left-0 w-full pl-8 lg:pl-0 space-y-[15px] lg:space-y-0 py-5 lg:py-0 lg:space-x-[29px] transition-all duration-500 ease-in ${
            isOpen ? "top-16" : "top-[-350px]"
          }`}
        >
          {navMenu?.map((navm) => (
            <li
              key={navm?.id}
              className={`text-[#E5F2FF] p-1 gregular text-[16px]`}
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
