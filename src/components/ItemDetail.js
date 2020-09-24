import React, { Component } from 'react';
import { useLocation } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

import { useEffect, useState } from 'react';

function ItemDetail(props)
{
    console.log(props);
    return(
        <div></div>
    );
}
export default ItemDetail;

//  class DishDetail extends Component
// {
// 	constructor(props)
// 	{
// 		super(props);
// 		this.renderComments=this.renderComments.bind(this);
// 	}

// 	renderComments(){
//  	// const com=JSON.stringify(this.props.dishes.comments);	
// 		 	const comm=this.props.dishes.comments.map((com)=>
// 		 			{return(
// 		 				<div>
		 						

// 		 				<div>
// 		 					{com.comment}
// 		 				</div>	
// 		 				<div>
// 		 				  <p>-- {com.author},
//                     &nbsp;
//                     {new Intl.DateTimeFormat('en-US', {
//                             year: 'numeric',
//                             month: 'long',
//                             day: '2-digit'
//                         }).format(new Date(com.date))}
//                     </p>
//                     </div>		
// 		 				</div>	
// 		 				);}
// 		 		);

		 	
// 		 	return(

// 				<div>
// 				<h3>Comments:</h3>
// 			{comm}
// 				 </div>	
// 				);
// 	}



// render(){
 	
// 	return(

// 		<div className="row">
// 		<div  className="col-12 col-md-5 m-1">
// 		<Card>
//                     <CardImg top src={this.props.dishes.image} alt={this.props.dishes.name} />
//                     <CardBody>
//                       <CardTitle>{this.props.dishes.name}</CardTitle>
//                       <CardText>{this.props.dishes.description}</CardText>
//                     </CardBody>
//                 </Card>
//                 </div>
		
// 		<div  className="col-12 col-md-5 m-1">
// 		<CardBody>
//          <CardText>            
// 		{this.renderComments()}
// 	    </CardText>
// 		</CardBody>
               
// 		</div>
// 		</div>
// );
// }
// }


//// function DishDetail(props){
// 		console.log(props);
// 	return(
		
// 		<div className="row">
// 		<div  className="col-12 col-md-5 m-1">
// 		<Card>
//                     <CardImg top src={this.props.dishes.image} alt={this.props.dishes.name} />
//                     <CardBody>
//                       <CardTitle>{this.props.dishes.name}</CardTitle>
//                       <CardText>{this.props.dishes.description}</CardText>
//                     </CardBody>
//                 </Card>
//                 </div>
		
// 		<div  className="col-12 col-md-5 m-1">
// 		{this.props.dishes.comment}
// 		</div>
// 		</div>

// 		);


// }





