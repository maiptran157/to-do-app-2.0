import types from './types';
import { db } from '../firebase';

export const addListItem = data => async dispatch => {
    const dataToSend = {
        itemName: data.itemName,
        completeStatus: false
    }
    await db.ref('/itemList/').push(dataToSend);
    return {
        type: types.ADD_LIST_ITEM,
    }
}

export const getItemListFromFirebase = () => dispatch => {
    const dbRef = db.ref("/itemList/");
    dbRef.on('value', (snapshot) => {
        dispatch({
            type: types.GET_ITEM_LIST,
            action: snapshot.val()
        })
    });
    return dbRef;
}