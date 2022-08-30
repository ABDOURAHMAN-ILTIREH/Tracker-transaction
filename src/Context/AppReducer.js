
// eslint-disable-next-line import/no-anonymous-default-export
export default( state, action) =>{
    switch(action.type){
        case 'DELETE_TRASACTION':
            return{
                ...state,
                transaction: state.transaction.filter( transaction => transaction.id !== action.playload )
            }
        case 'ADD_TRASACTION':
            return{
                ...state,
                transaction: [ action.playload, ...state.transaction]
            }
        default:
            return state;
    }
}