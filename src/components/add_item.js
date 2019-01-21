import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addListItem } from '../actions';
import { connect } from 'react-redux';

class AddItem extends Component {
    renderInput(props) {

        const { input, label, meta: { touched, error } } = props;

        return (
            <div className="row">
                <div className="s12">
                    <label>{label}</label>
                    <input {...input} type="text" autoComplete="off" />
                    <p className="red-text text-darken-2">{touched && error}</p>
                </div>
            </div>
        )
    }

    saveItem = async (values) => {
        await this.props.addListItem(values);
        this.props.history.push('/');
    }

    render() {

        const { handleSubmit } = this.props;
        return (<div to="/add-item">
            <h1 className="center">Add Item</h1>
            <div className="row">
                <div className="col-s8 offset-2">
                    <form action="" onSubmit={handleSubmit(this.saveItem)}>
                        <Field name="itemName" component={this.renderInput} label="Item Name" />
                        <div className="row">
                            <div className="s12 right-align">
                                <button className="btn blue-grey darken-1">Add Item</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
        )
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


AddItem = reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);

export default connect(null, {
    addListItem: addListItem
})(AddItem);

// export default AddItem;