import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from './../../node_modules/react-bootstrap/Accordion';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Dashboard() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={12}>        {BasicAccordion()} </Col>
                <Col></Col>
            </Row>
        </Container>
    );
  }
  
  export default Dashboard;

function BasicAccordion() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <h1>balls</h1>
            {Example()}
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Winner!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulations, you are our winner!</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} href="">
            Win iPhone 14!!!
          </Button>
          
          <Button variant="primary" onClick={handleClose} href="https://www.ojjdp.gov/ojstatbb/crime/ucr.asp?table_in=2">
            View black crime statistics
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}