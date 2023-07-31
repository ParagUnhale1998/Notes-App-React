import React, { useState } from 'react'
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import Fab from '@mui/icons-material/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function CreateArea(props) {
    const [placeholder, setPlaceholder] = useState("Title");
    const [isPlaceholderColored, setIsPlaceholderColored] = useState(false);

    const [note,setNote] = useState ({
        title:"",
        content:""
    })

    function handleChnage (event) {
      const {name,value} = event.target ;
      console.log(placeholder)
    //   setPlaceholder(placeholder)
      setNote((prevNote) => {

         return {
            ...prevNote ,[name]:value 
         }
      })
    }
    
    function submitNote(event){
        event.preventDefault()
        if(note.title === ""){
            setPlaceholder("Enter The Note Please")
            setIsPlaceholderColored(true);
            return setTimeout(() => {
                setPlaceholder('Title') 
                setIsPlaceholderColored(false);
            }, 1000);
          }else{
            props.onAdd(note)
            
            setNote({
                title:"",
                content:""
            })
          }
       
    }
  return (
    <div className='form-cotainer'>
      <form>
        <input onChange={handleChnage} value={note.title} type="text" name="title" id="title" placeholder={placeholder} className={isPlaceholderColored ? "colored-placeholder" : ""}/>
        <textarea onChange={handleChnage} value={note.content} name="content" placeholder='Take a Note...' id="" cols="30" rows="10"></textarea>
        <button onClick={submitNote}><AddCircleIcon sx={{ fontSize: 50 }}/></button>
      </form>
    </div>
  )
}
