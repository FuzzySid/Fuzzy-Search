import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
import { Search } from '../components/Search';
import { ThemeSwitch } from '../components/ThemeSwitch';
import Theme from './../themes';
import { useStateValue } from '../StateProvider';

export const Home = () => {
    const [state,dispatch]=useStateValue();
    console.log(state,Theme,Theme[state.theme])
    const theme=Theme[state.theme];
    return (
        <div className="container__home" style={{backgroundColor:theme.backgroundColor}}>
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/more" style={{color:theme.color}}>Know More</Link>
                </div>
                <div className="home__headerRight">
                    <ThemeSwitch/>
                </div>
            </div>

            <div className="home__body">
                <h1 style={{color:theme.color}}>Fuzzy Search</h1>
                <div className="home__inputContainer">
                    <Search/>
                </div>
            </div>
         </div>
         { /* Theme variable */ }
         <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={theme.color} fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            

        </div>
    )
}
