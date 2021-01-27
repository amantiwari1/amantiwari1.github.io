import React from "react"
import {
  Table,
  TR,
  TD,
  TableTitle,
  Skillname,
} from "../styles/Homestyle"

const data = [
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
    skill: ["Fastapi", "Node.js"],
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

function Skills() {
  return (
    <div>
      <Table>
        {data.map(data => (
          <TR key={data.name}>
            <TD xs={12} md={6}>
              <TableTitle>{data.name}</TableTitle>
            </TD>
            <TD xs={12} md={6}>
              {data.skill.map(skill => (
                <Skillname
                  key={skill}
                  skillbackground={data.background}
                  skillcolor={data.color}
                >
                  {skill}
                </Skillname>
              ))}
            </TD>
          </TR>
        ))}
      </Table>
    </div>
  )
}

export default Skills
