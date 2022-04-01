import {useState} from 'react'
import { useLogin } from '../../hooks/useLogin';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { error, login } = useLogin()


  function handleSubmit(e){
    e.preventDefault();
    login(email, password)
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
            onChange={(e)=>setEmail(e.target.value)}
            value = {email}
            />
        </label>

        <label>
          <span>password</span>
          <input 
            type="password" 
            required 
            onChange={(e)=>{setPassword(e.target.value)}}
            value = {password}
            />
        </label>

        <button type='submit' > submit </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}
