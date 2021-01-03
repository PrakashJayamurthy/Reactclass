import React from 'react';

import {UserContext} from './UserContext'

export class Child1 extends React.Component{

	static contextType = UserContext

	constructor (props){
 
		super(props)

	}

render(){
	console.log(this.context);
	return(
          
		  <div>
            
              I am child 1  

		  </div>
		)
}

}