import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'

class CounterView extends Component {
    handleIncrement() {
        this.props.incrementCounter()
    }

    handleDecrement() {
        this.props.decrementCounter()
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>

                <p>Count: {this.props.Counter}</p>
                <ButtonGroup>
                    <Button bsStyle="primary" onClick={this.props.increase}>Increment</Button>
                    <Button bsStyle="danger" onClick={this.props.decrease}>Decrement</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default CounterView;