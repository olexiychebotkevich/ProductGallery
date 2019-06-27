import React, { Component } from 'react';
import { connect } from "react-redux";
import * as productActions from './reducer';
import get from 'lodash.get';
import SpinnerWidget from '../spinner';
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';


const Container =styled.div`
background-color:grey;
padding:16px;
width: 100%;
height:100%;
top:0;
right: 0;
bottom: 0;
left: 0;
margin:auto;
z-index:999;
position: fixed;
transition: top 0.5s ease;
display:${props=>props.imagedisplay};
img{
   
    width: 50%;
    max-width: 50%;
    height: 90%;
    display: block;
    margin: 0 auto;
    border: 4px solid black;
 
   
    
;}
>
`;


class ProductWidgetContainer extends Component {
    constructor(props) {
        super(props);
         
        this.state={
            imagedisplay:"none",
            currentimagesrc:""
        }

    }
    componentDidMount() {
        this.props.getListData();
    }



    // redirectToAddGallery = (e) => {
    //     const { history } = this.props;
    //     e.preventDefault();
    //     console.log('-----переходимо на сторінку додавання----');
    //     history.push('/product/add');
    // }

    addPhotoCropper = (e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log('-----переходимо на сторінку додавання----');
        history.push('/product/add/cropper');
    }


    ImgMouseOver=(e)=>{
       
       
       e.target.style.borderColor = 'green';
      
    }


    ImgMouseOut=(e)=>
    {
       
       e.target.style.borderColor = 'black';
    }


    ImgClick=(e)=>
    {
       
       let targetimg=e.target;
       this.setState({currentimagesrc:targetimg.src});
       this.setState({imagedisplay:"block"});
      
    }


    ClsBtnClick=(e)=>
    {
        this.setState({imagedisplay:"none"});
    }


    
    

    render() { 
        
        const {isListLoading} = this.props;
        const listContent = this.props.list.map(item => {
            return (
                <div key={item.Id} className="col-lg-3 col-md-4 col-6">
                    <h5 >{item.Name}</h5>
                    <div href="#" className="d-block mb-4 h-100">
                        <img
                         className="img-fluid img-thumbnail"
                         src={item.Path}
                         style={{ height: "10rem", borderWidth: "0.2rem", borderColor: "black" }}
                         alt=""
                         onMouseOver={this.ImgMouseOver} 
                         onMouseOut={this.ImgMouseOut}
                         onClick={this.ImgClick}
                         />
                    </div>
                </div>
            )
        });
        return ( 
            <div>

  

                <React.Fragment>

               

                    <Container imagedisplay={this.state.imagedisplay}
                        previmageleft={this.state.previmageleft}>
                        <button style={{ display: this.state.imagedisplay, color: "red" }} type="button" onClick={this.ClsBtnClick} className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <img src={this.state.currentimagesrc} alt="selected"></img>
                       


                    </Container>


                </React.Fragment>


                <div className="container">

                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">PRODUCTS: </h1>
                    {/* <button className="btn btn-success" onClick={this.redirectToAddGallery} >Add photo</button> */}
                    <button className="btn btn-success" onClick={this.addPhotoCropper} >Add photo (with cropper)</button>
                    <hr className="mt-2 mb-5" />

                    <div className="row text-center text-lg-left">
                        
                       {listContent}
                    </div>

                </div>
                <SpinnerWidget loading={isListLoading}></SpinnerWidget>
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
 
const ProductWidget = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductWidgetContainer));
export default ProductWidget;