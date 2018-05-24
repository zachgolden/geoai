/*
Zach Golden
Capstone 2018
Component to handle uploading of file to a MongoDB instance.
Also displays all of the files currently in the GridFS collection and allows for deletion from db.
User must be authenticated, restricted routing path.
*/
import React, {Component} from 'react';
import {Form, FormGroup, HelpBlock, ControlLabel, FormControl, Panel} from 'react-bootstrap';
import Nav from './Nav';
import {getImage} from '../utils/fetch-api';
import { Link } from 'react-router-3';
import Footer from './Footer';


class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      file: ''
    }
    this.loadFiles = this.loadFiles.bind(this);

  }

  componentDidMount() {
    this.loadFiles();
  }

  //call to load files from db
  loadFiles() {
    fetch('/api/files')
      .then(res => res.json())
      .then(files => {
        if (files.message) {
          console.log('No Files');
          this.setState({ files: [] })
        } else {
          this.setState({ files })
        }
      });
  }

  fileChanged(event) {
    const f = event.target.files[0];
    this.setState({
      file: f
    });
  }

  //call to remove file from db
  deleteFile(event) {
    event.preventDefault();
    const id = event.target.id;

    fetch('/api/files/'+id, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.success) this.loadFiles()
        else alert('Delete Failed');
      })
  }

  //call to upload file to db
  uploadFile(event) {
    event.preventDefault();
    let data = new FormData();
    data.append('file', this.state.file);

    fetch('/api/files', {
      method: 'POST',
      body: data
    }).then(res => res.json())
      .then(data => {
        if (data.success) {
          this.loadFiles();
        } else {
          alert('Upload failed');
        }
      });
  }

  render() {
    const { files } = this.state;
    return(
    <div>
      <Nav />

      <form>
        <div class="card text-center text-white bg-secondary m-3 pb-1">
          <h2 class="card-header">
            Upload File
          </h2>
          <div class="card-body">
            <div class="card bg-secondary">
              <input type="file" name="file" class="custom-file-input" onChange={this.fileChanged.bind(this)}/>
              <label for="file" class="custom-file-label" onChange={this.fileChanged.bind(this)}>Choose File</label>
            </div>
            <br></br>
            <div class="card bg-secondary">
            <input type="submit" value="Submit" class="btn btn-primary btn-block" onClick={this.uploadFile.bind(this)}/>
            </div>
            <Link to="/prediction">Go to Prediction Test Page</Link>
          </div>
        </div>
      </form>



      <div class="card text-center m-3">
        <table class="table">
          <thead class="thead-dark">
            <tr>
                <th>File</th>
                <th>Uploaded</th>
                <th>Size</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => {
              var d = new Date(file.uploadDate);
              return (
                <tr key={index}>
                  <td><a href={`http://localhost:3000/api/files/${file.filename}`}>{file.filename}</a></td>
                  <td>{`${d.toLocaleDateString()} ${d.toLocaleTimeString()}`}</td>
                  <td>{(Math.round(file.length/100) / 10)+'KB'}</td>
                  <td><button class="btn btn-danger" onClick={this.deleteFile.bind(this)} id={file._id}>Remove</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
     );
  }
}

export default Directory;

/*
Prediction backup test:
view: 0

this.setView.bind(this);

loadView(){
  switch(this.state.view){
    case 1:
      return (<Login />);
    default:
      return (<Footer />);
  }
}

setView(viewNum){
  this.setState( {view: viewNum} );
}


<input type="submit" value="Predict" class="btn btn-primary btn-block" eventKey={1} onClick={() => this.setView(1)} />

<div class="card bg-secondary">
  {this.loadView()}
</div>
*/
