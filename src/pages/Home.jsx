import Faqs from "../components/section/Faqs.jsx";
import Hero from "../components/section/Hero.jsx";
import Overview from "../components/section/Overview.jsx";
import Timeline from "../components/section/Timeline.jsx";

const Home = () => {
  return (
    <div className="px-7">
      <Hero />
      <Overview />
      <Faqs />
      <Timeline />
    </div>
  );
};

export default Home;
