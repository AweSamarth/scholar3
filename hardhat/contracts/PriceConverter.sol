// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {


  // function getPrice(AggregatorV3Interface priceFeed)
  //   internal
  //   view
  //   returns (uint256)
  // {
  //   (, int256 answer, , , ) = priceFeed.latestRoundData();
  //   // ETH/USD rate in 18 digit
  //   return uint256(answer * 10000000000);
  // }
  function getPrice(AggregatorV3Interface priceFeed) internal view returns (uint) {
    (, int price,,,) = priceFeed.latestRoundData();
    uint adjust_price = uint(price) * 1e10;
    uint usd = 1*1e18;
    uint rate = (usd * 1e18) / adjust_price;
    return rate;
    }

  // 1000000000
  // call it get fiatConversionRate, since it assumes something about decimals
  // It wouldn't work for every aggregator



  function getConversionRate(uint256 usdAmount, AggregatorV3Interface priceFeed)
    internal
    view
    returns (uint256)
  {
    uint256 usdPrice = getPrice(priceFeed);
    uint256 usdAmountIntEth = (usdPrice * usdAmount);
    // the actual USD/ETH conversation rate, after adjusting the extra 0s.
    return usdAmountIntEth;
  }
}