import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function Note(props) {
    function handleDelete(){
        props.onDelete(props.id)
    }
  return (
    <div className='note-contaier'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}><DeleteIcon sx={{ fontSize: 30 }}/></button>
    </div>
  )
}
