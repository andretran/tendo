import { interpolate } from "../interpolator";
import { IPrompt, PromptType } from "@/common/models/survey";
import { IPatient, IDoctor } from "@/common/models/user";
import { SessionState } from "@/hooks/useSession";

const PATIENT_NAME = 'John';
const DOCTOR_NAME = 'Kevin';

const prompt: IPrompt = {
    type: PromptType.CHOICE,
    id: '5e87fefe-4db0-4c2f-91f4-b9a26bd1a457',
    name: 'test_value',
    label: 'Test Value',
    header: 'Hi [patient.name.preferred]',
    text: 'Dr. [doctor.name.preferred]',
    options: [],
}

const session: SessionState  = {
    patient: {
        name: { preferred: PATIENT_NAME },
    } as IPatient,
    doctor: {
        name: { preferred: DOCTOR_NAME },
    } as IDoctor,
}

const badSession: SessionState = {
    patient: {} as IPatient,
    doctor: {} as IDoctor,

}

describe('utils.interpolator',() => {
    it('should interpolate the header and the body', () => {
        const interpolatedPrompt = interpolate(prompt, session);
        
        expect(interpolatedPrompt.header).toBe(`Hi ${PATIENT_NAME}`);
        expect(interpolatedPrompt.text).toBe(`Dr. ${DOCTOR_NAME}`);
    });

    it('should return an empty string when interpolating bad session data', () => {
        const interpolatedPrompt = interpolate(prompt, badSession);

        expect(interpolatedPrompt.header).toBe(`Hi `);
        expect(interpolatedPrompt.text).toBe(`Dr. `);
    });
});