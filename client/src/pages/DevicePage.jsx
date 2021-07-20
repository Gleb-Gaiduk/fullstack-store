import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const Device = () => {
  const device = {
    name: 'Test name',
    rating: 5,
    price: 2500,
  };

  const description = [
    { title: 'Test title', description: 'Test Description' },
    { title: 'Test title', description: 'Test Description' },
  ];

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={''} />
        </Col>
        <Col md={4}>
          <Row>
            <h2>{device.name}</h2>
            <div className='d-flex align-items-center justify-content-center'>
              Rating: {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex align-items-center justify-content-around'
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>From {device.price} $</h3>
            <Button variant={'outline-dark'}>Add to Court</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Device parameters</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default Device;
