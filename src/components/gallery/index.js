import React, { Component } from 'react';
import { connect } from "react-redux";
import * as galleryActions from './reducer';
import get from 'lodash.get';

class GalleryWidgetContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getListData();
    }
    render() { 
        console.log('----this props Gallery-----', this.props);
        const listContent = this.props.list.map(item => {
            return (
            <div key={item.id} className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={item.path} alt="" />
                </a>
            </div>
            )
        });
        return ( 
            <div>
                <div className="container">

                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>

                    <hr className="mt-2 mb-5" />

                    <div className="row text-center text-lg-left">
                        
                       {listContent}
                    </div>

                </div>
            </div>


        );
    }
}
const mapStateToProps = (state) => {
    return {
        list: get(state, 'gallery.list.data'),
        isListLoading: get(state, 'gallery.list.loading'),
        isListError: get(state, 'gallery.list.error')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListData: () => {
            dispatch(galleryActions.getListData());
        }
    }
}
 
const GalleryWidget = connect(mapStateToProps, mapDispatchToProps)(GalleryWidgetContainer);
export default GalleryWidget;