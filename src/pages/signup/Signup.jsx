import { useState, useRef } from 'react';


import { collection, addDoc } from 'firebase/firestore'
import { database } from '../../firebase/config'

//hooks
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  

  //GETTING HOOKS METHODS
  const { error, signup } = useSignup()

  //GETTING FORM DATA
  const name = useRef()
  const contact = useRef()
  const email = useRef();
  const password = useRef()

  //HANDLE FUNCTION
  async function handleSubmit(e){
    e.preventDefault();
    
    signup(email.current.value, password.current.value)

    const collectionRef = collection(database, 'users')
    const docRef = await addDoc(collectionRef,{email : email.current.value,
    contact : contact.current.value,
    name : name.current.value})

    console.log(docRef.id)
    
    console.log(email.current.value, password.current.value, name.current.value, contact.current.value )
  }


  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input 
            type="email" 
            required 
            ref={email}
            />
        </label>

        <label>
          <span>password</span>
          <input 
            type="password" 
            required 
            ref={password}/>
        </label>

        <label>
          <span>Name</span>
          <input 
            type="text" 
            required 
            ref={name}/>
        </label>

        <label>
          <span>Contact</span>
          <input 
            type="telephone" 
            required 
            ref={contact}/>
        </label>

        <button type='submit' > submit </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  )
}
