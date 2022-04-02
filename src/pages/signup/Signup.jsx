import { useState, useEffect} from 'react';
import './signup.css'

import img1 from '../../assets/images/avatar.svg'
import img2 from '../../assets/images/manjump.png'
import { Link } from 'react-router-dom';
//hooks
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl(){
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }
  
    function remcl(){
      let parent = this.parentNode.parentNode;
      if(this.value == ""){
        parent.classList.remove("focus");
      }
    }
  
    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }, []);

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
  }


  return (
    <div className='signup'>
      {/* <h1>Form</h1>
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
      </form> */}

<img className="wave" src=''/>
	<div className="container">
		<div className="img">
			<img src={img2}/>
		</div>
		<div className="login-content">
			<form onSubmit={handleSubmit} >
				  <img src={img1}/>
				  <h2 className="title">Welcome</h2>


          <div className="input-div one">

           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>

           		   <div className="div">
           		   		<h5>Name</h5>
           		   		<input 
                      type="text" 
                      className="input"
                      required 
                      onChange={(e)=>setName(e.target.value)}
                      value = {name}
                      />
           		   </div>

          </div>

          <div className="input-div one">

           		   <div className="i">
                  <i class="fas fa-address-card"></i>
           		   </div>

           		   <div className="div">
           		   		<h5>Email</h5>
           		   		<input 
                      type="text" 
                      className="input"
                      required 
                      onChange={(e)=>setEmail(e.target.value)}
                      value = {email}
                      />
           		   </div>

          </div>

          
          <div className="input-div pass">

           		   <div className="i"> 
           		    	<i className="fas fa-phone"></i>
           		   </div>

           		   <div className="div">
           		    	<h5>Contact</h5>
           		    	<input 
                      type="telephone" className="input"
                      required 
                      onChange={(e)=>{setContact(e.target.value)}}
                      value = {contact}
                      />
            	   </div>

          </div>


          <div className="input-div pass">

           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>

           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input 
                      type="password" className="input"
                      required 
                      onChange={(e)=>{setPassword(e.target.value)}}
                      value = {password}
                      />
            	   </div>

          </div>
          <Link to='/login'><a>Already Registered?...</a></Link>
          <input 
              type="submit" 
              className="btn" 
              value="Signup"/>
    </form>
        </div>
    </div>

      {error && <p>{error}</p>}
    </div>
  )
}
