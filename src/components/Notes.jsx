/* eslint-disable react/prop-types */
import { useEffect } from 'react'

import Note from "./Note";

export const Notes = ({ notes = [], setNotes = () => { } }) => {
    
    useEffect(() => {
        const savedNotes = []

        const updatedNotes = notes.map((note) => {
            const savedNote = null;
            if (savedNote) {
                return {}
            } else {
                const position = determineNewPostion()
                return { ...note, position }
            }
        });
        setNotes(updatedNotes);
    }, [notes.length])
    
    const determineNewPostion = () => {
        const maxX = window.innerWidth-250;
        const maxY = window.innerHeight-250;

        return {
            x: Math.floor(Math.random()*maxX),
            y: Math.floor(Math.random()*maxY)
        }
            
    }

    return <div>
        {notes.map(
            note => {
                return <Note key={note.id } initialPos={note.position} content={note.text} />
          }
      )}
  </div>;
};


export default Notes;
