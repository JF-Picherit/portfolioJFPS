import React, { useState, useEffect } from "react";
import MainInfo from "./MainInfo";
import GenericList from "./GenericList";
import HistoryList from "./HistoryList";
import LevelList from "./LevelList";
import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
import "./Curriculum.css";
import userService from "../services/UserService";


function Curriculum() {
    //const [isAdmin, setIsAdmin] = useState(false);
    const [mainInfo, setMainInfo] = useState({});
    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [knowledges, setKnowledges] = useState([]);
    const [languages, setLanguages] = useState([])
    const [hobbies, setHobbies] = useState([]);
    const [medias, setMedias] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        userService.getUser(
            1,
            (data) => {
                console.log(data);
                setMainInfo(data.mainInfo);
                setEducations(data.educations);
                setExperiences(data.experiences);
                setContacts(data.contacts);
                setKnowledges(data.knowledges);
                setLanguages(data.languages);
                setHobbies(data.hobbies);
                setMedias(data.medias);
            },
            () => alert("Un poblème est survenu."),
            () => setIsLoading(false)
        );
    }, []);

    return <div className="curriculum">
        <Header medias={medias}/>
        { isLoading ? <Loading/> : "" }
        <div className="content margin-top" id="parentContainer" >
            <div className="row-padding">
                <div className="third">
                    <div className="white text-grey card-4">
                        <MainInfo firstName={mainInfo.firstname} lastName={mainInfo.lastname} urlPhoto={mainInfo.urlPhoto}/>
                        <div className="basic-container" id="bookmark">
                            <GenericList list={contacts} className="contacts"/>                       
                            <hr/>
                            <GenericList list={knowledges} title="Compétences" icon="fa-asterisk" className="knowledges"/>
                            <hr/>
                            <LevelList list={languages} title="Maîtrise Langages/Framework" className="languages" icon="fa-code"/>
                        </div>
                    </div>
                </div>
                <div className="twothird">
                    <div className="basic-container card white margin-bottom">
                        <HistoryList list={educations} title="Formations" icon="fa-certificate" className="educations"/>
                    </div>
                    <div className="basic-container card white margin-bottom">
                        <HistoryList list={experiences} title="Expériences Professionnelles" className="experiences" icon="fa-suitcase" />
                    </div>
                    <div className="basic-container card white margin-bottom">
                        <GenericList list={hobbies} title="Activités extra-scolaires / centres d'intérêts" icon="fa-angellist" className="hobbies"/>
                    </div>
                </div>
            </div>
        </div>
        <Footer medias={medias}/>
    </div>
}

export default Curriculum;