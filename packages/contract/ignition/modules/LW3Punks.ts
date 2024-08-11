import * as dotenv from "dotenv";
dotenv.config();

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('LW3PunksModule', (m) => {
   const metadataURL = `ipfs://${process.env.IPFS_CID_METADATA}`

   const lW3Punks = m.contract('LW3Punks', [metadataURL])

   return { lW3Punks }
});
