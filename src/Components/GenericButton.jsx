import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Components/genericButton.css';

function GenericButton({ 
  className = '', 
  text = 'SUBSCRIBE', 
  to = '/', 
  disabled = false, 
  handleClick 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const onClickHandler = () => {
    if (disabled) return; 

    if (handleClick) {
      handleClick(); 
    } else if (to) {
      if (to.startsWith('http://') || to.startsWith('https://')) {
        window.open(to, '_blank', 'noopener,noreferrer');
      } else {
        navigate(to);
      }
    }
  };

  return (
    <button
      className={`subscribe-button ${className} ${isHovered ? 'hover' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default GenericButton;
