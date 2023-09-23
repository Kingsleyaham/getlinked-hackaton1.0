import { useMediaQuery } from "react-responsive";
import Fire from "../../assets/img/1f4a5.png";
import BackgroundImg1 from "../../assets/img/Background1.png";
import LightBulb from "../../assets/img/Creative 1.png";
import DesktopVectorLine from "../../assets/img/Vector 4.png";
import Chain from "../../assets/img/chain-9365116-7621444.png";
import BoyWithSunglass from "../../assets/img/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import RegisterButton from "../RegisterButton.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="text-white py-8 border-t mt-2 md:px-12">
      <div className="flex flex-col justify-end items-end">
        <p className="italic font-bold lg:text-[35px] md:text-[22px] text-[16px]">
          Igniting a Revolution in HR Innovation
        </p>
        <div>
          <img
            src={DesktopVectorLine}
            alt="vector line"
            className={`${isMobile ? "w-[180px]" : ""}`}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 pt-10 items-center md:pl-10 md:text-left text-center border-b">
        <div className="relative">
          <img
            className="absolute lg:right-[15vw] md:right-[11vw] md:-top-10"
            src={LightBulb}
            alt="light bulb"
            width={isMobile ? "18px" : "40px"}
          />

          <h2 className={`font-secondary font-bold lg:text-[50px] text-[30px] md:leading-[70px]`}>
            getlinked Tech
          </h2>
          <div className="flex flex-wrap gap-1 items-center md:justify-start justify-center">
            <h2 className="font-secondary font-bold lg:text-[50px] text-[30px]">
              Hackathon <span className="text-pink">1.0</span>
            </h2>
            <img src={Chain} alt="" width={isMobile ? "32px" : "45px"} />
            <img src={Fire} alt="" width={isMobile ? "32px" : "45px"} />
          </div>

          <p className="md:text-[20px] w-9/12 mx-auto">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
          </p>
          <div className="md:pt-14 pt-8">
            <RegisterButton />
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 md:pt-10 pt-6 text-[65px] font-tertiary">
            <div>
              <span>00</span>
              <span className="small">H</span>
            </div>
            <div>
              <span>00</span>
              <span className="small">M</span>
            </div>
            <div>
              <span>00</span>
              <span className="small">S</span>
            </div>
          </div>
        </div>
        <div
          className="bg-cover flex items-center"
          style={{
            backgroundImage: `url(${BackgroundImg1})`,
            backgroundBlendMode: "hard-light",
          }}
        >
          <img src={BoyWithSunglass} alt="boy with sunglass" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
