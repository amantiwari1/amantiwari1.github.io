import React from 'react';
import { Table, TR, TD, Subtitle, TableTitle } from "../styles/Homestyle";


function Skills() {
    return (
        <div>
            <Table>
            <TR>
                <TableTitle>
                Programming Languages
                </TableTitle>
            </TR>
            <TR>
                <TableTitle>
                Front End Libraries & Frameworks
                </TableTitle>
            </TR>
            <TR>
                <TableTitle>
                Back End Libraries and Frameworks
                </TableTitle>
            </TR>
            <TR>
                <TableTitle>
                Databases
                </TableTitle>
            </TR>

            </Table>
        </div>
    );
}

export default Skills;