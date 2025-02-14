const { combineReducers } = require("redux");

const initialSubtractState = {
    result : 0,
}

const SubtractReducer = ( state = initialSubtractState , action ) =>{
    switch(action.type){
        case 'SUBTRACT':
            return{
                ...state,
                result : action.payload - state.result,
            }
            default:
                return state;
    }
}
const initialAddState = {
    result : 0,
}

const AddReducer = ( state = initialAddState , action ) =>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                result : action.payload - state.result,
            }
            default:
                return state;
    }
}
const initialMultiplicationState = {
    result : 0,
}

const MultiplicationReducer = ( state = initialMultiplicationState , action ) =>{
    switch(action.type){
        case 'SUBTRACT':
            return{
                ...state,
                result : action.payload - state.result,
            }
            default:
                return state;
    }
}
const initialDivisionState = {
    result : 0,
}

const DivisionReducer = ( state = initialDivisionState , action ) =>{
    switch(action.type){
        case 'SUBTRACT':
            return{
                ...state,
                result : action.payload - state.result,
            }
            default:
                return state;
    }
}
const initialModulusState = {
    result : 0,
}

const ModulusReducer = ( state = initialModulusState , action ) =>{
    switch(action.type){
        case 'SUBTRACT':
            return{
                ...state,
                result : action.payload - state.result,
            }
            default:
                return state;
    }
}

const rootReducer = combineReducers({
    add : AddReducer,
    sub : SubtractReducer,
    mul : MultiplicationReducer,
    div : DivisionReducer,
    mod : ModulusReducer,
})
export default rootReducer;