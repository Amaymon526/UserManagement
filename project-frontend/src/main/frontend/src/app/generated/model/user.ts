/**
 * WTM_UAM
 * API zum Verwalten User
 *
 * The version of the OpenAPI document: v1.0
 * Contact: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Role } from './role';


export interface User { 
    email?: string;
    id?: string;
    password?: string;
    role?: Array<Role>;
    username?: string;
}

