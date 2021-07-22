import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Dropdown, FormControl, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = number => {
    setInfo(info.filter(i => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then(data => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-2 mb-2'>
            <DropdownToggle>
              {device.selectedType.name || 'Select type'}
            </DropdownToggle>
            <DropdownMenu>
              {device.types.map(type => (
                <DropdownItem
                  onClick={() => device.setSelectedType(type)}
                  key={device.id}
                >
                  {type.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <Dropdown className='mt-2 mb-2'>
            <DropdownToggle>
              {device.selectedBrand.name || 'Select brand'}
            </DropdownToggle>
            <DropdownMenu>
              {device.brands.map(brand => (
                <DropdownItem
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <FormControl
            value={name}
            onChange={e => setName(e.target.value)}
            className='mt-3'
            placeholder='Type device name'
          />
          <FormControl
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className='mt-3'
            placeholder='Type device price'
            type='number'
          />
          <FormControl onChange={selectFile} className='mt-3' type='file' />
          <hr />
          <Button variant={'outline-dark'} onClick={addInfo}>
            Add new characteristic
          </Button>
          {info.map(i => (
            <Row className='mt-4' key={i.number}>
              <Col md={4}>
                <FormControl
                  onChange={e => changeInfo('title', e.target.value, i.number)}
                  value={i.title}
                  placeholder='Type property name'
                />
              </Col>
              <Col md={4}>
                <FormControl
                  onChange={e =>
                    changeInfo('description', e.target.value, i.number)
                  }
                  value={i.description}
                  placeholder='Type description name'
                />
              </Col>
              <Col md={4}>
                <Button
                  variant={'outline-danger'}
                  onClick={() => removeInfo(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Close
        </Button>
        <Button variant='outline-success' onClick={addDevice}>
          Add device
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
