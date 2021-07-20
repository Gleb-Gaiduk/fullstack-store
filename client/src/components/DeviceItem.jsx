import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../routes/routesConsts';

const DeviceItem = ({ device }) => {
  const history = useHistory();

  return (
    <Col
      md={3}
      className='mt-5'
      onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
    >
      <Card style={{ width: '150', cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={device.img} />
        <div className='text-black-50 mt-2 d-flex justify-content-between align-items-center'>
          <div>Samsung</div>
          <div className='d-flex justify-content-between align-items-center'>
            <div style={{ marginRight: '10px' }}>{device.rating}</div>
            <button>Like</button>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
