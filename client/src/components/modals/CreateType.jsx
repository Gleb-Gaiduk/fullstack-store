import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CreateType = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Add type</Modal.Title>
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
        <Button variant='outline-success'>Add type</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
