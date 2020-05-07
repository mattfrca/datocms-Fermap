import React, { useEffect } from 'react'
import Layout from "../components/layout"
import { navigate } from 'gatsby'

const FormulaireEnvoi = () => {

    useEffect(() => {
        let counter = document.getElementById('counter-number');
        setTimeout(() => { navigate('/'); }, 8000)
        setInterval(() => {
            counter.innerText = counter.innerText -  1;
        }, 1000);
    }, []);

    return (
        <Layout>
            <h2 id="form-sent">Nous vous remercions de votre prise de contact, nous vous répondrons dans les plus brefs délais.</h2>
            <p id="counter">Redirection vers la page d'acceuil: <span id="counter-number">8</span></p>
        </Layout>
)}

export default FormulaireEnvoi
