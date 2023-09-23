import { useMediaQuery } from "react-responsive";
import StarGray from "../assets/img/sata gra.png";
import StarWhite from "../assets/img/star 1.png";
import StarPurple from "../assets/img/star pu.png";
import Star from "../assets/img/star.png";
import SocialMediaLinks from "../components/SocialMediaLinks.jsx";

// eslint-disable-next-line react/prop-types
const Contact = ({ isMobile }) => {
  const isSmallMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <div className="md:my-20 my-10 md:pt-8">
      {isMobile && (
        <div className="px-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_177_298)" />
            <path d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667" stroke="white" />
            <defs>
              <linearGradient
                id="paint0_linear_177_298"
                x1="11.5"
                y1="0"
                x2="11.5"
                y2="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#903AFF" />
                <stop offset="1" stopColor="#FF26B9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      <div className="md:flex justify-around gap-14 space-y-6 md:space-y-0 lg:w-[73%] md:w-[90%] mx-auto sm:p-16 sm:pt-4 p-12 pt-4 md:p-0 relative">
        <div className="absolute md:left-6 left-1/2 md:-top-16">
          <img
            src={StarGray}
            alt="gary star image"
            width={isSmallMobile ? "50%" : isMobile ? "70%" : "100%"}
          />
        </div>
        <div className="absolute sm:right-24 right-14 sm:top-28 top-[90px] md:-top-16 md:right-6">
          <img
            src={Star}
            alt="star img"
            width={isSmallMobile ? "50%" : isMobile ? "70%" : "100%"}
          />
        </div>
        {!isMobile && (
          <div className="md:w-[45%] space-y-6 pt-12">
            <h5 className="font-secondary font-semibold text-[32px] text-pink">Get in touch</h5>
            <p>
              Contact <br />
              Information
            </p>
            <p>
              27, Alara street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
            <p>Call Us: 07067981819</p>

            <p>
              we are open from Monday-Friday <br /> 08:00am - 05:00pm
            </p>

            <SocialMediaLinks />
          </div>
        )}
        <div className="rounded-[12px] md:p-20 sm:p-8 p-4 relative form-wrapper">
          <div className="opacity-100 bg-transparent space-y-8">
            <p className="font-semibold font-secondary text-[20px] text-pink">
              Questions or need assistance?
              <br />
              Let us know about it!
            </p>

            {isMobile && <p>Email us below to any question related to our event</p>}
            <form className="space-y-10">
              <div className="relative">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  aria-describedby="first name"
                  placeholder={isMobile ? "Team's Name" : "First Name"}
                  className="input-control"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="mail"
                  id="mail"
                  aria-describedby="email"
                  placeholder={isMobile ? "Email" : "Mail"}
                  className="input-control"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  id="message"
                  rows="6"
                  className="input-control resize-y"
                ></textarea>
              </div>

              <div className="absolute md:-left-3 md:bottom-40 sm:left-6 left-2 sm:bottom-36 bottom-32">
                <img
                  src={StarPurple}
                  alt="purple star"
                  width={isSmallMobile ? "50%" : isMobile ? "70%" : "100%"}
                />
              </div>

              <div className="text-center">
                <button className="btn-primary">Submit</button>
              </div>

              <div className="md:-right-16 md:-bottom-1 sm:-right-2 -right-4 bottom-60 absolute">
                <img
                  src={StarWhite}
                  alt="white star"
                  width={isSmallMobile ? "50%" : isMobile ? "70%" : "100%"}
                />
              </div>
            </form>
          </div>

          {isMobile && (
            <div className="text-center pt-10">
              <SocialMediaLinks />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
