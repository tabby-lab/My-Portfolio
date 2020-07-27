import React, {  useState }from 'react';
import ReactCardFlip from 'react-card-flip';
import '../App.css';



const Projects = () => {
  
 const[isFlipped, setIsFlipped] = useState (false);

 const handleClick = () => {
  setIsFlipped(!isFlipped);
 }

 return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          
          <button onClick={handleClick}><img src= "../assets1/project1.png" alt="project1" className="pro1"></img></button>
        </div>
 
        <div>
          
          <button onClick={handleClick}><img src= "../assets1/project1.png" alt="project1" className="pro1"></img></button>
        </div>
      </ReactCardFlip>
    );
};
export default Projects