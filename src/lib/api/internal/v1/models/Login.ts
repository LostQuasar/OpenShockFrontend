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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Login
 */
export interface Login {
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    email?: string;
}

/**
 * Check if a given object implements the Login interface.
 */
export function instanceOfLogin(value: object): boolean {
    return true;
}

export function LoginFromJSON(json: any): Login {
    return LoginFromJSONTyped(json, false);
}

export function LoginFromJSONTyped(json: any, ignoreDiscriminator: boolean): Login {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function LoginToJSON(value?: Login | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'password': value['password'],
        'email': value['email'],
    };
}

