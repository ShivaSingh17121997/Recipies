import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Ingredient from './Ingredient'
import Login from './Login'
import Signup from './Signup'
import Meals from './Meals'
import SingleProductPage from './SingleProductPage'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ingredients' element={<Ingredient />} />
                <Route path='/meals' element={<Meals />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/singleproduct/:id' element={<SingleProductPage />}  ></Route>
            </Routes>
        </div>
    )
}
