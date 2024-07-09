import {useState} from 'react';
import sessionStore, { SessionState } from '@/stores/sessionStore';

export const useSession = (): SessionState => {
    const [sessionState] = useState <SessionState>(sessionStore.getState());
    
    return sessionState;
}