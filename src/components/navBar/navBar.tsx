import React, { useEffect, useState } from "react";
import "./navBar.css"; 
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };
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
          <button onClick={toggleNav} className="navbar-menu-icon">
            <MdMenu />
          </button>

          <ul className={`nav-links ${!isOpen ? "nav-links-closed" : ""}`}>
            <button onClick={toggleNav} className="navbar-close-icon">
              <MdMenu />
            </button>
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`nav-link ${
                    item.name === activeIndex ? "nav-link-active" : ""
                  }`}
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
      </nav>
    </div>
  );
};

export default NavBar;
