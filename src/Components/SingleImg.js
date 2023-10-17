import img from './brain.jpg';
import { useContext } from 'react';
import { ImageContext } from '../Context/ImageContext';



function SingleImg () {
  
  const { state,dispatch } = useContext( ImageContext );
  
  const handleClick = () => {
    dispatch({ type: 'HIDE' })
  }
  
  
  return(
    <div onClick = { handleClick } className={`background ${ state.show ? 'flex' : ''}`}>
     <img src={ state.src } alt='' />
    </div>
    )
}

export default SingleImg;