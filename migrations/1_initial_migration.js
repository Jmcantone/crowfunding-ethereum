const Contract = artifacts.require("./CrowFunding.sol");

const id = "bk";
const name = "Bike";
const description = "Fundraising to buy a bike";
const fundrisingGoal = 1000000000000000000n;


module.exports = function (deployer) {
  deployer.deploy(Contract, id, name, description, fundrisingGoal);
};


