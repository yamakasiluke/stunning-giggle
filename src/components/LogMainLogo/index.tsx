import React from "react";

import { Img, Text } from "components";

type LogMainLogoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ aeon: string }>;

const LogMainLogo: React.FC<LogMainLogoProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-1 items-start justify-start self-stretch w-auto md:w-full">
          <Img
            src="images/img_icon.svg"
            className="h-[30px] w-[30px]"
            alt="icon"
          />
          <Text
            className="font-poppins text-black_900 text-left tracking-[0.20px] w-auto"
            as="h4"
            variant="h4"
          >
            {props?.aeon}
          </Text>
        </div>
      </div>
    </>
  );
};

LogMainLogo.defaultProps = { aeon: "IRIS" };

export default LogMainLogo;
