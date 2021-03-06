import React from 'react';
import { Timelinestyle } from "../styles/TimelineStyle";

const TimelineCard = ({ year, content, position }: { year: number, content: string, position: string }) => {
    return ( <>
        
        <Timelinestyle>

            <div className={`container ${position}`} >
                <div className="content">
                    <h3>{year}</h3>
                    <p>{content}</p>
                </div>
            </div>

        </Timelinestyle>
        </>
    );
}

export default TimelineCard;