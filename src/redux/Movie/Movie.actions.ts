import { IActionAdd } from '../../typings';
export function Add(payload: IActionAdd) {
  return {
    type: 'ADD',
    payload
  };
}
export function Remove(payload: string) {
  return {
    type: 'REMOVE',
    payload
  };
}
