import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Wizard extends Component {
    constructor (props){
        super (props)
            this.state = { 
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: 0
             }
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
         })
     }
   
    render() { 
        console.log(this.state)
        return (
        <div>
        <input name="name" placeholder="Name" onChange={this.handleInput} />
        <input name="address" placeholder="Address" onChange={this.handleInput} />
        <input name="city" placeholder="City" onChange={this.handleInput} />
        <input name="state" placeholder="State (abbreviated)" onChange={this.handleInput} />
        <input name="zipcode" placeholder="Zipcode (5 digits)" onChange={this.handleInput} />



          <Link to="/"><button>Cancel</button></Link> 
        </div>  
        );
    }
}
 
export default Wizard;