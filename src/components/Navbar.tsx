import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isInDescription = location.pathname === "/description";

  const navigateTo = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <div>
          {isInDescription ? (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigateTo("/")}
            >
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
