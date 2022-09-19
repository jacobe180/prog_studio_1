import BasicAccordion from './Components/BasicAccordion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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