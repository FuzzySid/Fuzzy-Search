import React from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import './ThemeSwitch.css';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

export const ThemeSwitch = () => {
    const [state,dispatch]=useStateValue();
    const handleChange=(e)=>{
        console.log(e.target)
        dispatch({
            type: actionTypes.TOGGLE_THEME
        })
    }
    return (
            <div>
                <input type="checkbox" className="checkbox" id="chk" onChange={handleChange} value={state.theme}/>
                <label className="label" htmlFor="chk">
                    <Brightness2Icon fontSize="small" className="fa-moon"/>
                    <WbSunnyIcon fontSize="small" className="fa-sun"/>
                    <div className="ball"></div>
                </label>
            </div>
    )
}
