import React, { useEffect, useState } from 'react'

export default function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [`https://rukminim2.flixcart.com/fk-p-flap/850/400/image/137c051e322198d9.jpg?q=90`,
        ` https://rukminim2.flixcart.com/fk-p-flap/850/400/image/700cb4b599334e71.jpg?q=90`,
        ` https://rukminim2.flixcart.com/fk-p-flap/850/400/image/3c6faca2dbe2af97.jpg?q=90`,
        `https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0c706f11307528da.jpg?q=20`,
        `https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e8afba7feffa58f9.jpg?q=20`
    ];

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
        }, 3000)

        return () => clearInterval(interval);
    }, [currentImageIndex])




    return (
        <div className='automaticSlider' >
            <img src={images[currentImageIndex]} alt="" />
        </div>
    )
}
