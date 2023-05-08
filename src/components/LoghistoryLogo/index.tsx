import React from "react";

import { Img, Text } from "components";

type LoghistoryLogoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ aeon: string }>;

const LoghistoryLogo: React.FC<LoghistoryLogoProps> = (props) => {
  return (
    <>
      <div className={props.className}>
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
    </>
  );
};

LoghistoryLogo.defaultProps = { aeon: "IRIS" };

export default LoghistoryLogo;
