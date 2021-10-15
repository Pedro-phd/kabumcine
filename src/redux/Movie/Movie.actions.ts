interface add {
    title: String;
    categories: Array<String>;
    favorite: boolean;
    id: number 
  }
interface remove {
    title: String;
    categories: Array<String>;
    favorite: boolean;
    id: number 
}
export function add({title,categories,favorite,id}: add){
    return {
        type: 'ADD',
        payload:{
            title,
            categories,
            favorite,
            id
        }
    }
}
export function remove({id}:remove){
    return {
        type: 'REMOVE',
        payload:{
            id
        }
    }
}