import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const Login = () => {
  
  const [name,setName] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();
  
  
 const handleLogin = (e) => {
   e.preventDefault();
   setName(e.target[0].value);
   setPassword(e.target[1].value);
   
  signInWithEmailAndPassword(auth,name,password).then(res => {
     navigate('/');
   })
   .catch(err => alert(err.message))
    setPassword('');
      setName('');
 }
  return (
     <div className="login">
       <form onSubmit = {e => handleLogin(e) }>
        <h3>Reel-Gallery</h3>
        <p>Login</p>
         <input type='email'
         required 
         placeholder='email' 
          onChange={ e => setName(e.target.value)}
         value={name}
         />
         <input type='password' 
          onChange={ e => setPassword(e.target.value)}
         required 
         placeholder='password' 
         value={password} />
        <button>Login</button>
        <p>if you don't have an account? <Link to='/register'>register</Link></p>
       </form>
     </div>
    )
}

export default Login;