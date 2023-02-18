import { useStorageUpload, useAddress } from "@thirdweb-dev/react";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { abi, libraryAbi, LIBRARY_CONTRACT_ADDRESS, RESEARCH_CONTRACT_ADDRESS } from "../../constants";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Component() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { chains, pendingChainId, switchNetwork,  } = useSwitchNetwork()
  const { chain } = useNetwork()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")

  const [disabled, setDisabled] = useState(true);

  const { mutateAsync: upload } = useStorageUpload();
  const [bookIpfsCid, setBookIpfsCid] = useState("");
  const [coverIpfsCid, setCoverIpfsCid] = useState("");
  let count =0
  const [option, setOptions] = useState({ "application/pdf": [] });

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const uris = await upload({ data: acceptedFiles });

      console.log(uris);
      if (count==0) {
        console.log("if ran")
        setBookIpfsCid(uris[0]);
        setOptions({ "image/png": [], "image/jpeg": [] });
        count++
      } else {
        setCoverIpfsCid(uris[0]);
        console.log("else ran")
        setDisabled(false);
      }
    },
    [upload]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: option,
  });

  const {config , error} = usePrepareContractWrite({
    address:LIBRARY_CONTRACT_ADDRESS,
    abi:libraryAbi,
    functionName:"addBook",
    args:[title, bookIpfsCid, coverIpfsCid, price?price:0, description]
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
  function handleChange(event) {
    setTitle(event.target.value);
  }
  function descriptionChange(event){
    setDescription(event.target.value)
  }
  function priceChange(event){
    setPrice(event.target.value)
  }
  useEffect(()=>{
    if(chain){
        if(chain.id!=5){
    switchNetwork?.(5)
        }
    }
},[chains, chain])
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
        decentralized storage protocol. Just enter your book's title, a short description, its price, add a
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

          <div className="mb-8 mt-8  flex align-middle">
            <div className="flex">
            <label htmlFor="description" className=" font-[Inter] font-light text-lg  self-center">
              Enter a short <span className=" font-bold">description</span> 
            </label>
            </div>
            <textarea
              rows={2}
              cols={40}
              name="description"
              value={description}
              className="bg-gray-500 rounded-sm ml-7 px-1"
              onChange={descriptionChange}  
            />
          </div>

          <div className="mb-8 mt-8">
            <label htmlFor="price" className=" font-[Inter] font-light text-lg">
              Enter the <span className=" font-bold">price</span> of your book in USD
            </label>
            <input
              name="price"
              type="number"
              value={price}
              className="bg-gray-500 rounded-sm ml-4 px-2 h-min w-16"
              onChange={priceChange}
              placeholder="$"
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
