// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Presale is Ownable {
    IERC20 public token;
    uint256 public rate; // rate in tokens per ether
    uint256 public weiRaised;

    constructor(uint256 _rate, address _wallet, IERC20 _token) Ownable(msg.sender) {
        require(_rate > 0, "Rate is 0");
        require(_wallet != address(0), "Wallet is the zero address");
        require(address(_token) != address(0), "Token is the zero address");

        rate = _rate;
        token = _token;
    }

    receive() external payable {
        buyTokens();
    }

    function buyTokens() public payable {
        uint256 weiAmount = msg.value;
        uint256 tokens = weiAmount * rate;
        weiRaised += weiAmount;

        token.transfer(msg.sender, tokens);
        emit TokensPurchased(msg.sender, weiAmount, tokens);

        payable(owner()).transfer(weiAmount);
    }

    event TokensPurchased(address indexed purchaser, uint256 value, uint256 amount);

    function setRate(uint256 newRate) external onlyOwner {
        rate = newRate;
    }
}
