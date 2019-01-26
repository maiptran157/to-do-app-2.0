import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addListItem } from '../actions';
import { connect } from 'react-redux';
import { renderInput } from '../helpers';

class AddItemForm extends Component {

    addItemToList = (values) => {
        this.props.addListItem(values);
        this.props.history.push('/');
    }

    render() {

        const { handleSubmit } = this.props;
        return (<form action="" onSubmit={handleSubmit(this.addItemToList)}>
            <Field name="itemName" component={renderInput} label="Item Name" />
            <div className="row">
                <div className="s12 right-align">
                    <button className="btn #ffa726 orange lighten-1">Add Item</button>
                </div>
            </div>
        </form>)
    }
}

function validate(values) {
    const { itemName } = values;
    const errors = {};

    if (!itemName) {
        errors.itemName = 'Please give your item a title';
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
