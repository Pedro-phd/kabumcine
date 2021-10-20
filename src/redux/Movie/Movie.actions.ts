import { v1 } from 'uuid';
import { IActionAdd } from '../../typings';
export function Add(payload: IActionAdd) {
  return {
    type: 'ADD',
    payload
  };
}
export function remove(payload: string) {
  return {
    type: 'REMOVE',
    payload
  };
}
