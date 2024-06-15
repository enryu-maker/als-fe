const initialState = {
    access: null,
    viewed: [],
    icon: [],
    banner: [],
    cat: [],
    contact: [],
    social: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "ACCESS":
            return {
                ...state,
                access: action.payload,
            };
        case "GET_CAT":
            return {
                ...state,
                cat: action.payload,
            };
        case "GET_CONTACT":
            return {
                ...state,
                contact: action.payload,
            };
        case "GET_SOCIAL":
            return {
                ...state,
                social: action.payload,
            };
        case "ICON":
            return {
                ...state,
                icon: action.payload,
            };
        case "BANNER":
            return {
                ...state,
                banner: action.payload,
            };
        case "VIEWED":
            return {
                ...state,
                viewed: action.payload,
            };
        default:
            return state;
    }
};