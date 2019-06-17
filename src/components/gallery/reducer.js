import update from '../../helpers/update';
import JonService from "./galleryService";

export const GET_LIST_DATA_STARTED = "gallery/GET_LIST_DATA_STARTED";
export const GET_LIST_DATA_SUCCESS = "gallery/GET_LIST_DATA_SUCCESS";
export const GET_LIST_DATA_FAILED = "gallery/GET_LIST_DATA_FAILED";

const initialState = {
    
    list: {
        data: [],
        error: false,
        loading: false
    },
}


export const galleryReducer = (state = initialState, action) => {
    let newState = state;

    switch (action.type) {

        case GET_LIST_DATA_STARTED: {
            newState = update.set(state, 'list.loading', true);
            break;
        }

        case GET_LIST_DATA_SUCCESS: {
            newState = update.set(state, 'list.loading', false);
            newState = update.set(newState, 'list.data', action.payload.data);
            break;
        }

        case GET_LIST_DATA_FAILED: {
            newState = update.set(state, 'list.loading', false);
            newState = update.set(newState, 'list.error', true);
            break;
        }

        default: {
            return newState;
        }
    }

    return newState;
}


export const getListData = () => {
    return (dispatch) => {
        dispatch(getListActions.started());

        JonService.getListData()
            .then((response) => {
                dispatch(getListActions.success(response));
            })
            .catch(() => {
                dispatch(getListActions.failed());
            });
    }
}

export const getListActions = {
    started: () => {
        return {
            type: GET_LIST_DATA_STARTED
        }
    },

    success: (data) => {
        return {
            type: GET_LIST_DATA_SUCCESS,
            payload: data
        }
    },

    failed: (error) => {
        return {
            type: GET_LIST_DATA_FAILED
        }
    }
}