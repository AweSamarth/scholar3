export const abi = [
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "theAddress",
        "type": "address"
      }
    ],
    "name": "ViewedLmao",
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
    "stateMutability": "nonpayable",
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
export const RESEARCH_CONTRACT_ADDRESS="0xA81F6E414C18494BeeB87ec9DEf27cD2497d5927"

