import React, { Component } from 'react';
import AddItemForm from './add_item_form';
import { Link } from 'react-router-dom';

class AddItem extends Component {
    render() {
        return (<div to="/add-item">
            <h1 className="center">Add Item</h1>
            <div className="row">
                <Link className="s12" to="/">
                    <button className="btn #4fc3f7 light-blue lighten-2">Item List</button>
                </Link>
                <div className="col-s8 offset-2">
                    <AddItemForm history={this.props.history} />
                </div>
            </div>
        </div >
        )
    }
}

export default AddItem;