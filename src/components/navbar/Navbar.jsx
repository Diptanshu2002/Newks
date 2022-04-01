import { useLogout } from '../../hooks/useLogout'

export default function Navbar() {
  const {logout} = useLogout()
  function handleClick(){
      logout();
  }

  return (
    <div>
      <button onClick={handleClick}>logOut</button>
    </div>
  )
}
