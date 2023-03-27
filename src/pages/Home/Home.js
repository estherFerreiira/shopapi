import {useState, useEffect} from "react";
import axios from "axios";
import {Link } from 'react-router-dom'
import Logo from "../imgs/makelogo.png"
import "./home.css"


export const Home = () =>{
    const [make, setMake] = useState([]);
    
    const [elements, setElements] = useState(5);
    const loadMore = () =>{
    setElements(elements + elements)
  }
  
    async function getData(){
        const response = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=mascara")
        setMake(response.data)
        console.log(response.data);
    }

    useEffect(() =>{
        getData();
    },[])
    const slice = make.slice(0, elements);
    return (
        <>
       
          <img className="logo" src={Logo}></img>
            <div className="container">
                {slice.map((makes)=>(
                    <div  key={makes.id}  className="homeMake">
                       <Link to={`/details/${makes.id}`}><img src={makes.image_link}></img></Link>
                        <p>{makes.name}</p>
                        <p>$ {makes.price}</p>
                    </div>
                ))}
               
             </div>
        
             <button className="loadMore"  onClick={() => loadMore()}>Load More</button>
        </>
      
    )
} 