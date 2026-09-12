import { ProfanityFilterEntityBase } from '../ProfanityFilterEntityBase';
import type { ProfanityFilterSDK } from '../ProfanityFilterSDK';
import type { Control } from '../types';
import type { Json, JsonLoadMatch } from '../ProfanityFilterTypes';
declare class JsonEntity extends ProfanityFilterEntityBase<Json> {
    constructor(client: ProfanityFilterSDK, entopts: any);
    make(this: JsonEntity): JsonEntity;
    load(this: any, reqmatch?: JsonLoadMatch, ctrl?: Control): Promise<JsonEntity>;
}
export { JsonEntity };
