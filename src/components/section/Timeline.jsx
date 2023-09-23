import BigIdea from "../../assets/img/The big idea.png";
import PurpleStar from "../../assets/img/star pu.png";

const Timeline = () => {
  return (
    <div>
      <div className="md:grid grid-cols-2 items-center justify-center space-y-16 md:space-y-0 gap-8 w-10/12 mx-auto border-b py-2">
        <div>
          <img src={BigIdea} alt="the big idea" />
        </div>
        <div className="text-center md:text-left">
          <div className="flex items-center md:justify-between justify-evenly">
            <p className="font-secondary font-bold text-[25px]">
              Introduction to getlinked <br />
              <span className="text-pink">tech Hackathon 1.0</span>
            </p>
            <img src={PurpleStar} alt="" />
          </div>

          <div className="text-[14px] pt-2 leading-8">
            <p>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
              day: to shape the future. Whether you're a coding genius, a design maverick, or a
              concept wizard, you'll have the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and creating solutions that
              can change the world, that's what we're all about!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
