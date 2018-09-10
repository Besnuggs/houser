import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {uploadMortgageRent} from '../../ducks/reducer'


class StepThree extends Component {
    constructor (props){
        super (props)
            this.state = { 
                name: '',
                address: '',
                city: '',
                State: '',
                zip: 0,
                img: '',
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
        <h1>Property Name:</h1>
        <h1>Address:</h1>
        <h1>City:</h1>
        <h1>State:</h1>
        <h1>Zip Code:</h1>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LjtTOjoWnEDGxeAbl4jeXcuhPqs0VmUQvQUJVWD8gyXzv9RG' alt="User selected House" />
        <h1>Mortgage:</h1>
        <h1>Rent:</h1>


        <Link to="/Wizard/StepTwo"><button >Previous Step</button></Link>


        <Link to="/"> <button >Complete!</button></Link> 
        </div>  
        );
    }
}
 
function mapStateToProps(state){
let {mortgage, rent} = state
return{
mortgage,
rent
}
}

export default connect (mapStateToProps, {uploadMortgageRent}) (StepThree);