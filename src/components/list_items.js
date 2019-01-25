import React, { Component } from 'react';
import ItemDetail from './item_detail';
import { Link } from 'react-router-dom';
import { getItemListFromFirebase } from '../actions';
import { connect } from 'react-redux';

class ListItems extends Component {
    async componentDidMount() {
        await this.props.getItemListFromFirebase();

    }

    renderItems = () => {

        const { itemList } = this.props;

        if (!itemList) {

            return 'Loading...'
        }

        var listToBeRendered = [];
        let i = 0;
        for (let key in itemList) {
            listToBeRendered[i] = <Link to={`/item-detail/${key}`} key={key} className="collection-item highlight modal-trigger">
                {itemList[key].completeStatus ?
                    <span className="new badge #26c6da cyan lighten-1" data-badge-caption={"Completed"}></span> : <span className="new badge #ef5350 red lighten-1" data-badge-caption={"Incomplete"}></span>}
                {itemList[key].itemName}</Link>
            i++;
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

// export default ListItems;

function mapStateToProps(state) {
    return {
        itemList: state.list.itemList.action
    }
}

export default connect(mapStateToProps, {
    getItemListFromFirebase: getItemListFromFirebase
})(ListItems);


