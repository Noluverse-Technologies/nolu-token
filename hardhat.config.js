require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.2",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRI_KEY],
    },
    bscTestnet: {
      url: `https://speedy-nodes-nyc.moralis.io/d4f3b65d25674eff831dfea2/bsc/testnet`,
      accounts: [process.env.PRI_KEY],
    },
    bscMainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/d4f3b65d25674eff831dfea2/bsc/mainnet`,
      accounts: [process.env.PRI_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
};