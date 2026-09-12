import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);

    if(!user){
        return(
            <div className='bg-slate-300 rounded-md p-5'>Please Login.</div>
        )
    }else{
        return(
            <div className='bg-slate-300 rounded-md p-5'>
                Welcome {user.username}, Your Pasword is { '*'.repeat((user.password).length)} {user.password}.
                {console.log(user.password.length)}
            </div>
        )
    }
}

export default Profile
