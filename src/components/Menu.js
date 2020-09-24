import React from 'react'
import Menu from './MenuComponent'
import './Menu.css';

import Footer from './Footer';
import Header from './Header';

function menu(props) {
    return (
      <div>
      <div className="head">
        <Header/>
        <div className="p">
            <h1 className="title">Menus</h1>
            <h4 className="path">Home  ->  Menus</h4>
        </div>
        </div>    
        <div className="mention">
          <div className="d-none d-sm-block">
        <div className='t2'>What kind of Foods we serve for you</div>
      <p className="t3">Who are in extremely love with eco friendly system.</p>
        </div>
        
        <div className="d-sm-none">
        <div className='k1'>What kind of Foods we serve for you</div>
      <p className="k2">Who are in extremely love with eco friendly system.</p>
        </div>
      
        </div>
        <div className="menu">
        <Menu dishes={props.dishes}/>
      </div>
      <Footer/>
      </div>
    )
}

export default menu
