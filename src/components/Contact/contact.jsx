import React from "react";
import emailjs from 'emailjs-com';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Remplacez ces valeurs par vos propres identifiants EmailJS
    const userId = 'Jp-ma3kR4Xm2RK6up';
    const serviceId = 'service_umgdmzu';
    const templateId = 'template_mesb6ru';

    const userNameAndEmail = e.target.user_name.value;
    const userMessage = e.target.message.value;

    // Utilisez une expression régulière pour vérifier la présence d'un "@"
    const isEmailValid = /\S+@\S+\.\S+/.test(userNameAndEmail);

    if (!isEmailValid) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    const templateParams = {
      from_name: userNameAndEmail,
      user_email: userNameAndEmail,
      message: userMessage,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((result) => {
        console.log(result.text);
        // Ajoutez ici la logique pour traiter la réponse de l'envoi d'e-mail (par exemple, affichage d'un message de confirmation)
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail', error);
        // Ajoutez ici la logique pour gérer les erreurs d'envoi
      });
  };

  return (
    <section className="ContactWrapper">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="user_name" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
