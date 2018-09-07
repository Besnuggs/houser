import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor (props){
        super (props)
            this.state = { 
                
             }

    }
   
    render() { 
        return (
        <div>
  <p>Dashboard</p>
<Link to="/wizard"><button>Add New Property</button></Link>
        </div>  
        );
    }
}
 
export default Dashboard;