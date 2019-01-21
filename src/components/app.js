import React from 'react';
import { Route } from 'react-router-dom';
import ListItems from './list_items';
import AddItem from './add_item';

const App = () => {
    return <div className="container">
        <Route exact path="/" component={ListItems} />
        <Route path="/add-item" component={AddItem} />
    </div >

}

export default App;
