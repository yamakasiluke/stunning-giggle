import React from "react";

import { Img, Text } from "components";

type LogMainColumnsearchProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ chizhang: string }>;

const LogMainColumnsearch: React.FC<LogMainColumnsearchProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-8 items-center justify-start ml-auto self-stretch w-auto">
          <div className="flex flex-row gap-6 items-start justify-start self-stretch w-auto">
            <Img
              src="images/img_search_black_900.svg"
              className="h-6 w-6"
              alt="search"
            />
            <div
              className="bg-cover bg-no-repeat flex flex-col h-6 items-end justify-start pb-5 pl-5 w-6"
              style={{ backgroundImage: "url('images/img_bell.svg')" }}
            >
              <div className="bg-red_500 h-1 rounded-[50%] w-1"></div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start self-stretch w-auto">
            <Img
              src="images/img_avatar.png"
              className="h-8 md:h-auto rounded-[50%] w-8"
              alt="avatar"
            />
            <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
              <Text
                className="font-normal font-poppins not-italic text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                {props?.chizhang}
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="h-6 w-6"
                alt="arrowdown"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LogMainColumnsearch.defaultProps = { chizhang: "User" };

export default LogMainColumnsearch;
