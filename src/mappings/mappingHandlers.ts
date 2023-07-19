import { Contract } from "../types";
import {
  CosmosMessage,
} from "@subql/types-cosmos";

// Store contract code on deploy.
export async function handleStoreCode(msg: CosmosMessage): Promise<void> {
  // Y29udHJhY3RfYWRkcmVzcw== == "contract_address"
  const createContractEvent = msg.tx.tx.events[4].attributes.find(attr => attr.key === 'Y29udHJhY3RfYWRkcmVzcw==')?.value;
  if (!createContractEvent) {
    return;
  }

  const contractAddressBuffer = Buffer.from(createContractEvent, 'base64')
  const contractRecord = Contract.create({
    id: contractAddressBuffer.toString(),
    blockHeight: BigInt(msg.block.block.header.height),
    txHash: msg.tx.hash,
    creator: msg.msg.decodedMsg.creator,
    admin: msg.msg.decodedMsg.admin,
    contract: contractAddressBuffer.toString(),
    code: msg.msg.decodedMsg.code,
  });

  await contractRecord.save();
}

// Update contract code when updated.
export async function handleUpdateContract(msg: CosmosMessage): Promise<void> {
  const contractRecord = await Contract.get(msg.msg.decodedMsg.contract)

  if (!contractRecord) {
    return;
  }

  contractRecord.code = msg.msg.decodedMsg.code;
  await contractRecord.save();
}

// Update contract admin when updated.
export async function handleUpdateContractAdmin(msg: CosmosMessage): Promise<void> {
  const contractRecord = await Contract.get(msg.msg.decodedMsg.contract)

  if (!contractRecord) {
    return;
  }

  contractRecord.admin = msg.msg.decodedMsg.admin;
  await contractRecord.save();
}