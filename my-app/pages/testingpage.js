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
    <div></div>
  );
}
