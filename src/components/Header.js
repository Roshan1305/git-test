import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
	return(<div>
		<div className="header">
			<div className="header1">
				
		<Link to="/">
				<img className="logo" src={require("../shared/mcd.png")} alt=""/>
			</Link>
			</div>
			<hr className="hr1"/>
			<div className="header2">
			{/* <Link to="/home">
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
		</Link> */}
		<Link to="/">
		
			<div className="left">Home</div>
			</Link>	
			<Link to="/menu">
		
			<div className="left">Menu</div>
			</Link>
			<Link to="/about">
			
			<div className="left">About</div>
			</Link>
			<Link to="/contact">
			
			<div className="left">ContactUs</div>
			</Link>
			</div>
			<hr className="hr1"/>
	
		</div>
		</div>
		);
}
export default Header;