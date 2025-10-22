import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-orange-500 py-4">
        <div className=" mx-auto flex justify-between items-center px-8">
      <img src={logo} alt="MyCompany Logo" className="w-20 md:w-28 h-auto object-contain" />
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-black">Home</Link></li>
        <li><Link to="/portofolio" className="hover:text-black">Portofolio</Link></li>
        <li><Link to="/services" className="hover:text-black">Services</Link></li>
        <li><Link to="/about" className="hover:text-black">About</Link></li>
        <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
      </ul>
      </div>
    </nav>
  );
}
