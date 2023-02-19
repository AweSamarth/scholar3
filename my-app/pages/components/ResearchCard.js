import React from "react";
import Image from "next/image";
export default function ResearchCard(props) {
  console.log(props.dop.toString());
  return (
    <div className="flex flex-row mt-[4%] ml-[24.8%]">
      <div className="flex flex-row flex-wrap ">
        <div className="column">
          <div className=" h-fit w-[120px]">
            <Image width={200} height={100} src="/undraw avtaar.png" className="h-[117px]"></Image>
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="bg-[#b3b3b3] h-fit w-[700px] pl-[20px] rounded-tr-lg">
            <h2 className=" pl-[15px] text-[40px] font-Michroma font-[500]">{props.title}</h2>
            <p className=" pl-[20px] text-[22px] font-[400] font-Inconsolata">{`Author: ${props.researcherName}`}</p>
            <p className="flex justify-end pr-[3px] font-[700] font-Inconsolata">{`D.O.P: ${props.dop}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
