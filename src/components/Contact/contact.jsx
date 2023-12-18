import React, { useRef, useState } from 'react';
import './contact.scss';
import '../../index.scss';
import clipboard from "../../assets/clipboard.svg";
import emailjs from 'emailjs-com';

import Notification from '../Notification/notification.jsx';
import checkMark from "../../assets/checkMark.svg";
import croix from "../../assets/croix.svg";

function Contact() {
  const textToCopy = "thibault.burtinovic@gmail.com";
  const copyTextRef = useRef(null);

  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [showErrorMailNotification, setShowErrorMailNotification] = useState(false);

  const handleImageClick = () => {
    if (copyTextRef.current) {
      copyTextRef.current.select();
      document.execCommand('copy');

      setShowCopyNotification(true);

      setTimeout(() => {
        setShowCopyNotification(false);
      }, 7000);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = 'Jp-ma3kR4Xm2RK6up';
    const serviceId = 'service_umgdmzu';
    const templateId = 'template_mesb6ru';

    const enteredUserName = e.target.user_name.value;
    const enteredUserMessage = e.target.message.value;

    const isEmailValid = /\S+@\S+\.\S+/.test(enteredUserName);

    if (!isEmailValid) {
      setShowErrorMailNotification(true);

      setTimeout(() => {
        setShowErrorMailNotification(false);
      }, 7000);
      return;
    }

    const templateParams = {
      from_name: enteredUserName,
      user_email: enteredUserName,
      message: enteredUserMessage,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((result) => {
        setShowNotification(true);
        setUserName(""); // Réinitialise le champ de l'email
        setUserMessage(""); // Réinitialise le champ du message

        setTimeout(() => {
          setShowNotification(false);
        }, 7000);
      })
      .catch((error) => {
        setShowErrorNotification(true);

        setTimeout(() => {
          setShowErrorNotification(false);
        }, 7000);
      });
  };

  return (
    <section className="ContactWrapper">
      <div className='clipBoardWrapper'>
        <h3 className='contactTitle' id="contact">Me contacter</h3>
        <div className='clipBoard'>
          <input
            className='contactMail'
            ref={copyTextRef}
            value={textToCopy}
            readOnly
          />
          <img
            className='clipImg'
            src={clipboard}
            alt="clipboard"
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <hr className="black-line"></hr>
      </div>
      <form onSubmit={handleSubmit} className='formContact'>
        <label className='infoTexte'>
          Votre Email:
          <input
            className='contactText'
            type="text"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        <br />
        <label className='infoTexte'>
          Message:
          <textarea
            className='contactText'
            name="message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className='btnSend'>Envoyer</button>
      </form>

      {/* Afficher la notification si showNotification est true */}
      {showNotification && <Notification texte="Votre e-mail a bien été envoyé" image={checkMark} />}
      {showCopyNotification && <Notification texte="Texte copié dans le presse papier" image={checkMark} />}
      {showErrorNotification && <Notification texte="Erreur lors de l'envoi de l'email" image={croix} />}
      {showErrorMailNotification && <Notification texte="Adresse mail invalide" image={croix} />}
    </section>
  );
}

export default Contact;
