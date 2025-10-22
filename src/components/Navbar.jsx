import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-8">
      <img src={logo} alt="MyCompany Logo" className="w-20 md:w-28 h-auto object-contain" />
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link to="/portofolio" className="hover:text-gray-200">Portofolio</Link></li>
        <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
        <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
        <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
      </ul>
      </div>
    </nav>
  );
}
