import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Vegetables from './Vegetables';

const Fruits = () => {
  const [showVegetables, setShowVegetables] = useState(false);

  const toggleVegetables = () => {
    setShowVegetables(!showVegetables);
  };
  return (
    
    <div>
      <button onClick={toggleVegetables}>Show Vegetables</button>
      {showVegetables && <Vegetables />}
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Flower/Apple.jpeg" />
      <Card.Body>
        <Card.Title>Akane Apple</Card.Title>
        <Card.Text>
        The Akane Apple ,Malus 'Akane', is truly a sight to behold. Growing in zones 5 to 8, it offers tall and upright growth, with velvety crimson-red skin and a sweet, firm, yellow flesh. It's incredibly hardy and resistant to most common apple diseases and can put up with harsh conditions and have a long storage life. Not only is it a stunning and unusual sight in home gardens thanks to its brightly coloured fruits, but its taste is unbelievably delicious - a crisp tartness with a hint of honey.
        </Card.Text>
        <Card.Text>
          ID: 351
        </Card.Text>
        <Button variant="primary">Save to Favorites</Button>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Flower/Apple.jpeg" />
      <Card.Body>
        <Card.Title>Hardy Kiwi</Card.Title>
        <Card.Text>
        The Hardy Kiwi ,Actinidia arguta, is a unique and amazing plant species that produces delicious and nutritious edible fruit. Hardy Kiwi is cold-hardy and can survive harsh winters, yet it produces a large amount of extremely sweet, succulent fruit that can be eaten fresh or used in recipes. In addition, the plant is easy to care for and even produces attractive vine-like foliage. It is also highly beneficial to its surrounding natural habitats, as its fragrant vines attract birds and various beneficial insects. Hardy Kiwi is an amazing species that every gardener should have!
        </Card.Text>
        <Card.Text>
          ID: 534
        </Card.Text>
        <Button variant="primary">Save to Favorites</Button>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Flower/strawberry.jpeg" />
      <Card.Body>
        <Card.Title>Strawberry Tree</Card.Title>
        <Card.Text>
        The Strawberry Tree ,Arbutus unedo, is an amazing species that offers year-round beauty. It is a fruiting evergreen with attractive foliage and delicate whitish-pink blooms that develop into bright, red-orange fruits throughout the season. In addition to its showy beauty, this plant is incredibly hardy and can survive in a wide range of soil types and light conditions. With its easy maintenance and interesting lifestyle, the Strawberry Tree is a must for any gardener looking for a low-care, eye-catching addition to their landscape.
        </Card.Text>
        <Card.Text>
          ID: 183
        </Card.Text>
        <Button variant="primary">Save to Favorites</Button>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Flower/Autumn.jpeg" />
      <Card.Body>
        <Card.Title>Autumn Brilliance Serviceberry</Card.Title>
        <Card.Text>
        Autumn Brilliance Serviceberry (Amelanchier x grandiflora 'Autumn Brilliance') is an amazing ornamental tree that has a lot to offer. This native North American species is known for its beautiful white flowers in spring, striking green foliage in summer and brilliant, vibrant red foliage in autumn. It also produces tasty, edible, purple-black fruits in late summer which can be harvested for jams and pies. 
        </Card.Text>
        <Card.Text>
          ID: 175
        </Card.Text>
        <Button variant="primary">Save to Favorites</Button>
      </Card.Body>
    </Card>











    </div>
  )
}

export default Fruits