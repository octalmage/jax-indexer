import { ExecuteEvent, Message } from "../types";
import {
  CosmosEvent,
  CosmosBlock,
  CosmosMessage,
  CosmosTransaction,
} from "@subql/types-cosmos";

/*
export async function handleBlock(block: CosmosBlock): Promise<void> {
  // If you want to index each block in Cosmos (Juno), you could do that here
}

export async function handleTransaction(tx: CosmosTransaction): Promise<void> {
  // If you want to index each transaction in Cosmos (Juno), you could do that here
  const transactionRecord = Transaction.create({
    id: tx.hash,
    blockHeight: BigInt(tx.block.block.header.height),
    timestamp: tx.block.block.header.time,
  });
  await transactionRecord.save();
}
*/

// export async function handleMessage(msg: CosmosMessage): Promise<void> {
//   const messageRecord = Message.create({
//     id: `${msg.tx.hash}-${msg.idx}`,
//     blockHeight: BigInt(msg.block.block.header.height),
//     txHash: msg.tx.hash,
//     sender: msg.msg.decodedMsg.sender,
//     contract: msg.msg.decodedMsg.contract,
//   });
//   await messageRecord.save();
// }

export async function handleEvent(event: CosmosEvent): Promise<void> {
  const addressAttr = event.event.attributes.find(attr => attr.key === 'contract_address')
  const resultAttr = event.event.attributes.find(attr => attr.key === 'result')
  const methodAttr = event.event.attributes.find(attr => attr.key === 'method')
  const senderAttr = event.event.attributes.find(attr => attr.key === 'sender')
  if (typeof addressAttr !== 'undefined' && typeof resultAttr !== 'undefined' && typeof senderAttr !== 'undefined' && typeof methodAttr !== 'undefined') {
    const eventRecord = ExecuteEvent.create({
      id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
      blockHeight: BigInt(event.block.block.header.height),
      txHash: event.tx.hash,
      contractAddress: addressAttr.value,
      result: resultAttr.value,
      senderAddress: senderAttr.value,
      method: methodAttr.value,
    });
  
    await eventRecord.save();
  }

}
