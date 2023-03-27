import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from "../imgs/makelogo.png"
import "./details.css"

export const Details = () =>{
  const [make, setMake] = useState([])
  
  const {id} = useParams()

   useEffect(() =>{
    fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
    .then(res => res.json())
    .then(data => {
      const {brand, description ,price, image_link} = data;

      const make = {
        id,
        brand,
        price,
        description,
        image_link,
      }
      setMake(make);
    })

  },[id])




  return (
    <>
    <img className="logo" src={Logo}></img>
        <div className="containerDetails">
        <Link  to="/"> <button className='back'>Back</button></Link>
        <h2 className='productName'>{make.brand}</h2>
            <img className='imgDetails' src={make.image_link}></img>
            <h3 className='priceDetails'>Price: $ {make.price}</h3>
            <button  className='cart'>Add to Cart</button>
            <div className='description'>
              <p className='pDescription'>About: <br/>{make.description}</p>
            </div>
           
      </div>
    </>
  )
  
}
