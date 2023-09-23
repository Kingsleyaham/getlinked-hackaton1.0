import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div>
      <h2 className="font-bold text-[30px] font-secondary">
        <Link to="/">
          <span className="text-white">get</span>
          <span className="text-pink">linked</span>
        </Link>
      </h2>
    </div>
  );
};

export default Title;
