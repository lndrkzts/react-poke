import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import { Card, Spinner } from 'react-bootstrap';


export default function PokeCard(props) {

  let { url } = props;
  let [id, setId] = useState(0);
  let [spinner, setSpinner] = useState(false);
  let [image, setImage] = useState("https://image.winudf.com/v2/image/Y29tLm9wZXJhdGlvbm1ldGVvci53aG9zdGhhdHBva2Vtb25faWNvbl8xNTI2NjAzNDE0XzA0NQ/icon.png?w=170&fakeurl=1");
  
  useEffect(() => {
    setSpinner(true);
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setId(data.id);
      setImage(data.sprites.front_default);
    })
    .finally(() => setSpinner(false))
    .catch(error => console.log(error))
  }, [url]);

  return (
    <Card style={{ width: '20rem', margin: '1em', flex: 'none' }}>
      {
        spinner ?
        <Spinner animation="border" role="status" />
        :
        <Card.Img variant="top" className="h-75" src={ image } />
      }
      <Card.Body>
        <Card.Title>{ props.name.toUpperCase() }</Card.Title>
        <Card.Link>
          <Link to={`/detalle/${id}`}>Ver detalles</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}