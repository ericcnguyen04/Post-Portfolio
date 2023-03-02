import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';

function BasicExample(props) {

    let navigate = useNavigate();
    // const routeChange = () =>{ 
    //     let path = props.deploy; 
    //     console.log(path)
    //     return(
    //         redirect to={path} /
    //     )
    //   }


  return (
    <Card style={{ width: '20vw' }}> 
    {/* 20vw */}
      <Card.Img variant="top" src={props.img} onClick={() => {console.log('sd')}}/>
      <Card.Body>
        <Card.Title><h1>{props.title}</h1></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><h2>{props.subtitle}</h2></Card.Subtitle>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary" href={props.github} target="_blank">Go to my code!</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;