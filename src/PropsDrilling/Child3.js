import React from 'react';
import {Child2} from './Child2'
import {Link} from 'react-router-dom'

export class Child3 extends React.Component{

render(){
	console.log(this.props.data)
	return(

		  <div>
             
              I am child 3 -- Name : {this.props.data.name}   <Link to="/child2">Return TO Child2</Link>
              
		  </div>
		)
}

}