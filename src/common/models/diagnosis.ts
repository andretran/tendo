import { IAppointment } from "./appointment";
import { ResourceBase, ResourceType } from "./resource";

enum DiagnosisStatus {
    FINAL = 'final',
}

interface IDiagnosisCode {
    system: string,
    code: string,
    name: string,
}

export interface IDiagnosis extends ResourceBase {
    resourceType: ResourceType.DIAGNOSIS,
    meta: {
        lastUpdated: string,
    },
    status: DiagnosisStatus,
    code: {
        coding: IDiagnosisCode[],
    }
    appointment: string,
}

export class Diagnosis {
    static toObject = (resource: {[key: string]: any}): IDiagnosis => {
        return {
            id: resource.id,
            resourceType: ResourceType.DIAGNOSIS,
            status: resource.status,
            code: {
                coding: resource.code.coding.map((c: any) => c as IDiagnosisCode)
            },
            appointment: resource.appointment.reference,
        } as IDiagnosis;
    }
}