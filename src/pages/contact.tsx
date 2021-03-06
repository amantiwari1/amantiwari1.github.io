import React from 'react';
import { CardContact, Center, InputStyle, TextArea,ContactTitle , ContactButton} from "../styles/ContactStyle";

function contact() {
    return (

        <Center>
            
        <CardContact action="https://mailthis.to/amantiwari78632@gmail.com" method="POST" >
            <ContactTitle>Contact Me</ContactTitle>
            <InputStyle type="text" name="name" placeholder="Name" />
            <br />
            <InputStyle type="email" name="_replyto" placeholder="Email" />
            <br />
            <TextArea name="message"  placeholder="Your Message">
            </TextArea>

            <ContactButton >
                Submit
            </ContactButton>
        </CardContact>
        </Center>
    );
}

export default contact;