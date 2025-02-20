import React, { useState } from "react";
import styles from "../../heros/hero7/styles7/style";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Navbar7 = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-6 justify-between items-center navbar" style={{ color: "var(--website-7-color-5)" }}>
          <img src={navbar.imgUrl} alt="hoobank" className="w-[124px] h-[32px]" />

          <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
            {navbar.links.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.url}`} style={{ color: active === nav.title ? "var(--website-7-color-6)" : "var(--website-7-color-5)" }}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={"https://res.cloudinary.com/duc04fwdb/image/upload/v1706799720/jammal_photos/jx9bn26thzu46apznikl.svg"}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${!toggle ? "hidden" : "flex"} ${
                language === "ar" ? "right-auto left-0 " : "left-auto right-0"
              } p-6 bg-black-gradient absolute top-20  mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navbar.links.map((nav, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${
                      index === navbar.links.length - 1 ? "mb-0" : "mb-4"
                    }`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    <a href={`#${nav.url}`} style={{ color: active === nav.title ? "var(--website-7-color-6)" : "var(--website-15-color-3)" }}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar7;
