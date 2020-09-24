import React, { Component } from 'react';
import Dish from './DishdetailComponent';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react';
import ItemDetail from './ItemDetail';
import './Menu.css'; 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        console.log("h2");
        console.log(dish);
        
        this.setState({ selectedDish: dish});
       return( <Dish dishes={this.state.selectedDish}/>
        )
    }
    renderDish(dish) {
        console.log("hi");
        console.log(dish);
        if (dish != null)
            return(
                <Dish dishes={this.state.selectedDish}/>
            );
        else
            return(
                <div></div>
            );
    }

    render() {

        const menu = this.props.dishes.map((dish) => 
        {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Link to={{
                    pathname:"/menu/"+dish.name,
                        img:dish.image,
                        name:dish.name,
                        desc:dish.description,
                        comm:dish.comments
                    }}>
                
                <Card  style={{margin:"20px",border: "2px solid grey",boxShadow:" 0 4px 60px rgba(0,0,0,0.5)",justifyContent:"center"}}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
                </Link>
              </div>
            );
        });
            console.log(menu);
        return (
            <div>
            <div className="container">
                <div className="row" style={{alignItems:"center",justifyContent:"center"}}>
                    {menu}
                </div>

                  {this.renderDish(this.state.selectedDish)}
                             </div>
         
</div>
        );
    }
}

 
export default Menu;