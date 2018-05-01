import React, {Component} from 'react';
import {Form, FormGroup, HelpBlock, ControlLabel, FormControl, Panel} from 'react-bootstrap';
import Nav from './Nav';
import {getImage} from '../utils/fetch-api';


class Directory extends Component {
  constructor() {
    super()
    this.state = { images: [] };
  }

  getImageDisplay() {
    getImage().then((images) => {
      this.setState({ images });
    });
  }

  componentDidMount() {
    this.getImageDisplay();
  }

  render() {

    const { images } = this.state;

    return(
    <div>
      <Nav />

      <form>
        <div class="card text-center text-white bg-secondary">
          <h2 class="card-header">
            Upload File
          </h2>
          <div class="card-body">
            <div class="card bg-secondary">
              <input type="file" name="file" id="file" class="custom-file-input"></input>
              <label for="file" class="custom-file-label">Choose File</label>
            </div>
            <br></br>
            <input type="submit" value="Submit" class="btn btn-primary btn-block"></input>

          </div>
        </div>
      </form>

      <div>

      </div>

    </div>
     );
  }
}

export default Directory;

/*
<div href="/upload" class="btn btn-primary">Upload</div>
<h5 class="card-title">Title A</h5>
<p class="card-text">Test-Content.</p>

<form>
  <div>
    <div class="row">
      <div class="col-md-6 m-auto">
        <h1 class="text-center display-6 my-4"> File Uploading </h1>
        <form action="/upload" method="POST" encType="multipart/form-data">
          <div class="custom-file mb-3">
          <input type="file" name="file" id="file" class="custom-file-input"></input>
          <label for="file" class="custom-file-label"> Select File </label>
        </div>
        <input type="submit" value="Upload" class="btn btn-primary btn-block"></input>
        </form>
      </div>
    </div>
  </div>
</form>

<h1>File Upload</h1>
 <FormGroup controlId="file">
   <p><ControlLabel> Upload File</ControlLabel></p>
   <FormControl type="file" bsStyle="primary" value={this.state.fileName}/>
 </FormGroup>
*/
