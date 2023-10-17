import { createContext, useReducer } from "react";

export const ImageContext = createContext();

const ImageContextProvider = ({children}) => {
  
  const obj = {
    show: false,
    src: {},
  }
  
  const imgReducer = (state, action) => {
    switch (action.type) {
      case 'SHOW' :
       return {
         show: true,
         src: action.payload.src,
       };
       case 'HIDE' :
        return {show: false,src: '',};
        
        default: return state;
    }
  }
  
  const [ state, dispatch ] = useReducer(imgReducer, obj );
  
  return (
     <ImageContext.Provider value={{ state, dispatch }}>
      { children }
     </ImageContext.Provider>
    )
}

export default ImageContextProvider;