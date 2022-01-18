import React from "react";
import Header from "components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "pages/HomePage";
import ShowPicturePage from "pages/ShowPicturePage";
import Modal from "react-modal";
import "./app.css";

const App = () => {

    Modal.setAppElement(document.getElementsByTagName('body'));

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}>
                    <Route path=":id" element={<ShowPicturePage/>}/>
                </Route>
                <Route path="*" element={"asdasd"}/>
            </Routes>
        </div>
    );
}

export default App;
