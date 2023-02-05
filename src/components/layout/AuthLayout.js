import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import withAuthRoutes from '../../hoc/withAuthRoutes'




const AuthLayout = ({ isLoggedIn, ...props }) => <WithAuthOutlet {...props} replace {...{ to: '/dashboard' }} />
export default AuthLayout

const WithAuthOutlet = withAuthRoutes(Outlet, Navigate)