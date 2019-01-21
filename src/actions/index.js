import types from './types';
import axios from 'axios';
import itemList from '../dummy_data/item_list';

// export function addListItem(item) {
//     itemList.push({
//         "itemName": item,
//         "completeStatus": false
//     })
//     return {
//         type: types.ADD_ITEM,
//         payload: itemList
//     }
// }

export function addListItem(item) {
    // const resp = axios.post(`${BASE_URL}/todos${API_KEY}`, item);
    itemList.push({
        "itemName": item,
        "completeStatus": false
    })
    return {
        type: types.ADD_LIST_ITEM,
        payload: itemList
    }
}