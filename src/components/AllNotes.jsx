import React from 'react'
import Note from './Note'

export default function AllNotes(props) {
    
  return (
    <div className='allNotes'>
      {props.notes.map((noteitem,index)=>{
        return <Note onDelete={props.onDelete} title={noteitem.title} content={noteitem.content} key={index} id={index} />
      })}
    </div>
  )
}

