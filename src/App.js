import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/MyPosts/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
