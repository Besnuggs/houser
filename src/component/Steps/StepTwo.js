import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { uploadIMG } from '../../ducks/reducer'

class StepTwo extends Component {
    constructor (props){
        super (props)
            this.state = { 
                img: ''
             }
        this.addImg = this.addImg.bind(this) 
    }

    addImg(){
let img = this.state
this.props.uploadIMG(img)
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
         })
     }
   
    render() { 
        return (
        <div>
        <input name="img" placeholder="Img URL" onChange={this.handleInput} />
        <Link to='../Wizard/StepOne'><button onClick={this.addImg}>Previous Step</button></Link>
        <Link to="../Wizard/StepThree"><button onClick={this.addImg}>Next Step</button></Link>
        </div>  
        );
    }
}

function mapStateToProps (state){
    let {img} = state
    return{
        img
    }
}


export default connect (mapStateToProps, {uploadIMG}) (StepTwo);