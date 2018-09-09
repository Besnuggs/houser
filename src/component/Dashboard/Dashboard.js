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
             this.deleteHouse = this.deleteHouse.bind(this)
    }

componentDidMount(){
axios.get('api/houses').then((res) => {
    this.setState({HouseList: res.data})
})
}

updateHouseList(){
    axios.get('/api/houses').then((res) => {
        this.setState({HouseList: res.data})
    })
}

deleteHouse(id){
    console.log(id)
    axios.delete(`/api/houses/${id}`).then(
        (res) => {
        this.setState({
            HouseList: res.data
        })
        this.updateHouseList()
    })
}

 render(props) {
    let HouseListInfo = this.state.HouseList.map((Info, Index) => {      
     const {id, name, address, city, state, zip, img} = Info 
     return (
        <House 
        id={id}
        name={name}
        address={address}
        city={city}
        state={state}
        zip={zip}
        img={img}
        deleteHouse={this.deleteHouse}
        />
    )
    }
);

    return (
        <div>
        <p>Dashboard</p>
        {HouseListInfo}
        <House />
        <Link to="/wizard/StepOne"><button>Add New Property</button></Link>
        </div>  
        );
    }
}
 
export default Dashboard;