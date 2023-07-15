import { Game } from "../types";
import {
  CosmosEvent,
  CosmosTransaction,
} from "@subql/types-cosmos";

export async function handleEvent(event: CosmosEvent): Promise<void> {
  logger.warn("GAME FOUND");
  const resultAttr = event.event.attributes.find(attr => attr.key === 'gameResult')
  const playerAttr = event.event.attributes.find(attr => attr.key === 'player')
  if (typeof resultAttr !== 'undefined' && typeof playerAttr !== 'undefined') {
    logger.warn("SAVING GAME");
    const parsedEvent = JSON.parse(resultAttr.value);
    const gameRecord = Game.create({
      id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
      blockHeight: BigInt(event.block.block.header.height),
      txHash: event.tx.hash,
      player: playerAttr.value,
      guessedColor: parsedEvent.colorGuess,
      winningColor: parsedEvent.winningColor,
      result: parsedEvent.result,
    });
  
    await gameRecord.save();
  }

}
