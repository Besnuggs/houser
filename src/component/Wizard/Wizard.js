import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor (props){
        super (props)
            this.state = { 
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0
             }
             this.addHouse = this.addHouse.bind(this)
    }

    addHouse(){
        axios.post(`/api/houses`,{name: this.state.name, address: this.state.address,city: this.state.city, state: this.state.state, zip: this.state.zip}).then()
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
         })
     }
   
    render() { 
        return (
        <div>
        <input name="name" placeholder="Name" onChange={this.handleInput} />
        <input name="address" placeholder="Address" onChange={this.handleInput} />
        <input name="city" placeholder="City" onChange={this.handleInput} />
        <input name="state" placeholder="State (abbreviated)" onChange={this.handleInput} />
        <input name="zip" placeholder="Zipcode (5 digits)" onChange={this.handleInput} />


    <Link to="/"> <button onClick={this.addHouse}>Complete</button></Link> 
    <Link to="/"><button>Cancel</button></Link> 
        </div>  
        );
    }
}
 
export default Wizard;