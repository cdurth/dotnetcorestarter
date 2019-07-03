import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class TimeView extends Component {

    render() {
        return (
            <div>
                <h2>Time</h2>

                <p>servertime: {this.props.ServerTime}</p>
                <ButtonGroup>
                    <Button bsStyle="primary" onClick={this.props.fetchServerTime}>Get Server Time</Button>
                </ButtonGroup>
                <br />
                <br />
                <p>ip-time: {this.props.IPTime}</p>
                <p>ip-address: {this.props.IPAddress}</p>
                <ButtonGroup>
                    <Button bsStyle="primary" onClick={this.props.fetchIPTime}>Get IP Time</Button>
                    <code>uses http://worldtimeapi.org/</code>
                </ButtonGroup>
            </div>
        );
    }
}

export default TimeView;