import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar} from '@material-ui/core'

export const Home = () => {
    return (
        <div className="home">
            {/* <h1>Home</h1> */}
            <div className="home__header">
                <div className="header__left">
                    <Link to="/about">About</Link>
                    <Link to="/about">Store</Link>
                </div>
                <div className="header__right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className="home__body">
                
            </div>
        </div>
    )
}
