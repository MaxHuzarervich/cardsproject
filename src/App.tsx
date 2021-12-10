import React from 'react';
import './App.css';
import {RoutesComponent} from "./routes/RouteComponent";
import {Header} from "./routes/Header";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <HashRouter>
                <RoutesComponent/>
                <Header/>
            </HashRouter>
        </div>
    );
}

export default App;
