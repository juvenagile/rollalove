// Matchmaking.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Matchmaking {
    address public owner;
    uint public stakingAmount;

    struct UserMetadata{
        string userName;
        uint256 birthDayUnix;
        string description;
        string urlPic;
    }

    mapping (address => UserMetadata) profileMetadata;

    mapping(address user => mapping (address personWhoMatch => bool isMatch)) private profiles;
    //profiles[address][address] = bool,
    address[] private listPeople;

    event MatchCreated(address indexed user1, address indexed user2);

    function registerUser(
        address userWallet,
        string memory name,
        uint256 birthDay,
        string memory description,
        string memory pic
    ) public {
        profileMetadata[userWallet] = UserMetadata(
        name,
        birthDay,
        description,
        pic
        );
        listPeople.push(userWallet);
    }

    function seeProfileFromList(uint256 index) public view returns(UserMetadata memory){
        return profileMetadata[listPeople[index]];
    }

    function setMatch(address _user1, address _user2, bool _isMatch) external returns(bool){
        profiles[_user1][_user2] = _isMatch;

        if (profiles[_user1][_user2] && profiles[_user2][_user1]){
            emit MatchCreated(_user1, _user2);
            return true;
        } else {return false;}
    }
}


