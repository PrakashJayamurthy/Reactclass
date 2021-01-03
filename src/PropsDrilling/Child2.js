import React from 'react'
import {Child1} from './Child1'
import {Link} from 'react-router-dom'

export class Child2 extends React.Component{
   
	handleClick =(e) => {
		
		this.props.history.push("/privacy",this.state)
        
	}

render(){
	return(

		  <div>
              <Child1/>
              I am child 2

              <input type="text" onChange={(e)=>{this.setState({name:e.target.value}) } } />

              <button type="button" onClick={this.handleClick}>Privacy redirect</button>

		  </div>
		)
}

}