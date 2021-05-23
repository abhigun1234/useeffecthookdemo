import React, { useEffect, useState } from 'react';
import axios from 'axios'

function FetchData(props) {
    const [posts, fetchData] = useState([])
    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log('res', res.data)
        }).catch(error => {
            console.log("error", error)
        })
    })
    return (
        <div>
          fetchData
        </div>
    );
}

export default FetchData;