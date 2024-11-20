"use client"

import React, { useEffect } from 'react'
import './logout.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUserStatus, selectUser } from '@/redux/slices/userSlice'
import { useRouter } from 'next/navigation'

const Logout = () => {

  const status = useSelector(selectUserStatus);
  const router = useRouter();

  const users = useSelector((state: any) => state.user.users);
  const loginUser = useSelector((state: any) => state.user.loggedInUser);

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    router.push('/login');
  };

  useEffect(() => {
    if (status === 'loggedOut') {
      console.log("Redirecting to /login");
      router.push('/login')
    }
  }, [status, router])

  return (
    <div className='container' >
      {loginUser > 0 ? (
        <>
          <h1>Welcome <span className='user_name'>{loginUser.name}</span> </h1>
          <button className='logout_button' onClick={handleLogout} >Logout</button>
          <ul>
            {users?.map((user: any, index: number) => (
              <li key={index}>
                <strong>Name:</strong> {user.name} <br />
                <strong>Email:</strong> {user.email}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No registered users yet.</p>
      )}
    </div>
  )
}

export default Logout;
