import React from "react";

import { Text, Button, Img } from "components";

type LoghistoryCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    p89935: string;
    totalusers: string;
    up: string;
    onehundredtwo: string;
    p101thisweek: string;
  }>;

const LoghistoryCard: React.FC<LoghistoryCardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-col items-start justify-start self-stretch w-auto">
            <Text
              className="font-poppins font-semibold text-black_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              {props?.p89935}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-black_900 text-left w-auto"
              as="h6"
              variant="h6"
            >
              {props?.totalusers}
            </Text>
          </div>
          <Button
            className="flex h-11 items-center justify-center w-11"
            shape="icbRoundedBorder12"
            size="smIcn"
            variant="icbOutlineIndigo3001e"
          >
            <Img src="images/img_users.svg" className="h-6" alt="users" />
          </Button>
        </div>
        <div className="flex flex-row gap-3 items-start justify-start w-full">
          <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
            <Img src={props?.up} className="h-5 w-5" alt="up" />
            <Text
              className="font-normal font-poppins not-italic text-indigo_300 text-left w-auto"
              variant="body1"
            >
              {props?.onehundredtwo}
            </Text>
          </div>
          <Text
            className="flex-1 font-normal font-poppins not-italic text-indigo_300 text-left w-auto"
            variant="body1"
          >
            {props?.p101thisweek}
          </Text>
        </div>
      </div>
    </>
  );
};

LoghistoryCard.defaultProps = {
  p89935: "89,935",
  totalusers: "SPC",
  up: "images/img_up.svg",
  onehundredtwo: "10.2",
  p101thisweek: "+1.01% this week",
};

export default LoghistoryCard;
