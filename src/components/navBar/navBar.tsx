import React, { useEffect, useState } from "react";
import "./navBar.css"; // Import your CSS file
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "about",
  },
  {
    id: 2,
    name: "skills",
  },
  {
    id: 3,
    name: "projects",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-container ${
        scrollPosition > 0 ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <nav className="navbar-content">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            href="/"
            className="navbar-logo"
          >
            Haneesh Bandaru.
          </Link>
        </div>
        <div
          data-aos="fade-down"
          className={`nav-items ${
            isOpen ? "nav-items-open" : "nav-items-closed"
          }`}
        >
          <div className="menu-icon-items">
            
            <button
              style={{ borderStyle: "none", backgroundColor: "inherit" }}
              className="menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RxHamburgerMenu style={{ width: "2rem", height: "2rem" }} />
            </button>

            <ul className={isOpen ? `nav-links-display` : `nav-link-off`}>
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    className={`nav-link `}
                    href={`#${item.name}`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <a href="mailto:haneeshbandaru@gmail.com" className="hire-button">
                HIRE ME
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
