// Gallery.js

import React from "react";
import './gallery.scss';
import '../../index.scss';

import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image_1 from "../../assets/Booki.png";
import slide_image_2 from "../../assets/Sophie.png";
import slide_image_3 from "../../assets/Nina.png";
import slide_image_4 from "../../assets/Kasa.png";
import slide_image_5 from "../../assets/Backend.png";
import slide_image_6 from "../../assets/Qwenta.png";


function Gallery() {
  return (
    <div className="container">
      <h3 className="heading" id="mes-projets">Mes réalisations</h3>
      <h4 className="subHeading">Retrouvez-moi sur GitHub pour explorer mes projets : <a href="https://github.com/ThibaultBurtinovic" className="linkSub"><span className="linkSub">cliquez ici</span></a></h4>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_2} alt="slide_image" />
            <div className="hoverText">Créez une page web dynamique avec JavaScript</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_3} alt="slide_image" />
            <div className="hoverText">Débuggez et optimisez un site de photographe</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_4} alt="slide_image" />
            <div className="hoverText">Créez une application web de location immobilière avec React</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_5} alt="slide_image" />
            <div className="hoverText">Développez le back-end d'un site de notation de livres</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_6} alt="slide_image" />
            <div className="hoverText">Planifiez le développement du site de votre client</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_1} alt="slide_image" />
            <div className="hoverText">Créez la page d'accueil d'une agence de voyage avec HTML & CSS</div>
          </div>
        </SwiperSlide>
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <img src={arrowLeft} alt="arrow-left" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <img src={arrowRight} alt="arrow-right" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Gallery;