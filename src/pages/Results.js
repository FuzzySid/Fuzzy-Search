import React from 'react'
import './Results.css'
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { useGoogleSearch } from '../hooks/useGoogleSearch';
import Response from '../response';
import { Search } from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const Results = () => {
    const [{term='tesla'},]=useStateValue();

    //LIVE API Call, don't use this for local development
    const { data }=useGoogleSearch(term)

    //Mock API Call
    //const data=Response;

    console.log(data)
    return (
        <div className="results">
             <div className="results__header">
                <Link to="/">
                    <h1 className="results__headerTitle">Fuzzy Search</h1>
                </Link>
                <div className="results__headerBody">
                    <Search hideButtons />
                    <div className="results__options">
                        <div className="results__optionsLeft">
                            <div className="results__option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="results__option">
                                <DescriptionIcon/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="results__option">
                                <ImageIcon/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="results__option">
                                <LocalOfferIcon/>
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="results__option">
                                <RoomIcon/>
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="results__option">
                                <MoreVertIcon/>
                                <Link to="/more">more</Link>
                            </div>
                        </div>
                        <div className="results__optionsRight">
                            <div className="results__option">
                                <Link to="/maps">Settings</Link>
                            </div>
                            <div className="results__option">
                                <Link to="/more">Rools</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
             </div>
            {
                term && (
                    <div className="results__searchResults">
                        <p className="results__resultCount">
                            About {data?data.searchInformation.formattedTotalResults:''} results ({data?data.searchInformation.formattedSearchTime: ''} seconds) for {term?term:'tesla'}
                        </p>
                    </div>
                )
            }
            {
                data && data.items.map(item=>
                    <div>
                        <div className="results__allResults">
                           <a href={item.link}>
                            {
                                item.pagemap.cse_image && item.pagemap.cse_image.length>0 && item.pagemap.cse_image[0].src &&
                                (
                                    <img className="results__resultImage" src={item.pagemap.cse_image[0].src} alt=""/>
                                )
                            }
                            {item.displayLink} 
                           </a>
                           <a href={item.link} className="results__resultTitle">
                               <h2>{item.title}</h2>
                           </a>
                           <p className="results__resultSippet">
                               {item.snippet}
                           </p>
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}
