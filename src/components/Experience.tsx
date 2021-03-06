import React from 'react';
import styled from 'styled-components';
import { Col, Row } from "react-bootstrap";

const CareerText = styled.p`
    font-size: 25px;
`

const CampanyName = styled.p`
    font-size: 15px;
    line-height: 1%;


`
const TimeExp = styled.p`
    font-size: 15px;

`

const ExperienceData = [
    {
        career: "Cloud Computing Intern",
        CampanyName: "- MedTourEasy",
        time: "11/2020 ‐ 12/2020",
        description: [
            "Worked on DevOps tools like Docker, Jenkins, Git, GitHub Actions for implementing CI/CD pipeline.",
            "Worked on Google Cloud Platform and Services tools like Database, Storage, Networking, Cloud Build for implementing CI/CD pipeline.",
            " Worked on Google Kubernetes Engine and Services tools like Connected to Google Cloud Services, Storage, Networking, Jenkins for implementing CI/CD pipeline, Scalable the pod and Update the docker image and deploy and rollout back"
        ]
    },
    {
        career: "MLOPS",
        CampanyName: "- LinuxWorld Training",
        time: "04/2020 ‐ 06/2020",
        description: [
            "In this training, Learned about the whole pipeline of Data Science from Data Collection to Model Training including steps like Feature Engineering, Feature Elimination, Feature Selection, Statistical concepts like p‐value, Signification Value, R Square, Adjusted R Square and also used different algorithms of Machine Learning and Deep Learning including CNN, AlexNet Architecture, DNN, GANs.",
            "Apart from all these concepts, Worked on different DevOps tools like Docker, Jenkins, Git, Github, Kubernetes Deployments to automate the stuff of Hyper Parameter Tuning so that we can get the best accuracy of our model."
        ]
    }
]


const Experience = () => {
    return (
        <Row>
            <br />
            <br />
            <Col>
                {
                    ExperienceData.map((data: any) => (
                        <>
                            <CareerText>{data.career}</CareerText>
                            <CampanyName>{data.CampanyName}</CampanyName>
                            <TimeExp>{data.time}</TimeExp>
                            {
                                data.description.map((data: string) => (
                                    <p>{data}</p>
                                ))
                            }
                        </>
                    ))
                }
            </Col>
        </Row>
    )
}

export default Experience;