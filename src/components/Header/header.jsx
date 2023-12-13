// Header.jsx
import React, { useState, useEffect } from "react";
import './header.scss';
import menuBurger from "../../assets/burger.svg";

function Header() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [clickNav, setClickNav] = useState(false);

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

      if (clickNav) {
        setClickNav(false);
      }

      setLastScrollPosition(prevScrollPosition => scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition, scrolled]);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  useEffect(() => {
    // Appeler toggleBurgerMenu au chargement de la page pour que le menu soit fermé
    toggleBurgerMenu();
  }, []);

  const handleBurgerItemClick = () => {
    setClickNav(true);
    
  };

  return (
    <header className={`headerWrapper ${scrolled && scrollDirection === 'down' || clickNav ? 'hidden' : ''}`}>
      <h1>Thibault Burtinovic</h1>
      <nav className="navHeader">
        <ul className="ulNav">
          <li className="liNav"><a href="#a-propos">À&nbsp;propos</a></li>
          <li className="liNav"><a href="#mes-projets">Mes&nbsp;projets</a></li>
          <li className="liNav"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* Menu Burger small device */}
      <nav className="navBurger">
        <div className="menuBurger" onClick={toggleBurgerMenu}>
          <img src={menuBurger} alt="menu burger" className="imgBurger" />
          <ul className={`${(scrolled && scrollDirection === 'down') || isBurgerMenuOpen ? 'hide' : 'ulBurger'}`}>
            <li className="liBurger"><a href="#a-propos" onClick={handleBurgerItemClick}>À&nbsp;propos</a></li>
            <li className="liBurger"><a href="#mes-projets" onClick={handleBurgerItemClick}>Mes&nbsp;projets</a></li>
            <li className="liBurger"><a href="#contact" onClick={handleBurgerItemClick}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
