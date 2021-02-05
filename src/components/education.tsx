import React from "react"
import { Table, TR, TD, Subtitle, TableTitle } from "../styles/Homestyle"
const {EducationData} = require("../data.ts")


function Education() {
  return (
    <div>
      <Table>
        {
          EducationData.map((data: any) => (
            <TR>
              <TD xs={12} md={6}>
                <TableTitle>{data.title}</TableTitle>
              </TD>
              <TD xs={12} md={6}>
                {data.name}
                <br />
                <Subtitle>
                  {
                    data.subtitle.map((data: string) => (
                      <>
                        {data}
                        <br />
                      </>
                    ))
                  }
                </Subtitle>
              </TD>
            </TR>

          ))
        }
      </Table>
    </div>
  )
}

export default Education
