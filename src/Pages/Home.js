import { useContext,useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Main from '../Components/Main';


const Home = () => {
  
  const { currentUser } = useContext(AuthContext);
  
   useEffect(() => {
    
   },[currentUser])
   
  return (
    <div className='container'>
     <h3>Reel-Gallery</h3>
     <div>
      <Main />
     </div>
    </div>
    )
}

export default Home;