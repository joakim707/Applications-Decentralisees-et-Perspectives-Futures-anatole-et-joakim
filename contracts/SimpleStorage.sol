// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public value;

    constructor() {
        value = 100; // Valeur initiale
    }

    function setValue(uint256 _newValue) public {
        value = _newValue;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
