import { ProfanityFilterEntityBase } from '../ProfanityFilterEntityBase';
import type { ProfanityFilterSDK } from '../ProfanityFilterSDK';
import type { Control } from '../types';
import type { Xml, XmlLoadMatch } from '../ProfanityFilterTypes';
declare class XmlEntity extends ProfanityFilterEntityBase<Xml> {
    constructor(client: ProfanityFilterSDK, entopts: any);
    make(this: XmlEntity): XmlEntity;
    load(this: any, reqmatch?: XmlLoadMatch, ctrl?: Control): Promise<XmlEntity>;
}
export { XmlEntity };
