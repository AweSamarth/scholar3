//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Research{

    address [] public allResearchers;

    event ProfileCreated(address indexed theAddress, string theName);
    event PaperUploaded(address indexed theAddress, string  paperCid);


    struct Researcher{
        string name;
        uint256 joinDate;
        string[] paperCidArray;

    }

    struct ResearchPaper{
        address theAddress;
        string title;
        uint256 uploadDate;
        string paperCid;
    }

    mapping  (address=>Researcher) profileMapping;
    mapping  (string=>ResearchPaper) paperMapping;

    function cidToPaper(string memory cid) public view returns(ResearchPaper memory){
        return paperMapping[cid];
        
    }


    function newResearcher(string memory theName) public{
        profileMapping[msg.sender].name=theName;
        profileMapping[msg.sender].joinDate= block.timestamp;
        allResearchers.push(msg.sender);
        emit ProfileCreated(msg.sender, theName);
    }
    function viewResearcher(address theAddress) public view returns(Researcher memory){
        return profileMapping[theAddress];
    }


    function addPaper(string memory _title, string memory cid) public{
        ResearchPaper memory temp = ResearchPaper({title:_title, uploadDate:block.timestamp, paperCid:cid, theAddress:msg.sender });
        profileMapping[msg.sender].paperCidArray.push(cid);
        paperMapping[cid] = temp;
        emit PaperUploaded(msg.sender, cid);

    }

    function viewOnesPapers(address theAddress) public view returns(string[] memory) {
        return profileMapping[theAddress].paperCidArray;
    }


    function getTime() public view returns(uint256) {
        return block.timestamp;
    }

    
}