import {React, useState, useEffect} from 'react';
import { Navbar } from '../navbar';


export const Account = ({user}) =>{

const [userData, setUserData] = useState([])
const [confirmPass, setConfirmPass] = useState(false)
const [username, setUsername] = useState()
const [pass, setPass] = useState('')
const [email, setEmail] = useState('')
const [age, setAge] = useState()
const [paymentInfo, setPaymentInfo] = useState()
const [newPass, setNewPass] = useState('')


useEffect(()=>{
    if (typeof userData === 'object') {
        setPass(userData.password)
        setNewPass(userData.password)
        setUsername(userData.username)
        setPaymentInfo(userData.paymentInfo)
        setEmail(userData.email)
        setAge(userData.age)
    }
}, [userData])

    const getUser = async (pass) => {
        let response = await fetch(`${process.env.REACT_APP_REST_API}users/${user}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                password: pass
            })
        })
        const data = await response.json()
        setUserData(data.user)
        console.log(userData)
        setConfirmPass(true)
    }

    const updateUser = async (e) => {
        e.preventDefault()
        let response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: pass,
                newpass: newPass,
                email: email,
                age: age,
                payment: paymentInfo
            })
        })
        // const data = await response.json()
        // setUserData(data.user)
        await getUser(newPass)
    }

    return(
        <div>
            <Navbar/>
            {confirmPass ? <div>
                <p>Username: {userData.username}</p>
                <p>Password: {userData.password}</p>
                <form onSubmit={(e)=>{updateUser(e)}}>
                    <input type = 'text' placeholder = 'Update Password' onChange = {(e)=>setNewPass(e.target.value)}/>
                    <button type = 'submit'>Update</button>
                </form>
                <p>Email: {userData.email}</p>
                <form onSubmit={(e)=>{updateUser(e)}}>
                    <input type = 'text' placeholder = 'Update Email' onChange = {(e)=>setEmail(e.target.value)}/>
                    <button type = 'submit'>Update</button>
                </form>
                <p>Age: {userData.age}</p>
                <form onSubmit={(e)=>{updateUser(e)}}>
                    <input type = 'text' placeholder = 'Update Age' onChange = {(e)=>setAge(e.target.value)}/>
                    <button type = 'submit'>Update</button>
                </form>
                <p>Payment Info: {userData.paymentInfo}</p>
                <form onSubmit={(e)=>{updateUser(e)}}>
                    <input type = 'text' placeholder = 'Update Payment Info' onChange = {(e)=>setPaymentInfo(e.target.value)}/>
                    <button type = 'submit'>Update</button>
                </form>

            </div> :
                <form>
                    <input type='text' placeholder='Please confirm password to proceed' value={pass} onChange={e=>setPass(e.target.value)}/>
                    <button type='button' onClick={()=>{getUser(pass)}}>Submit</button>
                </form>}
            </div>
    )
}
