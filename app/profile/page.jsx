'use client'
import React, {useEffect, useState} from 'react'
import { userAuth } from '../context/AuthContext'

const page = () => {
  const {user} = userAuth()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async() => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    }
    checkAuthentication();
  }, [user]);


  return (
    <div className='p-5'>
      {loading ? (<p>Loading...</p>) : user ? (
        <p>Welcome {user.displayname}, this is the profile page after logging in</p>
      ):(
        <p>You must be logged in to view this page.</p>
      )}
    </div>
  )
}

export default page