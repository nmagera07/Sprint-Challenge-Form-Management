import React, {useState, useEffect} from 'react';
import axios from 'axios'

const ProtectedPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/restricted/data`, {headers: {Authorization: localStorage.getItem('token')}})
            .then(response => {
                setData(response.data)
                    console.log("get data", response.data)
                })
                .catch(err => {
                    console.log(err.response)
                })
    },[])
    return ( 
        <div>
            <h3>Protected Page</h3>
            {data.map(item => {
               return <div>
                    <p>Course Name: {item.name}</p>
                    <p>Course Type: {item.course}</p>
                    <p>Technique: {item.technique}</p>
                    <p>Ingredients: {item.ingredients}</p>
                </div>
            })}
        </div>
     );
}
 
export default ProtectedPage;