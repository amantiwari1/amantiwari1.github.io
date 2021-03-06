import React from 'react';
import { Footerstyle, I } from "../styles/FooterStyle";
import { Container, Col, Row } from "react-bootstrap";
import { Mail, Linkedin, Github, Twitter } from "../images/icons"
import styled from 'styled-components';
import {Link} from "gatsby";

const Icons = styled.a`
    margin: 10px;
    display: inline;

`

const LinkStyle = styled(Link)`
    margin: 10px;
    color: white;
    display: inline;

    &::hover {
        color: white;
        
    }

    @media (max-width: 760px) {
    display: block;
 }


`


const DataLink = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Project",
        link: "/project"
    },
    {
        name: "Timeline",
        link: "/timeline"
    },
    {
        name: "Certification",
        link: "/Certification"
    },
    {
        name: "Contact",
        link: "/contact"
    },
]



const Text = styled.p`

    color: white;
    text-align: center;
`



function Footer() {
    return (
        <Footerstyle>
            <Container>

                <Row>
                    <Col xs={12}>
                        <Text>

                            {
                                DataLink.map((data: any) => (
                                    <>
                                    <LinkStyle to={data.link} >{data.name}</LinkStyle>
                                    </>
                                ))
                            }

                        </Text>
                    </Col>
                    <Col xs={12}>

                        <Text>
                            <Icons target="_blank" rel="noopener noreferrer" href="https://github.com/amantiwari1">
                                <Github />
                            </Icons>

                            <Icons target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aman-tiwari1/">
                                <Linkedin />
                            </Icons>

                            <Icons target="_blank" rel="noopener noreferrer" href="mailto:amantiwari78632@gmail.com">
                                <Mail />
                            </Icons>
                            <Icons target="_blank" rel="noopener noreferrer" href="https://twitter.com/aman_tiwari1">
                                <Twitter />
                            </Icons>


                        </Text>

                    </Col>
                    <Col xs={12} >


                        <Text>
                            Aman Tiwari  @ 2021
                                </Text>
                    </Col >
                </Row>
            </Container>


        </Footerstyle>
    );
}

export default Footer;