import { useState} from 'react';


import { collection, addDoc } from 'firebase/firestore'
import { database } from '../../firebase/config'

//hooks
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  

  //GETTING HOOKS METHODS
  const { error, signup } = useSignup()

  //GETTING FORM DATA
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  //HANDLE FUNCTION
  async function handleSubmit(e){
    e.preventDefault();
    console.log(name, contact, email, password)
    
    signup(email, password, name, contact)

    // const collectionRef = collection(database, 'users')
    // const docRef = await addDoc(collectionRef,{email : email.current.value,
    // contact : contact.current.value,
    // name : name.current.value})

    // console.log(docRef.id)
    
    // console.log(email.current.value, password.current.value, name.current.value, contact.current.value )
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
            onChange={(e)=>{setEmail(e.target.value)}}
            />
        </label>

        <label>
          <span>password</span>
          <input 
            type="password" 
            required 
            onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>

        <label>
          <span>Name</span>
          <input 
            type="text" 
            required 
            onChange={(e)=>{setName(e.target.value)}}/>
        </label>

        <label>
          <span>Contact</span>
          <input 
            type="telephone" 
            required 
            onChange={(e)=>{setContact(e.target.value)}}/>
        </label>

        <button type='submit' > submit </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  )
}
