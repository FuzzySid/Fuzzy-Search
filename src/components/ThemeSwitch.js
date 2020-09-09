import React from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import './ThemeSwitch.css';

export const ThemeSwitch = () => {
    return (
            <div>
                <input type="checkbox" class="checkbox" id="chk" />
                <label class="label" for="chk">
                    <Brightness2Icon fontSize="small" className="fa-moon"/>
                    <WbSunnyIcon fontSize="small" className="fa-sun"/>
                    <div class="ball"></div>
                </label>
            </div>
    )
}
