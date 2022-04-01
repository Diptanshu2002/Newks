import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from 'react';



export default function Navbar() {
  const { user } = useAuthContext()
  const name = user.email.split('@')
  
  const {logout} = useLogout()
  function handleClick(){
      logout();
  }

  return (
    <div>
      <button onClick={handleClick}>logOut</button>
      <span>{name[0]}</span>
    </div>
  )
}
