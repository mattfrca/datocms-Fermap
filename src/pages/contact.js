import React from 'react'
import Layout from "../components/layout"

const Contact = () => {
  return (
  <Layout>
    <form className="contact-form" name="formulaire-contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
        <p>
            <label>Nom complet <span>*</span><input type="text" name="name" /></label>   
        </p>
        <p>
            <label>Adresse mail <span>*</span><input type="email" name="email" /></label>
        </p>
        <p>
            <label>Ville <span>*</span><input type="text" name="ville" /></label>
        </p>
        <p>
            <label>Adresse <span>*</span><input type="text" name="adresse" /></label>
        </p>
        <p>
            <label>Code postal <span>*</span><input type="text" name="code_postal" /></label>
        </p>
        <p>
            <label>Message<textarea name="message" /></label>
        </p>
        <p>
            <label>Utilisation des données <span>*</span><input id="utilisation-donnees" type="checkbox" value="En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées
             dans le cadre de la demande de contact et de la relation commerciale qui peut en découler."></input>
             <label id="description-utilisation-donnees">En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées
             dans le cadre de la demande de contact et de la relation commerciale qui peut en découler.</label></label>
        </p>
        <input id="send-button" value="Envoyer" type="submit" className="contact-form-btn"/>
        <p><span>*</span> : Champs obligatoires</p>
    </form>
  </Layout>
)}

export default Contact
