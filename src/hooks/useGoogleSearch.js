import {useState,useEffect} from 'react'
//import API_KEY from '../.env.local';
import API_KEY from '../keys';

const CONTEXT_KEY="02476a804532ba0c9";

export const useGoogleSearch = (term) => {
    console.log(API_KEY)
    const [data,setData]=useState(null)

    useEffect(()=>{
        const fetchData=async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(response=>response.json())
                .then(result=>{
                    setData(result)
                })
        }    
        fetchData();   
    },[term])

    return {data}
}
