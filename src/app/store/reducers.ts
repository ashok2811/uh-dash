import { createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess, loadItemsFailure } from './actions';

export interface ItemsState {
  items: any[];
  loading: boolean;
  error: any;
}

export const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null
};

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, state => ({ ...state, loading: true })),
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items, loading: false, error: null })),
  on(loadItemsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
