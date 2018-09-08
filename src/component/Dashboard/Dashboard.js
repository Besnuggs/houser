import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from '../House/House'

class Dashboard extends Component {
    constructor (props){
        super (props)
            this.state = { 
                HouseList: []
             }

    }

componentDidMount(){
axios.get('api/houses').then((res) => {
    this.setState({HouseList: res.data})
})
}

updateHouseList(){
    axios.get('api/houses').then((res) => {
        this.setState({HouseList: res.data})
    })
}

deleteHouse(){
    axios.delete('api/houses').then((res) => {
        this.setState({
            HouseList: res.data
        })
        this.updateHouseList()
    })
}

   
 render(props) {
    console.log(this.state.HouseList)
    let HouseListInfo = this.state.HouseList.map((House, Index) => {      
     const {name, address, city, state, zip, img} = House
        return (
        <div>
        <House 
        id={Index}
        name={name}
        address={address}
        city={city}
        state={state}
        zip={zip}
        img={img}
        />
        </div>
    )
    }
);

    return (
        <div>
        <p>Dashboard</p>
        <House />
<Link to="/wizard/StepOne"><button>Add New Property</button></Link>
        </div>  
        );
    }
}
 
export default Dashboard;