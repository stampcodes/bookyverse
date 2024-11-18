import { useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookkey } = useParams();
  const isInDescription = location.pathname === `/description/works/${bookkey}`;

  const navigateTo = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <nav className="flex items-center justify-between p-4 border-b-2 ">
        <div>
          {isInDescription ? (
            <button className="customButton" onClick={() => navigateTo("/")}>
              Home
            </button>
          ) : null}
        </div>

        <img src={logo} alt="logo" className="w-32" />
        <div></div>
      </nav>
    </>
  );
};

export default Navbar;
