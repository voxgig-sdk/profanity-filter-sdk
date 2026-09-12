import { ProfanityFilterEntityBase } from '../ProfanityFilterEntityBase';
import type { ProfanityFilterSDK } from '../ProfanityFilterSDK';
import type { Control } from '../types';
import type { Containsprofanity, ContainsprofanityLoadMatch } from '../ProfanityFilterTypes';
declare class ContainsprofanityEntity extends ProfanityFilterEntityBase<Containsprofanity> {
    constructor(client: ProfanityFilterSDK, entopts: any);
    make(this: ContainsprofanityEntity): ContainsprofanityEntity;
    load(this: any, reqmatch?: ContainsprofanityLoadMatch, ctrl?: Control): Promise<ContainsprofanityEntity>;
}
export { ContainsprofanityEntity };
