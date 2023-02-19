//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Research{

    string [] allResearchCids;

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

            }
    function viewResearcher(address theAddress) public view returns(Researcher memory){
        return profileMapping[theAddress];
    }


    function addPaper(string memory _title, string memory cid) public{
        ResearchPaper memory temp = ResearchPaper({title:_title, uploadDate:block.timestamp, paperCid:cid, theAddress:msg.sender });
        profileMapping[msg.sender].paperCidArray.push(cid);
        paperMapping[cid] = temp;
        allResearchCids.push(cid);
    }

    function viewOnesPapers(address theAddress) public view returns(string[] memory) {
        return profileMapping[theAddress].paperCidArray;
    }




    function viewAllResearchCids() public view returns(string [] memory){
        return allResearchCids;
    }

    
}