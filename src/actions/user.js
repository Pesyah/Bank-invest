import axios from 'axios'
import { setUser } from '../reducers/userReducer'

export const registration = async (email, password, username, surname, otchestvo, phoneNumber) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            email,
            password,
            username
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }

}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.username)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`, 
                                            {headers:{Authorization:`bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('money', response.data.money)
            localStorage.setItem('mymail', response.data.mymail)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.clear()
        }
    }

}

export const addMoney = (email, money) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/addMoney`, {
                email,
                money
            })
            return response.data
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}