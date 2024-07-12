import { IAppointment } from "./appointment"
import { IDiagnosis } from "./diagnosis"
import { IUser } from "./user"

export enum ResourceType {
    BUNDLE = 'Bundle',
    PATIENT = 'Patient',
    DOCTOR = 'Doctor',
    APPOINTMENT = 'Appointment',
    DIAGNOSIS = 'Diagnosis',
}

export interface IResourceEntry {
    resource: Resource;
}

export interface ResourceBase {
    id: string,
    resourceType: ResourceType,
}

export interface Bundle extends ResourceBase {
    resourceType: ResourceType.BUNDLE,
    timestamp: string,
    entry: IResourceEntry[],
}

export type Resource = IUser | IAppointment | IDiagnosis;