import LittleGirlWalking from "../assets/img/1f6b6-2640.png";
import GraphicDesigner from "../assets/img/3d-graphic-designer-showing-thumbs-up-png 1.png";
import LittleBoyWalking from "../assets/img/image_processing20200511-10310-13mnlsx.png";

// eslint-disable-next-line react/prop-types
const SignUp = ({ isMobile }) => {
  return (
    <div className="my-10">
      <div className="md:flex items-center justify-between gap-4 md:p-8 p-10 lg:w-11/12">
        {isMobile && (
          <p
            className={`font-semibold font-secondary ${
              isMobile ? "text-[16px]" : "text-[32px]"
            } text-pink`}
          >
            Register
          </p>
        )}
        <div className="select-none lg:w-[50%] md:w-[40%] w-[100%]">
          <img src={GraphicDesigner} alt="3d graphic designer" />
        </div>
        <div className="rounded-[12px] md:p-12 sm:p- p-4 relative form-wrapper">
          <form className="space-y-4 select-none">
            {!isMobile && (
              <p
                className={`font-semibold font-secondary ${
                  isMobile ? "text-[16px]" : "text-[32px]"
                } text-pink`}
              >
                Register
              </p>
            )}
            <div className="flex justify-items-start items-baseline">
              <p className="text-[14px]">Be part of this movement!</p>
              <div className="flex items-center border-b px-6 border-pink border-dashed">
                <img src={LittleGirlWalking} alt="little girl walking" />
                <img src={LittleBoyWalking} alt="little boy walking" />
              </div>
            </div>
            <p className="text-[24px]">CREATE YOUR ACCOUNT</p>

            <div className="md:space-y-10 space-y-8">
              <div className="md:flex md:space-y-0 space-y-8 gap-6">
                <div className="relative w-full space-y-2">
                  <label htmlFor="teamName">Team’s Name</label>
                  <input
                    type="text"
                    name="teamName"
                    id="teamName"
                    aria-describedby="team name"
                    placeholder="Enter the name of your group"
                    className="input-control"
                  />
                </div>
                <div className="relative w-full space-y-2">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    aria-describedby="phone number"
                    placeholder="Enter your phone number"
                    className="input-control"
                  />
                </div>
              </div>
              <div className="md:flex md:space-y-0 space-y-8 gap-6">
                <div className="relative w-full space-y-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    aria-describedby="user email"
                    placeholder="Enter your email address"
                    className="input-control"
                  />
                </div>
                <div className="relative w-full space-y-2">
                  <label htmlFor="projectTopic">Project Topic</label>
                  <input
                    type="text"
                    name="projectTopic"
                    id="projectTopic"
                    aria-describedby="project topic"
                    placeholder="What is your group project topic"
                    className="input-control"
                  />
                </div>
              </div>
              <div className="md:flex md:space-y-0 space-y-8 gap-6">
                <div className="relative w-full space-y-2">
                  <label htmlFor="category">Category</label>
                  <select name="category" id="category" className="input-control dropdown">
                    <option value="">Select your category</option>
                    <option value="1">Size 1</option>
                    <option value="2">Size 2</option>
                    <option value="3">Size 3</option>
                  </select>
                </div>
                <div className="relative w-full space-y-2">
                  <label htmlFor="groupSize">Group Size</label>
                  <select name="groupSize" id="groupSize" className="input-control dropdown">
                    <option value="">Select</option>
                    <option value="1">Size 1</option>
                    <option value="2">Size 2</option>
                    <option value="3">Size 3</option>
                  </select>
                </div>
              </div>

              <p className="text-[14px] italic text-pink">
                Please review your registration details before submitting
              </p>

              <div className="flex gap-4">
                <input
                  type="checkbox"
                  name="termAndCondition"
                  id="termAndCondition"
                  className="w-5 h-5 text-pink focus:bg-pink bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-[14px]">
                  I agreed with the event terms and conditions and privacy policy
                </span>
              </div>

              <div className="relative flex justify-center">
                <button className="btn-primary sm:w-full">Register Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
