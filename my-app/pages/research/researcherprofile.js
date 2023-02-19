import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { RESEARCH_CONTRACT_ADDRESS, researchAbi } from "../../constants";
import { Contract, providers, utils, BigNumber } from "ethers";
import {
  useAccount,
  useContract,
  useNetwork,
  useProvider,
  useSigner,
  useSwitchNetwork,
} from "wagmi";

export default function Research() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(0);
  const { chain } = useNetwork();
  const { chains, error, pendingChainId, switchNetwork } = useSwitchNetwork();
  useEffect(() => {
    if (chain) {
      console.log(chain);
      if (chain.id != 5) {
        console.log("huh");
        switchNetwork?.(5);
        setState(1);
      }
    }
  }, [chains, chain]);

  const [arrayOfCards, setArrayOfCards] = useState([]);
  useEffect(() => {
    async function getAllPapers() {
      setLoading(true);
      let temparr = [];
      try {
        const allBooks = await contract.viewAllCids();
        if (allBooks.length > 0) {
          for (let i = 0; i < allBooks.length; i++) {
            const oneBook = await contract.viewBook(allBooks[i]);
            console.log(oneBook);
            //this gives an object which has the researcher's address, title of the paper, upload date and paper cid
            const libraryAuthorObj = await contract.viewAuthor(
              oneBook.theAddress

<<<<<<< HEAD
            );
            console.log(libraryAuthorObj)
            const libraryAuthorName = libraryAuthorObj.name;
            console.log(libraryAuthorName)
            const date = oneBook.uploadDate._hex;
            const title = oneBook.title;
            const id = oneBook.bookCid.slice(7);
            console.log(id);
            const obj = {
              id: id,
              title: title,
              authorName: libraryAuthorName,
              dop: date,
            };
            temparr.push(obj);
            console.log(temparr);
          }
          setArrayOfCards(temparr);
          setLoading(false);
        } else {
          console.log("No Books found");

        }
      } catch (error) {
        console.error(error);
      }
    }

    getAllPapers();
  }, [chains, chain]);

  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    address: LIBRARY_CONTRACT_ADDRESS,
    abi: libraryAbi,
    signerOrProvider: signer || provider,
  });

  const content = arrayOfCards.map((item) => {
    return (
      <Link
        href={`https://ipfs.io/ipfs/${item.id}`}
        key={item.id}
        rel="noopener noreferrer"
        target="_blank"
      >
        <LibraryCard key={item.id} {...item} />
      </Link>
    );
=======
  const [alreadyMember, setAlreadyMember] = useState(false);
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const [name, setName] = useState("");
  const readViewResearcher = useContractRead({
    address: RESEARCH_CONTRACT_ADDRESS,
    abi: researchAbi,
    functionName: "viewResearcher",
    args: [address],
  });

  

  const readOnesPapers = useContractRead({
    address: RESEARCH_CONTRACT_ADDRESS,
    abi: researchAbi,
    functionName: "viewOnesPapers",
    args: [address],
>>>>>>> bd2d3fda56f9f5db122552e9bc0d0e227f47600f
  });
  const profileClicked = async () => {
    try {
      const theAuthor = await contract.viewAuthor(address);
      const theAuthorName = theAuthor.name;
      console.log(theAuthorName);
      if (theAuthorName == "") {
        console.log("this ran");
        document.location.href = "./libraryauthornew";
      } else {
        console.log("that ran");
        document.location.href = "./libraryauthorprofile";
      }
    } catch (error) {
      console.error(error);
    }
  };

<<<<<<< HEAD
  const uploadClicked = async () => {
    try {
      const theAuthor = await contract.viewAuthor(address);
      console.log(theAuthor)
      const bookCid = theAuthor.bookCidArray;
      console.log(bookCid);
      if (theAuthor.name=="") {
        console.log("this ran");
        document.location.href = "./libraryauthornew";
      } else {
        console.log("that ran");
        document.location.href = "./librarybookupload";
      }
    } catch (error) {
      console.error(error);
    }
  };
=======

  function viewResearcher() {
    console.log(readViewResearcher);
  }


  const anarray = readOnesPapers.data
  // console.log(anarray)

  for(let i =0; i<anarray.length;i++){
    console.log(anarray[i])
  }

  function viewMyAddress() {
    console.log(address);
  }

  function nameChange(event) {
    setName(event.target.value);
  }
  function anotherChecker(){
    console.log(cidToPaper)
  }

  const newResearcherconfig = usePrepareContractWrite({
    address: RESEARCH_CONTRACT_ADDRESS,
    abi: researchAbi,
    functionName: "newResearcher",
    args: [name],
  }).config;
  const newResearcher = useContractWrite(newResearcherconfig).write;

  // console.log(contractHua);
>>>>>>> bd2d3fda56f9f5db122552e9bc0d0e227f47600f

  return (
    <>
      <Head>
        <title>Library Discovery Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="rese bg-[#2f2e41] min-h-screen">
        <div className="nav-com  border-red-500 h-min flex justify-between">
          <div className=" w-[50%]">
            <Link href="../">
              <h2 className=" mt-4 ml-4 header-el font-Michroma  self-center text-gray-100 border-blue-500 h-min">
                SCHOLAR3
              </h2>
            </Link>
          </div>
          <div className=" w-[50%] flex justify-end mt-1 mr-3">
            <div className=" flex h-min mr-2">
              <button
                className="bg-[#5a55bf] hover:bg-[#444093] text-white px-4 py-2 m-1 rounded transition-all "
                onClick={profileClicked}
              >
                My Profile
              </button>
            </div>
            <div className=" flex h-min mr-2">
              <button
                className="bg-[#5a55bf] hover:bg-[#444093] text-white px-4 py-2 m-1 rounded transition-all "
                onClick={uploadClicked}
              >
                Upload a book
              </button>
            </div>
            <div className=" mt-1">
              <ConnectButton chainStatus="none" showBalance={false} />
            </div>
          </div>
        </div>

        <div className=" text-center">
          <h2 className="lib-el font-Inconsolata tracking-wide text-[#6862e3] text-[2.5em] font-black">
            Your Previous Works
          </h2>
        </div>

        {/* Add the researcher name here */}
        <div className="text-center mt-[2%]">
          <h2 className="font-Inter tracking-wide text-[#aeadb5] text-[2.9em] font-black">Greetings, Dr. Sam !</h2>
        </div>
        
        {/* Add all the past works here */}

        <div className="text-left mt-[5%] pl-[6%]">
          <h2 className="font-Inconsolata tracking-wide text-[#aeadb5] text-[2.5em] font-black">Past works ⬇️</h2>
        </div>


        {loading ? (
          <div className="flex justify-center mt-48" >
          <TailSpin
            height="80"
            width="80"
            color="#c3bfc4"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          </div>
        ) : (
          <div  className="cards-grids mt-24">{content}</div>
        )}
      </main>
    </>
  );
}
