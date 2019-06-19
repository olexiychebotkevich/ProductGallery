import { combineReducers } from "redux";

import counter from './reducers/counter';
import { galleryReducer } from "./components/gallery/reducer";
import { productReducer } from "./components/product/reducer";

export default combineReducers({
    counter,
    gallery: galleryReducer,
    product:productReducer
});


