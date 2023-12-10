import React from "react";
import './footer.scss';
import '../../index.scss';

import GitHub from "../../assets/github-mark-white.svg";
import Linkedin  from "../../assets/linkedin.svg";

function Footer() {
  return (
    <section className="footerWrapper">
      <h4>Réalisé par Thibault Burtinovic</h4>
        <div className="imgFooter">
            <a href="https://github.com/ThibaultBurtinovic"><img src={GitHub} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/thibault-burtinovic-903457239/"><img src={Linkedin} alt="Linkedin" /></a>
        </div>
    </section>
  );
}

export default Footer;
