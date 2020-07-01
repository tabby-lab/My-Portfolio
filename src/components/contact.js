import React, { Component, Fragment } from 'react';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';


class Contact extends Component {
render(){
    return (
    
        <Fragment>
          <div className="center-form">
      <Form className="form">
        <FormGroup> 
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          <Input type="textarea" name="text" id="exampleText" />
          <Button>Send</Button>
        </FormGroup>
        </Form>
        </div>
        </Fragment>
       

    )
}

}

export default Contact;