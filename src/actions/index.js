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

export const addListItem = data => async dispatch => {
    const dataToSend = {
        itemName: data.itemName,
        completeStatus: false
    }
    // const logKey = db.ref('/itemList/').push().key;
    // await db.ref(`/itemList/${logKey}`).push(dataToSend);

    await db.ref('/itemList/').push(dataToSend);

    return {
        type: types.ADD_LIST_ITEM,
    }
}

export const getItemListFromFirebase = () => dispatch => {
    const dbRef = db.ref("/itemList/");
    dbRef.on('value', (snapshot) => {
        // console.log("DB Snapshot:", snapshot.val());
        dispatch({
            type: types.GET_ITEM_LIST,
            action: snapshot.val()
        })
    });
    return dbRef;
}