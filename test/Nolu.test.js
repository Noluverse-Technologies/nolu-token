const { ethers, upgrades } = require('hardhat');

let NoluV1;
let noluv1;

describe('MyToken', function () {
  beforeEach(async function () {
    NoluV1 = await ethers.getContractFactory('MyTokenV1');
    noluv1 = await MyTokenV1.deploy();
    noluv1.deployed();
  });
});