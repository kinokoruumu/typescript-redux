// ActionCreator
import { Action } from 'redux'

enum ActionTypes {
  INCREMENT = 'counter/INCREMENT',
  DECREMENT = 'counter/DECREMENT',
}

interface IncrementAction extends Action {
  type: ActionTypes.INCREMENT
  plusAmount: number
}

export const incrementAmount = (amount: number): IncrementAction => ({
  plusAmount: amount,
  type: ActionTypes.INCREMENT
})

interface DecrementAction extends Action {
  type: ActionTypes.DECREMENT
  minusAmount: number
}

export const decrementAmount = (amount: number): DecrementAction => ({
  minusAmount: amount,
  type: ActionTypes.DECREMENT
})

export type CounterActions = IncrementAction | DecrementAction

export interface CounterState {
  num: number
}

const initialState: CounterState = { num: 0 };

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { num: state.num + action.plusAmount }
    case ActionTypes.DECREMENT:
      return { num: state.num - action.minusAmount }
    default:
      return state
  }
}
