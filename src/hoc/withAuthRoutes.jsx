import React from 'react'
import { isTokenActivated } from '../helpers/functions'

const withAuthRoutes = (RenderComponent, NavigateComponent) => ({ to, replace, ...props }) => {

    const token = localStorage.getItem('token')
    return !isTokenActivated(token) ? <RenderComponent {...props} /> : <NavigateComponent {...{ to, replace }} />
}

export default withAuthRoutes
