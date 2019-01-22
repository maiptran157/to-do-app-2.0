import React, { Component } from 'react';
import itemList from '../dummy_data/item_list';
import ItemDetail from './item_detail';
import { Link } from 'react-router-dom';


class ListItems extends Component {
    renderItems = () => {
        var listToBeRendered = [];
        for (let i = 0; i < itemList.length; i++) {
            listToBeRendered[i] = <Link to={`/item-detail/${itemList[i].itemId}`} key={itemList[i].itemId} className="collection-item highlight modal-trigger">
                {itemList[i].completeStatus ?
                    <span className="new badge #26c6da cyan lighten-1" data-badge-caption={"Completed"}></span> : <span className="new badge #ef5350 red lighten-1" data-badge-caption={"Incomplete"}></span>}
                {itemList[i].itemName}</Link>
        }
        return listToBeRendered;
    }

    render() {
        return (
            <div>
                <h1 className="center">Item List</h1>
                <div className="row">
                    <Link className="s12 right-align" to="/add-item">
                        <button className="btn #4fc3f7 light-blue lighten-2">Add Item</button>
                    </Link>
                </div>
                <div className="collection">
                    {this.renderItems()}
                </div>
            </div >
        )
    }
}

export default ListItems;


