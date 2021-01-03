import React from 'react';

import {Link} from 'react-router-dom'

import axios from 'axios' 

import Search from './Search'

const API_URL = 'http://localhost:8001/api/v1/countries'

export class Country extends React.Component{

	constructor (props){

		super(props)

		this.state = {
			 query: '',
             results: []		
		}

	}


   componentDidMount() {
   	  this.getInfo()
   }


	 

	getInfo = () => {
    axios.get(`${API_URL}?search=${this.state.query}`)
      .then(({ data }) => {
      	console.log("in");
      	console.log(data.responseData);
        this.setState({
          results: data.responseData                         
        })
      })
    }


	 handleInputChange = () => {
	 	this.setState({
	      query: this.search.value
	    }, () => {
	      if (this.state.query && this.state.query.length >= 1) {
	       
	          this.getInfo()
	       
	      } else if (!this.state.query) {
	      }
	    })
  }

	render(){
		console.log(this.props.data)
		return(
                  
			   <form>
			       <input
			         placeholder="Search for Country"
			         ref={input => this.search = input}
			         onChange={this.handleInputChange}
			       />

			       <Search results={this.state.results} />
			       <Link to="/question">Question Link</Link>
		     </form>

		     
			)
	}

}