import { combineReducers } from "redux";

import counter from './reducers/counter';
import { galleryReducer } from "./components/gallery/reducer";

export default combineReducers({
    counter,
    gallery: galleryReducer
});