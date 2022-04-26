const { ethers, upgrades } = require("hardhat");

async function main() {
    const Nolu = await ethers.getContractFactory("NoluToken");
    console.log("Deploying Nolu...");
    const nolu = await upgrades.deployProxy(Nolu, ["0xb7Bf4fA1662530eF0B701eA7be615132DC4d96A3"], {
        kind: "uups",
    });
    await nolu.deployed();
    console.log("Nolu deployed to:", nolu.address);
}

main();