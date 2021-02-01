import React from 'react';
import { TimelineDiv } from "../styles/TimelineStyle";
import TimelineCard from "../components/timeline"


const data = [
  {
    year: 2019,
    content: `I started learning coding`
  },
  {
    year: 2018,
    content: `I started learning coding`
  },
]

function timeline() {
  return (
    <TimelineDiv>
      {
        data.map((data, index) => (
          <TimelineCard year={data.year} content={data.content} position={index%2==0 ? "left": "right"} />
        ))
      }
    </TimelineDiv>
  );
}

export default timeline;