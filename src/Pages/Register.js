import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc,doc } from 'firebase/firestore';
import { auth,db } from '../Firebase';

const Register = () => {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    setName(e.target[0].value)
    setEmail(e.target[1].value)
    setPassword(e.target[2].value)
    
    
   createUserWithEmailAndPassword(auth,email,password).then(res => {
      setDoc(doc(db,"ImageCol",res.user.uid),{
        img:[],
      })
      }).catch( err => alert(err.message))
      
      setPassword('');
      setName('');
      setEmail('');
  }
  
  return (
     <div className="register">
      <form onSubmit={ (e) => handleSubmit(e) } >
       <h3>Reel-Gallery</h3>
       <p>Register</p>
       <input onChange = { e => setName(e.target.value)} type='text' required placeholder='Gallery Name' value={ name } />
       <input type='email' required placeholder='email' onChange = { e => setEmail(e.target.value) }  value={ email }/>
       <input type='password' 
       onChange = { e => setPassword(e.target.value )}
       required 
       placeholder='password' value = { password } />
        <button>Submit</button>
        <p>if you've already got an account? <Link to='/login'>login</Link></p>
       </form>
     </div>
    )
}

export default Register;