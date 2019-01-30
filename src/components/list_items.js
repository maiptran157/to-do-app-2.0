import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getItemListFromFirebase } from '../actions';
import { connect } from 'react-redux';

class ListItems extends Component {
    async componentDidMount() {
        await this.props.getItemListFromFirebase();

    }

    renderItems = () => {
        const { itemList } = this.props;
        const listToBeRendered = [];
        let i = 0;
        for (let key in itemList) {
            listToBeRendered[i] = <Link to={`/item-detail/${key}`} key={key} className="collection-item highlight modal-trigger">
                {itemList[key].completeStatus ?
                    <span className="new badge #eeeeee grey lighten-3 grey-text" data-badge-caption={"Completed"}></span> : <span className="new badge #ffd600 yellow accent-4" data-badge-caption={"Incomplete"}></span>}
                <span className="#424242 grey-text text-darken-3">{itemList[key].itemName}</span>
            </Link>
            i++;
        }

        return listToBeRendered;
    }

    render() {

        const { itemList } = this.props;

        return (
            <div>
                <h1 className="center"><span className="#fafafa grey-text text-lighten-5">Task List</span></h1>
                <div className="row">
                    <Link className="s12 right-align" to="/add-item">
                        <button className="btn #424242 grey darken-3">Add Task</button>
                    </Link>
                </div>
                {itemList ? <div className="collection">
                    {this.renderItems()}
                </div> : 'Loading...'}
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        itemList: state.list.itemList.action
    }
}

export default connect(mapStateToProps, {
    getItemListFromFirebase: getItemListFromFirebase
})(ListItems);


