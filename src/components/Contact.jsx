import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

const BASE_URL = "https://api.highire.com/api";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const fullnameRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();

  const handleContactUs = async (e) => {
    e.preventDefault();
    try {
      const name = fullnameRef?.current?.value;
      const email = emailRef?.current?.value;
      const description = descriptionRef?.current?.value;

      if (!name || !email || !description) {
        return toast.error("All fields are compulsory");
      }

      setLoading(true);
      const payload = {
        name,
        email,
        description,
      };

      const resp = await axios.post(
        BASE_URL + "/contact-us",
        JSON.stringify(payload)
      );
      if (resp?.status == 200 || resp?.status == 201) {
        return toast.success(resp?.data?.message);
      }
    } catch (error) {
      return toast.error(
        error?.response?.message || error?.response?.data?.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="pt-[100px] flex flex-col items-center">
      <div className="w-[165px] h-[35px] rounded-[100px] bg-[#E5E5FF] flex items-center justify-center">
        <span className="text-[#0000FF] text-[16px] gmedium">
          We’re Here to Help
        </span>
      </div>
      <h2 className="gbold text-[32px] mt-5 lg:text-[67.88px] lg:mb-[48px] font-bold">
        Contact us at Highire
      </h2>
      <p
        data-aos="fade-down"
        data-aos-duration="1900"
        className="text-[16px] lg:w-[965px] text-center lg:text-[20px] gregular text-[#464646] mb-[48px]"
      >
        Have any questions or need further assistance? Feel free to reach out to
        our team. We are committed to providing the best customer service to
        make your hiring process as smooth as possible.
      </p>
      <div className="bg-white w-[100%] lg:w-[848px] lg:h-[615px] p-[24px] lg:p-[48px] rounded-[24px]">
        <form onSubmit={handleContactUs} className="w-[100%]">
          {/* <div className="w-[100%] mb-8 flex flex-col gap-8 lg:gap-0 md:flex-row justify-between items-center">
            <div className="flex flex-col w-[100%] md:w-[48%]">
              <label
                htmlFor="fname"
                className="text-[#222222] text-[13px] gregular mb-[8px]"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-[100%] h-[48px] border border-[#848484] rounded-[8px] p-[12px]"
              />
            </div>
            <div className="flex flex-col w-[100%] md:w-[48%]">
              <label
                htmlFor="fname"
              ref={emailRef}
                className="text-[#222222] text-[13px] gregular mb-[8px]"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-[100%] h-[48px] border border-[#848484] rounded-[8px] p-[12px]"
              />
            </div>
          </div> */}
          <div className="flex flex-col mb-8 w-[100%]">
            <label
              htmlFor="fname"
              className="text-[#222222] text-[13px] gregular mb-[8px]"
            >
              Full Name
            </label>
            <input
              type="text"
              ref={fullnameRef}
              placeholder="Enter full name"
              className="w-[100%] h-[48px] border border-[#848484] rounded-[8px] p-[12px]"
            />
          </div>
          <div className="flex flex-col mb-8 w-[100%]">
            <label
              htmlFor="fname"
              className="text-[#222222] text-[13px] gregular mb-[8px]"
            >
              Email Address
            </label>
            <input
              type="text"
              ref={emailRef}
              placeholder="Enter email address"
              className="w-[100%] h-[48px] border border-[#848484] rounded-[8px] p-[12px]"
            />
          </div>
          <div className="flex flex-col mb-8 w-[100%]">
            <label
              htmlFor="fname"
              className="text-[#222222] text-[13px] gregular mb-[8px]"
            >
              Description
            </label>
            <textarea
              placeholder="Description"
              ref={descriptionRef}
              className="w-[100%] h-[114px] resize-none border border-[#848484] rounded-[8px] p-[12px]"
            ></textarea>
          </div>
          <p className="text-center text-[14px] text-[#464646] gregular mb-4">
            Or Reach Us At
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-12 mb-[24px]">
            <p className="underline text-[16px] gmedium text-[#464646]">
              support@highire.com
            </p>
            <p className="underline text-[16px] gmedium text-[#464646]">
              +123-456-7890
            </p>
          </div>
          <button
            type="submit"
            className="w-[100%] bg-[#0000FF] cursor-pointer text-white h-[60px] rounded-[100px] flex items-center justify-center"
          >
            {loading ? (
              <RotatingLines
                strokeColor="#ffffff"
                strokeWidth="5"
                animationDuration="0.75"
                width="38"
                visible={true}
              />
            ) : (
              "Send Us a Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
