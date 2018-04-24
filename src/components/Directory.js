import React, {Component} from 'react';
import {Form, FormGroup, HelpBlock, ControlLabel, FormControl} from 'react-bootstrap';
import Nav from './Nav';

class Directory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fileName:''
    };
  }

  render() {
    return(
      <div>
        <Nav />
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
    </div>
     );
  }
}

export default Directory;

/*
<h1>File Upload</h1>
 <FormGroup controlId="file">
   <p><ControlLabel> Upload File</ControlLabel></p>
   <FormControl type="file" bsStyle="primary" value={this.state.fileName}/>
 </FormGroup>
*/
