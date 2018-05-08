import counter, { CounterState } from '../modules/counter/reducer'
import { CounterActions } from '../modules/counter/actions'
import { createStore, combineReducers, Action } from 'redux'

export default createStore(
  combineReducers({
    counter
  })
)

export interface ReduxState {
  counter: CounterState
}

export type ReduxAction = CounterActions | Action
