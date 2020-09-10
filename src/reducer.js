export const initialState={
    term:null,
    theme:'light'
}

export const actionTypes={
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
    TOGGLE_THEME:"TOGGLE_THEME"
}

const reducer=(state,action)=>{
    console.log(state,action)
    switch(action.type){
        case actionTypes.SET_SEARCH_TERM:   return{
                                                ...state,
                                                term:action.term
                                            }
        case actionTypes.TOGGLE_THEME:   return{
                                                ...state,
                                                theme:state.theme==='light' ? 'dark' : 'light'
                                            }

                                  default:  return state;

    }
}

export default reducer;