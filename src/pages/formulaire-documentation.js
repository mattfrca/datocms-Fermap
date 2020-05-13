import React from 'react'
import axios from 'axios'
import Layout from "../components/layout"
import { navigate } from 'gatsby'

const Documentation = () => {
    const popUp = (success, mailValue) => {
        const formElement = document.getElementsByClassName('form-documentation')[0];
        switch (success) {
            case true:
                formElement.innerHTML = `<p class="infos__formulaire__documentation good">Un mail vient de vous être envoyé sur <span>${mailValue}</span>,
                cela peut prendre quelques minutes avant de le recevoir, veuillez aussi vérifiez votre boite de spam.
                Vous allez être redirigé vers la page d'acceuil.</p>`;
                setTimeout(() => { navigate('/'); }, 10000)
                break;
            case false:
                formElement.innerHTML = `<p class="infos__formulaire__documentation">Nous avons essayé de vous envoyé un mail sur <span>${mailValue}</span>,
                cela a échoué, veuillez vérifier votre adresse mail. Si c'est bien votre adresse, il se peut qu'il y ait eu une erreur serveur.
                Vous allez être redirigé vers la page d'acceuil.</p>`;
                setTimeout(() => { navigate('/'); }, 10000)
                break;
            case 'waiting':
                formElement.innerHTML = `<p class="infos__formulaire__documentation waiting">Nous sommes en train de vous envoyé un mail sur <span>${mailValue}</span>.</p>, veuillez patienter...`;
            default:
                setTimeout(() => { navigate('/'); }, 10000)
                break;
        }
    };
    const sendMail = (evt) => {
        evt.preventDefault();
        const nameValue = document.getElementById('documentation-form-name').value;
        const mailValue = document.getElementById('documentation-form-mail').value;
        const phoneValue = document.getElementById('documentation-form-phone').value;
        const cityValue = document.getElementById('documentation-form-city').value;
        popUp('waiting', mailValue)
        axios.post(
            'https://fermap.herokuapp.com/fermap/send-documentation',
            {
                nameValue,
                mailValue,
                phoneValue,
                cityValue,
            },
        )
        .then(res => {if(res.data.success) {popUp(true, mailValue)} else {popUp(false, mailValue)}})
        .catch(() => {popUp(false, mailValue)})
    }
  return (
  <Layout>
    <div className="form-documentation">
        {/* <p className="infos__formulaire__documentation">Nous avons essayé de vous envoyé un mail sur blablabla, cela a échoué, veuillez vérifier votre adresse mail, sinon il se peut qu'il y ait eu une  erreur serveur.</p> */}
        <h2>Formulaire de demande de documentation</h2>
        <p className="explications-documentation">
            Ce formulaire vous permet de recevoir par mail la documentation complète de nos gammes de produits.
            Il nous permet aussi de garder un contact avec les personnes ayant un intérêt pour nos produits.
        </p>
        <form className="contact-form documentation" name="formulaire-documentation" method="POST" onSubmit={sendMail}>
            <div className="column">
                <p>
                    <label>Nom complet <span>*</span><input id="documentation-form-name" type="text" name="Nom Complet :" required /></label>   
                </p>
                <p>
                    <label>Adresse mail <span>*</span><input id="documentation-form-mail" type="email" name="Email :" required /></label>
                </p>
                <p>
                    <label>Téléphone <span>*</span><input id="documentation-form-phone" type="text" name="Téléphone :" required /></label>
                </p>
                <p>
                    <label>Ville <span>*</span><input id="documentation-form-city" type="text" name="Ville :" required /></label>
                </p>
            </div>
            <div className="validation">
                <p>
                    <label>Utilisation des données <span>*</span><input required id="utilisation-donnees" type="checkbox" value="En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées
                    dans le cadre de la demande de contact et de la relation commerciale qui peut en découler."></input>
                    <span id="description-utilisation-donnees">En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées
                    dans le cadre de la demande de documentation et de la relation commerciale qui peut en découler.</span></label>
                </p>
                <input aria-label="button" id="send-button" value="Envoyer" type="submit" className="contact-form-btn"/>
                <p><span>*</span> : Champs obligatoires</p>
            </div>
        </form>
      </div>
  </Layout>
)}

export default Documentation
