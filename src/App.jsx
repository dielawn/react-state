import { useState } from 'react'
import { sculptureList } from './data.js';
import './App.css'

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false)

  const handleNextClick = () => {
    setIndex(index + 1)
    if (index >= sculptureList.length - 1) {
      setIndex(0)
    }
  }
  const handlePrevClick = () => {
    setIndex(index - 1)
    if (index <= 0) {
      setIndex(sculptureList.length - 1)
    }    
  } 
  const showHideInfo = () => {
    setIsHidden(!isHidden)
  }

let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick}>
        Prev
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>

      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      /><br></br>
      <button onClick={showHideInfo}>
        {isHidden ? 'Hide' : 'Show'} details
      </button>
      {isHidden && <p>{sculpture.description}</p> }
     
    </>
  );
}
