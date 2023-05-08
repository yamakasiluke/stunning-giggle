import React from "react";

import { Text } from "components";

type LogMainColumnProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ iris: string; industrialresolOne: string }>;

const LogMainColumn: React.FC<LogMainColumnProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[26px] justify-start w-auto md:w-full">
          <Text
            className="font-roboto md:ml-[0] ml-[59px] text-black_900 text-left text-shadow-ts w-auto"
            as="h1"
            variant="h1"
          >
            {props?.iris}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-indigo_300 text-left w-auto"
            as="h6"
            variant="h6"
          >
            {props?.industrialresolOne}
          </Text>
        </div>
      </div>
    </>
  );
};

LogMainColumn.defaultProps = {
  iris: "IRIS",
  industrialresolOne: "Industrial Resolution Intelligent System",
};

export default LogMainColumn;
