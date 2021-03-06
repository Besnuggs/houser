import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {uploadMortgageRent} from '../../ducks/reducer'


class StepThree extends Component {
    constructor (props){
        super (props)
            this.state = { 
                mortgage: 0,
                rent: 0
             }
             this.addHouse = this.addHouse.bind(this)
             this.addMortgageandRent = this.addMortgageandRent.bind(this)
    }

    addMortgageandRent(){
        let money = this.state
        this.props.uploadMortgageRent(money)
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


        <Link to="/Wizard/StepTwo"><button onClick={this.addMortgageandRent}>Previous Step</button></Link>


        <Link to="/Wizard/StepFour"> <button onClick={this.addMortgageandRent}>Last Step!</button></Link> 
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