
import { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">Quick Book</span>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1">
          <a href="#" className="text-primary hover:bg-primary/10 block px-3 py-2 text-base font-medium">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium">
            About
          </a>
          <a href="#" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium">
            Categories
          </a>
          <a href="#" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
