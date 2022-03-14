import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import {BrowserRouter} from "react-router-dom";
import PicturesContext from "context/PicturesContext";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <PicturesContext>
                <App/>
            </PicturesContext>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);