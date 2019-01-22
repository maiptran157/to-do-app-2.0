import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import itemList from '../dummy_data/item_list';

class ItemDetail extends Component {
    render() {
        console.log(itemList)
        console.log(this.props.match.params.itemId);

        return (
            // <div to={`/item-detail/${this.props.id}`}>
            <div>
                <h1 className="center">Item Detail</h1>
                <div className="row">
                    <Link className="s12" to="/">
                        <button className="btn #4fc3f7 light-blue lighten-2">Item List</button>
                    </Link>
                    <div className="col-s8 offset-2">
                        {/* <AddItemForm history={this.props.history} /> */}
                    </div>
                </div>
            </div >
        )
    }
}

export default ItemDetail;