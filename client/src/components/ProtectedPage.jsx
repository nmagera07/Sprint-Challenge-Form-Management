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
            <h2>Protected Page Recipe Book</h2>
            <h4>Look at these tasty recipes!</h4>
            <div className="items">
            {data.map((item, index) => {
                if (index === 0) {
               return <Card>
                   {<Image src="https://prods3.imgix.net/images/articles/2016_06/Feature-Brisket-Big-Dish-Photo-Devon-Knight.jpg" />}
                    {/* <img src={index.image} alt="food" /> */}
                    <Card.Content>
                        
                    <Card.Header><p>Course: {item.name}</p></Card.Header>
                    <p>Course Type: {item.course}</p>
                    <p>Technique: {item.technique}</p>
                    <p>Ingredients: {item.ingredients + ""} </p>
                    </Card.Content>
                </Card>
                } else if (index === 1) {
                    return <Card>
                   {<Image src="https://www.inspiredtaste.net/wp-content/uploads/2016/10/Easy-Potato-Salad-Recipe-2-1200.jpg" />}
                    <Card.Content>   
                    <Card.Header><p>Course: {item.name}</p></Card.Header>
                    <p>Course Type: {item.course}</p>
                    <p>Technique: {item.technique}</p>
                    <p>Ingredients: {item.ingredients + ""} </p>
                    </Card.Content>
                </Card>
                } else if (index === 2) {
                      return <Card>
                   {<Image src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fsl%2F13%2F02%2Fcollards-kimchi-sl-x.jpg%3Fitok%3DhXFq2Zs1&w=450&c=sc&poi=face&q=85" />}
                    <Card.Content>   
                    <Card.Header><p>Course: {item.name}</p></Card.Header>
                    <p>Course Type: {item.course}</p>
                    <p>Technique: {item.technique}</p>
                    <p>Ingredients: {item.ingredients + ""} </p>
                    </Card.Content>
                    </Card>
                } else if (index === 3) {
                     return <Card>
                   {<Image src="https://www.tasteofhome.com/wp-content/uploads/2018/05/Jalapeno-Mac-and-Cheese_EXPS_SDJJ18_198302_C02_14_5b-696x696.jpg" />}
                    <Card.Content>   
                    <Card.Header><p>Course: {item.name}</p></Card.Header>
                    <p>Course Type: {item.course}</p>
                    <p>Technique: {item.technique}</p>
                    <p>Ingredients: {item.ingredients + ""} </p>
                    </Card.Content>
                    </Card>
                } else if (index === 4) {
                      return <Card>
                   {<Image src="https://www.tasteofsouthern.com/wp-content/uploads/2018/09/corn-maque-choux_16_enjoy.jpg" />}
                    <Card.Content>   
                    <Card.Header><p>Course: {item.name}</p></Card.Header>
                    <p>Course Type: {item.course}</p>
                    <p>Technique: {item.technique}</p>
                    <p>Ingredients: {item.ingredients + ""} </p>
                    </Card.Content>
                    </Card>
                } else if (index === 5) {
                       return <Card>
                   {<Image src="https://realhousemoms.com/wp-content/uploads/Hush-Puppies-Recipe-IG.png" />}
                    <Card.Content>   
                    <Card.Header><p>Course: {item.name}</p></Card.Header>
                    <p>Course Type: {item.course}</p>
                    <p>Technique: {item.technique}</p>
                    <p>Ingredients: {item.ingredients + ""} </p>
                    </Card.Content>
                    </Card>
                } else if (index === 6) {
                       return <Card>
                   {<Image src="https://www.epicurus.com/food/recipes/wp-content/uploads/2011/10/Strawberry-Soup.jpg" />}
                    <Card.Content>   
                    <Card.Header><p>Course: {item.name}</p></Card.Header>
                    <p>Course Type: {item.course}</p>
                    <p>Technique: {item.technique}</p>
                    <p>Ingredients: {item.ingredients + ""} </p>
                    </Card.Content>
                    </Card>
                }
            })}
        
            </div>
        </div>
     );
}
 
export default ProtectedPage;