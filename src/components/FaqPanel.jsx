import { useState } from "react";
import Plus from "../assets/img/plus sign.png";

const FaqPanel = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="">
      <div className="panel">
        <p>{title}</p>
        <img
          src={Plus}
          alt="add button"
          className="cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        />
      </div>
      <div className="overflow-hidden transition-all duration-1000 ease">
        {isActive && (
          <div className="px-5 pt-2">
            <p className="pt-4 text-[14px] text-justify">{children}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqPanel;
