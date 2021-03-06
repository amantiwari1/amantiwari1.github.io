const HomeData = {
    aboutme : `Hello !! My name is Aman Tiwari. I'm a full stack web developer
    who is passionate about various web technologies. I like to
    experiment with different web technologies. I have an experience
    of nearly 3 months working with MERN stack and Gatsbyjs. Building
    fancy UI's just like this one that your seeing 😅 and writing
    blogs about tech stacks is what Aman loves to do. Check my blog
    which I update every week for some Javascript and some cool notes
    on web technologies.
    Currently I work mostly with Javascript technologies like ReactJS
    and GatsbyJS. I also have hands on experience working with cloud
    infrastructures like AWS/GCP and have deployed applications
    keeping scalability in mind. Docker, Kubernetes, Jenkins, Github
    Actions are some of the cool tools I use for CI/ CD. I'm always a
    learner and a self taught programmer.`
}


const TimelineData = [
    {
      year: "April 2020",
      content: `Stated learning MLOPS by Linuxworld training and start linux first time`
    },
    {
      year: "Jan 2020",
      content: `Stated learning data science by datacamp.com Online courses`
    },
    {
      year: "Nov 2019",
      content: `Represent Indian Tean In Busan, South Korea  In Global It Challenge (Paralympics) And Secured Third Rank In The Own Category I.E. Hearing Impairment.`
    },
    {
      year: "July 2019",
      content: `Achieved First Rank In India In Own Category I.E. Hearing Impairment At National IT Competition Held In IIT Kurukshetra
      `
    },
    {
      year: "2019",
      content: `I started learning python which is most popular language programming by soloLearn app`
    },
    {
      year: "Aug 2018",
      content: `I started learning first programming in class 11 IP Subject by school. Langauge Java GUI`
    },
  ]





const EducationData = [
    {
        title: "Bachelor Of Technology",
        name: "Computer Science Engineering",
        subtitle: ["Birla Institute Of Technology, Mesra", "2019 - 2022"]
    },
    {
        title: "High School Certificate",
        name: "Commerce + Information Practices (IP)",
        subtitle: [" Kendriya Vidyalaya No.3, Jaipur", "April 2018 - March 2019"]
    },
    {
        title: "Secondary School Certificate",
        name: "All Subject",
        subtitle: [" Kendriya Vidyalaya No.3, Jaipur", "April 2016 - March 2017"]
    },
]
const SkillData = [
    {
      name: "Programming Languages",
      skill: ["Python", "Javascript", "Typescript"],
      color: "white",
      background: "blue",
    },
    {
      name: "Frontend Frameworks",
      skill: ["ReactJS", "GatsbyJS", "BootStrap", "Styled Compoments"],
      color: "white",
      background: "green",
    },
    {
      name: "Backend  Frameworks",
      skill: ["Fastapi", "Node.js", "Graphql"],
      color: "black",
      background: "yellow",
    },
    {
      name: "Databases",
      skill: ["MySQL", "PostgreSQL", "MongoDB"],
      color: "white",
      background: "red",
    },
  ]


const CertificationData = {
    cloudarchitecture: {
        'title': "Cloud Architecture with Google Cloud Specialization",
        'url': "https://www.coursera.org/account/accomplishments/specialization/certificate/T494R22RV5MC"
  
    },
    cloudengineering: {
        'title': "Cloud Engineering with Google Cloud Specialization",
        'url': "https://www.coursera.org/account/accomplishments/specialization/certificate/HV2ZYZBS3XBQ"
  
    },
    googleitautomation: {
        'title': "Google IT Automation with Python Specialization",
        'url': "https://www.coursera.org/account/accomplishments/specialization/certificate/CYJGR8WXEYV6"
  
    },
    googleitsupport: {
        'title': "Google IT Support Specialization",
        'url': "https://www.coursera.org/account/accomplishments/specialization/certificate/UW6DEFZ9Q89R"
  
    },
    k8s: {
        'title': "Architecting with Google Kubernetes Engine Specialization",
        'url': "https://www.coursera.org/account/accomplishments/specialization/certificate/WSFF8NAPDZ74"
    },
    dataanalyst: {
        'title': "Data Analyst with Python Track",
        'url': "https://www.datacamp.com/statement-of-accomplishment/track/bd31c1e1c3af46210714129aa665cddf05365717"
    },
    datamanipulation: {
        'title': "Data Manipulation with Python Track",
        'url': "https://www.datacamp.com/statement-of-accomplishment/track/7e33dfd6470c8c2d7eba8c0417dcb0b5f6fb258a"
  
    },
    datascience: {
        'title': "Data Scientist with Python Track",
        'url': "https://www.datacamp.com/statement-of-accomplishment/track/2751dc8b4996217fc1c9156b513d79edd28bd502"
  
    },
    machinelearning: {
        'title': "Machine Learning Scientist with Python Track",
        'url': "https://www.datacamp.com/statement-of-accomplishment/track/07745a6d131b73097b4e0ac54047843c9c225780?raw=1"
  
    },
    pythonprogrammer: {
        'title': "Python Programmer Track",
        'url': "https://www.datacamp.com/statement-of-accomplishment/track/e0d2c666ef410998ce995e557400149f75c74416"
  
    },
    
  }


const ProjectData = {

   
    CourseBlog: {
        title: "Course and Internsip Blog",
        subtitle: "This project is Course and Internship website where to enroll, Where and how to apply for free with blazing fast website. Built by GatsbyJS and Styled Compoments",
        url: [
            {
                name: "View Website",
                link: "http://react-mini-16338.web.app/"
            }
        ],
    },

    face: {
        title: "Face Detection in Real Time",
        subtitle: "This is a Machine Learning project. I built the Real-Time Face with Collect Image automatically by CV2 and split it into Training and Testing for evaluation. It is used by the CNN model.",
        url: [
            {
                name: "View Source",
                link: "https://github.com/amantiwari1/Real_Time_Detection"
            }
        ],
    },

    datastructure: {
        title: "Data Structures & Algorithms Implementation",
        subtitle: "This repository is dedicated to Data Structures and Algorithms Implementation which I've learnt till the date. Language of implementation is python.",
        url: [
            {
                name: "View Source",
                link: "https://github.com/amantiwari1/data_structure"
            }
        ],
    },

   

   
    
    
    
}

module.exports = {TimelineData,  HomeData, EducationData, SkillData, CertificationData, ProjectData}

  