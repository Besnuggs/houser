import React from 'react'

function House (props){
    console.log(props.name)

    return(
        <div>
        <h1>House</h1>
        <p>{props.name}</p>
        {props.address}
        {props.city}
        {props.state}
        {props.zip}
        <button>Delete</button>
        </div>
    )
}

export default House;