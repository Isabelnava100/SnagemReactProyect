
import { useState,useEffect } from "react";
import axios from "axios";
const url = process.env.API_URL;

const initialState={
   allRoles: [
    [{
        "roles_name": "Guest",
        "id_roles_users": 1,
        "alt_description": "Temporary Visit",
        "id_userid": 16,
        "username": "Guest"
    },
]
    
]
}


const useInitialState = () =>{
    const [state,setState]=useState(initialState);
  //  return [state,setState];

    const stateEnter = (payload) => {
        setState({
            ...state,
            allRoles: [...state.allRoles, payload]
        })
    }
    

    const stateEnter2 = (payload) => {
        setState({
            allRoles: [payload]
        })
    }
    

    useEffect(async () => {  
        await axios
        .get(`${url}forums/roles.php`)
        .then((resultRoles) => {  
            stateEnter2(resultRoles.data);
       //   console.log(resultRoles.data);
        });
    }, []); 

    return {
        state,
        stateEnter
    }
}

export default useInitialState;