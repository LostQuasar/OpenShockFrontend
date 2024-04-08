/* tslint:disable */
/* eslint-disable */
/**
 * OpenShock.API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GenericIni } from './GenericIni';
import {
    GenericIniFromJSON,
    GenericIniFromJSONTyped,
    GenericIniToJSON,
} from './GenericIni';

/**
 * 
 * @export
 * @interface AdminOnlineDeviceResponse
 */
export interface AdminOnlineDeviceResponse {
    /**
     * 
     * @type {string}
     * @memberof AdminOnlineDeviceResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminOnlineDeviceResponse
     */
    name?: string | null;
    /**
     * 
     * @type {GenericIni}
     * @memberof AdminOnlineDeviceResponse
     */
    owner?: GenericIni;
    /**
     * 
     * @type {string}
     * @memberof AdminOnlineDeviceResponse
     */
    firmwareVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminOnlineDeviceResponse
     */
    gateway?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof AdminOnlineDeviceResponse
     */
    connectedAt?: Date;
}

/**
 * Check if a given object implements the AdminOnlineDeviceResponse interface.
 */
export function instanceOfAdminOnlineDeviceResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdminOnlineDeviceResponseFromJSON(json: any): AdminOnlineDeviceResponse {
    return AdminOnlineDeviceResponseFromJSONTyped(json, false);
}

export function AdminOnlineDeviceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminOnlineDeviceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner': !exists(json, 'owner') ? undefined : GenericIniFromJSON(json['owner']),
        'firmwareVersion': !exists(json, 'firmwareVersion') ? undefined : json['firmwareVersion'],
        'gateway': !exists(json, 'gateway') ? undefined : json['gateway'],
        'connectedAt': !exists(json, 'connectedAt') ? undefined : (new Date(json['connectedAt'])),
    };
}

export function AdminOnlineDeviceResponseToJSON(value?: AdminOnlineDeviceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'owner': GenericIniToJSON(value.owner),
        'firmwareVersion': value.firmwareVersion,
        'gateway': value.gateway,
        'connectedAt': value.connectedAt === undefined ? undefined : (value.connectedAt.toISOString()),
    };
}

