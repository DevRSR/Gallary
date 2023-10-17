import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import SingleImg from './Components/SingleImg';
import Register from './Pages/Register';
import Login from './Pages/Login';



function App () {
  
 
  return(
   <div className= 'pink'>
    <BrowserRouter>
     <Routes>
      <Route path='/' >
       <Route index 
        element = { <div className='home'>
         <Home />
         <SingleImg  />
        </div> }
       />
       <Route path='register' 
       element = {<Register />} />
       
       <Route path='login' 
        element = {<Login />}
        />
      </Route>
     </Routes>
    </BrowserRouter>
    </div>
    
    )
}

export default App;


