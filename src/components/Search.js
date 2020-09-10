import React,{useState} from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core';
import { useHistory} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const Search = ({hideButtons=false}) => {
    const history=useHistory()
    const [input,setInput]=useState('')
    const  [state,dispatch]=useStateValue();
    console.log('state: ',state)
    const search=e=>{
        e.preventDefault();
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        history.push('/search')
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {
                hideButtons ? (
                    <div className="search__buttons">
                        <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Search</Button>
                        {/* <Button className="search__buttonsHidden" variant="outlined">Fuzzy Fav</Button> */}
                    </div>
                ):( 
                    <div className="search__buttons">
                        <Button className="btn" type="submit" onClick={search} variant="contained" ><FavoriteIcon color="secondary"/><span className="search__buttonsName">&nbsp;Search</span></Button>
                        {/* <Button variant="outlined">Fuzzy Fav</Button> */}
                    </div>
                    
                )
            }

        </form>
    )
}
