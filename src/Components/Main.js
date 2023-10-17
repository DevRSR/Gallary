import { useContext,useState,useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ImageContext } from '../Context/ImageContext';
import { AuthContext } from '../Context/AuthContext';
import { doc,onSnapshot,query,orderBy } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db,auth } from '../Firebase';
import img from './brain.jpg';
import Button from './Button';

const Main = () => {
  
  const { dispatch } = useContext(ImageContext);
  const { currentUser } = useContext(AuthContext);
  const [images,setImages] = useState([]);
  const [id,setId] = useState();
  const navigate = useNavigate();
 
  
  const  handleClick = () => {
    signOut(auth).then(() => {
      alert('successful')
    }).then(e => alert(e.message))
    navigate('/login');
  }
  
  
 useEffect(() => {
   
    if(currentUser !== undefined) {
      setId(currentUser.uid)
      const ref = doc(db,'ImageCol',currentUser.uid);
      onSnapshot(ref,(doc) => {
        setImages(doc.data().img.reverse())
     })
    }
    
  },[currentUser])
  return(
    <div className="main">
     
      <div className='navbar'>
       <Link to='/'>Collection</Link>
       <Link to='/'>About us</Link>
       <Link to='/'>Customer services</Link>
       <button onClick={ handleClick }>log out</button>
     </div>
     <div className="imagesGrid">
      { currentUser ? images.map(image => (
       <img onClick = { () => dispatch({ type: "SHOW", payload: { src: image.url }   })} src={ image.url } key={ image.id } />
      )): <div className='center'><span>No image in the gallery</span></div> }

     </div>
     <Button id={ id } />
    </div>
    )
}

export default Main;