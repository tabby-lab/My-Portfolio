import React, { Component } from 'react';
import {Form, FormGroup, Label, Input } from 'reactstrap';


class Contact extends Component {
render(){
    return (
        <div className="container">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        </div>

    )
}

}

export default Contact;