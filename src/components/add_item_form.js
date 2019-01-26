import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addListItem } from '../actions';
import { connect } from 'react-redux';
import { renderInput } from '../helpers';
import ItemDetail from './item_detail';

class AddItemForm extends Component {

    addItemToList = (values) => {
        this.props.addListItem(values);
        this.props.history.push('/');
    }

    render() {

        const { handleSubmit } = this.props;
        return (<div className="row">
            <form className="col s12" action="" onSubmit={handleSubmit(this.addItemToList)}>
                <Field name="itemName" id="itemName" component={renderInput} label="Item Name" />
                <Field name="itemDetail" id="itemDetail" component={renderInput} label="Item Detail" />
                <div className="row">
                    <div className="s12 right-align">
                        <button className="btn #ffa726 orange lighten-1">Add Item</button>
                    </div>
                </div>
            </form>
        </div>)
    }
}

function validate(values) {
    const { itemName, itemDetail } = values;
    const errors = {};

    if (!itemName) {
        errors.itemName = 'Please give your item a name';
    }

    if (!itemDetail) {
        errors.itemDetail = 'Please give detail about your item';
    }

    return errors;
}

AddItemForm = connect(null, {
    addListItem: addListItem
})(AddItemForm);

export default reduxForm({
    form: 'add-item',
    validate: validate
})(AddItemForm);
