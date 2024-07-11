import { ResourceBase, ResourceType } from "./resource";

enum AppointmentStatus {
    FINISHED = 'finished',
}

interface IAppointmentType {
    text: string,
}

export interface IAppointment extends ResourceBase {
    resourceType: ResourceType.APPOINTMENT,
    status: AppointmentStatus,
    type: IAppointmentType[],
    subject: string,
    actor: string,
    period: {
        start: string,
        end: string,
    }   
};

export class Appointment {
    static toObject = (resource: {[key: string]: any}): IAppointment => {
        return {
            id: resource.id,
            resourceType: ResourceType.APPOINTMENT,
            status: resource.status,
            type: resource.type.map((t: any) => t as IAppointmentType),
            subject: resource.subject.reference,
            actor: resource.subject.reference,
            period: {
                start: resource.period.start,
                end: resource.period.end,
            }
        } as IAppointment
    }
}