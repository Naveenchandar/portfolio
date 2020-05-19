import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Experience from './Experience';
import Education from './Education';

function CarrierPage(props) {
    return (
        <section className="experince" id={props.id}>
            <div className="bolorOverlay">
                <Container>
                    <Row className='section-separator'>
                        <Education />
                        <Experience />
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default CarrierPage;
