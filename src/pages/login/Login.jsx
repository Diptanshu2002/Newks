import { useState, useEffect} from 'react'
import { useLogin } from '../../hooks/useLogin';
import './login.css'
import img1 from '../../assets/images/avatar.svg'
import img2 from '../../assets/images/manjump.png'

import { Link } from 'react-router-dom';

export default function Login() {

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
  
// --------------------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { error, login } = useLogin()


  function handleSubmit(e){
    e.preventDefault();
    login(email, password)
  }

  return (
    <div className='login'>

      {/* -------- */}
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
          <Link to='/signup'><a>New User?...</a></Link>
          {/* <a href="#"></a> */}
          <input 
              type="submit" 
              className="btn" 
              value="Login"/>
    </form>
        </div>
    </div>
    </div>
  )
}
