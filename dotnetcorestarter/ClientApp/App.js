
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import TopNav from './components/TopNav';
import Main from './components/Main';

class App extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Grid>
                    <Main />
                </Grid>
            </div>
        );
    }
}

export default App;