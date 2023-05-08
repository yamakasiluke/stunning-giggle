import React from "react";

import { Text, Img, Line } from "components";

type DynamicFilterConditionColumnOneProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    all: string;
    report: string;
    analysis: string;
    map: string;
    trace: string;
    history: string;
    processcontrol: string;
  }>;

const DynamicFilterConditionColumnOne: React.FC<
  DynamicFilterConditionColumnOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[69%] md:w-full">
            <Text
              className="font-normal font-roboto h-[17px] not-italic text-blue_gray_900 text-center w-auto"
              variant="body1"
            >
              {props?.all}
            </Text>
            <Text
              className="font-normal font-roboto md:ml-[0] ml-[124px] not-italic text-blue_gray_900 text-center w-auto"
              variant="body1"
            >
              {props?.report}
            </Text>
            <Text
              className="font-normal font-roboto md:ml-[0] ml-[106px] not-italic text-blue_gray_100 text-center w-auto"
              variant="body1"
            >
              {props?.analysis}
            </Text>
            <Text
              className="font-normal font-roboto md:ml-[0] ml-[113px] not-italic text-blue_gray_100 text-center w-auto"
              variant="body1"
            >
              {props?.map}
            </Text>
            <Text
              className="font-normal font-roboto md:ml-[0] ml-[123px] not-italic text-blue_gray_900 text-center w-auto"
              variant="body1"
            >
              {props?.trace}
            </Text>
            <Text
              className="font-bold font-roboto md:ml-[0] ml-[113px] text-center text-light_blue_800 w-auto"
              variant="body1"
            >
              {props?.history}
            </Text>
            <div className="flex flex-row items-center justify-evenly md:ml-[0] ml-[73px] w-[12%] md:w-full">
              <Text
                className="font-normal font-roboto not-italic text-blue_gray_100 text-center w-auto"
                variant="body1"
              >
                {props?.processcontrol}
              </Text>
              <div className="bg-blue_gray_50 border border-gray_500 border-solid flex flex-col h-3 items-center justify-start my-0.5 p-[3px] rounded-[50%] w-3">
                <Img src="images/img_.svg" className="h-1 w-auto" alt="One" />
              </div>
            </div>
          </div>
          <div className="flex flex-col relative w-full">
            <Line className="bg-blue_gray_100 h-px mx-auto w-full" />
            <Line className="bg-light_blue_800 h-[5px] mb-auto ml-auto mr-[335px] mt-[-1px] w-[11%] z-[1]" />
          </div>
        </div>
      </div>
    </>
  );
};

DynamicFilterConditionColumnOne.defaultProps = {
  all: "All",
  report: "Report",
  analysis: "Analysis",
  map: "Map",
  trace: "Trace",
  history: "History",
  processcontrol: "Process Control",
};

export default DynamicFilterConditionColumnOne;
