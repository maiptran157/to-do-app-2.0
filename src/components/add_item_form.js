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
        return (<div className="row">
            <form className="col s8 offset-s2 form-style" action="" onSubmit={handleSubmit(this.addItemToList)}>
                <Field name="itemName" id="itemName" component={renderInput} label="Task Name:" />
                <Field name="itemDetail" id="itemDetail" component={renderInput} label="Task Detail:" />
                <div className="row">
                    <div className="s12 right-align">
                        <button className="btn #ffd600 yellow accent-4">Add Task</button>
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
        errors.itemName = 'Task name is blank. Please give this task a title.';
    }

    if (!itemDetail) {
        errors.itemDetail = 'Task detail is blank. Please describe this task.';
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
