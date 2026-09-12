import { ProfanityFilterEntityBase } from '../ProfanityFilterEntityBase';
import type { ProfanityFilterSDK } from '../ProfanityFilterSDK';
import type { Control } from '../types';
import type { Plain, PlainLoadMatch } from '../ProfanityFilterTypes';
declare class PlainEntity extends ProfanityFilterEntityBase<Plain> {
    constructor(client: ProfanityFilterSDK, entopts: any);
    make(this: PlainEntity): PlainEntity;
    load(this: any, reqmatch?: PlainLoadMatch, ctrl?: Control): Promise<PlainEntity>;
}
export { PlainEntity };
