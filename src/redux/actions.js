import { SET_RESUME_URI } from "./actionTypes";

export const setResumeURI = (newURI) => {
    return {
        type: SET_RESUME_URI,
        payload: newURI
    }
};