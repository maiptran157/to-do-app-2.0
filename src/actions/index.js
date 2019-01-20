import types from './types';
import axios from 'axios';
import itemList from '../dummy_data/item_list';

export function addItem(item) {
    itemList.push({
        "itemName": item,
        "completeStatus": false
    })
    return {
        type: types.ADD_ITEM,
        payload: itemList
    }
}