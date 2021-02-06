import React from 'react';
import { Footerstyle, I } from "../styles/FooterStyle";
import { } from '@fortawesome/free-solid-svg-icons'
import { Container, Col, Row } from "react-bootstrap";


function Footer() {
    return (
        <Footerstyle>
            <Container>

                <Row>
                    <Col>
                        <a href="https://github.com/amantiwari1" target="_blank" rel="noopener noreferrer" ><I className="fab fa-github" /></a>
                        <a href="https://github.com/amantiwari1" target="_blank" rel="noopener noreferrer" ><I className="fab fa-github" /></a>

                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.7143 0H2.27857C1.02143 0 0 0.90625 0 2.01875V25.9813C0 27.0938 1.02143 28 2.27857 28H29.7143C30.9714 28 32 27.0938 32 25.9813V2.01875C32 0.90625 30.9714 0 29.7143 0ZM9.67143 24H4.92857V10.6375H9.67857V24H9.67143ZM7.3 8.8125C5.77857 8.8125 4.55 7.73125 4.55 6.40625C4.55 5.08125 5.77857 4 7.3 4C8.81429 4 10.05 5.08125 10.05 6.40625C10.05 7.7375 8.82143 8.8125 7.3 8.8125V8.8125ZM27.45 24H22.7071V17.5C22.7071 15.95 22.6714 13.9563 20.2429 13.9563C17.7714 13.9563 17.3929 15.6438 17.3929 17.3875V24H12.65V10.6375H17.2V12.4625H17.2643C17.9 11.4125 19.45 10.3062 21.7571 10.3062C26.5571 10.3062 27.45 13.075 27.45 16.675V24V24Z" fill="currentColor" />
                        </svg>

                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>


        </Footerstyle>
    );
}

export default Footer;