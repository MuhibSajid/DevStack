import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto p-4 border-b border-gray-200">
      <img src={Logo} alt="DevStack" className="h-8 w-auto" />
      <ul className="flex gap-6 items-center text-sm text-gray-700">
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
  );
};

export default Nav;
