import React from "react";

import { Text, Img } from "components";

type DynamicFilterConditionRowlevelProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ level: string; type: string; reset: string }>;

const DynamicFilterConditionRowlevel: React.FC<
  DynamicFilterConditionRowlevelProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-row gap-5 items-center justify-start px-2.5 py-2 rounded-[15px] self-stretch w-auto">
          <Text
            className="font-roboto text-blue_gray_100 text-left w-auto"
            variant="body4"
          >
            {props?.level}
          </Text>
          <Img src="images/img_mail.svg" className="h-1.5 w-2.5" alt="mail" />
        </div>
        <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-row gap-5 items-center justify-start ml-2 md:ml-[0] px-2.5 py-2 rounded-[15px] self-stretch w-auto">
          <Text
            className="font-roboto text-blue_gray_100 text-left w-auto"
            variant="body4"
          >
            {props?.type}
          </Text>
          <Img
            src="images/img_mail.svg"
            className="h-1.5 w-2.5"
            alt="mail_One"
          />
        </div>
        <Text
          className="font-roboto ml-5 md:ml-[0] mr-[858px] not-italic text-gray_500 text-left w-auto"
          variant="body2"
        >
          {props?.reset}
        </Text>
      </div>
    </>
  );
};

DynamicFilterConditionRowlevel.defaultProps = {
  level: "Level",
  type: "Type",
  reset: "Reset",
};

export default DynamicFilterConditionRowlevel;
