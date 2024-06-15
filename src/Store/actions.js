import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from "../Helper/Helper";

export const getCat = () => {
    return async dispatch => {
        await axios.get(baseURL + 'property/category/')
            .then((resp) => {
                dispatch({
                    type: 'GET_CAT',
                    payload: resp.data
                })
            })
            .catch((err) => {
                toast.error(err.response);
            })
    }
}

export const getLogo = () => {
    return async dispatch => {
        await axios.get(baseURL + 'web/logo/')
            .then((resp) => {
                dispatch({
                    type: 'ICON',
                    payload: resp.data
                })
            })
            .catch((err) => {
                toast.error(err.response);
            })
    }
}

export const getBanner = () => {
    return async dispatch => {
        await axios.get(baseURL + 'web/banner/')
            .then((resp) => {
                dispatch({
                    type: 'BANNER',
                    payload: resp.data
                })
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            })
    }
}

export const getContact = () => {
    return async dispatch => {
        await axios.get(baseURL + 'web/contact/')
            .then((resp) => {
                dispatch({
                    type: 'GET_CONTACT',
                    payload: resp.data
                })
            })
            .catch((err) => {
                toast.error(err.response);
            })
    }
}

export const getSocial = () => {
    return async dispatch => {
        await axios.get(baseURL + 'web/social-media/')
            .then((resp) => {
                dispatch({
                    type: 'GET_SOCIAL',
                    payload: resp.data
                })
            })
            .catch((err) => {
                toast.error(err.response);
            })
    }
}



// export const Viewed = () => {
//     return async dispatch => {
//         await axios.get(baseURL + 'web/banner/')
//             .then((resp) => {
//                 dispatch({
//                     type: 'BANNER',
//                     payload: resp.data
//                 })
//             })
//             .catch((err) => {
//                 toast.error(err.response.data.message);
//             })
//     }
// }