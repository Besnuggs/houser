import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Route} from 'react-router-dom'
import StepOne from '../Steps/StepOne'
import StepTwo from '../Steps/StepTwo'
import StepThree from '../Steps/StepThree'
import StepFour from '../Steps/StepFour'

class Wizard extends Component {
    render() { 
        return (
        <div>
        <Route path="/Wizard/StepOne" component={StepOne} />
        <Route path="/Wizard/StepTwo" component={StepTwo} />
        <Route path="/Wizard/StepThree" component={StepThree} />
        <Route path="/Wizard/StepFour" component={StepFour} />
        <Link to="/"><button>Cancel</button></Link>
        </div>  
        );
    }
}
 
export default Wizard;