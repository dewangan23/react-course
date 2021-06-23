import React,{useEffect} from 'react';

function Contact (){
    
    useEffect(()=>{
        console.warn('Hello from Hooks')
    })
    
    let data="Contact Component"
    return(
        <div>
        <h2>{data}</h2>
        </div>
    );
}
export default Contact;
