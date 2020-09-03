import React from 'react'
import './Results.css'
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { useGoogleSearch } from '../hooks/useGoogleSearch';
import Response from '../response';
import { Search } from '../components/Search';

export const Results = () => {
    const [{term},]=useStateValue();

    //LIVE API CALL, don't use this for local development
    //const { data }=useGoogleSearch(term)

    const data=Response;

    console.log(data)
    return (
        <div className="results">
             <div className="results__header">
                <Link to="/">
                    <h1 className="results__headerTitle">Fuzzy Search</h1>
                </Link>
                <div className="results__headerBody">
                    <Search hideButtons />

                </div>
             </div>

             <div className="results__searchResults">
             </div>
        </div>
    )
}
