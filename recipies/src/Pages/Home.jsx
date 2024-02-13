import React, { useEffect, useState } from 'react'
import Slider from '../Components/Slider'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/products/?limit=12`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products)
        setData(data.products)
      })

  }, [])
  return (
    <div style={{ margin: "auto", width: "90%" }} >
      <div>
        <Slider />
      </div>

      <div className='home-cards' >
        {data?.map((item) => {
          return <div className='cardDiv' key={item.id} >
            <Link to={`/singleproduct/${item.id}`} >
          
              <img src={item.images[3]} alt="" />
              <h5> Brand : {item.brand}</h5>
              <h5>Title : {item.title}</h5>
              <p>Price : {item.price}</p>
              <p>Rating : {item.rating} *</p>
            </Link>

          </div>
        })}
      </div>


      {/*slider  */}
      <div className="cardSlider" >
        <button> Prev </button>
        {data?.map((item) => {
          return <div className='cardDiv' key={item.id + 1} >
            <img src={item.images[3]} alt="" />
            <h5> Brand : {item.brand}</h5>
            <h5>Title : {item.title}</h5>
            <p>Price : {item.price}</p>
            <p>Rating : {item.rating} *</p>
          </div>
        })}
        <button>Next</button>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  )
}
