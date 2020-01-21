import axios from 'axios';
import {
    GET_NOTES,
    ADD_NOTE,
    DELETE_NOTE, EDIT_NOTE, SET_CURRENT_NOTE, REMOVE_CURRENT_NOTE
} from "./types";

//Get notes
export const getNotes = () => async dispatch =>{
    try{
        const res = await axios.get('/api/notes');

        dispatch({
            type: GET_NOTES,
            payload: res.data
        })
    }catch (err) {//todo: ad gestire gli errori con opportuno reducer
        console.log(err)
    }
};

//Add note
export const addNote = (note) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try{
        const res = await axios.post('/api/notes',note,config);

        dispatch({
            type: ADD_NOTE,
            payload: res.data
        });

    }catch (err) {//todo: ad gestire gli errori con opportuno reducer
        console.log(err)
    }
};

//Delete note
export const deleteNote = (id) => async dispatch =>{
    try{
        await axios.delete(`/api/notes/${id}`);

        dispatch({
            type: DELETE_NOTE,
            payload: id
        })
    }catch (err) {//todo: ad gestire gli errori con opportuno reducer
        console.log(err)
    }
};

//Edit note
export const editNote = (id,note) => async dispatch =>{
    try{
        const editedNote = await axios.put(`/api/notes/${id}`,note);

        dispatch({
            type: EDIT_NOTE,
            payload: editedNote
        })

    }catch (err) {//todo: ad gestire gli errori con opportuno reducer
        console.log(err)
    }
};

export const setCurrentNote = (note) => dispatch =>{
        dispatch({
            type: SET_CURRENT_NOTE,
            payload: note
        })
};

export const removeCurrentNote = () => dispatch => {
        dispatch({
            type: REMOVE_CURRENT_NOTE,
            payload: null
        })
}