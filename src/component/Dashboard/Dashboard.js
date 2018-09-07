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
     console.log(House)
        return (
        <div>
        <House 
        name={House.name}
        address={House.address}
        city={House.city}
        state={House.state}
        zip={House.zip}
        />
        </div>
    )
    });

    return (
        <div>
        <p>Dashboard</p>
        <House 
        name={House.name}
        address={House.address}
        city={House.city}
        state={House.state}
        zip={House.zip}
        />
<Link to="/wizard"><button>Add New Property</button></Link>
        </div>  
        );
    }
}
 
export default Dashboard;