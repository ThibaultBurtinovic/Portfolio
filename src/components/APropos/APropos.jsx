
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
          <p className="subTexte">Diplômé en développement front-end après une formation intensive de six mois chez OpenClassrooms, 
          je suis passionné par la création d'expériences utilisateur. Fort d'une transition réussie depuis mon passé en postproduction cinéma,  
          je fusionne maintenant mes compétences avec ma nouvelle expertise technique.
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
