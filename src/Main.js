import React, {Component} from 'react';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Stuff from "./Stuff";

class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>
                <h1>Простое SPA-приложение</h1>
                <ul className='header'>
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/stuff">Продукты</NavLink></li>
                    <li><NavLink to="/contact">Контакты</NavLink></li>
                </ul>
                <div className='content'>
                    <Route exact path ='/' component={Home}/>
                    <Route path='/stuff' component={Stuff}/>
                    <Route path='/contact' component={Contact}/>
                </div>
            </div>
            </HashRouter>
        )
    }
}

export default Main;