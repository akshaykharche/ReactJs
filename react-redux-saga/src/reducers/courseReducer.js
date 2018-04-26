
export default function courseReducer (state ={}, action) {
    switch (action.type) {
        case 'SELECTED_COURSE':
            return {...state,
            courses:action.image
            };
        default: return state;
    }

}