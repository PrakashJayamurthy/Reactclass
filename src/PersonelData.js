import React from 'react';
import {LifeClassComponent} from './LifeClassComponent';

export class PersonelData extends React.Component{

	constructor (props){

		super(props)

		this.state = {
			name: this.props.data.name,
			age : this.props.data.age,
			address: this.props.data.address,
			optio:""
		}

	}
    
    handleChange = (e) =>{

    	this.setState({
           optio: e.target.value
    	})   
    }

    handleChangetext = (e) => {
       console.log(e.target.value);
         this.setState({
         	[e.target.name] : e.target.value
         },()=>{
             
             console.log('in---'+this.state.name);  
         })

         console.log('out--- '+this.state.name);	
    }

	render(){
   
		return(

            <React.Fragment>
               
               <div>
                 Name : {this.state.name}     <input  name="name" type="text" onChange={this.handleChangetext} />
                 <br/>
                 Age : {this.state.age}   <input  name="age" type="text" onChange={this.handleChangetext} />
                 <br/>
                 Address : {this.state.address}   <input  name="address" type="text" onChange={this.handleChangetext} />
                 
                 <br/>

                 <LifeClassComponent {...this.state}  changetxt={this.handleChangetext} />

                </div>

            </React.Fragment>
		)

	}

}