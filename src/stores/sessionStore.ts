import { IPatient, IDoctor, Patient, Doctor } from "@/common/models/user";
import { Bundle, IResourceEntry, ResourceType} from "@/common/models/resource";
import { IAppointment } from "@/common/models/appointment";
import { IDiagnosis } from "@/common/models/diagnosis";

import PatientData from '@/data/patient.json';

/**
 * Notes:
 * 
 * Implmented my own lightweight version of a store that ingests the JSON file and converts it to typed objects.
 * The intention here was to create a single source of truth that the `useSession` hook wraps in order for my downstream
 * components to access patient metadata (diagnosis, appointments, doctor, etc.)
 * 
 * I should call out that this isn't an actual implementation of a store, it's missing alot of things:
 * 
 * 1. It makes alot of assumptions based on the data it's consuming and therefore isn't fault tolerant to bad data.
 *  - The store assumes the top level data being passed is a Bundle object.
 *  - It doesnt handle deeply nested Bundles. It assumes a single Bundle object with entries that are Resources that are not
 *    other bundles
 * 
 * 2. In theory most of this data should be ingested as some asyncronous API call. Since we're reading from file here, I didn't
 *    build out the layer to actual handle async/await calls and therefore all the downstream subscribers aren't handling fetching/loading states.
 * 
 * 3. Since we're reading this data once from file, we never actually are changing the store state. Additionally the app requirements never mentioned
 *    that we were allowed to edit the patient data, therefore I built it to be read-only. In theory if we do ever mutate state, we should signal the
 *    downstream react components to trigger a re-render. My implementation doesn't actually do that.
 */

export interface SessionState {
    patient?: IPatient,
    doctor?: IDoctor;
    appointments: IAppointment[];
    diagnosis: IDiagnosis[];
}

class SessionStore {
    private static instance: SessionStore;
    patient?: IPatient;
    doctor?: IDoctor;
    appointments: IAppointment[];
    diagnosis: IDiagnosis[];

    getState = (): SessionState => {
        return {
            patient: this.patient,
            doctor: this.doctor,
            appointments: this.appointments,
            diagnosis: this.diagnosis,
        }
    }

    static getInstance = () => {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new SessionStore();
        this.instance.initialize();
        return this.instance;
    }

    private initialize = (): void => {
        const bundle: Bundle = PatientData as Bundle;

        bundle.entry.forEach(this.initResourceObject);
    }

    private constructor() {
        this.appointments = [];
        this.diagnosis = [];
    }

    private initResourceObject = ({resource}: IResourceEntry): void => {
        switch (resource.resourceType) {
            case ResourceType.PATIENT:
                this.patient = Patient.toObject(resource);
                break;
            case ResourceType.DOCTOR:
                this.doctor = Doctor.toObject(resource);
                break;
            case ResourceType.APPOINTMENT:
                this.appointments.push(resource as IAppointment);
                break;
            case ResourceType.DIAGNOSIS:
                this.diagnosis.push(resource as IDiagnosis);
                break;
        }
    }
}

export default SessionStore.getInstance();