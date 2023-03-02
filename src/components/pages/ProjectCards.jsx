import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '20vw' }}> 
    {/* 20vw */}
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title><h1>{props.title}</h1></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><h2>{props.subtitle}</h2></Card.Subtitle>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;