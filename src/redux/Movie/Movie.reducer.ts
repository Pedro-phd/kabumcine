interface action{
    type: String,
    payload: movie
}
interface movie{
    title: String;
    categories: Array<String>;
    favorite: boolean;
    id: number
}
export default function(state = [{}], action: action) {
    switch(action.type){
        case 'ADD':
            state.push(action.payload)
            return state
        case 'REMOVE':
            let index = state.indexOf((e: { id: number }) => e.id == action.payload.id)
            state.splice(index,1)
            return state
    }
}