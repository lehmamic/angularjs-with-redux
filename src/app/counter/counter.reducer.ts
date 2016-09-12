import { AppState } from '../shared/app.state';
import { Reducer, Action } from 'redux';
import { INCREMENT, DECREMENT } from './counter-actions-creator';

export const initialState: AppState = { counter: 0 };

export const counterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
    }
  };
