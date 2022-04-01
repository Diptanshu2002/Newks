import {useState} from 'react'

//firebase-imports
import { collection, addDoc } from 'firebase/firestore'
import { database } from '../firebase/config'


import  {auth} from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from "../hooks/useAuthContext";

export function useSignup() {
 
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    const collectionRef = collection(database, 'users')

    function signup(email, password, name, contact){
        setError(null)
        //------------------------
            createUserWithEmailAndPassword(auth, email, password)
            .then(async(res)=>{
                const data = {
                    email,
                    name,
                    contact,
                    userId : res.user.uid
                }
                const docRef = await addDoc(collectionRef, data)
                console.log(res.user.uid)
                dispatch({ type: "LOGIN", payload: res.user })
                
            })
            .catch(err=>{
                setError(err.message)
            })
        // ----------------------------
    }

    return {error, signup}
}
