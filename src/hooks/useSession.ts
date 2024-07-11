import {useState} from 'react';
import { IDoctor, IPatient, Doctor, Patient } from '@/common/models/user';
import { IAppointment, Appointment } from '@/common/models/appointment';
import { IDiagnosis, Diagnosis } from '@/common/models/diagnosis';
import { IResourceEntry, ResourceType } from '@/common/models/resource';
import PatientData from '@/data/patient.json';

const DEFAULT_SESSION_STATE: SessionState = {
    patient: undefined,
    doctor: undefined,
    appointments: [],
    diagnosis: [],
}

interface SessionState {
    patient?: IPatient,
    doctor?: IDoctor;
    appointments: IAppointment[];
    diagnosis: IDiagnosis[];
}

const initSessionState = (): SessionState => {
    const state = DEFAULT_SESSION_STATE;
    const bundle = PatientData as any;

    bundle.entry.forEach(({resource}: IResourceEntry) => {
        switch (resource.resourceType) {
            case ResourceType.PATIENT:
                state.patient = Patient.toObject(resource);
                break;
            case ResourceType.DOCTOR:
                state.doctor = Doctor.toObject(resource);
                break;
            case ResourceType.APPOINTMENT:
                state.appointments.push(Appointment.toObject(resource));
                break;
            case ResourceType.DIAGNOSIS:
                state.diagnosis.push(Diagnosis.toObject(resource));
                break;
        }
    });

    return state;
}

export const useSession = (): SessionState => {
    const [sessionState] = useState <SessionState>(initSessionState());
    
    return sessionState;
}