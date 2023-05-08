import React from "react";

import LoghistoryLogo from "components/LoghistoryLogo";
import LoghistoryNavlist from "components/LoghistoryNavlist";
import { SelectBox, Img, Line, Text, List } from "components";
import LoghistoryCard from "components/LoghistoryCard";

const LoghistoryPage: React.FC = () => {
  const loghistoryCardPropList = [
    {
      totalusers: "SPC",
      p89935: "89,935",
      up: "images/img_up.svg",
      onehundredtwo: "10.2",
      p101thisweek: "+1.01% this week",
    },
    {
      totalusers: "Total Wafermap ",
      p89935: "23,283.5",
      up: "images/img_up.svg",
      onehundredtwo: "3.1",
      p101thisweek: "+0.49% this week",
    },
    {
      totalusers: "Lot History",
      p89935: "46,827",
      up: "images/img_down.svg",
      onehundredtwo: "2.56",
      p101thisweek: "-0.91% this week",
    },
    {
      totalusers: "Defect",
      p89935: "124,854",
      up: "images/img_up.svg",
      onehundredtwo: "7.2",
      p101thisweek: "+1.51% this week",
    },
  ];

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-auto p-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1334px] mt-5 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[306px] items-center justify-start mb-8 w-[15%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[71px] items-start justify-start w-full">
              <LoghistoryLogo
                className="flex flex-row items-start justify-start self-stretch w-auto sm:w-full"
                aeon="IRIS"
              />
              <div className="flex flex-col gap-7 items-start justify-start md:ml-[0] ml-[5px] self-stretch w-auto">
                <LoghistoryNavlist
                  className="flex flex-col items-start justify-start w-[193px] sm:w-full"
                  checkout="images/img_chart.svg"
                  productOne="Overview"
                />
                <SelectBox
                  className="font-medium text-base text-indigo_300 text-left w-full"
                  placeholderClassName="text-indigo_300"
                  name="navlist"
                  placeholder="Query"
                  getOptionLabel={(e) =>
                    (
                      <div className="flex items-center">
                        <Img
                          src="images/img_case.svg"
                          className="h-6 mr-3 w-6"
                          alt="case"
                        />
                        <span>{e.label}</span>
                      </div>
                    ) as unknown as string
                  }
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-6 w-6"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <SelectBox
                  className="font-medium text-base text-indigo_300 text-left w-full"
                  placeholderClassName="text-indigo_300"
                  name="navlist_One"
                  placeholder="Search"
                  getOptionLabel={(e) =>
                    (
                      <div className="flex items-center">
                        <Img
                          src="images/img_user.svg"
                          className="h-6 mr-3 w-6"
                          alt="user"
                        />
                        <span>{e.label}</span>
                      </div>
                    ) as unknown as string
                  }
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-6 w-6"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <LoghistoryNavlist
                  className="flex flex-row items-start justify-between w-[193px] sm:w-full"
                  checkout="images/img_checkout.svg"
                  productOne="Warning"
                />
                <LoghistoryNavlist
                  className="flex flex-col items-start justify-start w-[193px] sm:w-full"
                  checkout="images/img_settings_indigo_300.svg"
                  productOne="Setting"
                />
              </div>
            </div>
            <div className="flex flex-col gap-7 items-start justify-start self-stretch w-auto">
              <LoghistoryNavlist
                className="flex flex-col items-start justify-start w-[193px] sm:w-full"
                checkout="images/img_info_indigo_300.svg"
                productOne="Help Centre"
              />
              <LoghistoryNavlist
                className="flex flex-col items-start justify-start w-[193px] sm:w-full"
                checkout="images/img_search_indigo_300.svg"
                productOne="Contact us"
              />
              <LoghistoryNavlist
                className="flex flex-col items-start justify-start w-[193px] sm:w-full"
                checkout="images/img_logout.svg"
                productOne="Log out"
              />
            </div>
          </div>
          <Line className="bg-blue_600 md:h-1 h-6 mb-[678px] ml-8 md:ml-[0] md:mt-0 mt-[98px] rounded-bl-sm rounded-br-none rounded-tl-sm rounded-tr-none w-1 md:w-full" />
          <Line className="bg-blue_50_01 h-[760px] md:h-px md:mt-0 mt-10 md:w-full w-px" />
          <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[39px] w-4/5 md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1059px] w-full">
              <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                <Text
                  className="font-medium text-black_900 text-left w-auto"
                  as="h2"
                  variant="h2"
                >
                  Welcome Back,Chi
                </Text>
                <Text
                  className="font-normal not-italic text-indigo_300 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Here is the information about all your KG
                </Text>
              </div>
              <div className="flex flex-row gap-8 items-center justify-start self-stretch w-auto">
                <div className="flex flex-row gap-6 items-start justify-start self-stretch w-auto">
                  <Img
                    src="images/img_search_black_900.svg"
                    className="h-6 w-6"
                    alt="search_One"
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
                  <SelectBox
                    className="font-normal not-italic text-base text-black_900 text-left w-[73%] sm:w-full"
                    placeholderClassName="text-black_900"
                    name="language"
                    placeholder="Chi  Zhang"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-6 w-6"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
            </div>
            <List
              className="bg-white_A700 border border-blue_50_01 border-solid sm:flex-col flex-row gap-[38px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-start mt-[31px] p-5 rounded-[12px] self-stretch w-auto md:w-full"
              orientation="horizontal"
            >
              {loghistoryCardPropList.map((props, index) => (
                <React.Fragment key={`LoghistoryCard${index}`}>
                  <LoghistoryCard
                    className="flex flex-col items-start justify-start w-[198px] sm:w-full"
                    {...props}
                  />
                  {index < loghistoryCardPropList.length - 1 && (
                    <Line className="self-center h-[102px] bg-blue_50_01 w-px" />
                  )}
                </React.Fragment>
              ))}
            </List>
            <div className="flex sm:flex-col flex-row gap-[7px] items-start justify-start md:ml-[0] ml-[196px] mt-[38px] w-[47%] md:w-full">
              <div className="flex flex-col justify-start mb-[17px] w-[86%] sm:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end ml-auto w-[90%] md:w-full">
                  <div className="bg-light_blue_800 h-[35px] sm:mt-0 mt-[93px] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] mb-[41px] ml-1 sm:ml-[0] sm:mt-0 mt-[52px] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] mb-[93px] sm:ml-[0] ml-[97px] rounded-[17px] w-[35px]"></div>
                  <Img
                    src="images/img_arrow1.svg"
                    className="h-px sm:mt-0 mt-4 w-auto"
                    alt="arrowOne"
                  />
                  <div className="md:h-32 sm:h-[123px] h-[53px] mb-[70px] sm:mt-0 mt-[5px] relative w-1/4 sm:w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-row gap-6 items-start justify-between w-full">
                        <div className="bg-light_blue_800 h-[35px] mb-[18px] rounded-[17px] w-[35px]"></div>
                        <div className="bg-light_blue_800 h-[35px] mt-[18px] rounded-[17px] w-[35px]"></div>
                      </div>
                    </div>
                    <Img
                      src="images/img_trash.svg"
                      className="absolute h-[11px] inset-x-[0] mx-auto top-[34%] w-auto"
                      alt="trash"
                    />
                  </div>
                  <div className="bg-light_blue_800 h-[35px] mb-[35px] ml-3 sm:ml-[0] sm:mt-0 mt-[58px] rounded-[17px] w-[35px]"></div>
                </div>
                <div className="bg-light_blue_800 h-[35px] md:ml-[0] ml-[17px] mr-[367px] mt-[9px] rounded-[17px] w-[35px]"></div>
                <div className="flex flex-col gap-[15px] items-start justify-start mt-3.5 w-[10%] md:w-full">
                  <div className="bg-light_blue_800 h-[35px] ml-1 md:ml-[0] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] rounded-[17px] w-[35px]"></div>
                </div>
              </div>
              <div className="flex flex-col justify-start sm:mt-0 mt-[108px] w-[13%] sm:w-full">
                <div className="bg-light_blue_800 h-[35px] mr-[27px] rounded-[17px] w-[35px]"></div>
                <div className="bg-light_blue_800 h-[35px] md:ml-[0] ml-[21px] mr-1.5 mt-3 rounded-[17px] w-[35px]"></div>
                <div className="flex flex-col gap-3.5 items-center justify-start md:ml-[0] ml-[27px] mt-3.5 w-[57%] md:w-full">
                  <div className="bg-light_blue_800 h-[35px] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] rounded-[17px] w-[35px]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[213px] w-[44%] md:w-full">
              <div className="bg-light_blue_800 h-[35px] mb-1.5 rounded-[17px] w-[35px]"></div>
              <div className="bg-light_blue_800 h-[35px] mt-1.5 rounded-[17px] w-[35px]"></div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[231px] mt-1.5 w-2/5"
              orientation="horizontal"
            >
              <div className="flex flex-col justify-start w-full">
                <div className="bg-light_blue_800 h-[35px] mr-[174px] rounded-[17px] w-[35px]"></div>
                <div className="flex flex-row items-start justify-end ml-auto w-[87%] md:w-full">
                  <div className="bg-light_blue_800 h-[35px] mb-[67px] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] mb-8 ml-[9px] mt-[35px] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] mb-2.5 ml-3.5 mt-[57px] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] ml-[17px] mt-[67px] rounded-[17px] w-[35px]"></div>
                </div>
              </div>
              <div className="flex flex-col justify-start w-full">
                <div className="bg-light_blue_800 h-[35px] md:ml-[0] ml-[162px] rounded-[17px] w-[35px]"></div>
                <div className="flex flex-row items-start justify-start mr-7 mt-[5px] w-[86%] md:w-full">
                  <div className="bg-light_blue_800 h-[35px] mt-[69px] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] mb-[15px] ml-[17px] mt-[54px] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] ml-2 my-[34px] rounded-[17px] w-[35px]"></div>
                  <div className="bg-light_blue_800 h-[35px] mb-[69px] ml-1 rounded-[17px] w-[35px]"></div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoghistoryPage;
