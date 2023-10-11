import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fruits from './Fruits';
import Vegetables from './Vegetables';
const Flowers = () => {
    const [showFruits, setShowFruits] = useState(false);
 

  const toggleFruits = () => {
    setShowFruits(!showFruits);
    ;
  };

  

  return (
    <div>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Flower/Hollyhock.jpeg" />
      <Card.Body>
        <Card.Title>HollyHock</Card.Title>
        <Card.Text>
        Hollyhock ,Alcea rosea 'Nigra', is truly an amazing plant species. It boasts stunning deep purple, velvety flowers with intricate yellow stamens that add visual interest to any garden.
        </Card.Text>
        <Card.Text>
            ID: 653
        </Card.Text>
        <Button variant="primary">Save to Favorites</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Flower/Pixie Maple.jpeg" />
      <Card.Body>
        <Card.Title>Pixie Japanese Maple</Card.Title>
        <Card.Text>
        Pixie Japanese Maple is an amazing ornamental shrub that will quickly make your garden shine with its unique structure and showy foliage. Its small, fern-like, deep-green leaves with a pinkish-red edge add to the eye-catching quality of this variety.
        </Card.Text>
        <Card.Text>
          ID: 100
        </Card.Text>
        <Button variant="primary">Save to Favorites</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Flower/Glossy.jpeg" />
      <Card.Body>
        <Card.Title>Glossy Abelia</Card.Title>
        <Card.Text>
        The Glossy Abelia is an amazing ornamental shrub, ideal for adding beauty and structure to your garden. With glossy, deep-green oval leaves, it is fast-growing and has showy, fragrant flowers in shades of pink from late spring to mid-summer. Its tough, durable and drought tolerant evergreen foliage provides a colourful backdrop for beds and borders all year round. 
        </Card.Text>
        <Card.Text> ID: 400</Card.Text>
        <Button variant="primary">Save to Favorites</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Flower/Monk.jpeg" />
      <Card.Body>
        <Card.Title>Climbing Monk's Hood</Card.Title>
        <Card.Text>
        Climbing Monk's Hood ,Aconitum hemsleyanum, is an amazing climber with beautiful deep violet-blue flowers. This hardy perennial thrives in partially shady areas and can quickly cover walls and fences with its vigorous tendrils of foliage, forming an impressive display. Its foliage is also a great source of contrast against brighter colors, providing a touch of subtle drama. 
        </Card.Text>
        <Card.Text>Id:509</Card.Text>
        <Button variant="primary">Save to Favorites</Button>
      </Card.Body>
    </Card>
    <button onClick={toggleFruits}>Show Fruits</button>
      

      {showFruits && <Fruits />}
      
    
    
    
    
    </div>
  )
}

export default Flowers