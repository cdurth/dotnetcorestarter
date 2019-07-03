import React, { Component } from 'react';
import { Form, Button, FormGroup, Col, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

class LoginView extends Component {
    handleSubmit = event => {
        event.preventDefault();
        console.log('submit');
        console.log(this.props)
        this.props.userLogin(this.username.value, this.password.value);
    }

    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" inputRef={ref => { this.username = ref; }} placeholder="Username" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" inputRef={ref => { this.password = ref; }} placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default LoginView;