import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

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
            <div className="items">
            {data.map(item => {
               return <Card>
                   {/* <Image src="https://prods3.imgix.net/images/articles/2016_06/Feature-Brisket-Big-Dish-Photo-Devon-Knight.jpg" /> */}
                    <img src={item.image} alt="food" />
                    <p>Course Name: {item.name}</p>
                    <p>Course Type: {item.course}</p>
                    <p>Technique: {item.technique}</p>
                    <p>Ingredients: {item.ingredients + ""} </p>
                </Card>
            })}
            </div>
        </div>
     );
}
 
export default ProtectedPage;