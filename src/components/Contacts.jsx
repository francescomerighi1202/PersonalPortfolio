import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import ballLight from "../images/ball-light.svg";
import ballDark from "../images/ball-dark.svg";

function Contacts({ isLightMode }) {
    return (
        <section className={!isLightMode ? "contacts-dark contacts" : "contacts"} id="contacts">
            <Container className="contacts-container">
                <h3 className="contacts-title">Contatti</h3>
                <Row>
                    <Col className="contacts-column" lg={4} data-aos="fade-in" data-aos-duration="1000">
                        <div className="contacts-item">
                            <FontAwesomeIcon className="contacts-icon" icon={faPhone} />
                            <h4><a className={!isLightMode ? "text-dark" : null} href="tel:+393426476626">342 6476626</a></h4>
                        </div>
                    </Col>
                    <Col className="contacts-column" lg={4} data-aos="fade-in" data-aos-duration="1000">
                        <div className="contacts-item">
                            <FontAwesomeIcon className="contacts-icon" icon={faEnvelope} />
                            <h4><a className={!isLightMode ? "text-dark" : null} href="mailto:francescomerighi61@gmail.com">francescomerighi61@gmail.com</a></h4>
                        </div>
                    </Col>
                    <Col className="contacts-column" lg={4} data-aos="fade-in" data-aos-duration="1000">
                        <div className="contacts-item">
                                <FontAwesomeIcon className="contacts-icon" icon={faWhatsapp} />
                                <h4>
                                    <a href="https://wa.me/+393426476626">
                                        Chat <FontAwesomeIcon className="go-icon" icon={faArrowRight} /> 
                                    </a>
                                </h4>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img className="ball-light-contacts-1" src={ballLight} alt="Ball light" />
            <img className="ball-dark-contacts-2" src={ballDark} alt="Ball light" />
            <img className="ball-light-contacts-3" src={ballLight} alt="Ball light" />
        </section>
    );
}

export default Contacts;