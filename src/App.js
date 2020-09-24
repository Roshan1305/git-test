import React ,{ Component } from 'react';
import { LEADERS } from './shared/leaders';
import About from './components/About';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/Menu';
import { DISHES } from './shared/dishes';
import Header1 from './Header1';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import DishdetailComponent from './components/DishdetailComponent';
import Home from './components/Home';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
     };
  }

    render(){
  return (
    
  <div className="app">
    {/* <img src="https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg" alt=""/> */}

    <Router>

    <Header1/>
    <Body/>
    <Switch>  
    <Route path="/" exact component={Home}/>
    
    <Route path="/menu" exact component={() => <Menu dishes={DISHES}/>}/>
    <Route path="/about" component={() => <About leaders={LEADERS}/>}/>
    <Route path="/contact" exact component={Contact}/>
    
    <Route path="/menu/:name" component={DishdetailComponent}/>

</Switch>
    </Router>
    </div>
  );
}
}

export default App;
//     <div>
//    {/* <Navbar dark color="primary">
//              <div className="container">
               
//             <NavbarBrand href="/">

//             <img src={require('./shared/mcd.png')} width="200" alt="" class="d-inline-block align-left mr-2"/>
//         <h2>Ristorante Con Fusion</h2></NavbarBrand>
//           </div>
//         </Navbar>
//  */}

//       <nav id="header-nav" dark color="red" className ="navbar navbar-default navbar-expand-lg navbar-expand-md">
//       <div className="container">
//         <div className="navbar-header">
//           <a href="" className="pull left visible-md visible-lg">
//             <img className="logo" src={require('./shared/mcd.png')}  id="logo-img"/>
//           </a>
//         <div className="navbar-brand">
        
//         <button className="navbar-toggler" id="navbarToggle" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>

          
//           <div id="navbarNavAltMarkup" className="collapse navbar-collapse">
//           <ul className="navbar-nav ml-auto " id="nav-list">
//                 <li class="nav-item">
//                 <a href="" class="nav-link active">
//                 <img className="but" src={require('./shared/home.png')}  id="home-img"/>
//                   Home
//                 </a>
//                 </li>
//                 <li className="nav-item">
//                 <a href="" class="nav-link active">
//                 <img className="but" src={require('./shared/menu.png')}  id="menu-img"/>
//                   Menu</a>
//                 </li>
//                 <li className="nav-item"> 
//                 <a href="" class="nav-link active"> 
//                 <img className="but" src={require('./shared/about.png')}  id="home-img"/>
//                   About</a>
//                 </li>
//                 <li className="nav-item"> 
//                 <a href="" class="nav-link active"> 
//                 <img className="but" src={require('./shared/contactus.png')}  id="home-img"/>
//                   Contact Us</a>
//                 </li>
//           </ul>

          

      
//           <div class="dropdown">
//           <button type="button" className=" d-none d-xl-block d-sm-block d-md-none  btn btn-primary dropdown-toggle" data-toggle="dropdown">
//           <img className="but" src={require('./shared/menu.png')}  id="menu-img"/>
            
//           </button>
          
//           <div className="dropdown-menu navbar-nav d-none d-xl-block d-sm-block d-md-none">
//             <a class="dropdown-item" href="#">Menu</a>
//             <a class="dropdown-item" href="#">About</a>
//             <a class="dropdown-item" href="#">Contact Us</a>
          
//           </div>
//       </div>
//       </div>
//       </div>
//       </div>
//      </div>
//     </nav>
      







//   <div id="jf" class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1>McDonalds Restaurant ltd</h1>
//     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
//   </div>
// </div>

//         <Menu dishes={this.state.dishes}/>
//     </div>