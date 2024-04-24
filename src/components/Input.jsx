/* eslint-disable react/prop-types */
import {useRef} from 'react'

export const Input = ({ updateNotes }) => {
    const inputRef=useRef('')
    const handleClick = () => {
        updateNotes(inputRef.current.value)
        inputRef.current.value=''
    }
    return <div className="input-container">
        <input className="input-box" ref={inputRef} type="text" name="text" id="text" />
        <button className='input-btn' onClick={handleClick }>Add Note</button>
  </div>;
};


export default Input;