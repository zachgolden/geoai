import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import "../stylesheets/About.css"


class Predict extends Component {
  constructor(props) {
      super(props);
        this.state = {
          imageURL: '',
        };
      this.handleUploadImage = this.handleUploadImage.bind(this);
    }

  handleUploadImage(ev) {
     ev.preventDefault();

     const data = new FormData();
     data.append('file', this.uploadInput.files[0]);
     data.append('filename', this.fileName.value);

     fetch('http://localhost:3333/upload', {
       method: 'POST',
       body: data,
     }).then((response) => {
       response.json().then((body) => {
         this.setState({ imageURL: `http://localhost:3333/${body.file}` });
       });
     });
   }

  render() {
    return(
    <div>
      <Nav />
        <div class="card text-center bg-secondary">
          <form onSubmit={this.handleUploadImage}>
            <br/>
          <div class="card bg-secondary">
            <label for="file" class="custom-file-label">Choose File</label>
            <input type="file" name="file" class="custom-file-input" ref={(ref) => { this.uploadInput = ref; }}/>
          </div>

          <div class="card bg-secondary">
            <input class="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
          </div>
          <div>
          <button class="btn btn-success" type>Upload</button>
          </div>
          <img src={this.state.imageURL} alt="img" />
          </form>
        </div>
      <Footer />
    </div>
  );
  }
}

export default Predict;

/*

*/
