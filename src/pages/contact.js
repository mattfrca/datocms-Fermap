import React from 'react'
import Layout from "../components/layout"

const Contact = () => {
  return (
  <Layout>
    <form className="contact-form" data-netlify="true" name="formulaire-contact" method="POST">
        <input type="text" name="name"/>
        <label htmlFor="name">Nom & Prénom</label>
        <input type="text" name="ville"/>
        <label htmlFor="ville">Ville</label>
        <input type="text" name="rue"/>
        <label htmlFor="rue">Rue</label>
        <input type="text" name="rue"/>
        <label htmlFor="rue">Rue</label>
        <input type="text" name="postal"/>
        <label htmlFor="postal">Code Postal</label>
        <input type="mail" name="mail"/>
        <label htmlFor="mail">Courriel</label>
        <input type="text" name="rue"/>
        <label htmlFor="rue">Rue</label>
        <button type="submit">Envoyer</button>
    </form>
  </Layout>
)}

export default Contact
