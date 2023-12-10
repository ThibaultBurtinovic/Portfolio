import React, { useRef } from 'react';
import './contact.scss';
import '../../index.scss';
import clipboard from "../../assets/clipboard.svg";
import emailjs from 'emailjs-com';

function Contact() {
  // Déclaration des constantes et hooks
  const textToCopy = "thibault.burtinovic@gmail.com";
  const copyTextRef = useRef(null);

  // Gestionnaire de clic sur l'image pour copier le texte
  const handleImageClick = () => {
    if (copyTextRef.current) {
      // Sélectionne le texte dans le textarea et le copie dans le presse-papiers
      copyTextRef.current.select();
      document.execCommand('copy');
      // Affiche une alerte pour informer l'utilisateur que le texte a été copié
      alert('Texte copié dans le presse-papiers : ' + textToCopy);
    }
  };

  // Gestionnaire de soumission du formulaire pour envoyer l'e-mail
  const handleSubmit = (e) => {
    e.preventDefault();

    // Identifiants EmailJS
    const userId = 'Jp-ma3kR4Xm2RK6up';
    const serviceId = 'service_umgdmzu';
    const templateId = 'template_mesb6ru';

    // Récupération des valeurs du formulaire
    const userNameAndEmail = e.target.user_name.value;
    const userMessage = e.target.message.value;

    // Expression régulière pour vérifier la présence d'un "@"
    const isEmailValid = /\S+@\S+\.\S+/.test(userNameAndEmail);

    if (!isEmailValid) {
      // Affiche une alerte si l'adresse e-mail n'est pas valide
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    // Paramètres du template pour EmailJS
    const templateParams = {
      from_name: userNameAndEmail,
      user_email: userNameAndEmail,
      message: userMessage,
    };

    // Envoi de l'e-mail via EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((result) => {
        console.log(result.text);
        alert('L\'e-mail a été envoyé avec succès!');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail', error);
      });
  };


  return (
    <section className="ContactWrapper">
      <div className='clipBoardWrapper'>
        <h3 className='contactTitle' id="contact">Me contacter</h3>
        <div className='clipBoard'>
          <input className='contactMail'
            ref={copyTextRef}
            value={textToCopy}
            readOnly
          />
          <img className='clipImg'
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
          <input className='contactText' type="text" name="user_name" required />
        </label>
        <br />
        <label className='infoTexte'>
          Message:
          <textarea className='contactText' name="message" required />
        </label>
        <br />
        <button type="submit" className='btnSend'>Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
