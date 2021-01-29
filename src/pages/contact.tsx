import React from 'react';
import { CardContact, Center, InputStyle, TextArea,ContactTitle , ContactButton} from "../styles/ContactStyle";

function contact() {
    return (

        <Center>
            
        <CardContact>
            <ContactTitle>Contact Me</ContactTitle>
            <InputStyle type="text" placeholder="Name" />
            <br />
            <InputStyle type="email" placeholder="Email" />
            <br />
            <TextArea  placeholder="Your Message">
            </TextArea>

            <ContactButton >
                Submit
            </ContactButton>
        </CardContact>
        </Center>
    );
}

export default contact;