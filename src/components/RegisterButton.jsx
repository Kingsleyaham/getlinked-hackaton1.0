import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <div className="">
      <button className="btn-primary">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default RegisterButton;
