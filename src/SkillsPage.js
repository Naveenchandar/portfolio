import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TechnicalSkills from './TechnicalSkills';
import ProfessionalSkills from './ProfessionalSkills';
import './css/SkillsPage.css'

function SkillsPage(props) {
    const skillsStyle = {
        color: 'white'
    }
    return (
        <section className="skills" id={props.id} style={skillsStyle}>
            <Container>
                <Row className="section-separator">
                    <Col sm={12}>
                        <div className="sectionTitle">
                            <h2>Skills</h2>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <TechnicalSkills />
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="professionalSkills wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                            <h3>Professional Skills</h3>
                            <ul className="professionalProgress">
                                <ProfessionalSkills />
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SkillsPage;
