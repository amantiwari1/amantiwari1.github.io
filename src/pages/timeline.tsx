import React from 'react';
import { TimelineDiv, TimeLineTopic } from "../styles/TimelineStyle";
import TimelineCard from "../components/timeline"

const { TimelineData } = require("../data.ts")


function timeline() {
  return (
    <>
      <br />
      <TimeLineTopic>Timeline</TimeLineTopic>
      <TimelineDiv>
        {
          TimelineData.map((data: any, index: number) => (
            <TimelineCard year={data.year} content={data.content} position={index % 2 == 0 ? "left" : "right"} />
          ))
        }
      </TimelineDiv>
    </>);
}

export default timeline;