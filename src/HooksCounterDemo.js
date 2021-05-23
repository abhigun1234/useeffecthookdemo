import React, { useState,useEffect } from 'react';

function HooksCounterDemo(props) {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('useeffect life')
        document.title=`Clicked ${count}`
    })
    const addCounter=(e)=>{

        setCount(count+1)
    }
    return (
        <div>
           {count} 
           <button onClick={addCounter}>click</button>
        </div>
    );
}

export default HooksCounterDemo;