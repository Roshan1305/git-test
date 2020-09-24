import React, { Component } from 'react';

import { Breadcrumb, BreadcrumbItem,Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
	import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./DishDetail.css";
import Header from './Header';
import Forms2 from './Forms2';
import {Modal,Button} from 'react-bootstrap';	

import Footer from './Footer';


 class DishDetail extends Component
{
	constructor(props)
	{
		super(props);
		this.state={
			fname:"",
			lname:"",
			age:"",
			gender:""};
		this.renderComments=this.renderComments.bind(this);
		
	}
	
	renderComments(){
 	// const com=JSON.stringify(this.props.dishes.comments);	
		 	const comm=this.props.history.location.comm.map((com)=>
		 			{return(
		 				<div>
		 						

		 				<div>
		 					{com.comment}
		 				</div>	
		 				<div>
		 				  <p>-- {com.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(com.date))}
                    </p>
                    </div>		
		 				</div>	
		 				);}
		 		);

		 	
		 	return(

				<div>
				<h3>Comments:</h3>
			{comm}
				 </div>	
				);
	}

	
	  
render(){
	console.log('h3');
	
	console.log(this.props);
	
	const baseUrl ="../"+this.props.history.location.img;
	console.log(baseUrl);

	return(
		<div>
			 
      <div className="head">
        <Header/>
        <div className="p">
            <h1 className="title">{this.props.history.location.name}</h1>
            <h4 className="path">Home  ->  Menus  ->  {this.props.history.location.name}</h4>
        </div>
        </div> 
		<div className="container">
		<div className="row">
		
		<Breadcrumb className="bread3">
		<BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
					
		<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
		<BreadcrumbItem active>{this.props.history.location.name}</BreadcrumbItem>
				</Breadcrumb>	
		<div className="col-12">
           
		 <h2 style={{marginTop:"20px",marginBottom:"20px"}}>Item Details</h2>	
		</div>
		 <div className="row row-content"style={{justifyContent:"center"}}>
           
		<div  className="col-12 col-md-5 m-1">
		<Card className="card" style={{border: "2px solid grey",boxShadow:" 0 4px 60px rgba(0,0,0,0.5)"}}>
                    <CardImg width="100%"  src={baseUrl} alt="" />
                    <CardBody>
                      <CardTitle>{this.props.history.location.name}</CardTitle>
                      <CardText>{this.props.history.location.desc}</CardText>
                    </CardBody>
                </Card>
                </div>
		
		<div  className="col-12 col-md-5 m-1" >
		<Card className="comm" style={{border: "2px solid grey",boxShadow:" 0 4px 60px rgba(0,0,0,0.5)"}}>
		<CardBody style={{marginTop:"0px",backgroundColor:"bg-primary",padding:"20px",}}>
         <CardText style={{marginTop:"0px",color:"black"}}>            
		{this.renderComments()}
	    </CardText>
		</CardBody>
		</Card>
		<div className="comm">
		<Forms2/>
		</div>
        </div>       
		</div>
		</div>
		</div>
		<Footer/>
      
		</div>
);
}
}

export default DishDetail;

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





