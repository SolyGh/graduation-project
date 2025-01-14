import React from "react";
import { useSelector } from "react-redux";

const Navbar8 = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  // Define the map for linking section IDs with offsets
  const sectionMap = {
    home: -200,
    about: 0,
    services: 2,
    work: 2,
    contact: 2,
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    const offset = sectionMap[id] || 0; // Use the offset from the map or default to 0
    if (element) {
      window.scrollTo({
        top: element.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-8 nav8 x-50 w-full z-50">
      <div className="container mx-auto">
        <div className="w-full rounded-full max-w-[460px] bg-black/20 h-[96px] backdrop-blur-2xl mx-auto px-5 flex justify-between text-2xl text-white/50 items-center">
          {navbar.links.map((link, index) => (
            <a
              key={index}
              href={`#${link.url}`}
              onClick={() => scrollTo(link.title.toLowerCase())}
              className="cursor-pointer w-[60px] flex items-center justify-center"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar8;
