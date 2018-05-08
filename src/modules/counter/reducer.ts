import { ActionTypes, IncrementAction, DecrementAction } from './actions'
import updateObject from '../../helpers/updateObject'
import createReducer from '../../helpers/createReducer'

export interface CounterState {
  num: number
}

const initialState: CounterState = {
  num: 0
};

const increment = (state: CounterState, action: IncrementAction): CounterState => {
  return updateObject(state, {
    num: state.num + action.payload.plusAmount
  })
};

const decrement = (state: CounterState, action: DecrementAction): CounterState => {
  return updateObject(state, {
    num: state.num - action.payload.minusAmount
  })
};

export default createReducer<CounterState>(initialState, {
  [ActionTypes.INCREMENT]: increment,
  [ActionTypes.DECREMENT]: decrement
})
