import React from 'react';



export class Privacy extends React.Component{
   
	
render(){
  console.log(this.props.location.state)

	return(
          
		  <div>
            
              Privacy Page  -- {this.props.location.state.name}

		  </div>
		)
}

}