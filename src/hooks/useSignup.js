import {useState} from 'react'

//firebase-imports
import  {auth} from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth';


export function useSignup() {
 
    const [error, setError] = useState(null);

    async function signup(email, password){
        setError(null)
        //------------------------
        try {
           const res =  await createUserWithEmailAndPassword(auth, email, password)
           console.log("user-details", res.user.uid)
        } catch (error) {
            setError(error.message)
        }
        // ----------------------------
    }

    return {error, signup}
}
