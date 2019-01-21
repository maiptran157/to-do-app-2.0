import React, { Component } from 'react';
import AddItemForm from './add_item_form';

class AddItem extends Component {
    render() {
        return (<div to="/add-item">
            <h1 className="center">Add Item</h1>
            <div className="row">
                <div className="col-s8 offset-2">
                    <AddItemForm history={this.props.history} />
                </div>
            </div>
        </div >
        )
    }
}

export default AddItem;