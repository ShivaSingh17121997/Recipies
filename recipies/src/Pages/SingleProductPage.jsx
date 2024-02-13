import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function SingleProductPage() {
    const [singleProduct, setSingleProduct] = useState(null);
    const { id } = useParams()
    console.log(id, "id from single product page")

    useEffect(() => {
        console.log(id, "form useffect")
        if (id) {
            console.log(id, "form neche")

            fetch(`https://dummyjson.com/products/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, "from" );
                    setSingleProduct(data);
                })
                .catch((error) => {
                    console.error('Error fetching product:', error);
                })
        }

    }, [id])

    return (
        <div>
            {singleProduct ? (
                <div>
                    <img src={singleProduct.images[3]} alt="" />
                    <h5> Brand: {singleProduct.brand}</h5>
                    <h5>Title: {singleProduct.title}</h5>
                    <p>Price: {singleProduct.price}</p>
                    <p>Rating: {singleProduct.rating} *</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div >
    )
}
