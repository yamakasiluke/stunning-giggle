import React from "react";

import LogMainLogo from "components/LogMainLogo";
import LogMainColumnsearch from "components/LogMainColumnsearch";
import LogMainColumn from "components/LogMainColumn";
import { Img, Text, Button } from "components";

const LogmainPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-auto py-[22px] w-full">
        <div className="flex flex-col justify-start mb-[327px] w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[50px] md:px-5 w-full">
            <LogMainLogo className="flex sm:flex-1 flex-col items-start justify-start md:mt-0 mt-1 self-stretch w-auto sm:w-full" />
            <LogMainColumnsearch
              className="flex md:flex-1 flex-col items-end justify-start mb-0.5 md:ml-[0] ml-[912px] px-[7px] w-auto md:w-full"
              chizhang="User"
            />
          </header>
          <LogMainColumn
            className="flex flex-col items-start justify-start md:ml-[0] ml-[434px] mt-[41px] md:px-5 w-auto md:w-full"
            iris="IRIS"
            industrialresolOne="Industrial Resolution Intelligent System"
          />
          <div className="bg-gray_100 flex md:flex-col flex-row font-roboto gap-10 items-start justify-center mt-[21px] p-3.5 w-full">
            <div className="flex md:flex-1 flex-row items-start justify-center md:ml-[0] ml-[276px] md:mt-0 my-0.5 md:px-5 w-[12%] md:w-full">
              <Img
                src="images/img_settings.svg"
                className="h-4 w-4"
                alt="settings"
              />
              <Text
                className="font-normal ml-[5px] mt-0.5 not-italic text-gray_700 text-left w-auto"
                variant="body3"
              >
                10 connected systems​
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row items-start justify-center md:mt-0 my-0.5 md:px-5 w-[13%] md:w-full">
              <Img
                src="images/img_phlightbulbbold.svg"
                className="h-4 w-4"
                alt="phlightbulbbold"
              />
              <Text
                className="font-normal ml-[5px] mt-0.5 not-italic text-gray_700 text-left w-auto"
                variant="body3"
              >
                9 mo. 24 days knowledge
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row items-start justify-center md:mt-0 my-0.5 md:px-5 w-[16%] md:w-full">
              <Img
                src="images/img_phcirclewavywarningbold.svg"
                className="h-4 w-4"
                alt="phcirclewavywar"
              />
              <Text
                className="font-normal ml-[5px] mt-0.5 not-italic text-gray_700 text-left w-auto"
                variant="body3"
              >
                30 million searchable knowledge​
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row items-start justify-center mr-[276px] md:mt-0 mt-[3px] md:px-5 w-[7%] md:w-full">
              <Img
                src="images/img_phfiletextbold.svg"
                className="h-4 w-4"
                alt="phfiletextbold"
              />
              <Text
                className="font-normal ml-[5px] mt-0.5 not-italic text-gray_700 text-left w-auto"
                variant="body3"
              >
                350 reports​
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-center justify-center max-w-[796px] mt-2 mx-auto md:px-5 w-full">
            <div className="bg-white_A700 border border-blue_gray_100 border-solid flex md:flex-1 flex-col items-start justify-start p-[15px] rounded-bl-[5px] rounded-br-none rounded-tl-[5px] rounded-tr-none w-[89%] md:w-full">
              <Img
                src="images/img_search_gray_500.svg"
                className="h-5 md:ml-[0] ml-[5px] w-5"
                alt="search_One"
              />
            </div>
            <Button
              className="cursor-pointer font-normal leading-[normal] min-w-[93px] not-italic text-center text-sm text-white_A700 w-auto"
              shape="CustomBorderLR5"
              size="lg"
              variant="FillLightblue800"
            >
              Search
            </Button>
          </div>
          <div className="flex md:flex-col flex-row font-roboto md:gap-10 gap-[60px] items-start justify-center md:ml-[0] ml-[260px] mt-[22px] md:px-5 w-3/5 md:w-full">
            <div className="flex flex-row items-start justify-between w-[56%] md:w-full">
              <div className="flex flex-row gap-[21px] items-start justify-between mb-0.5 w-[15%]">
                <Text
                  className="font-bold text-blue_gray_900 text-left w-auto"
                  variant="body3"
                >
                  Filter
                </Text>
                <Img
                  src="images/img_info.svg"
                  className="h-3 mt-0.5 w-3"
                  alt="info"
                />
              </div>
              <div className="flex flex-row items-start justify-evenly mt-0.5 w-[67%]">
                <Text
                  className="font-bold text-blue_gray_900 text-left w-auto"
                  variant="body3"
                >
                  Search Recommendation for Yield Loss Problem
                </Text>
                <Img
                  src="images/img_info.svg"
                  className="h-3 mt-0.5 w-3"
                  alt="info_One"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly md:mt-0 mt-1 w-[38%] md:w-full">
              <Text
                className="font-bold text-blue_gray_900 text-left w-auto"
                variant="body3"
              >
                Search Recommendation for Equipment Problem
              </Text>
              <Img
                src="images/img_info.svg"
                className="h-3 w-3"
                alt="info_Two"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogmainPage;
