import React from 'react'
import Layout from "../components/layout"

const Contact = () => {
  return (
  <Layout>
  <div className="main-wrapper-contact">
    <div className="section-wrapper-contact production-site">
        <h2>Notre site de production</h2>
        <div>
            <h3>Fermap Forbach</h3>
            <img src="https://www.ardevie.fr/images/liens/87fermap.jpg" alt="Bâtiment de Fermap au Technopôle"/>
            <p>Adresse: <a href="https://www.google.com/maps/place/FERMAP/@49.161079,6.9282583,17z/data=!3m1!4b1!4m5!3m4!1s0x4795b28c69785c11:0x7234720ef2358b1c!8m2!3d49.161079!4d6.930447" alt="Lien google map Adresse Fermap" target="_blank" rel="noopener noreferrer">Technopôle de Forbach - Rue Faraday "Folkling" - 57600 FORBACH</a></p>
            <p>Tél: <a href="tel:0387871008" alt="Telephone de l'accueil de fermap" >03.87.87.10.08</a></p>
            <p>Mail: <a href="mailto:info@fermap.fr" alt="Lien pour envoyer un mail à Fermap">info@fermap.fr</a></p>
        </div>
    </div>
    <div className="section-wrapper-contact form-contact">
        <h2>Formulaire de contact</h2>
        <form className="contact-form" name="formulaire-contact" method="POST" action="/" data-netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="formulaire-contact" />
            <div className="column">
                <p>
                    <label>Nom complet <span>*</span><input type="text" name="Nom Complet :" required /></label>   
                </p>
                <p>
                    <label>Adresse mail <span>*</span><input type="email" name="Email :" required /></label>
                </p>
                <p>
                    <label>Téléphone <span>*</span><input type="text" name="Téléphone :" required /></label>
                </p>
                <p>
                    <label>Ville <span>*</span><input type="text" name="Ville :" required /></label>
                </p>
                <p>
                    <label>Adresse <span>*</span><input type="text" name="Adresse :" required /></label>
                </p>
                <p>
                    <label>Code postal <span>*</span><input type="text" name="Code Postal :" required /></label>
                </p>
                <p>
                    <label>Message<textarea name="message" /></label>
                </p>
            </div>
            <div className="column type-projet">
                <h3>Type de projet</h3>
                <p>
                    <label><input type="checkbox" name="Fenêtre PVC :" value="***** OUI *****" />Fenêtre PVC</label>
                </p>
                <p>
                    <label><input type="checkbox" name="Fenêtre Alu :" value="***** OUI *****" />Fenêtre ALU</label>
                </p>
                <p>
                    <label><input type="checkbox" name="Porte d'entrée Alu :" value="***** OUI *****"/>Porte d'entrée ALU</label>
                </p>
                <p>
                    <label><input type="checkbox" name="Porte d'entrée PVC :" value="***** OUI *****"/>Porte d'entrée PVC</label>
                </p>
                <p>
                    <label><input type="checkbox" name="Volets Roulants :" value="***** OUI *****"/>Volets roulants</label>
                </p>
                <p>
                    <label><input type="checkbox" name="BSO :" value="***** OUI *****"/>Brise Soleil Orientable</label>
                </p>
                <p>
                    <label><input type="checkbox" name="Porte de garage :" value="***** OUI *****"/>Porte de garage</label>
                </p>
                <p>
                    <label><input type="checkbox" name="Portail :" value="***** OUI *****"/>Portail</label>
                </p>
                <p>
                    <label><input type="checkbox" name="Garde Corps :" value="***** OUI *****"/>Garde Corps</label>
                </p>
                <p>
                    <label><input type="checkbox" name="Clôture :" value="***** OUI *****"/>Clôture</label>
                </p>
                <p>
                    <label><input type="checkbox" name="Alarme :" value="***** OUI *****"/>Alarme</label>
                </p>
                <div className="wrapper-type-echeance">
                    <div className="echeance">
                        <h3>Echéance de votre projet</h3>
                        <p>
                            <label><input type="checkbox" name="Maintenant :" value="***** OUI *****"/>De suite</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="3 à 6 mois :" value="***** OUI *****"/>Dans 3 à 6 mois</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="6 à 12 mois :" value="***** OUI *****"/>Dans 6 à 12 mois</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="Non Planifié :" value="***** OUI *****"/>Non planifié</label>
                        </p>
                    </div>
                    <div className="type-batiment">
                        <h3>Type de bâtiment</h3>
                        <p>
                            <label><input type="checkbox" name="Bâtiment Neuf :" value="***** OUI *****"/>Bâtiment neuf</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="Rénovation :" value="***** OUI *****"/>Rénovation</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="Immeuble Collectif :" value="***** OUI *****"/>Immeuble collectif</label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="validation">
                <p>
                    <label>Utilisation des données <span>*</span><input required id="utilisation-donnees" type="checkbox" value="En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées
                    dans le cadre de la demande de contact et de la relation commerciale qui peut en découler."></input>
                    <p id="description-utilisation-donnees">En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées
                    dans le cadre de la demande de contact et de la relation commerciale qui peut en découler.</p></label>
                </p>
                <input aria-label="button" id="send-button" value="Envoyer" type="submit" className="contact-form-btn"/>
                <p><span>*</span> : Champs obligatoires</p>
            </div>
        </form>
      </div>
  </div>
    
  </Layout>
)}

export default Contact
