import { Appointment } from "./appointment"
import { Diagnosis } from "./diagnosis"
import { User } from "./user"

export enum ResourceType {
    BUNDLE = 'Bundle',
    PATIENT = 'Patient',
    DOCTOR = 'Doctor',
    APPOINTMENT = 'Appointment',
    DIAGNOSIS = 'Diagnosis',
}

export interface ResourceEntry {
    resource: Resource;
}

export interface ResourceBase {
    id: string
    resourceType: ResourceType,
}

export interface Bundle extends ResourceBase {
    resourceType: ResourceType.BUNDLE,
    timestamp: string,
    entry: ResourceEntry[],
}

export type Resource = User | Appointment | Diagnosis;