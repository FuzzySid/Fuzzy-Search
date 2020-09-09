import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar} from '@material-ui/core'
import { Search } from '../components/Search';
import { ThemeSwitch } from '../components/ThemeSwitch';

export const Home = () => {
    return (
        <div className="home">
            {/* <h1>Home</h1> */}
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/about">Store</Link>
                </div>
                <div className="home__headerRight">
                    {/* <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/> */}
                    <ThemeSwitch/>
                </div>
            </div>

            <div className="home__body">
                <h1>Fuzzy Search</h1>
                <div className="home__inputContainer">
                    <Search/>
                </div>
            </div>
        </div>
    )
}
