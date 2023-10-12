import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { FlowerContext } from './FlowerContext';

const FavoritesTab = () => {
  const { flowerList } = FlowerContext();

  return (
    <div>
      <h1>CAROUSEL</h1>
      <Carousel className='Carousel'>
        {flowerList.map((flower, index) => (
          <Carousel.Item key={index}>
            <Card style={{ width: '300px' }}>
              <Card.Img
                src={flower.Img || ''}
                alt=""
              />
              <Card.Body>
                <Card.Title>
                  {flower.name}
                </Card.Title>
                <Card.Text className="cardSub">
                  {flower.text}
                </Card.Text>
                <Card.Text className="cardID">
                  {flower.id}
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FavoritesTab;
