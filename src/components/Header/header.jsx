// Header.jsx
import React, { useState, useEffect } from "react";
import './header.scss';

function Header() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > lastScrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      if (!scrolled && scrollPosition > 0) {
        setScrolled(true);
      }

      setLastScrollPosition(prevScrollPosition => scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition, scrolled]);

  return (
    <header className={`headerWrapper ${scrolled && scrollDirection === 'down' ? 'hidden' : ''}`}>
      <h1>Thibault Burtinovic</h1>
      <nav className="navHeader">
        <ul>
          <li><a href="#a-propos">À&nbsp;propos</a></li>
          <li><a href="#mes-projets">Mes&nbsp;projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
