import React from 'react'

function leaders({props}) {
    
    const leaders=this.props.leaders.map((leader)=>{
       return(
           <div style={{display:"flex"}}>
               <img src={leader.image} style={{flex:0.3}} alt=""/>
                <div style={{flex:"0.7"}}>
       <h2>{leader.name}</h2>
       <h4>{leader.designation}</h4>
       <p>{leader.description}</p>
            </div>
           </div>
       ); 
    })
    
    return (
        <div className="container">
        <div className="row">
            {leaders}
        </div>
        </div>
        )
}

export default leaders;
