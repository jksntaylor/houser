const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    img: '',
    mortgage: '',
    rent: ''
};

// const UPDATE_STEPONE = 'UPDATE_STEPONE';
// const UPDATE_STEPTWO = 'UPDATE_STEPTWO';
// const UPDATE_STEPTHREE = 'UPDATE_STEPTHREE';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const FORGET = 'FORGET';

function reducer (realstate = initialState, action) {
    switch (action.type) {
        // case UPDATE_STEPONE:
        //     const {name, address, city, state, zipcode} = action.payload;
        //     return {...realstate, name:name, address:address, city:city, state:state, zipcode:zipcode};
        // case UPDATE_STEPTWO:
        //     return {...realstate, img: action.payload};
        // case UPDATE_STEPTHREE:
        //     const {mortgage, rent} = action.payload;
        //     return {...realstate, mortgage:mortgage, rent:rent}
        case UPDATE_NAME:
            return {...realstate, name: action.payload};
        case UPDATE_ADDRESS:
            return {...realstate, address: action.payload};
        case UPDATE_CITY:
            return {...realstate, city: action.payload};
        case UPDATE_STATE:
            return {...realstate, state: action.payload};
        case UPDATE_ZIPCODE:
            return {...realstate, zipcode: action.payload};
        case UPDATE_IMG:
            return {...realstate, img: action.payload};
        case UPDATE_MORTGAGE:
            return {...realstate, mortgage: action.payload};
        case UPDATE_RENT:
            return {...realstate, rent: action.payload};
        case FORGET:
            return action.payload
        default:
            return realstate;
    }
}

// export function updateStepOne (name, address, city, state, zipcode) {
//     return {
//         type: UPDATE_STEPONE,
//         payload: {
//             name, 
//             address,
//             city,
//             state,
//             zipcode
//         }
//     }
// }

// export function updateStepTwo (img) {
//     return {
//         type: UPDATE_STEPTWO,
//         payload: img
//     }
// }

// export function updateStepThree (mortgage, rent) {
//     return {
//         type: UPDATE_STEPTHREE,
//         payload: {
//             mortgage,
//             rent
//         }
//     }
// }

export function updateName (name) {
    return {
        type: UPDATE_NAME,
        payload: name 
    }
}
export function updateAddress (address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address 
    }
}
export function updateCity (city) {
    return {
        type: UPDATE_CITY,
        payload: city 
    }
}
export function updateState (state) {
    return {
        type: UPDATE_STATE,
        payload: state 
    }
}
export function updateZipcode (zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode 
    }
}
export function updateImg (img) {
    return {
        type: UPDATE_IMG,
        payload: img 
    }
}
export function updateMortgage (mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage 
    }
}
export function updateRent (rent) {
    return {
        type: UPDATE_RENT,
        payload: rent 
    }
}

export function forget () {
    return {
        type: FORGET,
        payload: initialState
    }
}

export default reducer;
