import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Wizard extends Component {
    constructor (props){
        super (props)
            this.state = { 
                
             }

    }
   
    render() { 
        return (
        <div>
            <h1>Wizard</h1>
          <Link to="/"><button>Cancel</button></Link> 
        </div>  
        );
    }
}
 
export default Wizard;