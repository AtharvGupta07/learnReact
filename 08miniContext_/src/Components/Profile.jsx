import { useContext } from "react"
import React from 'react'
import UserContext from "../context/UserContext"



function Profile() {
    const {user} = useContext(UserContext)
    if(!user) {
        return(
            <>
                Please Login.
            </>
        )
    }else{
        return <> Welcome {user.username}, Your Password contain "{user.password.length} characters"</>
    }
}

export default Profile