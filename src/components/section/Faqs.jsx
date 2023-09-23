import ManThinking from "../../assets/img/cwok_casual_21 1.png";
import Plus from "../../assets/img/plus sign.png";
import FaqPanel from "../FaqPanel.jsx";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="border-b py-16">
      <div className="grid md:grid-cols-2 justify-center space-y-16 md:space-y-0 gap-8 w-10/12  mx-auto py-2">
        <div>
          <div>
            <p className="font-secondary font-bold text-[25px]">
              Frequently Ask <br />
              <span className="text-pink">Question</span>
            </p>
          </div>

          <div className="text-[14px] pt-2 md:w-3/4 w-full">
            <p>
              We got answers to the questions that you might want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </p>
          </div>

          <div className="pt-12 space-y-10">
            <FaqPanel title="Can I work on a project I started before the hackathon?">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Delectus, deserunt eum illum nihil praesentium quas sit ut. Alias
              animi asperiores culpa cum dolor ea eius eligendi enim,
              exercitationem explicabo incidunt iure magni maxime molestiae
              nobis quam quas quasi quia quibusdam quo repellat reprehenderit
              sint tempora temporibus totam ut vel voluptas.
            </FaqPanel>

            <FaqPanel title="What happens if I need help during the hackathon?">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Delectus, deserunt eum illum nihil praesentium quas sit ut. Alias
              animi asperiores culpa cum dolor ea eius eligendi enim,
              exercitationem explicabo incidunt iure magni maxime molestiae
              nobis quam quas quasi quia quibusdam quo repellat reprehenderit
              sint tempora temporibus totam ut vel voluptas.
            </FaqPanel>

            <FaqPanel title="What happens if I don't have an idea for a project?">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Delectus, deserunt eum illum nihil praesentium quas sit ut. Alias
              animi asperiores culpa cum dolor ea eius eligendi enim,
              exercitationem explicabo incidunt iure magni maxime molestiae
              nobis quam quas quasi quia quibusdam quo repellat reprehenderit
              sint tempora temporibus totam ut vel voluptas.
            </FaqPanel>

            <FaqPanel title="Can I join a team or do I have to come with one?">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Delectus, deserunt eum illum nihil praesentium quas sit ut. Alias
              animi asperiores culpa cum dolor ea eius eligendi enim,
              exercitationem explicabo incidunt iure magni maxime molestiae
              nobis quam quas quasi quia quibusdam quo repellat reprehenderit
              sint tempora temporibus totam ut vel voluptas.
            </FaqPanel>

            <FaqPanel title="What happens after the hackathon ends">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Delectus, deserunt eum illum nihil praesentium quas sit ut. Alias
              animi asperiores culpa cum dolor ea eius eligendi enim,
              exercitationem explicabo incidunt iure magni maxime molestiae
              nobis quam quas quasi quia quibusdam quo repellat reprehenderit
              sint tempora temporibus totam ut vel voluptas.
            </FaqPanel>

            <FaqPanel
              title="Can I work on a project I started before the
                            hackathon?"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Delectus, deserunt eum illum nihil praesentium quas sit ut. Alias
              animi asperiores culpa cum dolor ea eius eligendi enim,
              exercitationem explicabo incidunt iure magni maxime molestiae
              nobis quam quas quasi quia quibusdam quo repellat reprehenderit
              sint tempora temporibus totam ut vel voluptas.
            </FaqPanel>
          </div>
        </div>
        <div className="">
          <img src={ManThinking} alt="the big idea" />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
