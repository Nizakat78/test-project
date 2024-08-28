// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Custom Library for Tokenomics and Taxation
library ROBOkoinTokenomics {
    // Total token supply 
    uint256 public constant TOTAL_SUPPLY = 500000000000000000; // 500 billion tokens

    // Tax rate on token sales
    uint256 public constant TAX_RATE = 25; // 2.5% tax

    // Calculate tax amount for a given transfer
    function calculateTax(uint256 amount) public pure returns (uint256) {
        return amount * TAX_RATE / 1000;
    }

    // Calculate net transfer amount after applying tax
    function calculateNetTransfer(uint256 amount) public pure returns (uint256) {
        return amount - calculateTax(amount);
    }
}

