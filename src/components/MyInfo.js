import React from 'react';
import Footer from './Footer'
import Main from './Main'
import Header from './Header'

function MyInfo(){
	const date=new Date();
	const hours=date.getHours();
	var k="PM";
	let timeofDay

	if(hours<12){
		timeofDay="morning";
		k="AM";	
	}

	else if(hours>=12&&hours<17){
		timeofDay="evening";	
		
	}

	if(hours>17){
		timeofDay="night";	
	}
	return(
		<div>
		<Header/>

		 <Main/>
		Good {timeofDay}	
		Its {hours + k} 	
		<Footer />
		</div>

		);
}
export default MyInfo;
