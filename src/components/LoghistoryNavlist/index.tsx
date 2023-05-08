import React from "react";

import { Img, Text } from "components";

type LoghistoryNavlistProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    checkout: string;
    productOne: string;
    createfromframe: string;
    two: string;
  }>;

const LoghistoryNavlist: React.FC<LoghistoryNavlistProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-start justify-start self-stretch w-auto">
          <Img src={props?.checkout} className="h-6 w-6" alt="checkout" />
          <Text
            className="font-medium font-poppins text-indigo_300 text-left w-auto"
            as="h6"
            variant="h6"
          >
            {props?.productOne}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center p-[3px] w-6">
          {!!props?.createfromframe ? (
            <div className="h-[18px] px-[5.5px] relative w-[18px]">
              {!!props?.createfromframe ? (
                <div className="absolute bg-red_500 h-[17px] inset-[0] m-auto px-[5.5px] rounded-[9px] w-[18px]"></div>
              ) : null}
              {!!props?.two ? (
                <Text
                  className="absolute font-medium font-poppins h-full inset-[0] justify-center m-auto text-center text-white_A700 w-max"
                  variant="body3"
                >
                  {props?.two}
                </Text>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

LoghistoryNavlist.defaultProps = {
  checkout: "images/img_checkout.svg",
  productOne: "Warning",
};

export default LoghistoryNavlist;
