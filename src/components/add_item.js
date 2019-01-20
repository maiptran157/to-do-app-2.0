import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { renderInput } from '../helpers';

class AddItem extends Component {
    addItem = (values) => {
        this.props.addItem(values);
    }
    render() {
        const { handleSubmit } = this.props;
        return (<div to="/add-item">
            <h1 className="center">Add Item</h1>
            {/* <form onSubmit={handleSubmit(this.addItem)}>
                <Field name="itemName" label="Item Name" component={renderInput} />
                <div className="row">
                    <div className="col s12 right-align">
                        <button className="btn">Add Item</button></div>
                </div>
            </form> */}
        </div>)
    }
}

// function validate(values) {
//     const { itemName } = values;
//     const errors = {};
//     if (!itemName) {
//         errors.itemName = "Please provide an item name"
//     }
//     return errors;
// }

// AddItem = reduxForm({
//     form: 'add-item',
//     validate: validate
// })(AddItem);

// export default connect(null, {
//     addItem: addItem
// })(AddItem);

export default AddItem;