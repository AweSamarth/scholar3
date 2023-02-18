export const researchAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "theAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "paperCid",
        "type": "string"
      }
    ],
    "name": "PaperUploaded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "theAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "theName",
        "type": "string"
      }
    ],
    "name": "ProfileCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "cid",
        "type": "string"
      }
    ],
    "name": "addPaper",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "cid",
        "type": "string"
      }
    ],
    "name": "cidToPaper",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "theAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "uploadDate",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "paperCid",
            "type": "string"
          }
        ],
        "internalType": "struct Research.ResearchPaper",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "theName",
        "type": "string"
      }
    ],
    "name": "newResearcher",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "viewAllResearchers",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "theAddress",
        "type": "address"
      }
    ],
    "name": "viewOnesPapers",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "theAddress",
        "type": "address"
      }
    ],
    "name": "viewResearcher",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "joinDate",
            "type": "uint256"
          },
          {
            "internalType": "string[]",
            "name": "paperCidArray",
            "type": "string[]"
          }
        ],
        "internalType": "struct Research.Researcher",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
export const RESEARCH_CONTRACT_ADDRESS="0x42D9594f0252EBb3Bd8dBC087f8A59f0506E9f63"

export const LIBRARY_CONTRACT_ADDRESS="0x401BD2C77B851777d76CF398048F2427ad36c404"

export const libraryAbi =[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "Incorrect__EthAmount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "theAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bookCid",
        "type": "string"
      }
    ],
    "name": "BookUploaded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "theAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "theName",
        "type": "string"
      }
    ],
    "name": "ProfileCreated",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "cid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "cover",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "thePrice",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "theDescription",
        "type": "string"
      }
    ],
    "name": "addBook",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "theCid",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "cost",
        "type": "uint256"
      }
    ],
    "name": "buyBook",
    "outputs": [
      {
        "internalType": "string",
        "name": "cidLelo",
        "type": "string"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "somevalue",
        "type": "uint256"
      }
    ],
    "name": "ethPriceReturner",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPriceFeed",
    "outputs": [
      {
        "internalType": "contract AggregatorV3Interface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "theName",
        "type": "string"
      }
    ],
    "name": "newAuthor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "viewAllAuthors",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "theAddress",
        "type": "address"
      }
    ],
    "name": "viewAuthor",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "joinDate",
            "type": "uint256"
          },
          {
            "internalType": "string[]",
            "name": "bookCidArray",
            "type": "string[]"
          }
        ],
        "internalType": "struct Library.Author",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "theAddress",
        "type": "address"
      }
    ],
    "name": "viewAuthorBooks",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "cid",
        "type": "string"
      }
    ],
    "name": "viewBook",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "theAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "uploadDate",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "bookCid",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "coverCid",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "priceInEth",
            "type": "uint256"
          }
        ],
        "internalType": "struct Library.Book",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]
