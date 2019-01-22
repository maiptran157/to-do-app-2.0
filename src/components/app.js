import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListItems from './list_items';
import AddItem from './add_item';
import ItemDetails from './item_detail';

class App extends Component {
    render() {
        return <div className="container">
            <Route exact path="/" component={ListItems} />
            <Route path="/add-item" component={AddItem} />
            <Route path="/item-detail/:itemId" component={ItemDetails} />
            {/* <div class="fixed-action-btn">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">menu</i>
                </a>
                <ul>
                    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div> */}
        </div >
    }
}

export default App;
