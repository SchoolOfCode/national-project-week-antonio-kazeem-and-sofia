import React from 'react'
import  {signOut} from "firebase/auth"
import { auth } from "../../firebase.js";
import {useNavigate} from "react-router-dom"

function Home() {
 let navigate = useNavigate()

 const logout = async ()=>{
  await signOut(auth)
 }

 return (
   <form>
     <h1>Home</h1>
     <button
       onClick={logout}
      
     >
       SignOut
     </button>
   </form>
 );
}

export default Home
