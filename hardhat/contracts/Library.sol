//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./PriceConverter.sol";


error Incorrect__EthAmount();


contract Library{
    AggregatorV3Interface private s_priceFeed;

    address [] allAuthors;

    constructor() {
        s_priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
    }

    using PriceConverter for uint256;

    event ProfileCreated(address indexed theAddress, string theName);
    event BookUploaded(address indexed theAddress, string bookCid );

    struct Author{
        string name;
        uint256 joinDate;
        string[] bookCidArray;
    }

    struct Book{
        address theAddress;
        string title;
        string description;
        uint256 uploadDate;
        string bookCid;
        string coverCid;
        uint256 priceInEth;

    }

    mapping (address=>Author) authorMapping;
    mapping (string=>Book) bookMapping;


    function newAuthor(string memory theName) public {
        authorMapping[msg.sender].name= theName;
        authorMapping[msg.sender].joinDate= block.timestamp;
        allAuthors.push(msg.sender);
        emit ProfileCreated(msg.sender, theName);
    }

    function viewAuthor(address  theAddress) public view returns(Author memory){
        return authorMapping[theAddress];
    }

    function addBook (string memory _title, string memory cid, string memory cover, uint256 thePrice, string memory theDescription) public {
        uint256 _ethPrice = thePrice.getConversionRate(s_priceFeed);
        Book memory temp = Book({title:_title, uploadDate:block.timestamp, bookCid:cid, theAddress: msg.sender, coverCid:cover, priceInEth:_ethPrice, description:theDescription });
        authorMapping[msg.sender].bookCidArray.push(cid);
        bookMapping[cid] = temp;
        emit BookUploaded(msg.sender, cid);

    }
    function viewBook(string memory cid) public view returns(Book memory){
        return bookMapping[cid];
    }

    function viewAuthorBooks(address theAddress) public view returns(string[] memory){
        return authorMapping[theAddress].bookCidArray;
    }

    function getTime() public view returns(uint256){
        return block.timestamp;
    }

    function ethPriceReturner(uint256 somevalue) public view returns(uint256){
        return somevalue.getConversionRate(s_priceFeed);
    }

    function buyBook(string memory theCid, uint256 cost) public payable returns(string memory cidLelo){

        address payable authorAddress = payable(bookMapping[theCid].theAddress);
        if(msg.value<cost){
            revert Incorrect__EthAmount();
        }
        (bool sent, ) = authorAddress.call{value:cost}("");
        require(sent, "correct amount of ether not sent");

        return theCid;


    }
        function getPriceFeed() public view returns (AggregatorV3Interface) {
        return s_priceFeed;
    }

    function viewAllAuthors () public view returns (address [] memory){
        return allAuthors;
    }

    receive() external payable{}
    fallback() external payable{}





}

