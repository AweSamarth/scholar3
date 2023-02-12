export const abi =[
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
export const RESEARCH_CONTRACT_ADDRESS="0x64647504033fC18fa34713e35C3b336B41E66Bb4"

