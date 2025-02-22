import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="px-[4%] lg:px-[48px] pt-[160px] pb-[150px]">
        <div className="flex flex-col items-center">
          <div className="w-[165px] h-[35px] rounded-[100px] bg-[#E5E5FF] flex items-center justify-center">
            <span className="text-[#0000FF] text-[16px] gmedium">
              Privacy Policy
            </span>
          </div>
          <h2 className="gbold text-[32px] mt-5 lg:text-[67.88px] lg:mb-[48px] font-bold">
            Privacy Policy
          </h2>
        </div>
        <div className="gregular text-[16px]">
          <p className="mb-24">Effective Date: 1st january, 2025</p>
          <p className="mb-1">
            Thank you for choosing HigHire. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our mobile application that connects artisans with potential
            customers in their communities.
          </p>
          <p className="mb-12">
            By using our App, you agree to the collection and use of information
            in accordance with this policy. If you do not agree with the terms
            of this Privacy Policy, please do not use our App.
          </p>
          <div className="mb-4 mt-6">
            <p className="mb-4">### 1. Information We Collect</p>
            <p className="mb-8">
              a. Personal Information: We may collect personal information that
              you provide to us, including but not limited to:
              <br /> - Name <br /> - Contact information (email address, phone
              number) <br /> - Location information <br /> - Payment information
              (if applicable) <br /> - Profile information (e.g., photos,
              biographies, skills)
            </p>
            <p className="mb-4">
              b. Usage Data: <br />
              We may also collect information about how the App is accessed and
              used. This usage data may include: <br />
              - Device information (type, operating system, unique device
              identifiers) <br />
              - Log data (IP address, browser type, access times) <br />
              - Pages visited within the App <br />- Time and date of your
              visits
            </p>
            <p className="mb-4">
              c. Cookies and Tracking Technologies: We may use cookies and
              similar tracking technologies to monitor activity on our App and
              store certain information. You can instruct your browser to refuse
              all cookies or to indicate when a cookie is being sent.
            </p>
          </div>
          <div className="mb-4 mt-12">
            <p className="mb-4">### 2. How We Use Your Information</p>
            <p className="mb-4">
              We use the information we collect for various purposes, including:{" "}
              <br />
              - To provide and maintain our App - To notify you about changes to
              our App <br /> - To allow you to participate in interactive
              features of our App when you choose to do so - To provide customer
              support <br /> - To gather analysis or valuable information so
              that we can improve our App <br /> - To monitor the usage of our
              App <br /> - To detect, prevent and address technical issues{" "}
              <br /> - To fulfill any other purpose for which you provide it{" "}
              <br /> - To provide you with news, special offers, and general
              information about other products, services, and events that we
              offer
            </p>
          </div>
          <div className="mb-4 mt-12">
            <p className="mb-4">### 3. Disclosure of Your Information</p>
            <p className="mb-4">
              We do not sell or rent your personal information to third parties.
              We may share your information in the following situations: <br />
              - With Service Providers: We may share your information with
              third-party vendors, service providers, contractors, or agents who
              perform services for us or on our behalf. <br />
              - For Business Transfers: If we are involved in a merger,
              acquisition, or asset sale, your personal information may be
              transferred. <br />- To Comply with Legal Obligations: We may
              disclose your information if required to do so by law or in
              response to valid requests by public authorities.
            </p>
          </div>
          <div className="mb-4 mt-12">
            <p className="mb-4">### 4. Data Security</p>
            <p className="mb-4">
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal information, we cannot
              guarantee its absolute security.
            </p>
          </div>
          <div className="mb-4 mt-12">
            <p className="mb-4">### 5. Your Data Protection Rights</p>
            <p className="mb-4">
              Depending on your location, you may have the following data
              protection rights: <br />
              - The right to access, update, or delete the information we have
              on you. <br />
              - The right to rectification. <br />
              - The right to object. <br />
              - The right of restriction. <br />
              - The right to data portability. <br />- The right to withdraw
              consent.
            </p>
            <p className="my-5">
              If you wish to exercise any of these rights, please contact us at
              <span className="text-blue-500 underline ml-2">
                highire.nigeria@outlook.com
              </span>
              .
            </p>
          </div>
          <div className="mb-4 mt-12">
            <p className="mb-4">### 6. Children’s Privacy</p>
            <p className="mb-4">
              Our App is not intended for use by children under the age of 13.
              We do not knowingly collect personally identifiable information
              from anyone under the age of 13. If we become aware that we have
              collected personal information from a child under 13 without
              verification of parental consent, we will take steps to remove
              that information from our servers.
            </p>
            <p className="my-5">
              If you wish to exercise any of these rights, please contact us at
              <span className="text-blue-500 underline ml-2">
                highire.nigeria@outlook.com
              </span>
              .
            </p>
          </div>
          <div className="mb-4 mt-12">
            <p className="mb-4">### 7. Changes to This Privacy Policy</p>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes.
            </p>
          </div>
          <div className="mb-4 mt-12">
            <p className="mb-4">### 8. Contact Us</p>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us: - Email: HIGHIRE.NIGERIA@OUTLOOK.COM <br />
              - Phone: <a href="tel:+2349164672980" className="text-blue-500 underline">+2349164672980</a> <br />- Address: LUGBE FCT ABUJA
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
