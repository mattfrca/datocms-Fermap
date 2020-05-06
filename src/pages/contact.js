import React from 'react'
import Layout from "../components/layout"

const Contact = () => {
  return (
  <Layout>
  <div className="main-wrapper-contact">
    <div className="section-wrapper-contact">
        <h2>Nos agences</h2>
    </div>
    <div className="section-wrapper-contact">
        <h2>Formulaire de contact</h2>
        <form className="contact-form" name="formulaire-contact" method="POST" action="/" data-netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="formulaire-contact" />
            <div className="column">
                <p>
                    <label>Nom complet <span>*</span><input type="text" name="name" required /></label>   
                </p>
                <p>
                    <label>Adresse mail <span>*</span><input type="email" name="email" required /></label>
                </p>
                <p>
                    <label>Ville <span>*</span><input type="text" name="ville" required /></label>
                </p>
                <p>
                    <label>Adresse <span>*</span><input type="text" name="adresse" required /></label>
                </p>
                <p>
                    <label>Code postal <span>*</span><input type="text" name="code_postal" required /></label>
                </p>
                <p>
                    <label>Message<textarea name="message" /></label>
                </p>
            </div>
            <div className="column type-projet">
                <h3>Type de projet</h3>
                <p>
                    <label><input type="checkbox" name="fenetre_pvc" value="fenetre_pvc" />Fenêtre PVC</label>
                </p>
                <p>
                    <label><input type="checkbox" name="fenetre_alu" value="fenetre_alu" />Fenêtre ALU</label>
                </p>
                <p>
                    <label><input type="checkbox" name="porte_d_entree_alu" value="porte_d_entree_alu"/>Porte d'entrée ALU</label>
                </p>
                <p>
                    <label><input type="checkbox" name="porte_d_entree_pvc" value="porte_d_entree_pvc"/>Porte d'entrée PVC</label>
                </p>
                <p>
                    <label><input type="checkbox" name="volets_roulants" value="volets_roulants"/>Volets roulants</label>
                </p>
                <p>
                    <label><input type="checkbox" name="bso" value="bso"/>Brise Soleil Orientable</label>
                </p>
                <p>
                    <label><input type="checkbox" name="porte_de_garage" value="porte_de_garage"/>Porte de garage</label>
                </p>
                <p>
                    <label><input type="checkbox" name="portail" value="portail"/>Portail</label>
                </p>
                <p>
                    <label><input type="checkbox" name="garde_corps" value="garde_corps"/>Garde Corps</label>
                </p>
                <p>
                    <label><input type="checkbox" name="clôture" value="clôture"/>Clôture</label>
                </p>
                <p>
                    <label><input type="checkbox" name="alarme" value="alarme"/>Alarme</label>
                </p>
                <div className="wrapper-type-echeance">
                    <div className="echeance">
                        <h3>Echéance de votre projet</h3>
                        <p>
                            <label><input type="checkbox" name="maintenant" value="maintenant"/>De suite</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="3_6_mois" value="3_6_mois"/>Dans 3 à 6 mois</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="6_12_mois" value="6_12_mois"/>Dans 6 à 12 mois</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="non_planifié" value="non_planifié"/>Non planifié</label>
                        </p>
                    </div>
                    <div className="type-batiment">
                        <h3>Type de bâtiment</h3>
                        <p>
                            <label><input type="checkbox" name="batiment_neuf" value="batiment_neuf"/>Bâtiment neuf</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="rénovation" value="rénovation"/>Rénovation</label>
                        </p>
                        <p>
                            <label><input type="checkbox" name="immeuble_collectif" value="immeuble_collectif"/>Immeuble collectif</label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="validation">
                <p>
                    <label>Utilisation des données <span>*</span><input required id="utilisation-donnees" type="checkbox" value="En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées
                    dans le cadre de la demande de contact et de la relation commerciale qui peut en découler."></input>
                    <label id="description-utilisation-donnees">En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées
                    dans le cadre de la demande de contact et de la relation commerciale qui peut en découler.</label></label>
                </p>
                <input id="send-button" value="Envoyer" type="submit" className="contact-form-btn"/>
                <p><span>*</span> : Champs obligatoires</p>
            </div>
        </form>
      </div>
  </div>
    
  </Layout>
)}

export default Contact
