import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Journal extends React.Component {


    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Link><Button>Submit</Button></Link>
            </Form>
        );
    }
}