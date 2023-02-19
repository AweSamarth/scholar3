import { useStorageUpload, useAddress } from "@thirdweb-dev/react";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useAccount } from "wagmi";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { abi, researchAbi, RESEARCH_CONTRACT_ADDRESS } from "../../constants";
import { watchContractEvent } from '@wagmi/core'


export default function Component() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const [title, setTitle] = useState("");
  const { mutateAsync: upload } = useStorageUpload();
  const [checker, setChecker] = useState("");
  const [doesExist, setDoesExist] = useState(0);
  const [disabled, setDisabled] = useState(true)
  const [ipfsCid, setIpfsCid] = useState("")



  const onDrop = useCallback(
    async (acceptedFiles) => {
      const uris = await upload({ data: acceptedFiles });
      console.log(uris);
      setIpfsCid(uris[0]);
      setDisabled(false)
    },
    [upload]
  );
  
  const {config, error} = usePrepareContractWrite({
    address:RESEARCH_CONTRACT_ADDRESS,
    abi: researchAbi,
    functionName:"addPaper",
    args:[title, ipfsCid]
  })

  const {write} = useContractWrite(config)

  function dragevent() {
    const x = document.getElementById("draggist");
    x.classList.add("itisdragged");
  }
  function undragevent() {
    const x = document.getElementById("draggist");
    x.classList.remove("itisdragged");
  }
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept:{"application/pdf":[]} });


  function handleChange(event) {
    setTitle(event.target.value);

  }


  return (
    <div className=" flex-col border-white h-full  min-h-screen bg-[#161616] text-white py-4 px-72">
      <div className="font-[Poppins] font-bold  text-[2.1em] w-[100%] text-center text-[#F8F8F8]  mb-1">
        Publish A Paper
      </div>
      <div className="font-[Inter] font-light  text-center text-[1.3em] text-[#b1b1b1] mb-[-4px]">
        Upload your research paper to IPFS.
      </div>
      <div className="font-[Inter] font-light  text-center text-[1.3em] text-[#b1b1b1]  mb-6">
        With ZERO hassle.{" "}
      </div>
      <div className="font-[Inter] font-light text-[1.2em] text-white mb-4 ">
        This portal allows you to upload your research paper to
        <span className=" text-[#4b9ea1]"> IPFS:</span> A free, permanent and
        decentralized storage protocol. Just enter your paper's title and upload
        it. We'll take care of the rest
      </div>

      <div className="mb-8 mt-8 ">
        <label htmlFor="title" className=" font-[Inter] font-light text-lg">
          Enter the <span className=" font-bold">title</span> of you research paper
        </label>
       
        <input
          name="title"
          type="text"
          value={title}
          className="bg-gray-500 rounded-sm ml-4 h-7"
          onChange={handleChange}
        />
      </div>
      <div className="flex w-[100%]  justify-center">
      <div
        id="draggist"
        {...getRootProps()}
        className="dragger py-52 px-20 text-center border-4 border-white bg-[#222222] hover:bg-[#272727]  transition duration-150 hover:cursor-pointer"
        onDragEnter={dragevent}
        onDragLeave={undragevent}
      >
        <input {...getInputProps()} className=" border-red" />
        <p className="text-white font-[Inter]">
          Click to select a paper to upload
        </p>
        <p className="text-white font-[Inter]">
          (dragging and dropping works as well)
        </p>
      </div>
      </div>
      <div className=" flex border-blue-500 mt-4">
        <div className=" focus:outline-none w-[100%] flex justify-center  border-red-400">
          <button
            disabled={disabled}
            onClick = {()=>write()}
            className="bg-[#4b9ea1] w-32 rounded-sm p-3 disabled:cursor-not-allowed disabled:bg-[#7c7c7c] disabled:opacity-30 transition-all"
          >
            Publish
          </button>
          
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
