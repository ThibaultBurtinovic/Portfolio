import React from "react";
import './homePage.scss';
import user from "../../assets/user.svg";
import arrow from "../../assets/arrow.svg";

function HomePage() {
    return (
      <section className="homePageWrapper">
        <div className="infoHome">
            <h2>
            Thibault Burtinovic <br />
            <span className="subtitle">Développeur web</span>
            </h2>
            <img src={user} alt="picture logo" className="userLogo" />
        </div>
        <a href="#mes-projets">
            <img src={arrow} alt="picture logo" className="arrow" />
          </a>
      </section>
    );
}

export default HomePage;
