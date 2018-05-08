import { Action } from 'redux'

export enum ActionTypes {
  INCREMENT = 'counter/INCREMENT',
  DECREMENT = 'counter/DECREMENT',
}

export interface IncrementAction extends Action {
  payload: {
    plusAmount: number
  },
  type: ActionTypes.INCREMENT
}

export const incrementAmount = (amount: number): IncrementAction => ({
  payload: {
    plusAmount: amount
  },
  type: ActionTypes.INCREMENT
})

export interface DecrementAction extends Action {
  payload: {
    minusAmount: number
  },
  type: ActionTypes.DECREMENT
}

export const decrementAmount = (amount: number): DecrementAction => ({
  payload: {
    minusAmount: amount
  },
  type: ActionTypes.DECREMENT
})

export type CounterActions = IncrementAction | IncrementAction
