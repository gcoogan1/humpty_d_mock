import React from 'react';
import './Menu.css';
import Icon from '../../assets/Icon.png';
import Dumplings from '../Meals/Dumplings';
import Bowl from '../Meals/Bowl';
import Salads from '../Meals/Salad';
import Star from '../../assets/star.png';


function Menu() {
    return (
        <div className="menu_wrapper" name="menu" > 
            <div className="menu_header">
            <img className="chef" src={Icon} alt="icon" />
            <div className="menu_title_wrapper">
                <h1 className="border ">MENU</h1>
            </div>
            </div>
            <div className="menu_menu">
            <p className="fancy"><span>Dumplings</span></p>
            <p className="menu_info">6 Dumplings for $9 Single Flavor or Mix & Match <br></br> $1 Dumplings on Wednesdays!</p>
            </div>
            <div>
            <Dumplings />
            </div>
            <div className="menu_menu">
            <p className="fancy"><span>NOODLE BOWLS</span></p>
            <p className="menu_info">$10.85 per Noodle Bowl</p>
            </div>
            <Bowl />
            <div className="menu_menu">
            <p className="fancy"><span>SALAD</span></p>
            <p className="menu_info">$4 for small. $6 for large.</p>
            </div>
            <Salads/>
            <div className="speciality_info">
                <div className='speciality_box'>
                <div className="vegan_info">
                 <p><div className="vegan align">v</div>= Vegetarian</p>
                </div>
                <div className="vegan_info">
                 <p><img src={Star} alt=""  className="align" />=  Special (Changed every month / season)</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
