import React, { Component } from 'react';
import { connect } from "react-redux";
import * as productActions from './reducer';
import get from 'lodash.get';

class ProductWidgetContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getListData();
    }
    render() { 
        console.log('----this props Product-----', this.props);
        const listContent = this.props.list.map(item => {
            return (
            <div key={item.id} className="col-lg-3 col-md-4 col-6">
                <h5 style={{textAlign:"center"}}>{item.name}</h5>
                <div href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={item.path} alt="" />
                    <div class="container-fluid">
                            <div class="col-sm-12 text-center">
                                <p>{item.description}</p>
                                <button className="btn btn-success center-block" style={{ width: "50%", alignItems: "center" }}>BUY</button>
                            </div>
                     </div>
                </div>
            
              
            </div>
            )
        });
        return ( 
            <div>
                <div className="container">

                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">PRODUCTS: </h1>

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
        list: get(state, 'product.list.data'),
        isListLoading: get(state, 'product.list.loading'),
        isListError: get(state, 'product.list.error')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListData: () => {
            dispatch(productActions.getListData());
        }
    }
}
 
const ProductWidget = connect(mapStateToProps, mapDispatchToProps)(ProductWidgetContainer);
export default ProductWidget;