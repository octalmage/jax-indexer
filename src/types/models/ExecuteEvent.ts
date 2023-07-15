// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type ExecuteEventProps = Omit<ExecuteEvent, NonNullable<FunctionPropertyNames<ExecuteEvent>>| '_name'>;

export class ExecuteEvent implements Entity {

    constructor(
        
            id: string,
        
            blockHeight: bigint,
        
            txHash: string,
        
            contractAddress: string,
        
            result: string,
        
            senderAddress: string,
        
            method: string,
        
    ) {
        
            this.id = id;
        
            this.blockHeight = blockHeight;
        
            this.txHash = txHash;
        
            this.contractAddress = contractAddress;
        
            this.result = result;
        
            this.senderAddress = senderAddress;
        
            this.method = method;
        
    }


    public id: string;

    public blockHeight: bigint;

    public txHash: string;

    public contractAddress: string;

    public result: string;

    public senderAddress: string;

    public method: string;


    get _name(): string {
        return 'ExecuteEvent';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ExecuteEvent entity without an ID");
        await store.set('ExecuteEvent', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ExecuteEvent entity without an ID");
        await store.remove('ExecuteEvent', id.toString());
    }

    static async get(id:string): Promise<ExecuteEvent | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ExecuteEvent entity without an ID");
        const record = await store.get('ExecuteEvent', id.toString());
        if (record){
            return this.create(record as ExecuteEventProps);
        }else{
            return;
        }
    }



    static create(record: ExecuteEventProps): ExecuteEvent {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.blockHeight,
        
            record.txHash,
        
            record.contractAddress,
        
            record.result,
        
            record.senderAddress,
        
            record.method,
        );
        Object.assign(entity,record);
        return entity;
    }
}
