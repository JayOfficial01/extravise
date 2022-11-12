import React from "react";
import CommonCard from "./CommonCard";
import HorizontalCard from "./HorizontalCard";
import TimelineCard from "./TimelineCard";
import VerticalCard from "./VerticalCard";

function Card(props) {
  const { cardType } = props;

  switch (cardType) {
    case "horizontalCard":
      return <HorizontalCard {...props} />;

    case "commonCard":
      return <CommonCard {...props} />;

    case "timeLineCard":
      return <TimelineCard {...props} />;

    case "verticalCard":
      return <VerticalCard {...props} />;

    default:
      return <HorizontalCard {...props} />;
  }
}

export default Card;
