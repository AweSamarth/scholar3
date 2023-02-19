import React from "react";
import Image from "next/image";
export default function ResearchCard(props) {
  return (
    <div className="flex flex-row mt-[5%] ml-[24.8%]">
      <div className="flex flex-row flex-wrap ">
        <div className="column">
          <div className=" h-fit w-[100px]">gi
            <Image width={200} height={100} src="/undraw avtaar.png" className="h-[100px]"></Image>
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="bg-[#808080] h-[100px] w-[700px] pl-[20px] rounded-tr-lg">
            <h2 className=" pl-[15px] text-[35px] font-Michroma">{props.title}</h2>
            <p className=" pl-[20px] font-Inconsolata">{`Author:- ${props.researcherName}`}</p>
            <p className="flex justify-end pr-[3px] font-Inconsolata">{`D.O.P: ${props.dop}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
