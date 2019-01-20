import React, { Component } from 'react';
import itemList from '../dummy_data/item_list';

class ListItems extends Component {

    renderItems = () => {
        console.log(itemList);
        var listToBeRendered = [];
        for (let i = 0; i < itemList.length; i++) {
            listToBeRendered[i] = <div key={i} className="collection-item">
                <span className="new badge">{itemList[i].completeStatus ? 'Completed' : 'Not Completed'}</span>
                {itemList[i].itemName}</div>
        }
        return listToBeRendered;
    }

    render() {

        return (
            <div>
                <h1 className="center">Item List</h1>
                <div className="collection">
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

export default ListItems;


