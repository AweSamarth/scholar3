import React from "react";
import Image from "next/image";
export default function ResearchCard(props) {
  return (
    <div className="card-el">
      <div className="auth-img">
      <Image className="se-image" href = "#" width={100} height={215} src ="/undrawPic.png"></Image>
      </div>
      <div className="card-content">
        <h2 className="title-el">{props.title}</h2>
        <p className="auth-el">{props.authorName}</p>
        <p className="dop-el">{props.dop}</p>
      </div>
    </div>
  );
}
