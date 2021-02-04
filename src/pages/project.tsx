import React from 'react';
import { ProjectStyle, ProjectCard } from "../styles/ProjectStye";
import { useStaticQuery, graphql } from "gatsby";



const data = [
    {
        title: "Course and Internsip Blog",
        subtitle: ["This project is Course and Internship website where to enroll,  Where and how to apply for free with  blazing fast website. Built by GatsbyJS and Styled Compoments"],
        button: [
            {
                name: "View Website",
                url: "http://react-mini-16338.web.app/",
            },
        ]
    },
    {
        title: "Data Structures & Algorithms Implementation",
        subtitle: ["This repository is dedicated to Data Structures and Algorithms Implementation which I've learnt till the date. Language of implementation is python."],
        button: [
            {
                name: "View Project",
                url: "https://github.com/amantiwari1/data_structure",
            },
        ]
    },
    {
        title: "Face Detection  in Real Time",
        subtitle: ["This is a Machine Learning project. I built the Real-Time Face with Collect Image automatically by CV2 and split it into Training and Testing for evaluation. It is used by the CNN model."],
        button: [
            {
                name: "View Project",
                url: "https://github.com/amantiwari1/Real_Time_Detection",
            },
        ]
    },
]


function project() {
    const Imagefeature = useStaticQuery(graphql`
      query Imagefeature {
        CourseBlog: file(relativePath: {eq: "CourseBlog.jpg"}) {
    childImageSharp {
      fluid(fit: COVER, cropFocus: CENTER, maxHeight: 500, maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  datastructure: file(relativePath: {eq: "datastructure.jpg"}) {
    childImageSharp {
      fluid(fit: COVER, cropFocus: CENTER, maxHeight: 500, maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  face: file(relativePath: {eq: "face.png"}) {
    childImageSharp {
      fluid(fit: COVER, cropFocus: CENTER, maxHeight: 500, maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
      }
  `)
    return (
        <ProjectStyle>
            <ProjectCard fluid={Imagefeature.CourseBlog.childImageSharp.fluid} data={data[0]} />
            <ProjectCard fluid={Imagefeature.datastructure.childImageSharp.fluid} data={data[1]} />
            <ProjectCard fluid={Imagefeature.face.childImageSharp.fluid} data={data[2]} />
        </ProjectStyle>
    );
}

export default project;