import {useEffect, useState} from "react";
import axios from "axios";

const useGetProducts=(query)=>{
    
    const url=process.env.API_URL;

const [products, setProducts]=useState([]);

useEffect(async() =>{
    const response=await axios.get(`${url}/users/pokemon.php`);
    setProducts(response.data);
},[]);

return products;
}

export default useGetProducts;