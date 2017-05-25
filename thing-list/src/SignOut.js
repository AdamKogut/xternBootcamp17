import React from 'react'

import './SignOut.css'

const SignOut=({signOut})=>{
    return(
        <button 
            className="SignOut"
            onClick={signOut}>
            Sign out
        </button>
    )
}

export default SignOut