import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default class CreatePost extends Component {
 
  constructor(props){
    super(props);
    this.state={
      Topic:"",
      Note:""
       
    }
  }

  handleInputChange=(e)=>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit=(e)=>{
    e.preventDefault();

    const {Topic,Note} = this.state;

    const data ={
      Topic:Topic,
      Note:Note
      
    }

    

    axios.post("http://localhost:8000/post/save",data).then((res)=>{
      if(res.data.success){
        this.setState({
            Topic:"",
            Note:""
      })
      }
    })

  }
 
 
 
  render() {
    return (
      <Form>
      
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="TextInput">Add Topic</Form.Label>
          <Form.Control  placeholder="Enter Topic" name='Topic' value={this.state.Topic} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="TextInput">Add Note</Form.Label>
          <Form.Control  placeholder="Enter Note" name='Note'  value={this.state.Note} onChange={this.handleInputChange} />
        </Form.Group>

        
        
        
        <Button type="submit"  onClick={this.onSubmit}>Save</Button>
      
    </Form>
    )
  }
}
