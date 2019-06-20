import React, { Component } from 'react';
import axios from 'axios'


class GalleryAddWidgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            image:''
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


        // fetch('http://localhost:100/api/add.php',{
        //     method: "POST",
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body:  JSON.stringify({
        //         name: this.state.name,
        //         image: this.state.image 
              
        //     }),
        //  })
        //  .then(function(response){ 
        //   return response.json();   
        //  })
    }


    onChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.name, e.target.value);

    }


    
  
    render() { 
        const {name,image}= this.state;

        return(
            <React.Fragment>
                <h1>Додати фото в галерею</h1> 
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
                        <label htmlFor="image">Фото:</label>
                        <input type="text" 
                                className="form-control" 
                                name="image" 
                                id="image" 
                                onChange={this.onChangeInput}
                                value={image} />
                    </div>
                    <button type="submit" onSubmit={this.onSubmitForm} className="btn btn-info">Додати</button>
                </form>
            </React.Fragment>
       
        );
    }

}
const GalleryAddWidget=GalleryAddWidgetContainer;
export default GalleryAddWidget;

