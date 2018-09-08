import React from 'react'

function House (props){
    console.log(props.name)
    return(
        <div>
        <h1>House</h1>
        <img src={props.img} alt='dontknow' />
        <p>{props.name}</p>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.zip}</p>
        <button value={props.id} onClick={() => props.deleteHouse(props.id)}>Delete</button>
        <hr />
        </div>
    )
}

export default House;