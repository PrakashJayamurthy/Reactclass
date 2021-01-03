import React from 'react';


export class LifeClassComponent extends React.Component{

	constructor (props){
 
		super(props)
console.log(1)
		this.state = {

			name: this.props.name,
			age : this.props.age,
			address: this.props.address,
			
		}

	}

	static getDerivedStateFromProps(props, state) {
		console.log(2)
	    return {name: props.name, age:props.age ,address : props.address};
	  }

	componentDidMount() {
		console.log(3)
	    setTimeout(() => {
	      this.setState({name: "Vino"})
	    }, 2000)
	  }


	render(){
console.log(4)
		return(
			 <div>
               
                 <div>
                      
	                 <b> Class Component </b>
	                  <input  name="name" type="text" onChange={this.props.changetxt} />
	                   Name : {this.state.name}
	                 <br/>
	                 Age : {this.state.age} 
	                 <br/>
	                 Address : {this.state.address}  
	                 
	                 <br/>

                </div>

            </div>

		)
	}
}