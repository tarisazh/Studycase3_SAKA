'use client'

import { useSelector } from "react-redux";
import { selectUserStatus } from "@/redux/slices/userSlice";
import Login from "./login/page";
import Register from "./register/page";
import Logout from "./logout/page";

<script src="/_next/static/chunks/webpack.js?v=1726120780433" async></script>

export default function Home() {
  const status = useSelector(selectUserStatus);

  if (status === 'loggedOut') {
    return <Register />; 
  }

  if (status === 'loggedIn') {
    return <Logout />; 
  }

  return <Login />; 
}
