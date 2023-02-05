import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from '../components/layout/AuthLayout'
import PrivateLayout from '../components/layout/PrivateLayout'
import { authRoutes, privateRoutes } from './Routes'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<AuthLayout />} >
            {
                authRoutes.map(({id, ...otherData}) => <Route index key={id} {...otherData} />)
            }
        </Route>
        <Route path='/' element={<PrivateLayout />} >
            {
                privateRoutes.map(({id, ...otherData}) => <Route index key={id} {...otherData} />)
            }
        </Route>
        <Route path='*' element={<p>Not Found | 404</p>} />
    </Routes>
  )
}

export default Routing