// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type ContractProps = Omit<Contract, NonNullable<FunctionPropertyNames<Contract>>| '_name'>;

export class Contract implements Entity {

    constructor(
        
            id: string,
        
            creator: string,
        
            admin: string,
        
            contract: string,
        
            code: string,
        
            blockHeight: bigint,
        
            txHash: string,
        
    ) {
        
            this.id = id;
        
            this.creator = creator;
        
            this.admin = admin;
        
            this.contract = contract;
        
            this.code = code;
        
            this.blockHeight = blockHeight;
        
            this.txHash = txHash;
        
    }


    public id: string;

    public creator: string;

    public admin: string;

    public contract: string;

    public code: string;

    public blockHeight: bigint;

    public txHash: string;


    get _name(): string {
        return 'Contract';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Contract entity without an ID");
        await store.set('Contract', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Contract entity without an ID");
        await store.remove('Contract', id.toString());
    }

    static async get(id:string): Promise<Contract | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Contract entity without an ID");
        const record = await store.get('Contract', id.toString());
        if (record){
            return this.create(record as ContractProps);
        }else{
            return;
        }
    }



    static create(record: ContractProps): Contract {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.creator,
        
            record.admin,
        
            record.contract,
        
            record.code,
        
            record.blockHeight,
        
            record.txHash,
        );
        Object.assign(entity,record);
        return entity;
    }
}
