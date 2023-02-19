import React from "react";
import Image from "next/image";
export default function ResearchCard(props) {
  return (
    <div className="card-el hover:cursor-pointer">
      <div className="auth-img">
      <Image className="se-image" href = "#" width={100} height={215} alt="some image" src ="/undrawPic.png"></Image>
      </div>
      <div className="card-content">
        <h2 className="title-el">{props.title}</h2>
        <p className="auth-el">{props.researcherName}</p>
        <p className="dop-el">{props.dop}</p>
      </div>
    </div>
  );
}
