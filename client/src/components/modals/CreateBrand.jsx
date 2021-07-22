import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrand({ name: value }).then(data => {
      setValue('');
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Insert brand name'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Close
        </Button>
        <Button variant='outline-success' onClick={addBrand}>
          Add brand
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
