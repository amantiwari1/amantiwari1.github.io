import React from "react"
import { Table, TR, TD, Subtitle, TableTitle } from "../styles/Homestyle"

function Education() {
  return (
    <div>
      <Table>
        <TR>
          <TD xs={12} md={6}>
            <TableTitle>Bachelor Of Technology</TableTitle>
          </TD>
          <TD xs={12} md={6}>
            Computer Science Engineering
            <br />
            <Subtitle>
              Birla Institute Of Technology, Mesra
              <br />
              2019 - 2022
            </Subtitle>
          </TD>
        </TR>
        <TR>
          <TD xs={12} md={6}>
            <TableTitle>High School Certificate</TableTitle>
          </TD>
          <TD xs={12} md={6}>
            Commerce + Information Practices (IP)
            <br />
            <Subtitle>
              Kendriya Vidyalaya No.3, Jaipur
              <br />
              April 2018 - March 2019
            </Subtitle>
          </TD>
        </TR>
        <TR>
          <TD xs={12} md={6}>
            <TableTitle>Secondary School Certificate</TableTitle>
          </TD>
          <TD xs={12} md={6}>
            Kendriya Vidyalaya No.3, Jaipur
            <br />
            <Subtitle>
              August 2016 - March 2017
              <br />
            </Subtitle>
          </TD>
        </TR>
      </Table>
    </div>
  )
}

export default Education
