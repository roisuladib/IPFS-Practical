import * as dotenv from "dotenv";
dotenv.config();

import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const providerApiKey = process.env.ALCHEMY_API_KEY
const deployerPrivateKey = process.env.DEPLOYER_PRIVATE_KEY!
const etherscanApiKey = process.env.ETHERSCAN_API_KEY

const config: HardhatUserConfig = {
   solidity: {
      version: '0.8.24',
      settings: {
         optimizer: {
            enabled: true,
            // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
            runs: 200
         }
      }
   },
   defaultNetwork: 'localhost',
   networks: {
      ethSepolia: {
         url: `https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`,
         accounts: [deployerPrivateKey],
       },
   },
   etherscan: {
      apiKey: etherscanApiKey,
   },
   sourcify: {
      enabled: true
   }
};

export default config;
