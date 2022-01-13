import React ,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { apiGet } from '../misc/config';

function Show() {
    const { id }= useParams();
    const [show , setShow]=useState(null);
    const [isLoading,setIsloading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{

        let isMounted=true;

         apiGet(`/shows/${id}?embed[]=seasons&emded[]=cast`)
         .then(results=>{
                 if(isMounted){
                    setShow(results);
                    setIsloading(false);
                 }
            
         }).catch(err=>{
             if(isMounted){
                setError(err.message);
                setIsloading(false);
             }
         });
         return ()=>{
             isMounted=false;
         }
    }, [id]);

    // eslint-disable-next-line no-console
    console.log(show);

    if(isLoading){
        return <div> Data is being loaded</div>
    }
    if(error){
        return <div>Error occured: {error}</div>
    }
    return <div>this is show page</div>
}

export default Show
