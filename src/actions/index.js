import types from './types';
import { db } from '../firebase';
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

export function addListItem(data) {
    console.log("itemList before adding new item:", itemList)
    // const resp = axios.post(`${BASE_URL}/todos${API_KEY}`, item);
    itemList.push({
        "itemName": data.itemName,
        "completeStatus": false
    })
    console.log("itemList after adding new item:", itemList)
    return {
        type: types.ADD_LIST_ITEM,
        payload: itemList
    }
}

export const getItemListFromFirebase = () => dispatch => {
    const dbRef = db.ref("/itemList/");
    dbRef.on('value', (snapshot) => {
        console.log("DB Snapshot:", snapshot.val());
        dispatch({
            type: types.GET_ITEM_LIST,
            action: snapshot.val()
        })
    });
    return dbRef;
}