export const initialState={
    theme:light
}

export const actionTypes={
    TOGGLE_THEME: "TOGGLE_THEME"
}

const reducer=(state,action)=>{
    console.log(state,action)
    switch(action.type){
        case actionTypes.TOGGLE_THEME:   return{
                                                ...state,
                                                theme:theme==='light' ? 'dark' : 'light'
                                            }
                                  default:  return state;
    }
}

export default reducer;