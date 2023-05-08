import React from "react";

import { Text, Img, Input, Button } from "components";
import { CloseSVG } from "../../assets/images";
import DynamicFilterConditionColumnOne from "components/DynamicFilterConditionColumnOne";
import DynamicFilterConditionRowlevel from "components/DynamicFilterConditionRowlevel";

const DynamicfilterconditionPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-start justify-center mx-auto p-[43px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[22px] items-start justify-start mb-14 mt-[52px] w-[93%] md:w-full">
          <div className="flex flex-row gap-2.5 items-start justify-start w-[15%] md:w-full">
            <Text
              className="text-black_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              No results
            </Text>
            <Text
              className="font-normal not-italic text-black_900 text-left w-auto"
              variant="body1"
            >
              Disable the button
            </Text>
          </div>
          <div className="border border-blue_gray_100 border-solid flex flex-col items-center justify-start pb-[3px] w-full">
            <div className="bg-white_A700 flex flex-col items-start justify-start p-[9px] shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start md:ml-[0] ml-[75px] w-[83%] md:w-full">
                <Img
                  src="images/img_image8.png"
                  className="h-[61px] sm:h-auto object-cover w-[16%] md:w-full"
                  alt="imageEight"
                />
                <div className="flex flex-col gap-2.5 items-start justify-start md:mt-0 mt-[3px] w-[83%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e)}
                      wrapClassName="flex md:flex-1 w-[51%] md:w-full"
                      className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm w-full"
                      name="groupFour"
                      placeholder="Lot1 Parameter1"
                      prefix={
                        <Img
                          src="images/img_search_gray_500_20x20.svg"
                          className="cursor-pointer mr-2.5 my-auto"
                          alt="search"
                        />
                      }
                      suffix={
                        <CloseSVG
                          fillColor="#000000"
                          className="cursor-pointer my-auto"
                          onClick={() => setInputvalue("")}
                          style={{
                            visibility:
                              inputvalue?.length <= 0 ? "hidden" : "visible",
                          }}
                          height={20}
                          width={20}
                          viewBox="0 0 20 20"
                        />
                      }
                      shape="srcCustomBorderTL5"
                      size="smSrc"
                      variant="srcOutlineGray400"
                    ></Input>
                    <Button
                      className="cursor-pointer font-normal leading-[normal] min-w-[67px] not-italic text-center text-white_A700 text-xs w-auto"
                      shape="CustomBorderLR5"
                      size="md"
                      variant="FillLightblue800"
                    >
                      Search
                    </Button>
                    <Img
                      src="images/img_signal.svg"
                      className="h-4 md:ml-[0] ml-[317px] w-[17px]"
                      alt="signal"
                    />
                    <Img
                      src="images/img_television.svg"
                      className="h-4 md:ml-[0] ml-[25px] w-4"
                      alt="television"
                    />
                    <Img
                      src="images/img_settings_black_900.svg"
                      className="h-4 md:ml-[0] ml-[25px] w-4"
                      alt="settings"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[42%] md:w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[100px] w-auto"
                      rightIcon={
                        <div className="mt-0.5 mb-1 ml-2.5 bg-blue_gray_600">
                          <Img
                            src="images/img_polygon_1.svg"
                            className=""
                            alt="Polygon 1"
                          />
                        </div>
                      }
                      shape="RoundedBorder12"
                      size="sm"
                      variant="OutlineBluegray600"
                    >
                      <div className="font-normal not-italic text-[10px] text-blue_gray_600 text-left">
                        3 months ago
                      </div>
                    </Button>
                    <Text
                      className="sm:ml-[0] ml-[19px] sm:mt-0 mt-[7px] text-blue_gray_900 text-left w-auto"
                      variant="body4"
                    >
                      Keyword
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[82px] ml-2.5 sm:ml-[0] w-auto"
                      leftIcon={
                        <div className="mr-2.5 bg-gray_700_7f my-px">
                          <Img
                            src="images/img_union.svg"
                            className=""
                            alt="Union"
                          />
                        </div>
                      }
                      shape="RoundedBorder12"
                      size="sm"
                      variant="OutlineBluegray9004c"
                    >
                      <div className="font-normal not-italic text-[10px] text-gray_700 text-left">
                        Lot: Lot1
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[146px] sm:ml-[0] ml-[11px] w-auto"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          className="mt-0.5 mb-px mr-2.5"
                          alt="eye"
                        />
                      }
                      shape="RoundedBorder12"
                      size="sm"
                      variant="OutlineBluegray600"
                    >
                      <div className="font-normal not-italic text-[10px] text-blue_gray_600 text-left">
                        Parameter: Parameter1
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[91px] h-[94px] mt-[29px] relative w-full">
              <div className="absolute md:h-[61px] h-[93px] inset-[0] justify-center m-auto w-full">
                <div className="h-[93px] m-auto w-full">
                  <DynamicFilterConditionColumnOne
                    className="flex flex-col items-center justify-start mb-[-5px] mx-auto w-full z-[1]"
                    all="All"
                    report="Report"
                    analysis="Analysis"
                    map="Map"
                    trace="Trace"
                    history="History"
                    processcontrol="Process Control"
                  />
                  <div className="bg-gray_100_01 h-[61px] mt-auto mx-auto w-full"></div>
                </div>
                <DynamicFilterConditionRowlevel
                  className="absolute bg-gray_100_01 bottom-[0] flex flex-row inset-x-[0] items-center justify-center mx-auto pr-[15px] py-[15px] w-3/4 sm:w-full"
                  level="Level"
                  type="Type"
                  reset="Reset"
                />
              </div>
              <div className="absolute border border-red_A700 border-solid bottom-[0] h-[62px] left-[11%] w-[17%]"></div>
            </div>
            <Img
              src="images/img_search.svg"
              className="h-20 mt-[234px] w-20"
              alt="search_Two"
            />
            <Text
              className="mt-[18px] not-italic text-gray_700 text-left w-auto"
              as="h3"
              variant="h3"
            >
              No results found
            </Text>
            <Text
              className="font-normal mt-[5px] not-italic text-gray_500 text-left w-auto"
              variant="body1"
            >
              Try diffrent keywords
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicfilterconditionPage;
