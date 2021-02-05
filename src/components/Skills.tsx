import React from "react"
import {
  Table,
  TR,
  TD,
  TableTitle,
  Skillname,
} from "../styles/Homestyle"
const {SkillData} = require("../data.ts")

function Skills() {
  return (
    <div>
      <Table>
        {SkillData.map((data: any) => (
          <TR key={data.name}>
            <TD xs={12} md={6}>
              <TableTitle>{data.name}</TableTitle>
            </TD>
            <TD xs={12} md={6}>
              {data.skill.map((skill: string) => (
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
