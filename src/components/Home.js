import React from 'react'
import Header from './Header';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
          <Header/>  
          <div className="body">
              <h6 className="d-none d-sm-block">WIDE OPTION OF CHOICES</h6>
              <h6 className="n2 d-sm-none">WIDE OPTION OF CHOICES</h6>
        
          <h1 className="name d-none d-sm-block">
              Delicious Recipies
          </h1>
          <h1 className="name1 d-sm-none">
              Delicious Recipies
          </h1>
          
          <p className="d-none d-sm-block"style={{paddingTop:"15px",fontSize:"medium",fontWeight:"450"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
          </p>
          <Link to="/menu">
          <button className="button1 d-none d-sm-block"type="button">Try Our Menu >></button>
          <button className="button2 d-sm-none"type="button">Try Our Menu >></button>
          
          </Link>
          </div>
        </div>
    )
}

export default Home
