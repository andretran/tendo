import { ResourceBase, ResourceType } from "./resource";
import { IDoctor, IPatient } from "./user";

enum AppointmentStatus {
    FINISHED = 'finished',
}

export interface IAppointment extends ResourceBase {
    resourceType: ResourceType.APPOINTMENT,
    status: AppointmentStatus,
    type: any[],
    subject: IPatient,
    actor: IDoctor,
    period: {
        start: string,
        end: string,
    }   
};