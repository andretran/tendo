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
    appointment: IAppointment,
}