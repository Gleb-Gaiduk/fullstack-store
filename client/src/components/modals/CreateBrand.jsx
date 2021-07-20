import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CreateBrand = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder='Insert type name' />
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

export default CreateBrand;
