import {GET_TECHS, TECHS_ERROR, SET_LOADING, ADD_TECH, DELETE_TECH} from './types'


//get techs from server
export const getTechs =() => async dispatch =>{
    try {
        setLoading()
        const res = await fetch('/techs')
        const data = await res.json()

        dispatch({
            type:GET_TECHS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload:error.response.statusText
        })
    }

}
//add techs to server
export const addTechs =(tech) => async dispatch =>{
    try {
        setLoading()
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const data = await res.json()

        dispatch({
            type:ADD_TECH,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload:error.response.statusText
        })
    }

}
//delete techs from server
export const deleteTech =(id) => async dispatch =>{
    try {
        setLoading()
        await fetch(`/techs/${id}` , {
            method:'DELETE'
        })
        dispatch({
            type:DELETE_TECH,
            payload:id
        })
    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload:error.response.statusText
        })
    }

}
export const setLoading = () =>{
    return{
        type : SET_LOADING
    }
}