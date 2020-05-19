import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/ServicePage.css';
import ServicePage2 from './ServicePage2';

function ServicePage(props) {
    const sectionText = {
        borderRadius: '4px',
        padding: '20px'
    }
    return (
        <section className="servicePage" id={props.id}>
            <Container>
                <Row className='section-separator'>
                    <Col sm={12} className='sectionPageTitle'>
                        <h3>What I do</h3>
                    </Col>
                    <ServicePage2 className={sectionText}>

                    </ServicePage2>
                </Row>
            </Container>
        </section>
    )
}

export default ServicePage;
