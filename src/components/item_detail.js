import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getItemDetailFromFirebase, toggleComplete } from '../actions';
import { connect } from 'react-redux';

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.toggleItemCompletion = this.toggleItemCompletion.bind(this);
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

    displayItemDetail() {
        const { itemDetail } = this.props;
        return <div className="card #d7ccc8 brown lighten-4">
            <div className="card-content white-text">
                <span className="card-title">{itemDetail.itemName}{itemDetail.completeStatus ? <span className="new badge #26c6da cyan lighten-1" data-badge-caption={"Completed"}></span> : <span className="new badge #ffd600 yellow accent-4" data-badge-caption={"Incomplete"}></span>}</span>
                <p>{itemDetail.itemDetail}</p>
            </div>
            <div className="card-action">
                <a className={`waves-effect waves-light btn ${itemDetail.completeStatus ? "#ffd600 yellow accent-4" : "#26c6da cyan lighten-1"}`} onClick={this.toggleItemCompletion}>{itemDetail.completeStatus ? "Retrieve Item" : "Mark as Complete"}</a>
                <a className="waves-effect waves-light btn #ffa726 orange lighten-1">Edit Item</a>
                <a className="waves-effect waves-light btn #d84315 deep-orange darken-3">Delete Item</a>
            </div>
        </div>
    }

    render() {
        const { itemDetail } = this.props;
        return (
            <div>
                <h1 className="center">Item Detail</h1>
                <div className="row">
                    <Link className="waves-effect waves-light btn #4fc3f7 light-blue lighten-2" to="/">
                        {/* <i className="material-icons">arrow_back</i> */}
                        Item List
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
    toggleComplete: toggleComplete
})(ItemDetail);
