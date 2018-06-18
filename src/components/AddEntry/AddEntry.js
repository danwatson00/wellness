import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

export default class EditForm extends Component {
    state = {
        mood: {
            feeling: '',
            descriptives: '',
            activities: '',
            exercise: '',
            sleep: '',
            diet: '',
            foods: '',
            meds: '',
            journal: '',
            entryTime: ''
        }
    };

    onFormSubmit = (evt) => {
        let userEntry = {}
        userEntry.feeling = this.state.entry.feeling;
        userEntry.descriptives = this.state.entry.descriptives;
        userEntry.activities = this.state.entry.activities;
        userEntry.exercise = this.state.entry.exercise;
        userEntry.sleep = this.state.entry.sleep;
        userEntry.diet = this.state.entry.diet;
        userEntry.foods = this.state.entry.foods;
        userEntry.meds = this.state.entry.meds;
        userEntry.journal = this.state.entry.journal;
        userEntry.entryTime = this.state.entry.entryTime;
        this.props.saveUpdate(userObject);

        console.log("userObject", userObject);

        this.setState({
            mood: {
                feeling: '',
                descriptives: '',
                activities: '',
                exercise: '',
                sleep: '',
                diet: '',
                foods: '',
                meds: '',
                journal: '',
                entryTime: ''
            }
        });
        evt.preventDefault();
    };

    onInputChange = evt => {
        const entry = Object.assign({}, this.state.entry);
        entry[evt.target.name] = evt.target.value;
        this.setState({ entry });
    };

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Contact Name</label>
                            <Input
                                fluid placeholder='Name'
                                name="name"
                                value={this.state.entry.name}
                                onChange={this.onInputChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Contact Email</label>
                            <Input
                                fluid placeholder='Email'
                                name="email"
                                type='email'
                                value={this.state.entry.email}
                                onChange={this.onInputChange}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Contact Company</label>
                            <Input
                                fluid placeholder='Company'
                                name="company"
                                type='text'
                                value={this.state.entry.company}
                                onChange={this.onInputChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Contact Phone</label>
                            <Input
                                fluid placeholder='Phone'
                                name="phone"
                                type='text'
                                value={this.state.entry.phone}
                                onChange={this.onInputChange}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Contact Rating</label>
                            <Input
                                fluid placeholder='Rating'
                                name="rating"
                                type='text'
                                value={this.state.entry.rating}
                                onChange={this.onInputChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Contact Title</label>
                            <Input
                                fluid placeholder='Title'
                                name="title"
                                type='text'
                                value={this.state.entry.title}
                                onChange={this.onInputChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Contact Image</label>
                            <Input
                                fluid placeholder='Image'
                                name="image"
                                type='text'
                                value={this.state.entry.image}
                                onChange={this.onInputChange}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Contact Notes</label>
                            <Input
                                fluid placeholder='Notes'
                                name="notes"
                                type='text'
                                value={this.state.entry.notes}
                                onChange={this.onInputChange}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Button
                        size='mini'
                        color='green'
                        onClick={this.onFormSubmit}
                    >
                        Save
            </Button>
                    <Button
                        size='mini'
                        color='red'
                        onClick={this.props.cancelUpdate}
                    >
                        Cancel
            </Button>
                </Form>
            </div>
        );
    }
}