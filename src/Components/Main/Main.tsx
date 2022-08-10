import OneGroupOfWords from "../OneGroupOfWords/OneGroupOfWords";
import { Routes, Route } from "react-router-dom";
import './main.css'
import Header from "../Header/Header";
import GroupsOfWords from "../GroupsOfWords/GroupsOfWords";
import RussianToEnglish from "../RusEng/RussianToEnglish";
import EnglishToRussian from "../EngRus/EnglishToRussian";
import Spell from "../Spell/Spell";
import Listening from "../Listening/Listening";
import Admin from "../Admin/Admin";
import AddNewWord from "../Admin/AddNewWord/AddNewWord";
import ChangeWord from "../Admin/ChangeWord/ChangeWord";
import AddNewGroup from "../Admin/AddNewGroup/AddNewGroup";
import ChangeGroup from "../Admin/ChangeGroup/ChangeGroup";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useId } from "react";


export default function Main(){
    const allGroups = useSelector((state: RootState) => state.groups)
    const id = useId()
    return (
        <div className="container mx-auto px-4 text-sm font-sans">
                <Header />
                <Routes>
                    <Route path="/" element={<GroupsOfWords/>} />

                    
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/addNewWord" element={<AddNewWord />} />
                    <Route path="/changeWord" element={<ChangeWord />} />
                    <Route path="/addNewGroup" element={<AddNewGroup />} />
                    <Route path="/changeGroup" element={<ChangeGroup />} />

                    {allGroups.map((el, i) => {
                        return (
                            <>{/**Ругает на отстутствие key */} 
                                <Route path={el.eng} element={<OneGroupOfWords {...el} />} />
                                <Route path={`${el.eng}/eng-rus`} element={<EnglishToRussian {...el} />} />
                                <Route path={`${el.eng}/rus-eng`} element={<RussianToEnglish {...el} />} />
                                <Route path={`${el.eng}/spell`} element={<Spell {...el} />} />
                                <Route path={`${el.eng}/listening`} element={<Listening {...el} />} />
                            </>
                        )
                    })}

                </Routes>
        </div>
    )
}