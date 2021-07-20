import React, { useContext, useState } from 'react';
import { Col, Dropdown, FormControl, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = number => {
    setInfo(info.filter(i => i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-2 mb-2'>
            <DropdownToggle>Select type</DropdownToggle>
            <DropdownMenu>
              {device.types.map(type => (
                <DropdownItem key={device.id}>{device.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <Dropdown className='mt-2 mb-2'>
            <DropdownToggle>Select brand</DropdownToggle>
            <DropdownMenu>
              {device.brands.map(brand => (
                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <FormControl className='mt-3' placeholder='Type device name' />
          <FormControl
            className='mt-3'
            placeholder='Type device price'
            type='number'
          />
          <FormControl className='mt-3' type='file' />
          <hr />
          <Button variant={'outline-dark'} onClick={addInfo}>
            Add new device
          </Button>
          {info.map(i => (
            <Row className='mt-4' key={i.number}>
              <Col md={4}>
                <FormControl placeholder='Type property name' />
              </Col>
              <Col md={4}>
                <FormControl placeholder='Type description name' />
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
        <Button variant='outline-success'>Add brand</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
