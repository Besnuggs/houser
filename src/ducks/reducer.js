let initialState = {
    name: '',
    address: '',
    city: '',
    State: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

//Constants for function
const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_STATE = "UPDATE_STATE"
const IMG = "UPDATE_IMG"
const MORTGAGEANDRENT = "UPDATE_MORTGAGEANDRENT"

//Action Builder Functions
export function updateName (name) {
return{
type: UPDATE_NAME,
payload: name
}
}

export function updateStateValues (info) {
    console.log('updateStateValues', info)
    return{
        type: UPDATE_STATE,
        payload: info
    }
}

export function uploadIMG (img) {
    console.log('IMG', img)
    return{
        type: IMG,
        payload: img
    }
}

function reducer (state = initialState, action){
console.log('Reducer State', state)
switch (action.type){
    case UPDATE_NAME:
    return Object.assign({}, state, {name: action.payload})
    

        default: return state;
}
}

  // case IMG:
    //     return Object.assign({}, state, {img: action.payload})
    // case MORTGAGE:
    //     return Object.assign({}, state, {mortgage: action.payload})
    // case RENT:
    //     return Object.assign({}, state, {rent: action.payload})


    // let {name, address, city, State, zip} = action.payload
    //     return Object.assign({}, state, 
    //         {name: name,
    //         address: address,
    //         city: city,
    //         State: State,
    //         zip: zip
    //     })
    // case IMG:
    // let {img} = action.payload
    //     return Object.assign({}, state,
    //     {img: img
    //     })
    // case MORTGAGEANDRENT:
    // let {mortgage,rent} = action.payload
    //     return Object.assign({}, state,
    //     {
    //     mortgage: mortgage,
    //     rent: rent
    //     })    


export default reducer