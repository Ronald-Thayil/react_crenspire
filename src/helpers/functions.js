import jwt_decode from 'jwt-decode'

export const decodeToken = (token) => {
    if (!token) return null
    return jwt_decode(token);
}

export const isTokenActivated = (token) => {
    if (!token) return false
    const decoded = jwt_decode(token)
    return (decoded?.exp > Date.now() / 1000)
}