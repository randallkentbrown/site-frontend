import { SET_RESUME_URI } from "../actionTypes";

const initialState = "https://www.randallkentbrown.com";

const resumeURI = (state = initialState, action) => {
    switch(action.type) {
        case SET_RESUME_URI: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default resumeURI;