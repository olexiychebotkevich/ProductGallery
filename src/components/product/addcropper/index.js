import React, { Component } from 'react';
import axios from 'axios'
import "./index.css"
import CropperWidget from './modal/index'

class GalleryAddCropperWidgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            image:'',
            src:'',
            isCropped:false
          
        };
    }

    onSubmitForm = (e) => {
      
        e.preventDefault();
        console.log('----submit form---');

        const model = { 
            name: this.state.name,
            image: this.state.image 
        };
        axios.post('http://localhost:100/api/add.php', model)
            .then(
                (resp)=>{
                    console.log('--success post--', resp.data);
                    this.props.history.push('/product');
                },
                (err) => {
                    console.log('--err problem---', err);
                }
            );


       
    }


    onChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.name, e.target.value);

    }

    onselectImage=(e)=>{
      console.log("Upload image");
      this.inputFileElement.click();
    }
    onChangeSelectFile=(e)=>{
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        if (files && files[0]) {
            if (files[0].type.match(/^image\//)) {
                const reader = new FileReader();
                reader.onload = () => {
                    //this.toggle(e);
                    this.setState({ src: reader.result, isCropped: true });
                };
                reader.readAsDataURL(files[0]);
            }
            else {
                alert("Невірний тип файлу");
            }
        }
        else {
            alert("Будь ласка виберіть файл");
        }
    }

    onCloseCropper=(e)=>{
      e.preventDefault();
      this.setState({ isCropped: false });

    }

    
  
    render() { 
        const {name,image,src,isCropped,onClose}= this.state;
        
        return(
            <React.Fragment>
                <h1>Додати фото в галерею cropper</h1> 
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="name">Назва тварини:</label>
                        <input type="text" 
                                className="form-control" 
                                name="name" 
                                id="name"
                                onChange={this.onChangeInput}
                                value={name} />
                    </div>

                    <div className="form-group">
                     


                    <img
                     onClick={this.onselectImage}
                     className="imgUpload"
                     src="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg"></img>

                    <input  ref={input=>this.inputFileElement=input} onChange={this.onChangeSelectFile} type="file" className="d-none"></input>
                   
                    <CropperWidget loading={isCropped} src={src} onClose={this.onCloseCropper}/>
                   
                    </div>
                    <button type="submit" onSubmit={this.onSubmitForm} className="btn btn-info">Додати</button>
                   
               
                </form>
            </React.Fragment>
       
        );
    }

}
const GalleryAddCropperWidget=GalleryAddCropperWidgetContainer;
export default GalleryAddCropperWidget;
