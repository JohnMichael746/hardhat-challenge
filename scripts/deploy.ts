// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

let proxyContractAddress : string;
let accountAddrs : SignerWithAddress[];
let ownerAddr : SignerWithAddress;

async function main() {
  accountAddrs = await ethers.getSigners();
  ownerAddr = accountAddrs[0];
  console.log("owner address : %s", ownerAddr.address);

  // const tokenAvgPriceV3Factory = await ethers.getContractFactory("TokenAvgPriceV3", ownerAddr);
  // const smartcontract3 = await upgrades.upgradeProxy(proxyContractAddress, tokenAvgPriceV3Factory);
  // await smartcontract3.deployed(); 
  // console.log("TokenAvgPriceV3 deploy address = ", smartcontract3.address);

    
  // const tokenAvgPriceV1Factory = await ethers.getContractFactory("MOX", ownerAddr);
  // const smartcontract1 = await upgrades.deployProxy(tokenAvgPriceV1Factory, [], {initializer:'initialize'});
  // await smartcontract1.deployed();
  // console.log("MOX deploy address = ", smartcontract1.address);
  // proxyContractAddress = smartcontract1.address;


  const USD = await ethers.getContractFactory("USD");
  const vUSD = await USD.deploy();
  await vUSD.deployed();
  console.log(`USD deploy address = ${vUSD.address}`);

  const CAD = await ethers.getContractFactory("CAD");
  const vCAD = await CAD.deploy();
  await vCAD.deployed();
  console.log(`CAD deploy address = ${vCAD.address}`);

  const EUR = await ethers.getContractFactory("EUR");
  const vEUR = await EUR.deploy();
  await vEUR.deployed();
  console.log(`EUR deploy address = ${vEUR.address}`);

  const ILS = await ethers.getContractFactory("ILS");
  const vILS = await ILS.deploy();
  await vILS.deployed();
  console.log(`ILS deploy address = ${vILS.address}`);

  const JPY = await ethers.getContractFactory("JPY");
  const vJPY = await JPY.deploy();
  await vJPY.deployed();
  console.log(`JPY deploy address = ${vJPY.address}`);

  const ZAR = await ethers.getContractFactory("ZAR");
  const vZAR = await ZAR.deploy();
  await vZAR.deployed();
  console.log(`ZAR deploy address = ${vZAR.address}`);

  // const BTIX = await ethers.getContractFactory("BTIX");
  // const btiX = await BTIX.deploy();
  // await btiX.deployed();
  // console.log(`BTIX deploy address = ${btiX.address}`);

  // const MAGX = await ethers.getContractFactory("MAGX");
  // const magX = await MAGX.deploy();
  // await magX.deployed();
  // console.log(`MAGX deploy address = ${magX.address}`);

  // const MENX = await ethers.getContractFactory("MENX");
  // const menX = await MENX.deploy();
  // await menX.deployed();
  // console.log(`MENX deploy address = ${menX.address}`);

  // const MIDX = await ethers.getContractFactory("MIDX");
  // const midX = await MIDX.deploy();
  // await midX.deployed();
  // console.log(`MIDX deploy address = ${midX.address}`);

  // const MLVX = await ethers.getContractFactory("MLVX");
  // const mlvX = await MLVX.deploy();
  // await mlvX.deployed();
  // console.log(`MLVX deploy address = ${mlvX.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});