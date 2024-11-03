import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button"; 
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Features", path: "#features" },
  // { label: "Resources", path: "#resources" },
  { label: "Pricing", path: "#pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" w-full md:px-44 flex justify-between items-center bg- py-2 relative z-50 text-sm">
        <div className="flex items-center ml-5">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 w-auto hidden md:block"
            />
            <div className="md:hidden" onClick={toggleSidebar}>
              <FaBars className="cursor-pointer" />
            </div>
          </Link>
        </div>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-10 p-5">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>
                  <a
                    href={item.path}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {item.label}
                  </a>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className=" items-center mr-5 hidden">
          <Button className="mr-4 ">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="outline">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </div>

      {/* Dropdown Sidebar */}
      <div
        className={`absolute left-0 top-14 w-full bg-white border  transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <nav className="p-5 ">
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:bg-gray-100 mb-3 p-2 rounded-sm text-sm"
              >
                <a
                  href={item.path}
                  className="text-gray-700 hover:text-gray-900"
                  onClick={toggleSidebar}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
