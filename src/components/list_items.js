import React, { Component } from 'react';
import itemList from '../dummy_data/item_list';

class ListItems extends Component {

    renderItems = () => {
        console.log(itemList);
        var listToBeRendered = [];
        for (let i = 0; i < itemList.length; i++) {
            listToBeRendered[i] = <a href="#!" key={i} className="collection-item highlight">
                {itemList[i].completeStatus ?
                    <span className="new badge #26c6da cyan lighten-1" data-badge-caption={"Completed"}></span> : <span className="new badge #ef5350 red lighten-1" data-badge-caption={"Incomplete"}></span>}
                {itemList[i].itemName}</a>
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


