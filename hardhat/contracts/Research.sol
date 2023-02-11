//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Research{

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



    function newResearcher(string memory theName) public{
        bytes memory temp = bytes(theName);
        require(temp.length>0);

        profileMapping[msg.sender].name=theName;
        profileMapping[msg.sender].joinDate= block.timestamp;

    }
    function viewResearcher() public view returns(Researcher memory){
        return profileMapping[msg.sender];
    }

    function addPaper(string memory _title, string memory cid) public{
        ResearchPaper memory temp = ResearchPaper({title:_title, uploadDate:block.timestamp, paperCid:cid, theAddress:msg.sender });
        profileMapping[msg.sender].paperCidArray.push(cid);
        paperMapping[cid] = temp;

    }

    function viewOnesPapers() public view returns(string[] memory) {
        return profileMapping[msg.sender].paperCidArray;
    }


    function getTime() public view returns(uint256) {
        return block.timestamp;
    }

    
}