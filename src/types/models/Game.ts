// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type GameProps = Omit<Game, NonNullable<FunctionPropertyNames<Game>>| '_name'>;

export class Game implements Entity {

    constructor(
        
            id: string,
        
            player: string,
        
            guessedColor: string,
        
            winningColor: string,
        
            result: string,
        
            blockHeight: bigint,
        
            timestamp: bigint,
        
            txHash: string,
        
    ) {
        
            this.id = id;
        
            this.player = player;
        
            this.guessedColor = guessedColor;
        
            this.winningColor = winningColor;
        
            this.result = result;
        
            this.blockHeight = blockHeight;
        
            this.timestamp = timestamp;
        
            this.txHash = txHash;
        
    }


    public id: string;

    public player: string;

    public guessedColor: string;

    public winningColor: string;

    public result: string;

    public blockHeight: bigint;

    public timestamp: bigint;

    public txHash: string;


    get _name(): string {
        return 'Game';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Game entity without an ID");
        await store.set('Game', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Game entity without an ID");
        await store.remove('Game', id.toString());
    }

    static async get(id:string): Promise<Game | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Game entity without an ID");
        const record = await store.get('Game', id.toString());
        if (record){
            return this.create(record as GameProps);
        }else{
            return;
        }
    }



    static create(record: GameProps): Game {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.player,
        
            record.guessedColor,
        
            record.winningColor,
        
            record.result,
        
            record.blockHeight,
        
            record.timestamp,
        
            record.txHash,
        );
        Object.assign(entity,record);
        return entity;
    }
}
