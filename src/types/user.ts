import {ResourceType, ResourceBase} from './resource';

export type UserType = ResourceType.DOCTOR | ResourceType.PATIENT;

enum ContactType {
    PHONE = 'Phone',
    EMAIL = 'Email',
}

interface UserName {
    text: string,
    family: string,
    given: string[],  
}

interface UserContact {
    system: ContactType,
    value: string,
    use: string,
}

interface UserAddress {
    use: string,
    line: string[],
}

export interface User extends ResourceBase {
    name: UserName[],
    resourceType: UserType,
}

export interface Patient extends User {
    resourceType: ResourceType.PATIENT,
    active: boolean,
    contact: UserContact[],
    gender: string,
    birthDate: string,
    address: UserAddress[],
}

export interface Doctor extends User {
    resourceType: ResourceType.DOCTOR,
}