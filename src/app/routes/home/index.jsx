import React, { useEffect } from 'react';
import Card from '../../../components/card';
import cardData from '../../../constants/cardsInfo';
import './styles.css';

const Home = () => {

  return (
    <div className="home-container">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          route={card.route}
        />
      ))}
    </div>
  );
};

export default Home;
