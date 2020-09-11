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
import { ThemeSwitch } from '../components/ThemeSwitch';
import Theme from './../themes';


export const Results = () => {
    const [{term='tesla'},]=useStateValue();
    const [state,]=useStateValue();
    const theme=Theme[state.theme]
    //LIVE API Call, don't use this for local development
    // const { data }=useGoogleSearch(term)

    //Mock API Call
    const data=Response;

    console.log(data)
    return (
        <div className="results" style={{backgroundColor:theme.backgroundColor}}>
             <div className="results__header" style={{backgroundColor:theme.backgroundColor}}>
                <Link to="/">
                    <h1 className="results__headerTitle" style={{color:theme.color}}>Fuzzy Search</h1>
                </Link>
                <div className="results__headerBody">
                        <Search hideButtons />
                        {/* <div className="results__headerBody__Switch">
                            <ThemeSwitch/>  
                        </div> */}
                        {/* <ThemeSwitch/>   */}
                </div>
             </div>
            {
                term && (
                    <div className="results__searchResults">
                        <p className="results__resultCount" style={{color:theme.color}}>
                            About {data?data.searchInformation.formattedTotalResults:''} results ({data?data.searchInformation.formattedSearchTime: ''} seconds) for {term?term:'tesla'}
                        </p>
                    </div>
                )
            }
            {
                data && data.items.map(item=>
                    <div>
                        <div className="results__allResults">
                           <a href={item.link} style={{color:theme.color}}>
                            {
                                item.pagemap.cse_image && item.pagemap.cse_image.length>0 && item.pagemap.cse_image[0].src &&
                                (
                                    <img className="results__resultImage" src={item.pagemap.cse_image[0].src} alt=""/>
                                )
                            }
                            {item.displayLink} 
                           </a>
                           <a href={item.link} target="_blank" className="results__resultTitle" style={{color:theme.color}}>
                               <h2>{item.title}</h2>
                           </a>
                           <p className="results__resultSippet" style={{color:theme.color}}>
                               {item.snippet}
                           </p>
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}
