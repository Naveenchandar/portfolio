import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactFooter from './ContactFooter';
import './css/ContactPage.css'

function ContactPage(props) {
    const footerStyle = {
        color: 'white'
    }
    return (
        <footer className="footer" id={props.id} style={footerStyle}>
            <div className="map-image image-bg">
                <Container>
                    <Row className="section-separator">
                        <ContactInfo />
                        <ContactForm />
                        <Col sm={12} md={6} data-wow-duration="0.8s" data-wow-delay="0.5s">
                            {/* Google Maps */}
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="500" height="500" title="Maps" id="gmap_canvas" src="https://maps.google.com/maps?q=R.V.E%20Layout%2C%20Kattuvalavu%2C%20Tiruppur%2C%20Tamil%20Nadu%20641604&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    <a href="https://embed-google-map.org">integrate google maps into website</a>
                                </div>
                            </div>
                        </Col>
                        <ContactFooter />
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default ContactPage;
