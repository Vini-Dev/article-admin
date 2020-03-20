import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  toggle: [''],
});

const INITIAL_STATE = window.localStorage.getItem('theme') || 'light';

const toggle = (state = INITIAL_STATE) => {
  const theme = state === 'light' ? 'dark' : 'light';
  window.localStorage.setItem('theme', theme);
  return theme;
};

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE]: toggle,
});
