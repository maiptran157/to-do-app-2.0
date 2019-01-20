import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListItems from './list_items';
import AddItem from './add_item';

class App extends Component {
    render() {
        return (<div className="container">
            <Route path="/" component={ListItems} />
            <Route exact path="/add-item" component={AddItem} />

        </div >
        );
    }
}

export default App;
