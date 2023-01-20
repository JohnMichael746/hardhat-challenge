// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MMTX is ERC20 {
    constructor() ERC20("MojaMetals", "MMTX") {
        _mint(msg.sender, 1500000000 * 10**uint256(decimals()));
    }
}
