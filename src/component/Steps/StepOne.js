import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateStateValues} from '../../ducks/reducer.js'

class StepOne extends Component {
    constructor (props){
        super (props)
            this.state = { 
                name: '',
                address: '',
                city: '',
                State: '',
                zip: 0
             }
             this.updateReducerState = this.updateReducerState.bind(this)
             this.handleInput = this.handleInput.bind(this)
    }

    updateReducerState(){
    let info = this.state
    this.props.updateStateValues(info)
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
        <input name="name" value={this.state.name} placeholder="Name" onChange={this.handleInput} />

        <input name="address" value={this.state.address} placeholder="Address" onChange={this.handleInput} />

        <input name="city" value={this.state.city} placeholder="City" onChange={this.handleInput} />

        <input name="State" value={this.state.State} placeholder="State (abbreviated)" onChange={this.handleInput} />

        <input name="zip" value={this.state.zip} placeholder="Zipcode (5 digits)" onChange={this.handleInput} />
        
        <Link to="/Wizard/StepTwo"><button onClick={this.updateReducerState}>Next Step</button></Link>
        </div>  
        );
    }
}

function mapStateToProps(state){
const {name, address, city, State, zip} = state
return{
    name,
    address,
    city,
    State,
    zip
}
}
 
export default connect (mapStateToProps, {updateStateValues}) (StepOne);