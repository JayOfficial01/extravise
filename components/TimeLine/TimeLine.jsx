import React from 'react'
import { timelineData } from '../../data/timeline'
import Card from '../Card/Card'
import { TimeLineStyle } from './TimeLine.style'

function TimeLine() {
    return (
        <TimeLineStyle>
            {timelineData.map((timeline, index) => (
                <Card cardType="timeLineCard" {...timeline} key={index} count={index + 1} />
            ))}
        </TimeLineStyle>
    )
}

export default TimeLine