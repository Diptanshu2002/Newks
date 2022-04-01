import { auth } from "../firebase/config"
import { signOut } from "firebase/auth"


export function useLogout() {
    function logout(){
        signOut(auth)
            .then(()=>{
                console.log("user-signout")
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
  return { logout }
}
