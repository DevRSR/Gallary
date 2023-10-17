import { useState,useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc,updateDoc,arrayUnion,setDoc } from 'firebase/firestore';
import { storage,db } from '../Firebase';
import { v4 as uuid } from 'uuid';


function Button ({ id }) {
  
  
  const [progress, setProgress] = useState(0);

  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
     e.preventDefault();
     const img = e.target[0].files[0];
     setName(e.target[1].value);
    
    
     const storageRef =  ref(storage,name);
    
     const uploadTask = uploadBytesResumable(storageRef, img);
    
     uploadTask.on('state_changed', 
     (snapshot) => {
     
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
      setProgress(progress)
     }, 
     (error) => {
      alert(error.message)
     }, 
     () => {
      
      getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
        
         await updateDoc(doc(db,'ImageCol',id),{
           img: arrayUnion({
           url:downloadURL,
           id: uuid(),
          })
        })
      });
    }
  );
    setName('');
  }
  
  useEffect(() => {
    if (progress === 100) {
     setTimeout(() => {
       setProgress(0)
     },3000)
    }
  },[progress])
  
  return(
    <div className='imageForm'>
     <p>New Image Form</p>
     <div style={{ width:`${progress}%`}} className='progress'></div>
     <form onSubmit={ (e) => handleSubmit(e) } >
      <input 
       accept=".png, .jpg, .webp" 
       type='file' 
       id='add' 
       required 
       />
      <label htmlFor = 'add'>
        <div><span>+</span></div>
        <p>Select Image</p>
      </label>
      <input type='text'  placeholder='Image name' required 
       value={name}
       onChange = { e => setName(e.target.value)}
      />
      <button>Add</button>
     </form>
    </div>
    
    )
}

export default Button