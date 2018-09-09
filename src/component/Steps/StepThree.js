import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class StepThree extends Component {
    constructor (props){
        super (props)
            this.state = { 
                mortgage: 0,
                rent: 0
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
        <input name="mortgage" placeholder="Monthly Mortgage Amount" onChange={this.handleInput} />
        <input name="rent" placeholder="Desired Monthly Rent" onChange={this.handleInput} />
        <Link to="/Wizard/StepOne"><button>Previous Step</button></Link>
        <Link to="/"> <button onClick={this.addHouse}>Complete</button></Link> 
        </div>  
        );
    }
}
 
export default StepThree;