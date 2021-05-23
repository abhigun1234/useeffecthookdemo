import React, {useState,useEffect} from 'react';
import axios from 'axios'
function FetchDataUseEffectHooks(props) {
    const [posts,sePosts]=useState([])
    useEffect(()=>{
        console.log("useEffect")
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log("res",res)
            sePosts(res.data)
        }).catch(error=>{
            console.log("error",error)
        })
    },[])
    return (
        <div>
           Fetch Data 
           <ul>
             <li>
                 {posts.map(post=>(<li key={post.id}>{post.title}</li>))}
             </li>
           </ul>
        </div>
    );
}

export default FetchDataUseEffectHooks;