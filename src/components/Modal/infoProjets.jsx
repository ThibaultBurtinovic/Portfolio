import React from "react";
import html from "../../assets/HTML5.png";
import css from "../../assets/CSS3.png";
import node from "../../assets/node.png";
import scss from "../../assets/Sass.png";
import reactIcon from "../../assets/React-icon.png";
import JS from "../../assets/JavaScript.png";

import appartement from "../../assets/Modal/appartement.png";
import concert from "../../assets/Modal/concert.webp";
import accommodation from "../../assets/Modal/accommodation.jpg";
import livre from "../../assets/Modal/livre.png";
import resto from "../../assets/Modal/resto.png";
import paysage from "../../assets/Modal/paysage.jpg";

export const infoProjets = [
  {
    "id": "1",
    "title": "SophieBluel",
    "pictures": [appartement],
    "description": (
      <div>
        <p>
          Ce projet consiste à développer une page web dynamique avec JavaScript pour le portfolio d'une architecte d'intérieur.
          Les missions incluent la création de la page de présentation des travaux, la mise en place de la page de connexion de l'administrateur,
          et le développement d'une modale d'upload de médias. Les compétences évaluées portent sur la gestion des événements utilisateurs, la manipulation
          du DOM avec JavaScript, et la récupération des données via des formulaires
        </p>
      </div>
    ),
    "tags": [<img key="JS" src={JS} alt="JS" />, <img key="css" src={css} alt="css" />],
  },
  {
    "id": "2",
    "title": "Nina Carducci",
    "pictures": [concert],
    "description": (
      <div>
        <p>
          Ce projet consiste à optimiser le site web de la photographe Nina Carducci. Optimisation globale du site, l'implémentation du
          référencement local via Schema.org, l'ajout de métas pour les réseaux sociaux, des modifications liées à l'accessibilité, ainsi que
          la correction de quelques bugs dans le code
        </p>
      </div>
    ),
    "tags": [<img key="JS" src={JS} alt="JS" />, <img key="html" src={html} alt="html" />],
  },
  {
    "id": "3",
    "title": "Kasa",
    "pictures": [accommodation],
    "description": (
      <div>
        <p>
          Ce projet consiste à créer une application web de location immobilière pour la plateforme Kasa en utilisant React.
          Les maquettes Figma fournies par le designer Paul serviront de guide pour le développement, avec des contraintes techniques
          telles que l'utilisation de Sass et l'animation CSS pour le composant Collapse. Le backend n'étant pas encore prêt, des données
          de logements au format JSON sont fournies. L'objectif est de produire un code de qualité en respectant les guidelines de Kasa.
        </p>
      </div>
    ),
    "tags": [<img key="reactIcon" src={reactIcon} alt="reactIcon" />, <img key="scss" src={scss} alt="scss" />],
  },
  {
    "id": "4",
    "title": "Mon vieux grimoire",
    "pictures": [livre],
    "description": (
      <div>
        <p>
          Ce projet implique le développement du back-end d'un site de notation de livres, Mon Vieux Grimoire, en collaboration avec
          Kévin qui se charge du front-end en React. Les spécifications fonctionnelles et la maquette ont été définies, permettant aux
          utilisateurs de noter et d'ajouter des livres.
        </p>
        <p>
          Les enjeux techniques comprennent la mise en place d'une API conforme aux spécifications techniques fournies, avec une attention
          particulière à l'optimisation des images pour respecter les principes du Green Code. La soutenance évaluera la présentation des
          fonctionnalités, la structure du code, les mesures de sécurité, et l'approche adoptée pour l'optimisation des images.
        </p>
      </div>
    ),
    "tags": [<img key="node" src={node} alt="node" />],
  },
  {
    "id": "5",
    "title": "Qwenta",
    "pictures": [resto],
    "description": (
      <div>
        <p>
          Ce projet consiste à planifier le développement d'un site Menu Maker pour le client Qwenta en tant que développeur front-end
          chez Webgencia. Les missions incluent la mise en place d'une méthodologie agile, la réalisation d'une veille technologique, la
          définition des spécifications techniques, et l'organisation de la gestion de projet.
        </p>
        <p>
          Les livrables comprennent une présentation de la veille, les spécifications techniques, la planification du projet, et une
          présentation de la solution technique pour le client John.
        </p>
      </div>
    ),
    "tags": [],
  },
  {
    "id": "6",
    "title": "Booki",
    "pictures": [paysage],
    "description": (
      <div>
        <p>
          Ce projet consiste à créer la page d'accueil d'une agence de voyage pour la start-up Booki en utilisant HTML et CSS.
        </p>
        <p>
          Les enjeux résident dans l'intégration réussie des maquettes fournies par l'UI designer, Loïc, tout en respectant les spécifications
          et contraintes techniques détaillées dans la note de synthèse. L'objectif est de produire un site responsive pour les versions desktop,
          tablette et mobile.
        </p>
        <p>
          Les principales difficultés peuvent inclure la gestion du positionnement des éléments, la découpe de la maquette, et la validation du
          code selon les normes du W3C.
        </p>
      </div>
    ),
    "tags": [<img key="html" src={html} alt="HTML" />, <img key="css" src={css} alt="CSS" />],
  },
];
