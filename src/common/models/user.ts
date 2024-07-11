import {ResourceType, ResourceBase} from './resource';

export type UserType = ResourceType.DOCTOR | ResourceType.PATIENT;

enum ContactType {
    PHONE = 'Phone',
    EMAIL = 'Email',
}

interface UserName {
    preferred: string,
    text: string,
    family: string,  
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

export interface IUser extends ResourceBase {
    name: UserName,
    resourceType: UserType,
}

export interface IPatient extends IUser {
    resourceType: ResourceType.PATIENT,
    active: boolean,
    contact: UserContact[],
    gender: string,
    birthDate: string,
    address: UserAddress[],
}

export interface IDoctor extends IUser {
    resourceType: ResourceType.DOCTOR,
}

class User {
    static toNameObject = (name: {[key: string]: any}): UserName => {
        const {text, family, given} = name;
        return {
            text,
            family,
            preferred: given[0] ?? '',
        } as UserName;
    }
}

export class Patient extends User {
    static toObject = (resource: {[key: string]: any}): IPatient => {
        // TODO: Add type guarding
        return {
            id: resource.id,
            name: this.toNameObject(resource.name[0] ?? {}),
            resourceType: ResourceType.PATIENT,
            active: resource.active,
            gender: resource.gender,
            birthDate: resource.birthDate,
            address: resource.address.map((addr: any) => addr as UserAddress),
            contact: resource.contact.map((c: any) => c as UserContact)
        } as IPatient;
    }
}

export class Doctor extends User {
    static toObject = (resource: {[key: string]: any}): IDoctor => {
        // TODO: Add type guarding 
        return {
            id: resource.id,
            name: this.toNameObject(resource.name[0] ?? {}),
            resourceType: ResourceType.DOCTOR,
        } as IDoctor;
    }
}
