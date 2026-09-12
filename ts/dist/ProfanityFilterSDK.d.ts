import { ContainsprofanityEntity } from './entity/ContainsprofanityEntity';
import { JsonEntity } from './entity/JsonEntity';
import { PlainEntity } from './entity/PlainEntity';
import { XmlEntity } from './entity/XmlEntity';
export type * from './ProfanityFilterTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ProfanityFilterEntityBase } from './ProfanityFilterEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ProfanityFilterSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Containsprofanity(entopts?: Record<string, any>): ContainsprofanityEntity;
    Json(entopts?: Record<string, any>): JsonEntity;
    Plain(entopts?: Record<string, any>): PlainEntity;
    Xml(entopts?: Record<string, any>): XmlEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ProfanityFilterSDK;
    tester(testopts?: any, sdkopts?: any): ProfanityFilterSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ProfanityFilterSDK;
export { stdutil, config, BaseFeature, ProfanityFilterEntityBase, ProfanityFilterSDK, SDK, };
