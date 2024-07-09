import { ResourceBase, ResourceType } from "./resource";
import { Doctor, Patient } from "./user";

enum AppointmentStatus {
    FINISHED = 'finished',
}

export interface Appointment extends ResourceBase {
    resourceType: ResourceType.APPOINTMENT,
    status: AppointmentStatus,
    type: string[],
    subject: Patient,
    actor: Doctor,
    period: {
        start: string,
        end: string,
    }   
};