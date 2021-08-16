import {React, useState, useEffect} from 'react';
import { Navbar } from '../navbar';


export const Account = ({user}) =>{

const [pass, setPass] = useState('')
const [userData, setUserData] = useState([])
const [confirmPass, setConfirmPass] = useState(false)



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

    return(
        <div>
            <Navbar/>
            {confirmPass ? <div>
                <p>{userData.username}</p>
                <p>{userData.password}</p>
                <p>{userData.email}</p>
                <p>{userData.age}</p>
                <p>{userData.paymentInfo}</p>

                <div>
                    <form>
                        <input></input>
                    </form>
                </div>

            </div> :
            <form>
                <input type='text' placeholder='Please confirm password to proceed' value={pass} onChange={e=>setPass(e.target.value)}/>
                <button type='button' onClick={()=>{getUser(pass)}}>Submit</button>
            </form>}
        </div>
    )
}