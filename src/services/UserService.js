import AbstractService from "./AbstractService";
import photo from '../assets/images/Jean-François Picherit-Steinbrucker.png';
import pdf1 from '../assets/documents/Jean-François Picherit-Steinbrucker NOTES DAWIN.pdf';
import pdf2 from '../assets/documents/BTS-SIO-Jean-François-Picherit-Steinbrucker.pdf';
import pdf3 from '../assets/documents/BAC ES Jean-François Picherit-Steinbrucker.pdf';

class UserService extends AbstractService {

    user = {
        mainInfo: {firstname: "Jean-François", lastname: "Picherit-Steinbrucker", urlPhoto: photo},
        educations: [
            {id: 1, text:"Mastère Expert Développement Web à Bordeaux Ynov Campus.", beginDate: new Date(2021,7,1)}, 
            {id: 2, text:"LP Développement en applications web et innovation numérique à l'IUT de Bordeaux Montaigne.", beginDate: new Date(2020,8,14), endDate: new Date(2021,8,10), url: pdf1, title: "Relevé de notes DAWIN(en cours)."},
            {id: 3, text:"Prépa Informatique (Bootcamp) Spécialisation « Expert Développement Web » à Bordeaux Ynov Campus.", beginDate: new Date(2021,1,6), endDate: new Date(2020,7,1)},
            {id: 4,  text:"BTS Services Informatiques aux Organisations option Solution Application Logiciel et Métier.", beginDate: new Date(2018,8,3), endDate: new Date(2020,5,5), url: pdf2, title: "Relevé de notes BTS SIO SLAM + Diplôme."},
            {id: 5,  text:"Baccalauréat ES option Maths mention « assez-bien »", beginDate: new Date(2015,8,7), endDate: new Date(2018,5,15), url: pdf3, title: "Relevé de notes BAC ES + Diplôme."}
        ],
        experiences: [
            {id: 1,  text:"Alternance à Planning Médicale situé à Saint-Jean-d'Illac. Maintenance, évolution et test d'un projet php, gérant et générant des planning pour le milieux médicale.", beginDate: new Date(2020,8,14), endDate: new Date(2020,8,10)}, 
            {id: 2,  text:"Stage à Buisness Web Agence à Dijon de 7 semaine, Conception de solution applicative avec le Framework Laravel.", beginDate: new Date(2020,1,3), endDate: new Date(2020,2,20)},
            {id: 3,  text:"Stage aux Éditions Asyelle à Bergerac de 5 semaine. Gestion d'un serveur et rénovation d'une solution applicative en PHP.", beginDate: new Date(2019,4,6), endDate: new Date(2019,5,7)},
            {id: 4,  text:"Assistance et dépannage informatiques à 3E informatique situé à Bordeaux. Gestion de la clientèle, facturation clients.", beginDate: new Date(2017,3,3), endDate: new Date(2017,3,7)}
        ],
        contacts: [
            {id: 1, icon:"fa-briefcase", text:"Étudiant Développeur"}, 
            {id: 2, icon:"fa-home", text:"Bordeaux"}, 
            {id: 3, icon:"fa-envelope", text:"jeanfrancois.picheritsteinbrucker@ynov.com"}, 
            {id: 4, icon:"fa-phone", text:"07 69 13 94 76"}
        ],
        knowledges: [
            {id: 1, icon:"", text:"Développement et maintenace applicative (language ci-contre)."}, 
            {id: 2, icon:"", text:"Conception et adaptation d'une base de données."},
            {id: 3, icon:"", text:"Manipuler les données via SQL ou un Framework ORM."},
            {id: 4, icon:"", text:"Mise en place de test unitaires et fonctionnels."},
            {id: 5, icon:"", text:"Bon relationnel avec les clients et sens du contact."}
        ],
        languages: [
            {id: 1, icon:"", percent: 80, text:"HTML/CSS (BOOTSTRAP)"}, 
            {id: 2, icon:"", percent: 70, text:"PHP (Symphony, Doctrine, Laravel, Eloquent)"},
            {id: 3, icon:"", percent: 70, text:"JS/TS (Vue.JS, Angular, React, jQuerry)"},
            {id: 4, icon:"", percent: 50, text:"Java (JEE, Maven, Spring, Hibernate)"},
            {id: 5, icon:"", percent: 90, text:"SQL (MariaDB/MySQL)"}
        ],
        hobbies: [
            {id: 1, icon:"", text:"Montage vidéo, développement de projets personnels. Découverte d'activités sportives variées, natation, équitation, bricolage, élevage (chevaux)."}
        ],
        medias: [
            {id: 1, icon:"fa-github", text:"Retrouver le code source du site sur Github", url:"https://github.com/Jean-Francois-Picherit-Steinbrucker"},
            {id: 2, icon:"fa-linkedin", text:"Retrouver moi sur linkedin", url:"https://fr.linkedin.com/in/jean-fran%C3%A7ois-picherit-steinbrucker-523a4116a"},
        ]
    }

    getUser(id, onSuccess, onFail, onDone, options) {
        this.doRequest(this.user, onSuccess, onFail, onDone, options);
    }
}

const userService = new UserService();
export default userService;