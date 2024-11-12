import { useNavigate } from 'react-router-dom';
import './styles.css';

import introduccionImage from '../../assets/introduccion.jpg';
import registroImage from '../../assets/registro.jpg';
import detalleImage from '../../assets/detalle.jpg';

const IMAGES = {
  introduccion: introduccionImage,
  registro: registroImage,
  detalle: detalleImage,
};

const Card = ({ title, description, imageUrl, route }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(route);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${IMAGES[imageUrl]})` }}
      ></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
