import { MediaRenderer } from "@thirdweb-dev/react";

export default function Component() {
  return (
    <div className="h-12">
    <MediaRenderer
      className="border-2 w-[30em] h-min"
      src="ipfs://QmWywcZkAQsUDxLjH5pezDrPgiEKRG8pKoKPMgTtXx8k1X/Time%20Table.png"
      alt="my time table"
      height=""
      width=""  
    />
    </div>
  );
};