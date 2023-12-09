
import React from "react";
import './APropos.scss';
import '../../index.scss';
import Comp from "../../assets/allCompétences.png";


function APropos() {
  return (
    <section className="AProposWrapper">
      <div className="allAPropos">
      <div className="AProposTexte">
        <h3 id="a-propos">À&nbsp;propos</h3>
          <p className="subTexte">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
          </p>
      </div>
        <div className="competences">
          <h3>Mes&nbsp;compétences</h3>
          <div className="allCompétences">
          <img src={Comp} alt="schéma" className="schéma" /> 
            <div className="lineContainer">
              <div className="grayLine"></div>
             <div className="blackLine"></div>
          </div>
          </div>
      </div>
      </div>
    </section>
  );
}

export default APropos;
