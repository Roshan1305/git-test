import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import leaders from './leaders';
import Header from './Header';
import './About.css'

import Footer from './Footer';

function About(props) {
    
    
    const mystyle = {
        flex:0.1,
       height:"100px",
       width:"100px",
       paddingRight:"30px",
      };
      const mystyle1 = {
        flex:0.25,
       height:"90px",
       width:"90px",
       paddingRight:"20px",
      };
    
    const leaders=props.leaders.map((leader)=>{
        return(
            <div style={{display:"flex",backgroundColor:"bg-primary",padding:"20px",margin:"40px",boxShadow:" 0 4px 60px rgba(0,0,0,0.5)"}}>
                <img src={leader.image} style={mystyle} alt=""/>
                 <div style={{flex:"0.7"}}>
        <h2 className="namek">{leader.name}</h2>
        <h4 className="namek2">{leader.designation}</h4>
        <p className="name3">{leader.description}</p>
             </div>
            </div>
        ); 
     })
     
    const leaders1=props.leaders.map((leader)=>{
        return(
            <div style={{display:"flex",backgroundColor:"bg-primary",padding:"10px",margin:"10px",marginBottom:"40px",border:"1px solid black",boxShadow:" 0 4px 20px rgba(0,0,0,0.5)"}}>
                <img src={leader.image} style={mystyle1} alt=""/>
                 <div style={{flex:"0.7"}}>
        <h3 className="name11">{leader.name}</h3>
        <h6 className="name12">{leader.designation}</h6>
             </div>
            </div>
        ); 
     })
    return(
        <div >
         
      <div className="head">
        <Header/>
        <div className="p">
            <h1 className="title">About Us</h1>
            
            <h4 className="path">Home  ->  AboutUs</h4>
        </div>
        </div> 
        <div className="container">
            <div className="row">
                <Breadcrumb className="bread2">
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    
                    <h3 className="a1 d-sm-none">About Us</h3>
                    <h3 className="a2 d-none d-sm-block">About Us</h3>
             
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                
                <div className="col-12 d-sm-none" >
                    <h2 style={{marginTop:"20px",marginBottom:"20px",display:"grid",alignItems:"center",justifyContent:"center"}}>Our History</h2>
                </div>
                    <h2 className=" d-none d-sm-block">Our History</h2>
                    <p className="b3">Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <hr />
                
            <div className="row row-content ">
                <div className="col-12 d-none d-sm-block">
                    <h2 style={{marginTop:"20px",marginBottom:"20px"}}>Corporate Leadership</h2>
                </div>
                <div className="lead col-12 d-none d-sm-block ">
                    {leaders}
                </div>
                <div className="col-12 d-sm-none" >
                    <h2 style={{marginTop:"20px",marginBottom:"20px",display:"grid",alignItems:"center",justifyContent:"center"}}>Corporate Leadership</h2>
                </div>
                
                <div className="lead1 col-12 d-sm-none ">
                    {leaders1}
                </div>
            </div>
        </div>
        <Footer/>
      
        </div>
    );
}

export default About;    