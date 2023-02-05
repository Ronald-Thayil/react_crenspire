import React from 'react'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'

const routes = [
    {
        id: "login",
        path: "/",
        exact: true,
        element: <Login/>,
        isAuth: true,
        redirectUrl: '/dashboard'
    },
    {
        id: "login",
        path: "/login",
        exact: true,
        element: <Login/>,
        isAuth: true,
        redirectUrl: '/dashboard'
    },
    {
        id: "dashboard",
        path: "/dashboard",
        exact: true,
        element: <Dashboard/>,
        isPrivate: true,
        redirectUrl: '/'
    }
]

export const authRoutes = routes.filter(data => data.isAuth)
export const privateRoutes = routes.filter(data => data.isPrivate)