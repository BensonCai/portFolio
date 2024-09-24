import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Precursor from "./pages/precursor";
import MyPortfolio from "./pages/portfolio";



class App extends React.Component {
    render () {

        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/hi" />} />
                    <Route path="/hi" element={<Precursor/>}></Route>
                    <Route path="/me" element={<MyPortfolio/>}></Route>
                </Routes>
            </div>
        );

    }
}

export default App;
