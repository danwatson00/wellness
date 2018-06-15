import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Journal.css';

export default class Journal extends React.Component {


    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleText">Journal Entry</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button className="completeButton">Complete</Button>
            </Form>
        );
    }
}