import React, { Component } from 'react';
import { connect } from "react-redux";
import * as jonActions from './reducer';
import get from 'lodash.get';

class GalleryWidgetContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log('----this props Gallery-----', this.props);
        return ( 
            <h1>Галерея</h1> 
        );
    }
}
// const mapStateToProps = (state) => {
//     return {
//         list: get(state, 'gallery.list.data'),
//         isListLoading: get(state, 'gallery.list.loading'),
//         isListError: get(state, 'gallery.list.error')
//     }
// }
 
const GalleryWidget = connect(null)(GalleryWidgetContainer);
export default GalleryWidget;