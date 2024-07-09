import { Appointment } from "./appointment";
import { ResourceBase, ResourceType } from "./resource";

enum DiagnosisStatus {
    FINAL = 'final',
}

interface DiagnosisCode {
    system: string,
    code: string,
    name: string,
}

export interface Diagnosis extends ResourceBase {
    resourceType: ResourceType.DIAGNOSIS,
    meta: {
        lastUpdated: string,
    },
    status: DiagnosisStatus,
    code: {
        coding: DiagnosisCode[],
    }
    appointment: Appointment,
}