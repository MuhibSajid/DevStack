import Logo from "../assets/logo-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="border-b border-gray-200 sticky top-0 z-50  bg-white">
      <nav className="flex justify-between items-center  bg-white container mx-auto p-4 border-b border-gray-200">
        <span className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            className=" text-black-600"
          />
        </span>
        <img src={Logo} alt="DevStack" className="h-8 w-auto" />

        <ul className="hidden md:flex gap-6 items-center text-sm text-gray-700">
          <li className=" first:text-pink-600 hover:text-pink-600 cursor-pointer transition-colors">
            Home
          </li>
          <li className="hover:text-pink-600 cursor-pointer transition-colors">
            Technologies
          </li>
          <li className="hover:text-pink-600 cursor-pointer transition-colors">
            Projects
          </li>
          <li className="hover:text-pink-600 cursor-pointer transition-colors">
            About
          </li>
          <li className="hover:text-pink-600 cursor-pointer transition-colors">
            Contact
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="text-gray-800 font-medium hover:text-gray-600 transition-colors">
            Sign In
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
