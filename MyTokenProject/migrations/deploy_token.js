const MyToken = artifacts.require("MyToken");
const Presale = artifacts.require("Presale");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(MyToken);
  const myTokenInstance = await MyToken.deployed();

  await deployer.deploy(Presale, myTokenInstance.address);
  const presaleInstance = await Presale.deployed();

  console.log("MyToken address:", myTokenInstance.address);
  console.log("Presale address:", presaleInstance.address);

  // Example: setting the presale rate if needed
  // await presaleInstance.setRate(1000);

  // Check the total supply of MyToken
  const totalSupply = await myTokenInstance.totalSupply();
  console.log("Total Supply:", totalSupply.toString());

  // Check the token balance of the owner
  const ownerBalance = await myTokenInstance.balanceOf(accounts[0]);
  console.log("Owner Balance:", ownerBalance.toString());

  // Check the presale rate
  const rate = await presaleInstance.rate();
  console.log("Presale Rate:", rate.toString());
};
