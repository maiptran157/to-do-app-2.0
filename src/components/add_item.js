import React, { Component } from 'react';
import AddItemForm from './add_item_form';
import { Link } from 'react-router-dom';

class AddItem extends Component {
    render() {
        return (<div to="/add-item">
            <h1 className="center"><span className="#fafafa grey-text text-lighten-5 ">Add a New Task</span></h1>
            <div className="row">
                <Link className="s12" to="/">
                    <button className="btn #424242 grey darken-3">Task List</button>
                </Link>
            </div>
            <div className="row #fafafa grey lighten-5 hoverable">
                <div className="col-s8 offset-2">
                    <AddItemForm history={this.props.history} />
                </div>
            </div>
        </div >
        )
    }
}

export default AddItem;