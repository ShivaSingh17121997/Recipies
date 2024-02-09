import React, { useEffect, useState } from 'react'
import Slider from '../Components/Slider'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/products?_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products)
        setData(data.products)
      })

  }, [])
  return (
    <div style={{margin:"auto", width:"90%"}} >  
      <div>
        <Slider />
      </div>

      <div className='home-cards' >
        {data?.map((item) => {
          return <div key={item.id} >
            <img src={item.images[3]} alt="" />
            <h5> Brand : {item.brand}</h5>
            <h5>Title : {item.title}</h5>
            <p>Price : {item.price}</p>
            <p>Rating : {item.rating} *</p>

          </div>
        })}
      </div>
    </div>
  )
}
