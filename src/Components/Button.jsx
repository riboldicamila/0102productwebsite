import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Button.css';

function GenericButton({ className = '', text = 'SUBSCRIBE', to = '/' }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => navigate(to);

  return (
    <button
      className={`subscribe-button ${className} ${isHovered ? 'hover' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default GenericButton;
