import FrequentlyAskedQuestions from "../components/section/Faqs.jsx";
import Hero from "../components/section/Hero.jsx";
import Overview from "../components/section/Overview.jsx";
import Timeline from "../components/section/Timeline.jsx";

// eslint-disable-next-line react/prop-types
const Home = ({faqRef, overviewRef, timelineRef}) => {

  return (
    <div className="px-7">
      <Hero />
      <Overview overviewRef={overviewRef}/>
      <FrequentlyAskedQuestions faqRef={faqRef}/>
      <Timeline  timelineRef={timelineRef}/>
    </div>
  );
};

export default Home;
