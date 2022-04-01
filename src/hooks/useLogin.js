import {useState} from 'react'

//firebase-imports
import  {auth} from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth';


export  function useLogin() {
    const [error, setError] = useState(null);

    function login(email, password){
        setError(null)
        //------------------------
        signInWithEmailAndPassword(auth, email, password)
            .then(res=>{
                console.log('user-logged-in', res.user)
            })
            .catch(err=>{
                setError(err.message)
            })
        // ----------------------------
    }

    return {error, login}
}
