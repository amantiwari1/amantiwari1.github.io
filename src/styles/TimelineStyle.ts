import styled from "styled-components"


const TimelineDiv = styled.div`

  position: relative;
  max-width: 1200px;
  margin: 0 auto;

/* The actual timeline (the vertical ruler) */
&::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: ${props=> props.theme.text};
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

@media screen and (max-width: 770px) {
  /* Place the timelime to the left */
  &::after {
  left: 29px;
  }
}

`

const Timelinestyle = styled.div`


/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: ${props=> props.theme.mainColor};
  border: 4px solid ${props=> props.theme.text};
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: -25.5%;
}

/* Place the container to the right */
.right {
  left: 25.5%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid ${props=> props.theme.mainColor};
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent ${props=> props.theme.text};
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid ${props=> props.theme.mainColor};
  border-width: 10px 10px 10px 0;
  border-color: transparent ${props=> props.theme.text} transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: ${props=> props.theme.mainColor};
  color: ${props=> props.theme.text};
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 770px) {
  /* Place the timelime to the left */

  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
  left: 60px;
  border: medium solid ${props=> props.theme.text};
  border-width: 10px 10px 10px 0;
  border-color: transparent ${props=> props.theme.text} transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 15px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
  .left {
  left: 0%;
  }
}
`

const TimeLineTopic = styled.h1`
 text-align: center;

`

export {Timelinestyle, TimelineDiv, TimeLineTopic}
