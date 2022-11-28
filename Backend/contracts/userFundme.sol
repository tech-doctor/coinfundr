// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "./Fundme.sol";

contract NewFundme {
    FundMe[] public Funders;

    function CreateNewFundme() public {
        FundMe fundme = new FundMe();
        Funders.push(fundme);
    }
}
