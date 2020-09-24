import React from 'react'
import iframe from 'react-iframe'
import './Contact.css'
import { Form ,Row,Col, Button } from 'react-bootstrap'
import inForm from './inForm.js';
import Header from './Header'
import { Breadcrumb, BreadcrumbItem,Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
    import HomeIcon from '@material-ui/icons/Home';
    import InstagramIcon from '@material-ui/icons/Instagram';
    import PhoneIcon from '@material-ui/icons/Phone';
    import MailIcon from '@material-ui/icons/Mail';
    
import Footer from './Footer';
    import LinkedInIcon from '@material-ui/icons/LinkedIn';
    import { Link } from 'react-router-dom'; 
    import './Contact.css' 
function Contact() {
    return (
        <div className="contact">
            <div className="head">
        <Header/>
        <div className="p">
            <h1 className="title">ContactUs</h1>
            <h4 className="path">Home  ->  ContactUs</h4>
        </div>
        </div>
        <div className="container">
            <div className="row">  
        <Breadcrumb className="bread1">
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
              </div>
    
            <div id="map-tile " className="d-none d-sm-block">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7840.154815944287!2d79.018411!3d10.728513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6371e96c202331c!2sSASTRA%20Deemed%20to%20be%20University!5e0!3m2!1sen!2sin!4v1600847590955!5m2!1sen!2sin"  width="100%" height="500px"frameborder="0" className="iframe" />
           </div>
           <div id="map-tile2" className="d-sm-none">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7840.154815944287!2d79.018411!3d10.728513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6371e96c202331c!2sSASTRA%20Deemed%20to%20be%20University!5e0!3m2!1sen!2sin!4v1600847590955!5m2!1sen!2sin"  width="80%" height="200px"frameborder="0" className="iframe1" />
           </div> 
           <hr classNmae="d-sm-none"/>
                
           <div className="container">
            <div className="row1">  
       
        <div className="panel">
            <div className="c1">
                <h2>To Call Us</h2><br/>
                <div className="c12"> 
	<LinkedInIcon className="icon" style={{color:"blue"}}fontSize="large"/> 	<Link to="/"><span className="details">  Roshan </span></Link></div>
                <br/><div className="c12"> <InstagramIcon className="icon"fontSize="large"/>	<Link to="/"><span className="details">  Roshan </span>	</Link></div>
                <br/><div className="c12"> <PhoneIcon style={{color:"blue"}}className="icon"fontSize="large"/>	<Link to="/"><span className="details">  0000-0000 </span>	</Link></div>
                <br/><div className="c12"> <MailIcon style={{color:"grey"}}className="icon"fontSize="large"/>	<Link to="/"><span className="details">  Roshan </span></Link></div>
<br/>
            </div>
            <hr classNmae="d-sm-none"/>
                
            <div className="form">
            <h2 >To Call U</h2>
                
            <div>
     <Form>
  <Row>
    <Col>
    <Form.Label className="feed1">First Name:</Form.Label>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
    <Form.Label className="feed1">Last Name:</Form.Label>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <Row>
    <Col>
    <Form.Label className="feed1">Email</Form.Label>
      <Form.Control placeholder="Email" />
    </Col>
    <Col>
    <Form.Label className="feed1">Phone Number:</Form.Label>
      <Form.Control placeholder="Phone Number" />
    </Col>
  </Row>
  
  <Form.Label className="feed1">FeedBack:</Form.Label>
      <Form.Control className="feed"  />
      <Button className="feed3" type="submit">Submit form</Button>
</Form>
        </div>
            </div>
            </div> 
            </div> 
       
        </div>
              </div>
              <Footer/>
      
        </div>
    )
}

export default Contact
