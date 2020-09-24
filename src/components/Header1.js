import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import './Header1.css'
function Header1() {
    return (
        <div>
            		<div className="header">
			<div className="header_left">
				<img className="logo" src="https://toppng.com/uploads/preview/logo-mcdonalds-11551052037rbgskdxzkj.png" alt=""/>
			</div>
			<div className="header_right">
			<Link to="/home">
			<HomeIcon id="left" className="left" fontSize="large"/>
			</Link>
			
			<Link to="/menu">
			<MenuBookIcon id="left" className="left"fontSize="large"/>
			</Link>
			<Link to="/about">
			<InfoIcon id="left" className="left"fontSize="large"/>
			</Link>
			<Link to="/contact">
			<PermContactCalendarIcon id="left" className="left1"fontSize="large"/>
		</Link>
        </div>
        </div>

        </div>
    )
}

export default Header1
