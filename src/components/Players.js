import React from "react";
import Card from "react-bootstrap/Card";

function Players(props) {
  return (
    <Card style={{ width: '18rem' }}>
     <Card.Img classeName='image'    variant="top" src={props.image} />
      <Card.Body>
        <Card.Title> {props.name}  </Card.Title>
        <Card.Text>  {props.age}   </Card.Text>
        <Card.Title>  {props.equipe}  </Card.Title>
        <Card.Text> {props.nationalite}</Card.Text>
        <Card.Title>  {props.numero} </Card.Title>
    </Card.Body>
    </Card>
  );
}

export default Players;