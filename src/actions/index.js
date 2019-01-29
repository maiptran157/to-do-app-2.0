import types from './types';
import { db } from '../firebase';

export const addListItem = data => async dispatch => {
    const dataToSend = {
        itemName: data.itemName,
        itemDetail: data.itemDetail,
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

export const getItemDetailFromFirebase = data => dispatch => {
    const dbRef = db.ref(`/itemList/${data}`);
    dbRef.on('value', (snapshot) => {
        dispatch({
            type: types.GET_ITEM_DETAIL,
            action: snapshot.val()
        })
    })
}

export const toggleComplete = (itemId, completeStatus) => dispatch => {
    if (completeStatus) {
        db.ref(`/itemList/${itemId}`).update({
            completeStatus: false
        })
    } else {
        db.ref(`/itemList/${itemId}`).update({
            completeStatus: true
        })
    }
    return {
        type: types.TOGGLE_ITEM_COMPLETETION
    }
}