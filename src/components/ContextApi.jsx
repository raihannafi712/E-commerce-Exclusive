import React, { useEffect, useState } from "react";
import { createContext } from 'react';
import axios from 'axios';

const ApiData = createContext();

const ContextApi = ({children}) => {

    let [data,setData] = useState([]);      /* each data is an array */
    let [data2 , setData2] = useState([]);
    let [data3 , setData3] = useState([]);


    // API 1
    let getData = ()=>{
      axios.get("https://dummyjson.com/products/search?q=apple").then((response)=>{
        // console.log(response.data.products);
        setData(response.data.products);        
      })
    }

    // API 2
    let getData2 = ()=>{
      axios.get(" https://dummyjson.com/products?sortBy=title&order=asc").then((response)=>{
        // console.log(response.data.products);
        setData2(response.data.products);        
      })
    }

    // API 3
    let getData3 = ()=>{
      axios.get("	https://dummyjson.com/products?sortBy=title&order=asc ").then((response)=>{
        // console.log(response.data.products);
        setData3(response.data.products);        
      })
    }
  
    useEffect(()=>{
      getData();
      getData2();
      getData3();
    },[])
    // console.log(data);     /* To see all the data */

  return (

    <>
        <ApiData.Provider value={{data , data2 , data3}} >
            {children}
        </ApiData.Provider>
    </>

  )
};

export  { ContextApi , ApiData };