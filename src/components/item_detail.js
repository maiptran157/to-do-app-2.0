import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getItemDetailFromFirebase, toggleComplete, deleteItemFromFirebase } from '../actions';
import { connect } from 'react-redux';

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.toggleItemCompletion = this.toggleItemCompletion.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    async componentDidMount() {
        const { itemId } = this.props.match.params;
        await this.props.getItemDetailFromFirebase(itemId);
    }

    async toggleItemCompletion(e) {
        e.preventDefault();
        const { itemId } = this.props.match.params;
        const { completeStatus } = this.props.itemDetail;
        await this.props.toggleComplete(itemId, completeStatus);
    }

    async deleteItem(e) {
        e.preventDefault();
        const { itemId } = this.props.match.params;
        await this.props.deleteItemFromFirebase(itemId);
        this.props.history.push('/');
    }

    displayItemDetail() {
        const { itemDetail } = this.props;
        return <div className="card #424242 grey darken-3">
            <div className="card-content white-text">
                <span className="card-title">{itemDetail.itemName}{itemDetail.completeStatus ? <span className="new badge #eeeeee grey lighten-3 grey-text" data-badge-caption={"Completed"}></span> : <span className="new badge #ffd600 yellow accent-4" data-badge-caption={"Incomplete"}></span>}</span>
                <p>{itemDetail.itemDetail}</p>
            </div>
            <div className="card-action">
                <a className={`waves-effect waves-light btn ${itemDetail.completeStatus ? "#ffd600 yellow accent-4" : "#00b0ff light-blue accent-3"}`} onClick={this.toggleItemCompletion}>{itemDetail.completeStatus ? "Retrieve Task" : "Mark as Complete"}</a>
                <a className="waves-effect waves-light btn #dd2c00 deep-orange accent-4" onClick={this.deleteItem}>Delete Item</a>
            </div>
        </div>
    }

    render() {
        const { itemDetail } = this.props;
        return (
            <div>
                <h1 className="center"><span className="#fafafa grey-text text-lighten-5 ">About This Task:</span></h1>
                <div className="row">
                    <Link className="nav-btn waves-effect waves-light btn #424242 grey darken-3" to="/">
                        {/* <i className="material-icons">arrow_back</i> */}
                        Task List
                    </Link>
                    <Link className="nav-btn waves-effect waves-light btn #424242 grey darken-3" to="/add-item">
                        {/* <i className="material-icons">arrow_back</i> */}
                        Add Task
                    </Link>
                    <div className="col-s8 offset-2">
                        {itemDetail ? this.displayItemDetail() : "Loading..."}
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        itemDetail: state.list.itemDetail.action
    }
}

export default connect(mapStateToProps, {
    getItemDetailFromFirebase: getItemDetailFromFirebase,
    toggleComplete: toggleComplete,
    deleteItemFromFirebase: deleteItemFromFirebase,
})(ItemDetail);
