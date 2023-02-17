import { useStorageUpload, useAddress } from "@thirdweb-dev/react";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useAccount } from "wagmi";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { abi, RESEARCH_CONTRACT_ADDRESS } from "../constants";
import { watchContractEvent } from "@wagmi/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Component() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const [title, setTitle] = useState("");
  const [checker, setChecker] = useState("");
  const [doesExist, setDoesExist] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const { mutateAsync: upload } = useStorageUpload();
  const [bookIpfsCid, setBookIpfsCid] = useState("");
  const [coverIpfsCid, setCoverIpfsCid] = useState("");

  const [option, setOptions] = useState({ "application/pdf": [] });

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const uris = await upload({ data: acceptedFiles });

      console.log(uris);
      if (bookIpfsCid == "") {
        setBookIpfsCid(uris[0]);
        setOptions({ "image/png": [], "image/jpeg": [] });
      } else {
        setCoverIpfsCid(uris[0]);
        setDisabled(false);
      }
    },
    [upload]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: option,
  });

  // const {config, error} = usePrepareContractWrite({
  //   address:RESEARCH_CONTRACT_ADDRESS,
  //   abi: abi,
  //   functionName:"addPaper",
  //   args:[title, bookIpfsCid]
  // })

  // const {write} = useContractWrite(config)

  function dragevent() {
    const x = document.getElementById("draggist");
    x.classList.add("itisdragged");
  }
  function undragevent() {
    const x = document.getElementById("draggist");
    x.classList.remove("itisdragged");
  }
  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="flex-col  border-white h-full min-h-screen bg-[#161616] text-white py-4 px-80 ">
      <div className="font-[Poppins] font-bold  text-[2.1em] w-[100%] text-center text-[#F8F8F8]  mb-1">
        Publish A Book
      </div>
      <div className="font-[Inter] font-light  border-red-500 text-center text-[1.3em] text-[#b1b1b1] mb-[-4px]">
        Upload your book to IPFS.
      </div>
      <div className="font-[Inter] font-light  text-center text-[1.3em] text-[#b1b1b1]  mb-6">
        With ZERO hassle.{" "}
      </div>
      <div className="font-[Inter] font-light text-[1.2em] text-white mb-4 ">
        This portal allows you to upload your books to
        <span className=" text-[#4b9ea1]"> IPFS:</span> A free, permanent and
        decentralized storage protocol. Just enter your book's title, add a
        cover and upload it. We'll take care of the rest
      </div>
      {!address ? (
        <div>
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
          />
        </div>
      ) : (
        <div>
          <div>
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          </div>

          <div className="mb-8 mt-8">
            <label htmlFor="title" className=" font-[Inter] font-light text-lg">
              Enter the <span className=" font-bold">title</span> of your book
            </label>

            <input
              name="title"
              type="text"
              value={title}
              className="bg-gray-500 rounded-sm ml-4 h-7"
              onChange={handleChange}
            />
          </div>

          <div className=" border-red-500 p-2 flex flex-col align-middle">
            <div
              id="draggist"
              {...getRootProps()}
              className={
                bookIpfsCid == ""
                  ? "dragger w-[70%] self-center py-52 text-center border-4 border-white bg-[#222222] hover:bg-[#272727]  transition duration-150 hover:cursor-pointer"
                  : "dragger w-[70%] self-center py-52 text-center border-4 border-white bg-[#275355] hover:bg-[#3a7a7d]  transition duration-150 hover:cursor-pointer"
              }
              onDragEnter={dragevent}
              onDragLeave={undragevent}
            >
              <input {...getInputProps()} className=" border-red" />
              <p className="text-white font-[Inter]">
                {bookIpfsCid == ""
                  ? "Upload your book here"
                  : "Great! Now upload a cover image"}
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
                onClick={() => write()}
                className="bg-[#4b9ea1] w-32 rounded-sm p-3 disabled:cursor-not-allowed disabled:bg-[#7c7c7c] disabled:opacity-30 transition-all"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
