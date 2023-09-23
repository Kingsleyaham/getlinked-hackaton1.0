import BigIdea from "../../assets/img/The big idea.png";
import GirlWithLaptop from "../../assets/img/girlsittingdown.png";
import JudgingCharacter from "../../assets/img/judgingCharacter.png";
import PurpleStar from "../../assets/img/star pu.png";

const Overview = () => {
  return (
    <>
      <div className="border-b">
        <div className="grid md:grid-cols-2 items-center justify-center space-y-16 md:space-y-0 gap-8 w-10/12 mx-auto py-2">
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
                real-world problems, pushing the boundaries of technology, and creating solutions
                that can change the world, that's what we're all about!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  Rules and Guidelines Section*/}
      <div className="border-b">
        <div className="grid md:grid-cols-2 items-center justify-center space-y-16 md:space-y-0 gap-8 w-10/12 mx-auto py-2">
          <div className="text-center md:text-left order-last md:order-first">
            <div>
              <p className="font-secondary font-bold text-[25px]">
                Frequent Ask <br />
                <span className="text-pink">Question</span>
              </p>
            </div>

            <div className="text-[14px] pt-2 leading-8">
              <p>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
                day: to shape the future. Whether you're a coding genius, a design maverick, or a
                concept wizard, you'll have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and creating solutions
                that can change the world, that's what we're all about!
              </p>
            </div>
          </div>
          <div className="">
            <img src={GirlWithLaptop} alt="the big idea" />
          </div>
        </div>
      </div>

      {/*  Judging Criteria*/}
      <div className="border-b py-16">
        <div className="grid md:grid-cols-2 items-center justify-center space-y-8 md:space-y-0 gap-8 w-10/12 mx-auto py-2">
          <div>
            <img src={JudgingCharacter} alt="the big idea" />
          </div>
          <div className="text-center md:text-left">
            <div>
              <p className="font-secondary font-bold text-[25px]">
                Judging Criteria <br />
                <span className="text-pink">Key attributes</span>
              </p>
            </div>

            <div className="text-[14px] pt-2 leading-5 space-y-4">
              <p>
                <span className="font-bold text-light-pink text-[16px]">
                  Innovation and Creativity:
                </span>{" "}
                Evaluate the uniqueness and creativity of the solution. Consider whether it
                addresses a real-world problem in a novel way or introduces innovative features.
              </p>{" "}
              <p>
                <span className="font-bold text-light-pink text-[16px]">Functionality:</span> Assess
                how well the solution works. Does it perform its intended functions effectively and
                without major issues? Judges would consider the completeness and robustness of the
                solution.
              </p>{" "}
              <p>
                <span className="font-bold text-light-pink text-[16px]">Impact and Relevance:</span>{" "}
                Determine the potential impact of the solution in the real world. Does it address a
                significant problem, and is it relevant to the target audience? Judges would assess
                the potential social, economic, or environmental benefits.
              </p>{" "}
              <p>
                <span className="font-bold text-light-pink text-[16px]">Technical Complexity:</span>{" "}
                Evaluate the technical sophistication of the solution. Judges would consider the
                complexity of the code, the use of advanced technologies or algorithms, and the
                scalability of the solution.
              </p>{" "}
              <p>
                <span className="font-bold text-light-pink text-[16px]">
                  Adherence to Hackathon Rules:
                </span>{" "}
                Judges will Ensure that the team adhered to the rules and guidelines of the
                hackathon, including deadlines, use of specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
              <div>
                <button className="btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
