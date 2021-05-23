import React, {useState,useEffect} from 'react';

function HookCounter(props) {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useEffect")
        document.title=`Clicked ${count}`
    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}> counter{count}</button> 
        </div>
    );
}

export default HookCounter;