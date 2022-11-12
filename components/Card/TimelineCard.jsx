import React from 'react'
import { TimelineCardStyle } from './Card.style'

function TimelineCard(props) {
    const { background, heading, description, count } = props
    return (
        <TimelineCardStyle className="timeline-card" bg={background}>
            <figcaption>
                <h3 className="card-heading">{heading}</h3>
                <p className="card-description">
                    {description}
                </p>
            </figcaption>

            <article className="count">{count.toLocaleString('en-US', {
                minimumIntegerDigits: 2,

            })}</article>
        </TimelineCardStyle>
    )
}

export default TimelineCard